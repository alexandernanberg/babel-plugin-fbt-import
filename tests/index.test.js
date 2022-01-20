'use strict'

const path = require('path')
const fs = require('fs')
const babel = require('@babel/core')
const plugin = require.resolve('../')

const babelOptions = {
  // presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [
    '@babel/plugin-syntax-jsx',
    plugin,
    'babel-plugin-fbt',
    'babel-plugin-fbt-runtime',
  ],
}

const fixturesPath = path.join(__dirname, '__fixtures__')

it('injects fbt import', () => {
  const output = babel.transform(
    fs.readFileSync(path.join(fixturesPath, 'input.js'), 'utf-8'),
    babelOptions
  )

  expect(output.code).toEqual(
    fs.readFileSync(path.join(fixturesPath, 'output.js'), 'utf-8')
  )
})
