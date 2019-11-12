"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const result = dotenv_1.config();
const app = express_1.default();
if (result.error)
    throw result.error;
app.use(express_1.default.static(path_1.default.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '/client/build/index.html'));
});
// Use env port or default
console.log(`THE PORT IS THIS THING: ${process.env.PORT}`);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server now running on port ${port}!`));
//# sourceMappingURL=server.js.map