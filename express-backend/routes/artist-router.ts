import express from "express";
import STATUS_CODES from "http-status-codes";
import {deleteByName, getAllFromTable, getFormTableByName, insertIntoTable} from "../database/db-utils";
import {getPool} from "../database/db";
import {Artist, User} from "../model/model";

export const artistRouter = express.Router();

artistRouter.get('/', async (req, res) => {
    const artists = await getAllFromTable<Artist>('Artists')
    // artists.map(async artist => {
    //     if (artist.profilePicture) {
    //         artist.profilePicture = new Blob([artist.profilePicture], {type: 'image/png'});
    //     }
    //     return artist;
    // })
    res.status(STATUS_CODES.OK).send(artists)
});

artistRouter.get('/:name', async (req, res) => {
    const artist = await getFormTableByName<Artist>('Artists', req.params.name);
    if (artist.length === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("Arist not found");
        return;
    }
    // artist[0].profilePicture = new Blob([artist[0].profilePicture], {type: 'image/png'});
    res.status(STATUS_CODES.OK).send(artist[0]);
});

artistRouter.post('/', async (req, res) => {
    if (!req.body.name) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Name is required");
        return;
    }
    const result = await insertIntoTable('Artists', [req.body.name]);

    if (typeof result === 'string') {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send(result);
        return;
    }
    res.status(STATUS_CODES.CREATED).send("Artist created");
});

artistRouter.put('/picture/:name', async (req, res) => {
    if (!req.body.profilePicture) {
        res.status(STATUS_CODES.BAD_REQUEST).send("Profile Picture is required");
        return;
    }
    const result = await getPool().query('Update artists set profilePicture = $1 where name = $2', [req.body.profilePicture, req.params.name]);
    if (result.rowCount === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("Artist not found");
        return;
    }
    res.status(STATUS_CODES.OK).send("Profile Picture updated");
});



artistRouter.delete('/:name', async (req, res) => {
    const result = await deleteByName('Artists', req.params.name);
    if (result.rowCount === 0) {
        res.status(STATUS_CODES.NOT_FOUND).send("Artist not found");
        return;
    }
    res.status(STATUS_CODES.OK).send("Artist deleted");
});