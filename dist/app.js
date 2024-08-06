"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    console.log(req.url);
    res.write('Hola Mundo');
    res.end();
});
server.listen(8081, () => {
    console.log('Server running on port 8080');
});
