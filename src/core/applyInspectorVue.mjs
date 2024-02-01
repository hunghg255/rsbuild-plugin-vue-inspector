import path from 'node:path';
import MagicString from 'magic-string';
import {
  parse as vueParse,
  transform as vueTransform,
} from '@vue/compiler-dom';
import { EXCLUDE_TAG, KEY_DATA } from './constant.mjs';

export default async function (code) {
  const s = new MagicString(code);

  const id = this.resourcePath;
  const projectDir = path.join(process.cwd());
  const fileName = id.replace(projectDir.replace(/\\/g, '/'), '');
  const type = path.extname(fileName).slice(1);

  const result = await new Promise((resolve) => {
    switch (type) {
      case 'vue': {
        const ast = vueParse(code, { comments: true });

        vueTransform(ast, {
          nodeTransforms: [
            (node) => {
              if (node.type === 1) {
                if (node.tagType === 0 && !EXCLUDE_TAG.includes(node.tag)) {
                  if (node.loc.source.includes(KEY_DATA)) return;

                  const insertPosition = node.props.length
                    ? Math.max(...node.props.map((i) => i.loc.end.offset))
                    : node.loc.start.offset + node.tag.length + 1;
                  const { line, column } = node.loc.start;

                  const contentInspect = ` ${KEY_DATA}="${fileName.slice(
                    1,
                  )}:${line}:${column}"`;

                  s.prependLeft(insertPosition, contentInspect);
                }
              }
            },
          ],
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
