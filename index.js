const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const keys = require('./config/keys')

require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json())
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

if (process.env.NODE_ENV === 'production') {
	// First, express tries to serve up production assets like
	// our main.js or main.css files
	app.use(express.static('client/build'))

	// If express doesn't recognize the route that this request is comming from
	// and therefore this request can't be resolved from the assets that we
	// have in 'client/build':
	// THEN express will serve up the index.html file.
	const path = require('path')
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
