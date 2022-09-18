"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const blogHandler_1 = require("../handlers/blogHandler");
exports.blogRouter = (0, express_1.Router)({ mergeParams: true });
exports.blogRouter.route('/blogs')
    .get(blogHandler_1.listBlogs)
    .post(blogHandler_1.createBlog);
