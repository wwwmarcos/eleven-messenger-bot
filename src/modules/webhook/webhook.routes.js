import express from 'express'
import AuthService from '../auth/auth.service'
import AuthError from '../auth/auth-error'
import MessageService from '../message/message.service'

const webhookRoutes = express.Router()
const authService = new AuthService()
const messageService = new MessageService()

webhookRoutes.get('/webhook', function(req, res) {
  return authService.facebookHubChallenge(req, res)
})

webhookRoutes.post('/webhook', function(req, res) {
  messageService.receivedMessage(req, res)
})

export default webhookRoutes