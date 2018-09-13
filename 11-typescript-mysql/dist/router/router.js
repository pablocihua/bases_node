"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    res.json({
        ok: true,
        message: 'All is Ok!'
    });
});
router.get('/heroes/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        ok: true,
        message: 'All it is Ok',
        id
    });
});
exports.default = router;
