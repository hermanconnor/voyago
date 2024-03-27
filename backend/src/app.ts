import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// INITIALIZE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES

// NOT FOUND HANDLER

// GLOBAL ERROR HANDLER

export default app;
