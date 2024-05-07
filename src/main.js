const express = require('express')

const app = express()
const port = 3000

app.listen(port, () => {
	console.log('🚀服务已启动...')
})

app.get('/', (request, response) => {
	response.send('你好')
})

app.get('/post/:postid', (request, response) => {
	const params = request.params
	response.send(params.postid)
})