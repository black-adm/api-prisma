import { Request, Response } from "express";
import { CreateMovie } from "./createMovies";
import { prisma } from "../../database/client";

export const CreateMovieController = async (req: Request, res: Response) => {
    const {
        title,
        duration,
        release_date
    } = req.body;

    try {
        const response = await CreateMovie({
            title,
            duration,
            release_date
        });
        res.status(200).send(response);
    }
    catch (error) {
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title
            }
        });

        if (movieAlreadyExists) {
            res.status(422).send("Já existe este filme cadastrado");
        }
        res.status(500).send("Erro ao cadastrar novo filme!");
    }
};
