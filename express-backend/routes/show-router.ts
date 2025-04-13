import express from "express";
import {getAllFromTable} from "../database/db-utils";
import STATUS_CODES, {StatusCodes} from "http-status-codes";
import {Show, User} from "../model/model";
import {getPool} from "../database/db";

export const showRouter = express.Router();

showRouter.get('/', async (req, res) => {
    const shows = await getAllFromTable<Show>('Shows');
    shows.map(async show => {
        if (!show.visitors) {
            show.visitors = [];
        } else {
            const visitors = await getPool().query<User>('SELECT * FROM users WHERE name = ANY($1)', show.visitors);
            show.visitors = visitors.rows;
        }
        return show;
    })
    res.status(STATUS_CODES.OK).send(shows)
});

showRouter.get('/:id', async (req, res) => {

});

showRouter.post('/', async (req, res) => {

});

showRouter.put('/:id', async (req, res) => {

});

showRouter.delete('/:id', async (req, res) => {

});