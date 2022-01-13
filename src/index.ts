import express, { Express, Request, Response } from 'express'
import { movieRouter } from './movies/movies'
import { showRouters } from './tv-show/show'

const app: Express = express()
const PORT: string | number = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req: Request, res: Response): void => {
  res.send('welcome to torrent api')
})

app.use('/api/v1/movies', movieRouter)

app.use('/api/v1/tv_shows', showRouters)

app.listen(PORT, () => console.log(`server listening at port ${PORT}`))
