// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlite3 = require('sqlite3')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {open} = require('sqlite')

async function openDB (){
    return open({
        filename : './mydb.sqlite',
        driver: sqlite3.Database
    })
}


async function setup(){
    const db = await openDB();
    await db.migrate({force : 'last'});
    console.log("Database Connected")
}

setup();