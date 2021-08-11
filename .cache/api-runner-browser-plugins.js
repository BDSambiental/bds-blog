module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/pietrobellunopilau/Documents/Projetos/bds-blog/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"3.11.1","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":590}},{"resolve":"gatsby-remark-responsive-iframe","options":{"wrapperStyle":"margin-bottom: 1.0725rem"}},{"resolve":"gatsby-remark-vscode"},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/pietrobellunopilau/Documents/Projetos/bds-blog"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
