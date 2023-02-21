import { Router } from "express";
import AdministratorController from "../controllers/controller.administrator";
import ProblemController from "../controllers/controller.problem";
import AdministratorMiddleware from "../middleware/middleware.admnistrator";

const privateRouter = Router()

const administratorMiddleware = new AdministratorMiddleware()
privateRouter.use(administratorMiddleware.auth)

const administratorController = new AdministratorController()

privateRouter.get('/administrator', administratorController.index)
privateRouter.get('/administrator/:id', administratorController.show)
privateRouter.post('/administrator', administratorController.store)
privateRouter.put('/administrator/:id', administratorController.update)
privateRouter.delete('/administrator/:id', administratorController.delete)

const problemController = new ProblemController()

privateRouter.get('/problem', problemController.index)
privateRouter.get('/problem/review', problemController.reviewIndex)
privateRouter.get('/problem/approve', problemController.approvedIndex)
privateRouter.put('/problem/approve/:id', problemController.approveProblem)
privateRouter.get('/problem/refuse', problemController.refusedIndex)
privateRouter.put('/problem/refuse/:id', problemController.refuseProblem)

export default privateRouter