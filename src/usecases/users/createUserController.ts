import { Request, Response } from "express";
import { CreateUser } from "./createUser";
import { prisma } from "../../database/client";

export const CreateUserController = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
        const response = await CreateUser({ name, email });
        res.status(200).send(response);
    }
    catch (error) {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            res.status(422).send("E-mail já cadastrado");
        }
        res.status(500).send("Erro ao criar novo usuário!");
    }
};
