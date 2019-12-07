const readFileList = require("../../scripts/build.js");

module.exports = {
  repo: 'poetries/http-protocol',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: '帮助我们改善此页面！',
    algolia: {
      apiKey: '8c8a7cb8b23131c1282654084a8ca10f',
      indexName: 'Monthly',
      inputSelector: '',
      debug: false
    },
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        // nav: require('./nav/zh'),
        sidebar: {
          '/notes/': renderSiderBar()
        }
      }
    }
}

function renderSiderBar() {
  return ([
    // ["/notes/", "首页"],
    {
      title: "基础篇",
      collapsable: false,
      children: readFileList('base')
    },
    {
      title: "高级篇",
      collapsable: false,
      children: readFileList('advance')
    },
    {
      title: "扩展篇",
      collapsable: false,
      children: readFileList('extend')
    },
])
}