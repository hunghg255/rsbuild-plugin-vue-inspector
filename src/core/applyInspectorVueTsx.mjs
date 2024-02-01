import path from 'node:path';
import MagicString from 'magic-string';
import { parse as babelParse, traverse as babelTraverse } from '@babel/core';
import vueJsxPlugin from '@vue/babel-plugin-jsx';
import typescriptPlugin from '@babel/plugin-transform-typescript';
import importMeta from '@babel/plugin-syntax-import-meta';
import decoratorsPlugin from '@babel/plugin-proposal-decorators';
import importAttributesPlugin from '@babel/plugin-syntax-import-attributes';
import { KEY_DATA } from './constant.mjs';

export default async function (code) {
  const s = new MagicString(code);

  const id = this.resourcePath;
  const projectDir = path.join(process.cwd());
  const fileName = id.replace(projectDir.replace(/\\/g, '/'), '');
  const type = path.extname(fileName).slice(1);

  const result = await new Promise((resolve) => {
    switch (type) {
      case 'tsx': {
        const ast = babelParse(code, {
          configFile: false,
          filename: id,
          ast: true,
          babelrc: false,
          comments: true,
          plugins: [
            importMeta,
            [vueJsxPlugin, {}],
            [typescriptPlugin, { isTSX: true, allowExtensions: true }],
            [decoratorsPlugin, { legacy: true }],
            [importAttributesPlugin, { deprecatedAssertSyntax: true }],
          ],
        });

        babelTraverse(ast, {
          enter({ node }) {
            if (node.type === 'JSXElement') {
              if (
                node.openingElement.attributes.some(
                  (attr) =>
                    attr.type !== 'JSXSpreadAttribute' &&
                    attr.name.name === KEY_DATA,
                )
              )
                return;

              const insertPosition =
                node.openingElement.end -
                (node.openingElement.selfClosing ? 2 : 1);
              const { line, column } = node.loc.start;

              const contentInspect = ` ${KEY_DATA}="${fileName.slice(
                1,
              )}:${line}:${column}"`;

              s.prependLeft(insertPosition, contentInspect);
            }
          },
        });
        break;
      }

      default:
        break;
    }

    resolve(s.toString());
  });

  return result;
}
