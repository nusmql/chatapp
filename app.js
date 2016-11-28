'use strict'

const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)


app.set('views', __dirname + 'views')
app.use(express.static(__dirname + '/public'))
app.set('port', 8081)

if(process.env.NODE_ENV === 'development') {
	app.use(express.errorHandler({dumpException: true, showStack: true }))
}


server.listen(app.get('port'), () => {
	console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'))
})

module.exports = app
