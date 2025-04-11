import {getPool} from './db'
import {QueryResult, QueryResultRow} from "pg";

export function getAllFromTable<T extends QueryResultRow>(table: 'Users' | 'Artists' | 'Shows') {
    return getPool().query<T>(`SELECT *
                               FROM ${table}`)
}


export async function insertIntoTable(table: 'Users' | 'Artists' | 'Shows' | 'FriendRequest', values: any[]): Promise<QueryResult<any> | string> {
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