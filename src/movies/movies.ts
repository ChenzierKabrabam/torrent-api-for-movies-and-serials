import express, { Router, Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { MovieDetailQueryParams, MovieQueryParams } from '../@types/routes';

const movieRouter: Router = express.Router();
const movieListBaseURL: string = 'https://yts.mx/api/v2/list_movies.json';
const movieDetailBaseURL: string = 'https://yts.mx/api/v2/movie_details.json';
const movieSuggestionBaseURL: string = 'https://yts.mx/api/v2/movie_suggestions.json';
const upcomingMovieBaseURL: string = 'https://yts.mx/api/v2/list_upcoming.json';

// get all the latest movies
movieRouter.get('/latest', (req: Request, res: Response): void => {
  axios
    .get(`${movieListBaseURL}?sort_by=year&page=${!req.query.pages ? '1' : req.query.pages}`)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error));
});

// get movies by genre
movieRouter.get('/genre/:name', (req: Request, res: Response): void => {
  const genre: string = req.params.name;
  axios
    .get(`${movieListBaseURL}?sort_by=year&genre=${genre}`)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error));
});

//search a movie
movieRouter.get('/search/:name', (req: Request, res: Response): void => {
  const filter: MovieQueryParams = {
    quality: !req.query.quality ? 'all' : req.query.quality,
    genre: !req.query.genre ? 'all' : req.query.genre,
    rating: !req.query.minimun_rating ? '0' : req.query.minimun_rating,
    sortBy: !req.query.sort_by ? 'year' : req.query.sort_by,
    orderBy: !req.query.order_by ? 'desc' : req.query.order_by,
  };

  const search: string | qs.ParsedQs | qs.ParsedQs[] | string[] | undefined = req.params.name;

  axios
    .get(
      `${movieListBaseURL}?query_term=${search}&quality=${filter.quality}&genre=${filter.genre}&minimum_rating=${filter.rating}&sort_by=${filter.sortBy}&order_by=${filter.orderBy}`
    )
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error));
});

// get movie details
movieRouter.get('/detail/:id', (req: Request, res: Response): void => {
  const query: MovieDetailQueryParams = {
    withImage: !req.query.with_image ? 'false' : req.query.with_image,
    withCast: !req.query.with_cast ? 'false' : req.query.with_cast,
  };
  const movieID: string = req.params.id;
  axios
    .get(
      `${movieDetailBaseURL}?movie_id=${movieID}&with_images=${query.withImage}&with_cast=${query.withCast}`
    )
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error));
});

// get a movie suggestion base on movie you search
movieRouter.get('/suggestion/:id', (req: Request, res: Response): void => {
  const movieID: string = req.params.id;
  axios
    .get(`${movieSuggestionBaseURL}?movie_id=${movieID}`)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error));
});

//get four upcoming movie
movieRouter.get('/upcoming', (req: Request, res: Response): void => {
  axios
    .get(upcomingMovieBaseURL)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error));
});

export { movieRouter };
