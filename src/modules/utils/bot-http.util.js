import request from 'request'
import config from '../../config.json'

class BotHttpUtil {

  constructor() {}

  static post(textMessage, success, error) {
    request({
      uri: config.FACEBOOK_RETURN_URL,
      qs: {
        access_token: config.FACEBOOK_PAGE_ACCESS_TOKEN
      },
      method: 'POST',
      json: textMessage
    }, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        if (success) {
          success(body)
        }
      } else {
        if (error) {
          error(error, response)
        }
      }
    })
  }
}

export default BotHttpUtil