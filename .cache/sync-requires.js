const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-article-template-jsx": hot(preferDefault(require("/home/hincka/Pulpit/React/gatsby-blog-template/src/pages/article-template.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/hincka/Pulpit/React/gatsby-blog-template/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/hincka/Pulpit/React/gatsby-blog-template/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/hincka/Pulpit/React/gatsby-blog-template/src/pages/index.jsx")))
}

