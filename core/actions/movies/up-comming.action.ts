import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

export const upComingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');

        const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie)
        console.log(movies)
        return movies;
    }
    catch (error) {
        console.log(error)
        throw 'Cannot load upcoming movies';

    }
}