<p align="center">
<a href="https://www.npmjs.com/package/rsbuild-plugin-vue-inspector"><img src="https://raw.githubusercontent.com/hunghg255/rsbuild-plugin-vue-inspector/main/logo.svg" width="180" alt="rsbuild-plugin-vue-inspector"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rsbuild-plugin-vue-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/rsbuild-plugin-vue-inspector.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/rsbuild-plugin-vue-inspector" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/rsbuild-plugin-vue-inspector.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=rsbuild-plugin-vue-inspector" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/rsbuild-plugin-vue-inspector" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/rsbuild-plugin-vue-inspector/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/rsbuild-plugin-vue-inspector/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/rsbuild-plugin-vue-inspector" alt="License" /></a>
</p>

## Playground

[Playground](https://github.com/hunghg255/rsbuild-plugin-vue-inspector/tree/main/playground)

## 📖 Introduction

- A rsbuild plugin which provides the ability that to jump to the local IDE when you click the element of browser automatically.

- Support Vue3, Vue2

<p align="center">
<img src="https://raw.githubusercontent.com/hunghg255/rsbuild-plugin-vue-inspector/main/assets/demo.gif" alt="rsbuild-plugin-vue-inspector">
</p>

## 📦 Installation

```bash
npm install rsbuild-plugin-vue-inspector -D
```

## 🦄 Usage

### Configuration in `rsbuild.config.ts`

```ts
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

import { pluginVueInspector } from 'rsbuild-plugin-vue-inspector';

export default defineConfig({
  plugins: [pluginVue(), pluginVueInspector()],
});
```
