const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.json({data:'Welcome to Git Practice'})
})

app.get('/car', (req, res) => {
    res.json({data:'has engine'})
})

app.get('/cycle', (req, res) => {
    res.json({data:'does not have engine'})
})

app.get('/aeroplane', (req, res) => {
    res.json({data:'has engine'})
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))