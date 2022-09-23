"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const server_1 = require("@trpc/server");
const blogHandler_1 = require("../handlers/blogHandler");
const t = server_1.initTRPC.create();
exports.blogRouter = t.router({
    listBlogs: t.procedure.query(blogHandler_1.listBlogsProcedure)
});
