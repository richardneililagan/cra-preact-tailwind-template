const {
  override,
  addWebpackAlias,
  addBabelPlugins,
  addPostcssPlugins,
} = require('customize-cra')

// :: ---

const preactWebpackAliases = addWebpackAlias({
  react: 'preact/compat',
  'react-dom': 'preact/compat',
  'react-dom/test-utils': 'preact/test-utils',
  '@testing-library/react': '@testing-library/preact',
})

const preactBabelPragma = addBabelPlugins(
  ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
  [
    'babel-plugin-jsx-pragmatic',
    {
      module: 'preact',
      import: 'h',
      export: 'h',
    },
  ]
)

const tailwindCssPlugins = addPostcssPlugins([
  require('tailwindcss'),
  require('autoprefixer'),
])

module.exports = override(
  preactWebpackAliases,
  ...preactBabelPragma,
  tailwindCssPlugins
)
