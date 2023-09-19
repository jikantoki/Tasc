//import { resolve } from 'core-js/fn/promise'
import Settings from '../src/settings'

export default {
  webSocket: null,
  webSocketStatus: null,
  responses: [],
  /**
   * Websocket接続処理、mount時に必要
   * 接続先は ../src/settingsのWebSocketURLに記述
   */
  connect: function () {
    this.webSocket = new WebSocket(Settings.WebSocketURL)
    /**
     * WebSocket接続完了
     */
    this.webSocket.addEventListener('open', () => {
      this.webSocketStatus = 'connected'
      console.log('WebSocket Connected')
    })

    /**
     * Websocketから情報が来た時の挙動
     */
    this.webSocket.addEventListener('message', (e) => {
      let ResponseObject
      try {
        ResponseObject = JSON.parse(e.data)
      } catch (e) {
        console.log('WebSocket Responce is not JSON:' + e.data)
      }
      switch (ResponseObject.type) {
        case 'message':
          this.catch.message(ResponseObject)
          break
        default:
          this.catch.other(ResponseObject)
          break
      }
      this.responses.push(ResponseObject)
    })

    this.webSocket.addEventListener('close', async (e) => {
      this.webSocketStatus = 'disconnected'
      console.log('WebSocket Disconnected:' + JSON.stringify(e))
      this.webSocket.close(4000, 'Offline')
      while (this.webSocketStatus !== 'connected') {
        this.connect()
        await this.sleep(500)
      }
    })

    this.webSocket.addEventListener('error', (e) => {
      console.log('WebSocket Error:' + JSON.stringify(e))
    })
  },
  /**
   * object型のものをなんでも送れる
   * @param {object} object なんでも！
   */
  sendObject: function (object) {
    if (this.webSocket && this.webSocketStatus === 'connected') {
      this.webSocket.send(JSON.stringify(object))
    } else {
      console.log('WebSocket is null!')
    }
  },
  /**
   * テキスト送信用
   * @param {string} text 送りたいテキスト
   */
  sendMessage: function (text) {
    this.sendObject({
      text: text,
      type: 'message'
    })
  },
  sleep: function (miliSec) {
    return new Promise((resolve) => setTimeout(resolve, miliSec))
  },
  catch: {
    messageList: [],
    message: function (ResponseObject) {
      this.messageList.push(ResponseObject)
      console.log(ResponseObject)
    },
    other: function (ResponseObject) {
      console.log(ResponseObject)
    }
  },
  /**
   * WebSocketを切断する
   * unmount時に必要
   * @param {int} status ステータス（正常は1000）
   * @param {string} reason 切断理由
   */
  close: function (status, reason) {
    this.webSocket.close(status, reason)
  }
}
