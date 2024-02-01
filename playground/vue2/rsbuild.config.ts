import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import { pluginVueInspector } from '../../src';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue2Jsx } from '@rsbuild/plugin-vue2-jsx';

export default defineConfig({
  plugins: [
    pluginVue2(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      exclude: /[\\/]node_modules[\\/]/,
    }),
    pluginVue2Jsx(),
    pluginVueInspector(),
  ],
});
