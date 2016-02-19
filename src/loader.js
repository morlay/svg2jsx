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
  const callback = this.async();
  const options = _.merge({}, defaultOptions, this.options.svg2jsx || {});

  try {
    const code = converter(text, options);
    callback(null, code);
  } catch (err) {
    callback(err);
  }
}