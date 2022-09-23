import { Router } from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';

import { blogRouter } from './routes/blogRoutes';

export const v1Router = Router();
const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => ({});

v1Router.use('/blogs', trpcExpress.createExpressMiddleware({
  router: blogRouter,
  createContext,
}));

type Context = typeof createContext;

export type BlogRouter = typeof blogRouter;