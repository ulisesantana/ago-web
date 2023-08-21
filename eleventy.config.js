const pluginWebC = require('@11ty/eleventy-plugin-webc')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const { EleventyRenderPlugin } = require('@11ty/eleventy')
const externalLinks = require('eleventy-plugin-external-links')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(externalLinks)
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(pluginWebC, {
    components: 'src/components/**/*.webc'
  })
  eleventyConfig.addPassthroughCopy({ 'src/styles': 'styles' })
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' })
  eleventyConfig.addPassthroughCopy({ 'src/components/**/*.js': 'components' })

  return {
  pathPrefix: '/ago-web/',
    dir: {
      input: 'src/pages',
      includes: '../components',
      layouts: '../layouts',
      data: '../data'
    }
  }
}
