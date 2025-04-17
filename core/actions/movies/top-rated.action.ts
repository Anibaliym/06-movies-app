import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";

export const topRatedAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated');

        const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie)
        return movies;
    }
    catch (error) {
        console.log(error)
        throw 'Cannot load top_rated movies';

    }
}