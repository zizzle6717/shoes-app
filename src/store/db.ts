import { Pool } from 'pg';

const read = new Pool({
  host: process.env.DB_HOST_READ,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});

const write = new Pool({
  host: process.env.DB_HOST_WRITE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});

export default {
  read,
  write,
};
