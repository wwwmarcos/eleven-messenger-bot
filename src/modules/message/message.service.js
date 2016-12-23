import TextMessage from './text-message'
import BotHttpUtil from '../utils/bot-http.util'

class MessageService {

  constructor() {}

  receivedMessage(req, res) {
    console.log('req.body {}', JSON.stringify(req.body))

    let data = req.body
    if (data.object === 'page') {
      data.entry.forEach((entry) => {
        entry.messaging.forEach((event) => {
          this.resolveEvent(event)
        })
      })
      res.sendStatus(200)
    }
  }

  resolveEvent(event) {
    if (event.message) {
      this.resolveMessage(event)
    }
    if (event.postback) {
      this.resolvePostback(event)
    }
  }

  resolveMessage(messageEvent) {
    let senderID = messageEvent.sender.id
    let message = messageEvent.message

    if (message.text) {
      this.sendTextMessage(new TextMessage(senderID, message.text))
    }
    if (message.attachments) {
      this.sendTextMessage(new TextMessage(senderID, 'Message with attachment received'))
    }
  }

  sendTextMessage(textMessage) {
    return BotHttpUtil.post(textMessage)
  }

  resolvePostback() {}
}

export default MessageService