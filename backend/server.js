import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.use(cors())

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.listen(
    PORT,
    console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode.`)
)