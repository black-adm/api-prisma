import { Router } from "express";
import { CreateUserController } from "../../usecases/users/createUserController";
import { CreateMovieController } from "../../usecases/movies/createMovieController";

const routes = Router();

routes.get("/", (req, res) => res.json({ success: true }));

routes.post("/users", CreateUserController);

routes.post("/movies", CreateMovieController)

export { routes };