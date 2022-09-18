import { Router } from 'express';
import { blogRouter } from './routes/blogRoutes';


const v1Router = Router();

v1Router.use(blogRouter);

export default v1Router;