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

app.get('/services', (req, res) => {
  res.json([
    {
      "id": 789012,
      "name": "Workflow Service",
      "description": "This is a Workflow service available for the platform",
      "status": "active",
      "documentation": "",
      "interfaces": [
        {
          "id": 789013,
          "type": "http",
          "endpoint": "http://172.17.0.0.1:5678",
          "documentation": "https://docs.n8n.io/"
        }
      ]
    },
    {
      "id": 789014,
      "name": "Postgres Service",
      "description": "This is a database service available for the project",
      "status": "active",
      "documentation": "sudo apt-get install postgresql-client \n psql -h 172.17.0.1 -p 5432 -U admin db",
      "interfaces": [
        {
          "id": 789015,
          "type": "psql",
          "endpoint": "172.17.0.1:5432",
          "documentation": "https://docs.n8n.io/"
        }
      ]
    }
  ])
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})