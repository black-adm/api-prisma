import { User } from "@prisma/client";
import { prisma } from "../../database/client";
import { CreateUserDto } from "../../dtos/createUserDto";

export const CreateUser = async ({ name, email }: CreateUserDto): Promise<User> => {
    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    });

    return user;
}
