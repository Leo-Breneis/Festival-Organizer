import {getPool} from './db'
import {QueryResult, QueryResultRow} from "pg";
import {User} from "../model/model";

export async function getAllFromTable<T extends QueryResultRow>(table: 'Users' | 'Artists' | 'Shows' | 'FriendRequests') {
    return (await getPool().query<T>(`SELECT * FROM ${table}`)).rows
}

export async function getFormTableById<T extends QueryResultRow>(table: 'Users' | 'Artists' | 'Shows' | 'FriendRequests', id: number) {
    const result = await getPool().query<T>(`select * from ${table} where ${table}.id = $1`, [id])
    return result.rows;
}
export async function getFormTableByName<T extends QueryResultRow>(table: 'Users' | 'Artists' | 'Shows' | 'FriendRequests', name: string) {
    const result = await getPool().query<T>(`select * from ${table} where ${table}.name = $1`, [name])
    return result.rows;
}

export async function insertIntoTable(table: 'Users' | 'Artists' | 'Shows' | 'FriendRequest', values: any[]): Promise<QueryResult | string> {
    let queryString: string;
    switch (table) {
        case 'Users':
            queryString = 'Insert into users (name, password) values ($1, $2)';
            break;
        case 'Artists':
            queryString = 'Insert into artists (name) values ($1)';
            break;
        case 'Shows':
            queryString = 'Insert into shows (artist_id, beginTime, endTime, stage) values ($1, $2, $3, $4)';
            break;
        case 'FriendRequest':
            queryString = 'Insert into friendRequests (fromUser, toUser) values ($1, $2)';
            break;
    }
    try {
        return await getPool().query(queryString, values);
    } catch (error) {
        console.error('Error inserting into table:', error);
        // @ts-ignore
        return error.message;
    }

}


export async function deleteById(table: 'Users' | 'Artists' | 'Shows' | 'FriendRequest', id: number) {
    return await getPool().query(`DELETE
                                  FROM ${table}
                                  WHERE ${table}.id = $1`, [id]);
}
export async function deleteByName(table: 'Users' | 'Artists' | 'Shows' | 'FriendRequest', name: string) {
    return await getPool().query(`DELETE
                                  FROM ${table}
                                  WHERE ${table}.name = $1`, [name]);
}