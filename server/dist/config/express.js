"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
console.log(`${process.env.DB_URI} and ${config_1.default.db.uri}`);
mongoose_1.default.connect(process.env.DB_URI || config_1.default.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Established connection to Mongo.")).catch(err => console.log(err));
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.set('useFindAndModify', false);
// initialize app
const app = express_1.default();
// enable request logging for development debugging
app.use(morgan_1.default('dev'));
// body parsing middleware
app.use(body_parser_1.default.json());
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.join(__dirname, '../../client/build', 'index.html'));
    });
}
exports.default = app;
//# sourceMappingURL=express.js.map