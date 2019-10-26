const path = require('path')
const app = require('express')()
const config = {
  ...require('getopts')(process.argv.slice(2), {
    alias: {
      port: 'p'
    },
    default: {
      port: 8083
    }
  }),
  ...require(path.resolve('./config/token.json'))
}
const querystring = require('querystring')
const validator = require('express-validator')
const translator = require('./translator')

require('log-timestamp')

/**
 * Server Instance Script
 * @version 0.0.1
 * @author relubwu
 */

app.use(require('body-parser').json())

app.post('/classify', [validator.body('img').exists()], async (req, res) => {
  if (!validator.validationResult(req).isEmpty()) { return res.status(400).end() }
  const { body: { img } } = req
  console.log(img.length)
  require('axios').post(config.tx_api, querystring.stringify({
    key: config.tx_apikey,
    img
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(({ data: { code, newslist } }) => {
      if (code === 200)
        Promise.resolve(newslist)
      else
        throw new Error({ msg: `${Code}: Cannot detect object from given data` });
      // return code === 200 ? Promise.resolve(newslist) : res.status(code).end()
    })
    .then(list => {
      const primary = list[0]
      return Promise.all([
        translator.translate(primary.name),
        translator.translate(primary.lajitip),
        Promise.resolve(primary.lajitype)
      ])
    })
    .then(info => {
      return res.json({
        name: info[0].TargetText,
        tip: info[1].TargetText,
        type: info[2]
      })
    })
    .catch(e => {
      return res.json(e.msg);
    })
})

app.listen(config.port, () => console.log(`Server instance started on ${config.port}`))
