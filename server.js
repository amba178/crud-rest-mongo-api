const bodyParser = require('body-parser')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const routes = require('./routes')




const url = 'mongodb://localhost:27017/edx-course-db'
let  app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(errorhandler())

//for every request store made available 
// app.use((req, res, next) => {
//   req.mongodb = mongodb
//   next()
// })

//posts 
app.get('/posts', routes.accounts.getAccounts) 
app.post('/posts', routes.accounts.addAccount)
app.put('/posts/:postId', routes.accounts.updateAccount)
app.delete('/posts/:postId', routes.accounts.removeAccount)
