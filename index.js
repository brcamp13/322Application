const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const PORT = process.env.PORT || 5000

const client = new Client({
  user: 'tgutudmmouuovc',
  host: 'ec2-23-23-92-204.compute-1.amazonaws.com',
  database: 'd90icftavdad21',
  password: '0911aaeafbd79dae30a1e3688c167c038fe0b5da122c5e66dde5dc46d945258d',
  port: 5432,
  ssl: true
});
client.connect();

app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
  

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



app.use(bodyParser({ extended: true }))
app.post('/organizer', function(req, res, next){
    // req.body object has your form values
      client.query('INSERT INTO voters (id, valid) VALUES ($1, $2)', [req.body.vid, true], (error, result) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User added with ID`)
    })
})