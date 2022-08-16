import sql from 'mssql';
import {sqlConfig} from './src/Utils/database.js'

export async function teste_conexao(){

    sql.on('error', err => {
        console.log('Lib teste_bd.js:' + err);
        return false;
    })
    const pool = await sql.connect(sqlConfig)

    if (pool._connected == true)
    {
        console.log('conecto');
        return true
    }
    else
    console.log('conecto:' + pool);
    pool.close();
    return true
}