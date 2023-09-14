import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const initializeDB = async () => {

    // const client = new Client({
    //     connectionString: "postgres://user:password@host:port/db",
    // });

    // or

    const client = new Client({
        host: process.env.NEXT_PUBLIC_PGHOST,
        port: 5432,
        user: process.env.NEXT_PUBLIC_PGUSER,
        password: process.env.NEXT_PUBLIC_PGPASSWORD,
        database: process.env.NEXT_PUBLIC_PGDATABASE,
    });

    await client.connect();

    const db = drizzle(client);
    return db;
};

export default initializeDB;