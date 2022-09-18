"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogRoutes_1 = require("./routes/blogRoutes");
const v1Router = (0, express_1.Router)();
v1Router.use(blogRoutes_1.blogRouter);
exports.default = v1Router;
