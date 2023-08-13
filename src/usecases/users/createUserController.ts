import { Request, Response } from "express";
import { CreateUser } from "./createUser";

export const CreateUserController = async (req: Request, res: Response) => {
    const { name, email } = req.body

    try {
        const response = await CreateUser({ name, email })
        res.status(201).json(response)
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário" })
    }
}
