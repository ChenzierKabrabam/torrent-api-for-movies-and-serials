import express, { Express } from 'express'

const app: Express = express()
const PORT: number = 3000

app.get('/', (req, res) => res.send('welcome to popcorn time api'))

app.listen(PORT, () => console.log(`server listening at port ${PORT}`))
