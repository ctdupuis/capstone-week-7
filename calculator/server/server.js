const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//const {} = require('./controller')

//app.get(`/api/movies`, getMovies)
//app.post(`/api/movies`, createMovie)


app.listen(4004, () => console.log(`running on 4004`))