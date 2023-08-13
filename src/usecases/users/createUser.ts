import { User } from "@prisma/client";
import { prisma } from "../../database/client";
import { CreateUserDto } from "../../dtos/createUserDto";

export const CreateUser = async ({ name, email }: CreateUserDto): Promise<User> => {
    const userAlreadyExists = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (userAlreadyExists) {
        ("E-mail já cadastrado!")
    }

    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    });

    return user;
}
