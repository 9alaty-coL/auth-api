const authRoute = require('./auth')

const route = app => {
  app.get('/api', (req, res)=>{
      res.send("Welcome to Auth api server. Deployed by vercel.")
  })
  app.use('/api/auth', authRoute)
}

module.exports = route