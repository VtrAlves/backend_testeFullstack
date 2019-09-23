const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(require('./routes'))

async function crt(){
	return await Users.create({
		name: 'Vitor',
		email: 'vitoralves35@outlook.com',
		password: '1234'
	})
}


app.listen(3333, function() {
	console.log("Server is running")
})