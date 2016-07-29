import { expect } from 'chai';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import converter from '../converter';

const getSvg = (fileName) => String(fs.readFileSync(`${__dirname}/${fileName}`, {
  encode: 'utf-8',
}));

const iconSvg = getSvg('./fixtures/icon.svg');

const jsxWrapper = (string) => `(createElement) => ${string}`;

describe(__filename, () => {
  it('converter will transform svg string as constants svg', () => {
    /* eslint no-eval: 0 */
    const svgCreator = eval(
      converter(iconSvg, {
        pragma: 'createElement',
        jsxWrapper,
      })
    );

    const svg = svgCreator(createElement);

    expect(svg).to.be.an('object');
    expect(renderToStaticMarkup(svg)).to.be.an('string');
  });
});
