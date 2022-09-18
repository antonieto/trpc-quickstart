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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = require("./models");
const v1_1 = __importDefault(require("./api/v1"));
const { SERVER_PORT } = process.env;
const initializeExpress = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    /**
     * API v1
     */
    app.use('/api/v1', v1_1.default);
    app.listen(SERVER_PORT, () => {
        console.log(`Server is running on port ${SERVER_PORT}`);
    });
};
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield models_1.AppDataSource.initialize();
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dotenv_1.default.config();
        yield initializeDatabase();
        initializeExpress();
    }
    catch (error) {
        console.error(error);
    }
});
main();
