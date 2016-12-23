import express from 'express'
import bodyParser from 'body-parser'
import config from './config.json'
import webhookRoutes from './modules/webhook/webhook.routes'

let app = express()

app.use(bodyParser.json())

app.use(bodyParser.json({
  extended: true
}))

app.use('/v1', webhookRoutes)

app.set('port', (process.env.PORT || config.PORT))

app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
})

export default app