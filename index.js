  const express = require('express')
  const path = require('path')
  const bodyParser = require('body-parser')
  const PORT = process.env.PORT || 5000
  
  app = express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
    
  
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
  app.use(bodyParser({ extended: true }))
  app.post('/organizer', function(req, res, next){
      // req.body object has your form values
      console.log(req.body.VIDs);
  })