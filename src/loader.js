import _ from 'lodash';
import converter from './converter';

const defaultOptions = {
  pragma: 'createElement',
  jsxWrapper: (string) => `
    var createElement = require('react').createElement;
    module.exports = ${string};
  `
};

export default function svg2jsxLoader(text) {
  this.cacheable(true);
  const options = _.merge({}, defaultOptions, this.options.svg2jsx || {});
  return converter(text, options);
}