module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({error: you must login!})
  }

  next()
}

// to use this middleware in your routeHandler you can require it and pass it
// to to route handler like this:
// app.post('api/payment', requireLogin, (req, res) => {})
