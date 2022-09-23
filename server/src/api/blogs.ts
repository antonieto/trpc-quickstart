import { initTRPC } from "@trpc/server"
import { AppDataSource } from "../models";
import { BlogModel } from "../models/blog";
import { z } from 'zod'

const t = initTRPC.create();
const blogsRepository = AppDataSource.getRepository(BlogModel);

const listBlogs = t.procedure
  .query(async () => {
    const blogs = await blogsRepository.find();
    return blogs;
  });

const createBlog = t.procedure
  .input(z.object({
    body: z.string()
  }))
  .mutation(async (req) => {
    const createdBlog = await blogsRepository.create({
      body: req.input.body
    });

    return createdBlog;
  })

export const blogRouter = t.router({
  listBlogs,
  createBlog,
});
