import {User} from "../model/model";
import {getPool} from "./db";

export async function getUserByName(name: string) {
    const result = await getPool().query<User>('select * from users where name = $1', [name])
    return result.rows;
}
