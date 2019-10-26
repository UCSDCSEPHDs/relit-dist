const path = require('path')
const { tencent_secretid, tencent_secretkey } = require(path.resolve('./config/token.json'))
const { tmt: { v20180321: { Client, Models } }, common: { Credential, ClientProfile, HttpProfile } } = require('tencentcloud-sdk-nodejs')

/**
 * Translator API Script
 * @version 0.0.1
 * @author relubwu
 */

let cred = new Credential(tencent_secretid, tencent_secretkey)
let httpProfile = new HttpProfile()
httpProfile.endpoint = "tmt.tencentcloudapi.com"
let clientProfile = new ClientProfile()
clientProfile.httpProfile = httpProfile
let client = new Client(cred, "na-siliconvalley", clientProfile)

module.exports = {
  translate: function (sourceText) {
    return new Promise((resolve, reject) => {
      let req = new Models.TextTranslateRequest()
      let params = JSON.stringify({
        SourceText: sourceText,
        Source: "auto",
        Target: "en",
        ProjectId: 0
      })
      req.from_json_string(params)
      client.TextTranslate(req, function(errMsg, response) {
          return errMsg ? reject(errMsg) : resolve(JSON.parse(response.to_json_string()))
      })
    })
  }
}
