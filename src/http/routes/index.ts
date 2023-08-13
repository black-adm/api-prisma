import { Router } from "express";
import { CreateUserController } from "../../usecases/users/createUserController";

const routes = Router();

routes.get("/", (req, res) => res.json({ success: true }));

routes.post("/users", CreateUserController);

export { routes };