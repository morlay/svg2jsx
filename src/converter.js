import _ from 'lodash';
import cheerio from 'cheerio';
import { transform } from 'babel-core';

const defaultSvgProcessor = ($el, $) => {
  _.assign($el[0], {
    attribs: _.mapKeys($el[0].attribs, (value, key) => _.camelCase(key))
  });

  if ($el.children().length === 0) {
    return false;
  }

  $el.children().each((index, el) => {
    defaultSvgProcessor($(el), $);
  });
};

const defaultJsxWrapper = (codeString) => codeString;

export const convertToJsx = (codeString, options) =>
  transform(codeString, options).code;

export const cleanSvg = (codeString, svgProcessor) => {
  const finalSvgProcessor = _.isFunction(svgProcessor) ?
    svgProcessor :
    defaultSvgProcessor;

  const $ = cheerio.load(codeString, {
    xmlMode: true
  });

  finalSvgProcessor($('svg'), $);

  return $.html('svg');
};

export default (svgString, options = {}) => {
  const finalJsxWrapper = _.isFunction(options.jsxWrapper) ?
    options.jsxWrapper :
    defaultJsxWrapper;

  return finalJsxWrapper(convertToJsx(cleanSvg(svgString, options.svgProcessor), {
    plugins: [
      [
        'transform-react-jsx',
        {
          pragma: options.pragma
        }
      ]
    ]
  }));
};