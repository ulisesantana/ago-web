/**
 * @typedef {Object} EleventyPage
 * @property {string} inputPath
 * @property {string} url
 * @property {Date} date
 */

/**
 * @typedef {Object} PostCommonData
 * @property {string} title
 * @property {string} description
 * @property {boolean} draft
 * @property {Date} date
 * @property {string[]} tags
 */

/**
 * @typedef {Object} Post
 * @property {EleventyPage} page - Page data
 * @property {PostCommonData} data - Post minimal data
 * @property {string} content - Post content
 */

const isProd = () => process.env.NODE_ENV === 'production'
const isDev = () => process.env.NODE_ENV === 'dev'

module.exports = {
  server: {
    isDev,
    isProd
  },
  images: {
    fallback: '/assets/images/fallback.png',
    logo: '/assets/images/logo.png',
    author: '/assets/images/author-2.png'
  },
  dates: {
    /**
     * @param {Date} date
     * @param {string} locale
     * @returns {string} Date string for locale
     */
    toLocaleDateString (date, locale) {
      const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString(locale, dateOptions)
    }
  }
}
