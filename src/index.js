const express = require('express')

const app = express()

app.use(express.urlencoded({ extended : false }))

app.get('/', (req,res) => {
	return res.send('Hello World!')
})

app.listen(3333, function() {
	console.log("Server is running")
})