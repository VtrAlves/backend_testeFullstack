const express = require('express')
const {Users} = require('./models')

const app = express()

app.use(express.urlencoded({ extended : false }))

async function crt(){
	return await Users.create({
		name: 'Vitor',
		email: 'vitoralves35@outlook.com',
		password: '1234'
	})
}

app.get('/', (req,res) => {
	crt()
	return res.send('Hello World!')
})

app.listen(3333, function() {
	console.log("Server is running")
})