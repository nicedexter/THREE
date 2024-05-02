import express from 'express'
const app = express()
const fs = require("fs")
const YAML = require('yaml')
const swaggerUi = require('swagger-ui-express')

const file = fs.readFileSync('./api.yml', 'utf8')
const swaggerDocument = YAML.parse(file)

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello from Docker !')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})