import pg from 'pg'
import {FriendRequest} from "../model/model";


const pool = new pg.Pool({
    user: "postgres",
    password: "geheim123",
});

export async function getClient() {
    return await pool.connect()
}
export function getPool() {
    return pool;
}

export async function ensureTablesCreated() {
    const client = await getClient();
    await client.query(`
        CREATE TABLE IF NOT EXISTS Users (
            name VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
            password VARCHAR(255) NOT NULL,
            freinds INTEGER[],
            profilePicture BYTEA
        )
    `);

    await client.query(`
        CREATE TABLE IF NOT EXISTS Artists (
            name VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
            profilePicture BYTEA
        )
    `);

    await client.query(`
        CREATE TABLE IF NOT EXISTS Shows (
            id SERIAL PRIMARY KEY UNIQUE, 
            artist_id VARCHAR(255) REFERENCES Artists(name) ON DELETE CASCADE,
            beginTime TIMESTAMP NOT NULL,
            endTime TIMESTAMP NOT NULL,
            stage VARCHAR(255) NOT NULL,
            visitors INTEGER[]
        )
    `);
    await client.query(`
        CREATE TABLE IF NOT EXISTS FriendRequests (
            id SERIAL PRIMARY KEY UNIQUE,
            fromUser VARCHAR(255) REFERENCES Users(name) ON DELETE CASCADE,
            toUSer VARCHAR(255) REFERENCES Users(name) ON DELETE CASCADE,
            accepted BOOLEAN DEFAULT FALSE
        )
    `);
    client.release()
}