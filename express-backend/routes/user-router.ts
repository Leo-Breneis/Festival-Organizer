import express from "express";
import STATUS_CODES from "http-status-codes";
import {getAllFromTable, insertIntoTable} from "../database/db-utils";
import {getPool} from "../database/db";
import {getUserByName} from "../database/database-functions";
import {User} from "../model/model";

export const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    res.status(STATUS_CODES.OK).send((await getAllFromTable<User>('Users')).rows)
});

userRouter.get('/:name', async (req, res) => {
    const result: User[] = await getUserByName(req.params.name);
    if (result.length === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("User not found");
    }
    else {
        res.status(STATUS_CODES.OK).send(result[0]);
    }
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

userRouter.put('/:name', async (req, res) => {

});

userRouter.delete('/:id', async (req, res) => {

});