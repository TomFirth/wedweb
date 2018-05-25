const flatCache = require('flat-cache')
const flat = flatCache.load('wedweb')

const cache = module.exports = {}

cache.save = async (obj) => {
  try {
    await flat.setKey('pages', obj)
    await flat.save()
  } catch (error) {
    throw new Error(error)
  }
}

cache.read = async (key) => {
  try {
    const getCache = await flat.getKey('pages')
    return getCache
  } catch (error) {
    throw new Error(error)
  }
}
