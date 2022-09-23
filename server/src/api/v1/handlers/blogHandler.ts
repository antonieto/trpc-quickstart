import { Request, Response } from "express";
import { z } from "zod";
import { AppDataSource } from "../../../models";

import { BlogModel, Blog } from "../../../models/blog";

const blogRepository = AppDataSource.getRepository(BlogModel);

export const createBlog = async (req: Request, res: Response) => {
  
  const { body } = req.body;

  const createdBlog = await blogRepository.save({
    body,
  });

  return res.status(200).json(createdBlog);
};


export const createBlogProcedure = {
  input: z.object({ body: z.string() }),
  async resolve(req: any) {
    const { body } = req.input;
    return await blogRepository.save({ body });
  }
}

export const listBlogsProcedure = async (req: any) => {
  return blogRepository.find();
}