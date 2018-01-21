const express = require('express')
const app = express()
const clientRoutes = require('./routes/client.js')

clientRoutes.bindRoutes(app)

app.listen(3024, () => {
	console.log('app running on port 3024')
})