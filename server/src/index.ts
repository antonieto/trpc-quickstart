import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';

import { AppDataSource } from './models';
import { v1Router } from './api/v1';

const { SERVER_PORT } = process.env;

const initializeExpress = () => {
	const app: Express = express();
	app.use(express.json());
	app.use(cors());

	/**
	 * API v1
	 */
	app.use('/api/v1', v1Router);
	
	app.listen(SERVER_PORT, () => {
		console.log(`Server is running on port ${SERVER_PORT}`);
	});
}

const initializeDatabase = async () => {
	await AppDataSource.initialize();
};

const main = async () => {
	try {
		dotenv.config();
		await initializeDatabase();
		initializeExpress();
	} catch (error) {
		console.error(error);
	}
};
main();
