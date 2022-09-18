import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { Blog } from "./blog";

dotenv.config();

const { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_NAME } = process.env;

console.log('password', DB_PASSWORD);

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Blog],
  synchronize: true,
  logging: false,
});