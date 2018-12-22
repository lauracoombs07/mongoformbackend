// const express = require('express')
// const app = express()
const bodyParser = require('body-parser')
const monk = require('monk')
const url = 'mongodb://admin:admin123@ds157549.mlab.com:57549/bradtutorial';//admin admin123 is the user and pass of the collection
const port = 4000
const cors = require('cors')


const db = monk(url)
db.then(() => {
    console.log('Connected correctly to server')
  })
  
const spiderman = db.get('people')//variable can be named anything but needs to call('')exactly what is in the DB
const batman = db.get('email')
const users = db.get('users', options)
app.use(bodyParser.json())//takes strings and turns them into JSON
app.use(cors())//so I can use 2 local hosts at the same time


// GET method route

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
//   // POST method route
  app.post('/', function (req, res) {
    const result = spiderman.insert(req.body)
    res.status(200).send(result)
  })



    

app.listen(port, () => console.log(`Example app listening on port ${port}!`))