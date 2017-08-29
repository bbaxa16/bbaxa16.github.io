const express = require('express')
const app = express()


const pokemon = require('./controllers/pokemon.js')
app.use('/pokemon', pokemon)


app.listen(3000, ()=> {
  console.log('listenin bruh');
})
