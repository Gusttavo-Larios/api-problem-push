import { Router } from "express"
import AdministratorController from "../controllers/controller.administrator"
import ProblemController from "../controllers/controller.problem"

const publicRouter = Router()

const administratorController = new AdministratorController()

publicRouter.post('/administrator/login', administratorController.login)

const problemController = new ProblemController() 

publicRouter.post('/problem', problemController.store)

export default publicRouter