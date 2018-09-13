"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `
    Select * 
    From heroes`;
    mysql_1.default.executeQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                // message: 'All is Ok!',
                heroes
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    let id = mysql_1.default.scape(req.params.id), query = `Select * From heroes Where id = ${id}`;
    mysql_1.default.executeQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                // message: 'All it is Ok',j
                heroe: heroe
            });
        }
    });
});
exports.default = router;
