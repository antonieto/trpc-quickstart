"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBlogsProcedure = exports.createBlogProcedure = exports.createBlog = void 0;
const zod_1 = require("zod");
const models_1 = require("../../../models");
const blog_1 = require("../../../models/blog");
const blogRepository = models_1.AppDataSource.getRepository(blog_1.BlogModel);
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req.body;
    const createdBlog = yield blogRepository.save({
        body,
    });
    return res.status(200).json(createdBlog);
});
exports.createBlog = createBlog;
exports.createBlogProcedure = {
    input: zod_1.z.object({ body: zod_1.z.string() }),
    resolve(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req.input;
            return yield blogRepository.save({ body });
        });
    }
};
const listBlogsProcedure = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return blogRepository.find();
});
exports.listBlogsProcedure = listBlogsProcedure;
