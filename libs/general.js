const moment = require('moment')

const config = require('../config')

const gen = module.exports = {}

gen.whenIsWedding = () => {
  const weddingDate = moment(config.wedding.ceremony.date)
  const today = moment().format('YYYY-MM-DD')
  let hasWedding = 'pre'
  if (today > weddingDate) hasWedding = 'post'
  return hasWedding
}

gen.isSpecial = (page) => {
  // check if page is special
}

gen.directions = () => {
  // google maps with venue
}

gen.nearbyHotels = () => {
  // google api with nearby hotels
}

gen.menu = () => {
  // menu
}
