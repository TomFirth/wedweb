const prismic = require('prismic-nodejs')
// const cache = require('../libs/cache')
const pris = require('../libs/prismic')

module.exports = (app) => {
  app.get('/', async (req, res) => {
    try {
      // const content = await cache.read('pages')
      // if (!content) {
      const pages = await req.prismic.api.query(
        prismic.Predicates.at('document.type', 'page'), {
          orderings: '[document.first_publication_date desc]'
        }
      )
      const content = await pris.many(pages)
      // await cache.save('pages', content)
      // }
      res.render('index', {
        content
      })
    } catch (error) {
      throw new Error(error)
    }
  })

  app.post('/rsvp', async (req, res) => {
    // rsvp
  })

  app.post('/details', async (req, res) => {
    // email details to user
  })

  app.post('/contact', async (req, res) => {
    // email Russ and Sam
  })
}
