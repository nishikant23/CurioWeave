import express from "express";
import createProfile from "../controllers/profileCreation.controller";
import signupUser from "../controllers/signupUser.controller";
import { userRounter } from "./userRounter";

const mainRouter = express.Router();

// Define your routes here
// User routes
mainRouter.use("/user", userRounter);


export default mainRouter; 