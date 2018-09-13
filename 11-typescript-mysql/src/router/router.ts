import { Router, Request, Response } from "express";
import MySql from '../mysql/mysql';

const router = Router();

router.get('/heroes', ( req: Request, res: Response ) => {
    const query = `
    Select * 
    From heroes`;

    MySql.executeQuery( query, ( err: any, heroes: Object[] ) => {
        if( err ){
            res.status( 400 ).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok:true,
                // message: 'All is Ok!',
                heroes
            });
        }
    });
});

router.get('/heroes/:id', ( req: Request, res: Response ) => {
    let id = MySql.scape( req.params.id ),
        query = `Select * From heroes Where id = ${ id }`;

    MySql.executeQuery( query, ( err: any, heroe: Object[] ) => {
        if( err ){
            res.status( 400 ).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                // message: 'All it is Ok',j
                heroe: heroe
            });
        }
    });
});

export default router;