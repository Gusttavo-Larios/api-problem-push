import { Router } from "express";
import AdministratorMiddleware from "../middleware/middleware.admnistrator";
import AdministratorController from "../controllers/controller.administrator";

const administratorsRouter = Router()

const administratorController = new AdministratorController()

administratorsRouter.post('/login', administratorController.login)

// const administratorMiddleware = new AdministratorMiddleware()
// administratorsRouter.use(administratorMiddleware.auth)

administratorsRouter.get('/', administratorController.index)
administratorsRouter.get('/:id', administratorController.show)
administratorsRouter.post('/', administratorController.store)
administratorsRouter.put('/:id', administratorController.update)
administratorsRouter.delete('/:id', administratorController.delete)


export default administratorsRouter