const express = require('express')
const twitter = require('../twitter.js')

exports.bindRoutes = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello, world!')
	})

	app.post('/request_token', (req, res) => {
		twitter.requestToken(req, res)
	})
}