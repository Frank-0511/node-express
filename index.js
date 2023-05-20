import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta')
})

app.get('/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
    },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
