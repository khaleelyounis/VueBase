module.exports = {
  "transpileDependencies": [
    {},
    "vuetify"
  ],
  "runtimeCompiler": true,
  "configureWebpack": {
    "resolve": {
      "extensions": [
        ".js",
        ".vue",
        ".json"
      ],
      "alias": {
        "root": "/Users/stallenvp/Desktop/VueBase",
        "src": "/Users/stallenvp/Desktop/VueBase/src",
        "assets": "/Users/stallenvp/Desktop/VueBase/src/assets",
        "components": "/Users/stallenvp/Desktop/VueBase/src/components",
        "views": "/Users/stallenvp/Desktop/VueBase/src/views",
        "styles": "/Users/stallenvp/Desktop/VueBase/src/styles",
        "mixins": "/Users/stallenvp/Desktop/VueBase/src/mixins",
        "utils": "/Users/stallenvp/Desktop/VueBase/src/utils",
        "store": "/Users/stallenvp/Desktop/VueBase/src/store",
        "router": "/Users/stallenvp/Desktop/VueBase/src/router"
      }
    }
  },
  "pluginOptions": {
    "i18n": {
      "locale": "en",
      "fallbackLocale": "en",
      "localeDir": "locales",
      "enableInSFC": false
    }
  }
}