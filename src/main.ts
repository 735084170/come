import express from 'express'
import { Request, Response } from 'express'
const app = express()
const port = 3000

/**
 * 使用JSON中间件
 */
app.use(express.json())

app.listen(port, () => {
	console.log('🚀服务已启动...')
})

app.get('/', (request: Request, response: Response) => {
	response.send('你好')
})

app.get('/post/:postid', (request: Request, response: Response) => {
	const params = request.params
	response.send(params.postid)
})

/**
 * 创建内容
 */
app.post('/posts', (request: Request, response: Response) => {
	// 获取请求数据
	const { content } = request.body

	// 输出请求头部数据
	console.log(request.headers)

	// 设置相应头部数据
	response.set('myHeader', 'i want one')

	// 设置状态码 
	response.status(201 )

	// 作出响应
	response.send({
		message: `成功创建了内容：${content}`
	})
})