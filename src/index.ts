import express, { Express } from 'express'
import { movieRouter } from './movies/movies'
import { showRouters } from './tv-show/show'

const app: Express = express()
const PORT: number = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/tv_shows', showRouters)

app.listen(PORT, () => console.log(`server listening at port ${PORT}`))
