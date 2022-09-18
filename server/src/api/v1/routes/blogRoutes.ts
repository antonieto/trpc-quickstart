import { Router } from 'express';

import { listBlogs, createBlog } from '../handlers/blogHandler';

export const blogRouter = Router({mergeParams: true});

blogRouter.route('/blogs')
  .get(listBlogs)
  .post(createBlog);
