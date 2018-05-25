const _ = require('lodash')

const configuration = require('../prismic-configuration')
const gen = require('./general')

const pris = module.exports = {}

pris.conn = async (api, req, res, next) => {
  req.prismic = {api}
  res.locals.ctx = {
    endpoint: configuration.apiEndpoint,
    linkResolver: configuration.linkResolver
  }
  next()
}

pris.many = async (pages) => {
  const hasWedding = gen.whenIsWedding()
  let content = []
  pages.results.forEach(page => {
    if (_.includes(hasWedding, page.tags)) {
      content.push({
        special: _.get(page, 'rawJSON.page.special.value'),
        title: _.get(page, 'rawJSON.page.title.value'),
        content: _.get(page, 'rawJSON.page.content.value[0].text'),
        colour: _.get(page, 'rawJSON.background.value'),
        image: _.get(page, 'rawJSON.background_image.value')
      })
    }
  })
  return content
}
