## svg2jsx

transform svg to jsx constants elements.

[![Build Status](https://img.shields.io/travis/morlay/svg2jsx.svg?style=flat-square)](https://travis-ci.org/morlay/svg2jsx)
[![NPM](https://img.shields.io/npm/v/svg2jsx.svg?style=flat-square)](https://npmjs.org/package/svg2jsx)
[![Dependencies](https://img.shields.io/david/morlay/svg2jsx.svg?style=flat-square)](https://david-dm.org/morlay/svg2jsx)
[![License](https://img.shields.io/npm/l/svg2jsx.svg?style=flat-square)](https://npmjs.org/package/svg2jsx)

see more in examples, default use in webpack.

### Options

#### `pragma` 

same as <http://babeljs.io/docs/plugins/transform-react-jsx/>

#### `jsxWrapper(jsxString)` 

wrapper of jsx string, must be result a `string`

#### `svgProcessor($svgElm, $)`
 
processor for svgElm, `$` is an instance of <https://github.com/cheeriojs/cheerio> 
must remove or transform attrs like `xmlns:xlink` in xml