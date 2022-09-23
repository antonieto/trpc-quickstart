import { Router } from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { inferAsyncReturnType, initTRPC } from "@trpc/server";

import { blogRouter } from "./blogs";

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  blogs: blogRouter
});

export const trpcRouter = Router();
trpcRouter.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
}));

export type AppRouter = typeof appRouter;