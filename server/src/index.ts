import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { AppDataSource } from './models';


const app: Express = express();
const { SERVER_PORT } = process.env;

const initializeExpress = () => {
	app.get('/', (req: Request, res: Response) => {
		res.status(200).json({
			message: 'Hello, world!'
		});
	});
	
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