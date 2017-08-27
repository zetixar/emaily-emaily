const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hi Hi Hi :D')
})

app.listen(5000)
