import express from "express";
import cors from "cors";
import STATUS_CODES from "http-status-codes";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {userRouter} from "./routes/user-router";
import {showRouter} from "./routes/show-router";
import {artistRouter} from "./routes/artist-router";
import {friendRequestRouter} from "./routes/friendReq-router";
import {ensureTablesCreated} from "./database/db";


const app = express();

// load environment variables from .env file
dotenv.config();

// mount middleware
app.use(cors());           // enable CORS
app.use(express.json());   // parse JSON data and place result in req.body
app.use(cookieParser()); // parse cookies from request headers

// mount routes
app.use("/api/users", userRouter);
app.use("/api/shows", showRouter);
app.use("/api/artists", artistRouter);
app.use("/api/friendReqs", friendRequestRouter);

// initialize the database with Dummy Data
await ensureTablesCreated();

// start http server
app.listen(8000, function () {
    console.log("Server listening on port http://localhost:8000 ...");
});

app.use("/", (req, res) => {
    res.status(STATUS_CODES.OK).send('Hello Form the Server');
});