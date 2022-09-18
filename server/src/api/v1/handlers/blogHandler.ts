import { Request, Response } from "express";
import { AppDataSource } from "../../../models";

import { Blog } from "../../../models/blog";

const blogRepository = AppDataSource.getRepository(Blog);

export const createBlog = async (req: Request, res: Response) => {
  
  const { body } = req.body;

  const createdBlog = await blogRepository.save({
    body,
  });

  return res.status(200).json(createdBlog);
};

export const listBlogs = async (req: Request, res: Response) => {

  const blogs = await blogRepository.find();

  return res.status(200).json(blogs);
};