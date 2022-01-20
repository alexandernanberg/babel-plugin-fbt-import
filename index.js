'use strict'

module.exports = function fbtImportPlugin({ types: t }) {
  let root

  return {
    visitor: {
      Program(path) {
        root = path
      },
      JSXElement(path) {
        const hasFbtImport = !path.context.scope.getBinding('fbt')

        if (path.node.openingElement.name.name === 'fbt' && hasFbtImport) {
          const importDeclaration = t.importDeclaration(
            [t.importSpecifier(t.identifier('fbt'), t.identifier('fbt'))],
            t.stringLiteral('fbt')
          )
          const [importPath] = root.unshiftContainer('body', importDeclaration)
          // Babel doesn't automatically update the bindings when we insert the
          // import statement, so manually update the binding here.
          root.scope.registerBinding('module', importPath)
        }
      },
    },
  }
}
