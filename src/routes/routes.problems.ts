import { Router } from "express";
import ProblemController from "../controllers/controller.problem";

const problemRouter = Router()

const problemController = new ProblemController()

problemRouter.get('/', problemController.index)

export default problemRouter