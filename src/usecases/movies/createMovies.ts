import { Movie } from "@prisma/client";
import { prisma } from "../../database/client";
import { CreateMovieDto } from "../../dtos/createMovieDto";

export const CreateMovie = async ({ title, duration, release_date }: CreateMovieDto): Promise<Movie> => {
    const movie = await prisma.movie.create({
        data: {
            title,
            duration,
            release_date
        }
    });

    return movie;
}
