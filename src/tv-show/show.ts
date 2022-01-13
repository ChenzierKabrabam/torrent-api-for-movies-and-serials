import express, { Request, Response, Router } from 'express'
import axios, { AxiosResponse } from 'axios'

const showRouters: Router = express.Router()
const tvShowBaseURL: string = 'https://oneom.is/'

// get all the latest episode of a serial
showRouters.get('/ep', (req: Request, res: Response): void => {
  axios
    .get(`${tvShowBaseURL}/ep`)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error))
})

// search a tvShow or serial using name
showRouters.get('/search/:name', (req: Request, res: Response): void => {
  const name: string = req.params.name
  axios
    .get(`${tvShowBaseURL}/search/serial?title=${name}`)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error))
})

// get serial details
showRouters.get('/serial/:id', (req: Request, res: Response): void => {
  const showID: string = req.params.id
  axios
    .get(`${tvShowBaseURL}/serial/${showID}`)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((err: any): Response => res.send(err))
})

// get all the episode with torrent of a serial
showRouters.get('/ep/:id', (req: Request, res: Response): void => {
  const showID: string = req.params.id
  axios
    .get(`${tvShowBaseURL}/ep/${showID}`)
    .then((result: AxiosResponse): Response => res.send(result.data))
    .catch((error: any): Response => res.send(error))
})

export { showRouters }
