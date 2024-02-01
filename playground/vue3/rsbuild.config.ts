import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginVueInspector } from '../../src';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      exclude: /[\\/]node_modules[\\/]/,
    }),
    pluginVueJsx(),
    pluginVueInspector({
      port: 3071,
    }),
  ],
});
