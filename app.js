const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

//Database
const db = require('./config/database')

//Test DB
db.authenticate()
  .then(()=> console.log('Database connected...'))
  .catch((err)=> console.errors(err))

const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended:true,
    })
)

app.get('/', (req, res) => {
  res.send('Hello World')
})

//Handle bars
app.engine('handlebars', exphbs({ defaultLayer: 'main'}));
app.set('view engine', 'handlebars')

// Set static folder (allows you to dodge the public **)
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/static', express.static(path.join(__dirname, 'public')))
//User routes
app.use('/users', require('./routes/users'))
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
