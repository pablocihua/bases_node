const express = require('express'),
    bcryp_nodejs = require('bcrypt-nodejs'),
    _ = require('underscore'),
    app = express(),
    User = require('../models/user'),
    userInterface = require('../interfaces/user');

let userCtrl = {
    get: (req, res) => {
        let from = req.query.from || 0;
        from = Number(from);
        let limit = req.query.limit || 0;
        limit = Number(limit);

        User.find({}, 'name email role img status google')
            .skip(from)
            .limit(limit)
            .exec((err, users) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        message: 'Error to find users in DB',
                        err
                    });
                }

                User.count({}, (err, count) => {
                    res.json({
                        ok: true,
                        users,
                        total: count
                    });
                });
            });
    },
    post: (req, res) => {
        let body = req.body;
        //fillFields(body, userInterface);
        let user = new User({
            name: body.name,
            email: body.email,
            password: bcryp_nodejs.hashSync(body.password),
            role: body.role,
        });

        user.save((err, userDb) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error to save the user in DB',
                    err
                });
            }
            // userDb.password = 'ß¬|';
            res.status(200).json({
                ok: true,
                message: 'User saved correctly',
                user: userDb
            });
        });
    },
    put: (req, res) => {
        let id = req.params.id,
            fields = ['name', 'email', 'img', 'role', 'status'],
            body = _.pick(req.body, fields);

        User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDb) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error to update the user in DB',
                    err
                });
            }
            // Makes default to send status: 200
            res.json({
                ok: true,
                user: userDb
            });
        });
    },
    delete: (req, res) => {
        let id = req.params.id;

        User.findByIdAndRemove(id, (err, userDeleted) => {
            if (err) {
                return res.status(400)
                    .json({
                        ok: false,
                        err
                    });
            }
            if (userDeleted === null) {
                return res.status(400)
                    .json({
                        ok: false,
                        err: {
                            message: 'User not found'
                        }
                    });
            }
            res.json({
                ok: true,
                user: userDeleted
            });
        });
    }
}

let fillFields = (body, interface) => {
    let filledUp = [];

    for (let i in interface) {
        if (body.hasOwnProperty(i)) {
            console.log(i, body[i]);
        }
    }

    return;
}

app.get('/users', userCtrl.get);
app.post('/user', userCtrl.post);
app.put('/user/:id', userCtrl.put);
app.delete('/user/:id', userCtrl.delete);

module.exports = app;