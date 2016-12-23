import express from 'express'
import config from '../../config.json'
import AuthError from './auth-error'

class AuthService {

  constructor() {}

  facebookHubChallenge(req, res) {
    if (!this.verifyToken(req)) {
      return res.send(new AuthError())
    }
    return res.send(req.query['hub.challenge'])
  }

  verifyToken(req) {
    return req.query['hub.verify_token'] === config.FACEBOOK_PAGE_ACCESS_TOKEN
  }

}

export default AuthService