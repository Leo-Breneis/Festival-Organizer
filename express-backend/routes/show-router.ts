import express from "express";
import {getAllFromTable, getFormTableById, insertIntoTable} from "../database/db-utils";
import STATUS_CODES, {StatusCodes} from "http-status-codes";
import {Show, show, User} from "../model/model";
import {getPool} from "../database/db";

export const showRouter = express.Router();

showRouter.get('/', async (req, res) => {
    const shows = await getAllFromTable<Show>('Shows');
    shows.map(async show => {
        if (!show.visitors) {
            show.visitors = [];
        } else {
            const visitors = await getPool().query<show>('SELECT * FROM shows WHERE name = ANY($1)', show.visitors);
            show.visitors = visitors.rows;
        }
        return show;
    })
    res.status(STATUS_CODES.OK).send(shows)
});

showRouter.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Id must be a number");
        return;
    }
    const show = await getFormTableById<Show>('Shows', id);
    if (!show[0].visitors) {
        show[0].visitors = [];
    }
    else {
        const visitors = await getPool().query<User>('SELECT * FROM users WHERE name = ANY($1)', show[0].visitors);
        show[0].visitors = visitors.rows;
    }
    if (show.length === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("show not found");
        return;
    }
    res.status(STATUS_CODES.OK).send(show[0]);
});

showRouter.post('/', async (req, res) => {
    if (!req.body.begintime) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Begin time is required");
        return;
    }
    if (!req.body.endtime) {
        res.status(STATUS_CODES.BAD_REQUEST).send("End time is required");
        return;
    }
    if (!req.body.stage) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Stage is required");
        return;
    }
    const artistId = parseInt(req.body.artistId);
    if (isNaN(artistId)) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Artist Id must be a number");
        return;
    }

    const begintime: Date = new Date(req.body.begintime)

    const result = await insertIntoTable();

    if (typeof result === 'string') {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send(result);
        return;
    }
    res.status(STATUS_CODES.CREATED).send("Artist created");
});

showRouter.put('/:id', async (req, res) => {

});

showRouter.delete('/:id', async (req, res) => {

});