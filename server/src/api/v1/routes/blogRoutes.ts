import { Router } from 'express';
import z from 'zod';
import { initTRPC } from '@trpc/server';

import { listBlogsProcedure, createBlogProcedure } from '../handlers/blogHandler';

const t = initTRPC.create();

export const blogRouter = t.router({
  listBlogs: t.procedure.query(listBlogsProcedure)
});


export type BlogRouter = typeof blogRouter;