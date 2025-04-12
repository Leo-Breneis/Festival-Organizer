import express from "express";
import STATUS_CODES from "http-status-codes";
import {deleteByName, getAllFromTable, getFormTableByName, insertIntoTable} from "../database/db-utils";
import {getPool} from "../database/db";
import {User} from "../model/model";

export const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    const users = await getAllFromTable<User>('Users')
    users.map(async user => {
        // if (user.profilePicture) {
        //     user.profilePicture = new Blob([user.profilePicture], {type: 'image/png'});
        // }
        if (!user.friends) {
            user.friends = [];
        } else {
            const friends = await getPool().query<User>('SELECT * FROM users WHERE name = ANY($1)', user.friends);
            user.friends = friends.rows;
        }
        return user;
    })
    res.status(STATUS_CODES.OK).send(users)
});

userRouter.get('/:name', async (req, res) => {
    const user = await getFormTableByName<User>('Users', req.params.name);
    if (user.length === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("User not found");
        return;
    }
    if (!user[0].friends) {
        user[0].friends = [];
    }
    else {
        const friends = await getPool().query<User>('SELECT * FROM users WHERE name = ANY($1)', user[0].friends);
        user[0].friends = friends.rows;
    }

    // user[0].profilePicture = new Blob([user[0].profilePicture], {type: 'image/png'});

    res.status(STATUS_CODES.OK).send(user[0]);
});

userRouter.post('/', async (req, res) => {
    if (!req.body.name) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Name is required");
        return;
    }
    if (!req.body.password) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Password is required");
        return;
    }
    const result = await insertIntoTable('Users', [req.body.name, req.body.password]);

    if (typeof result === 'string') {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send(result);
        return;
    }
    res.status(STATUS_CODES.CREATED).send("User created");
});

userRouter.put('/picture/:name', async (req, res) => {
    if (!req.body.profilePicture) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Profile Picture is required");
        return;
    }
    const result = await getPool().query('Update Users set profilePicture = $1 where name = $2', [req.body.profilePicture, req.params.name]);
    if (result.rowCount === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("User not found");
        return;
    }
    res.status(STATUS_CODES.OK).send("Profile Picture updated");
});



userRouter.delete('/:name', async (req, res) => {
    const result = await deleteByName('Users', req.params.name);
    if (result.rowCount === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("User not found");
        return;
    }
    res.status(STATUS_CODES.OK).send("User deleted");
});