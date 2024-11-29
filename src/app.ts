import express from 'express';
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
config();
const app = express();
// Middlewares
app.use(express.json());
// Cookie send from backend to frontend.
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove it in production.
app.use(morgan("dev"));
app.use("/api/v1",appRouter);

/*  
// All Application Code Handles inside the app.ts file.

there below we create Route.
THERE ARE 4 Type of Request.

GET => Used to get upcoming request or data from DataBase.
PUT => If you want to Modify Some data.
POST => If you want to create some data or Post/Send  Some data.
DELETE => If you want send some Data for Delete Something.

MIDDLEWARE - these are the functions which handle the Upcoming Requestes 

*/ 

export default app;

