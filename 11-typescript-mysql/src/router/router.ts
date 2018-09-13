import { Router, Request, Response } from "express";

const router = Router();

router.get('/heroes', ( req: Request, res: Response ) => {
    res.json({
        ok:true,
        message: 'All is Ok!'
    });
});

router.get('/heroes/:id', ( req: Request, res: Response ) => {
    let id = req.params.id;
    res.json({
        ok: true,
        message: 'All it is Ok',
        id
    });
});

export default router;