// import { MovieRoutes } from "../@types/routes";

const baseURL: string = 'https://yts.mx/api/v2/list_movies.json'

export const Movie = {
  getLatestMovie: `${baseURL}?sort_by=year`,
  searchMovie: `${baseURL}?query_term=avenger&sort_by=year`,
  getMovieByGenre: `${baseURL}?sort_by=year&genre=animation`,
}
