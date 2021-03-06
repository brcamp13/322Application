const express = require('express')
const path = require('path')
var format = require('pg-format');
const { Pool, Client } = require('pg')
const PORT = process.env.PORT || 5000


const client = new Client({ 
  user: 'tgutudmmouuovc', // hardcode so I can run locally without heroku
  host: 'ec2-23-23-92-204.compute-1.amazonaws.com',
  database: 'd90icftavdad21',
  password: '0911aaeafbd79dae30a1e3688c167c038fe0b5da122c5e66dde5dc46d945258d',
  port: 5432,
  ssl: true
});
client.connect();

app = express()
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.get('/organizer', (req, res) => res.sendFile(path.join(__dirname+'/views/pages/index.html')))
app.get('/jquery-3.3.1.js', (req, res) => res.sendFile(path.join(__dirname+'/jquery-3.3.1.js')))

app.post('/checkId', (req,res) =>{
  userId = parseInt(req.body.userId)
  console.log(req.body)
  var str = format('SELECT id, valid FROM voters WHERE id=%L AND valid=%L',userId, true);
  client.query(str, (error, result) => {
    console.log(result)
   
    if (error) {
      console.log(error)
      res.send(error.detail)
    }
    res.send({valid:result.rowCount != 0});
  })
});

function addVoters(vids, allowed, res) {
  var arr = [];
  vids = vids.split(" ");
  for (vid of vids) {
    arr.push([vid, allowed]);
  }
  var str = format('INSERT INTO voters (id, valid) VALUES %L ON CONFLICT (id) DO UPDATE SET valid = excluded.valid',arr);
  client.query(str, (error, result) => {
    if (error) {
      res.send(error.detail)
    }
    res.send(`Users recorded with IDs` + vids)
  })
}

app.post('/vid', function(req, res, next){
    addVoters(req.body.vids, true, res)
})
app.post('/nid', function(req, res, next){
  addVoters(req.body.nids, false, res)
})