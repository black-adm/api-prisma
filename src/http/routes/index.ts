import { Router } from "express";
import { CreateUserController } from "../../usecases/users/createUserController";

const routes = Router();

routes.get("/", (req, res) => res.json({ sucess: true }))

routes.post("/users", async (req, res) => {
    try {
        const result = await CreateUserController(req, res);
        res.status(201).json(result)
    }
    catch (error) {
        res.status(500).json({ error });
    }
})

export { routes }