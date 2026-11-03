# 盘古钢铁首页组件

一个可直接被 Vue 3 或 Nuxt 3 项目引入的工业钢铁首页组件。包内同时保留了
Nuxt 本地预览页，方便开发时检查视觉效果。

## 安装

```bash
pnpm add pangu-steel-homepage-test
```

## 在 Vue 3 中使用

```vue
<script setup lang="ts">
import {
  PanguSteelHomepage
} from 'pangu-steel-homepage-test'
import 'pangu-steel-homepage-test/style.css'
</script>

<template>
  <PanguSteelHomepage />
</template>
```

组件也提供默认导出：

```ts
import PanguSteelHomepage from 'pangu-steel-homepage-test'
import 'pangu-steel-homepage-test/style.css'
```

## 在 Nuxt 3 中使用

Nuxt 页面中的用法与 Vue 3 相同。组件没有浏览器专属的初始化逻辑，可以直接参与
服务端渲染。

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
import {
  PanguSteelHomepage
} from 'pangu-steel-homepage-test'
import 'pangu-steel-homepage-test/style.css'
</script>

<template>
  <PanguSteelHomepage />
</template>
```

产品区域的锚点 ID 默认为 `products`，可以通过 `products-id` 修改：

```vue
<PanguSteelHomepage products-id="steel-products" />
```

组件颜色通过 CSS 变量控制。使用方可以覆盖 `--ink`、`--rust`、`--paper`
等变量来调整主题。

## 本地开发

```bash
pnpm install
pnpm dev
```

浏览器打开 `http://localhost:3000` 查看完整首页。

打包 npm 组件：

```bash
pnpm build
```

检查最终发布内容：

```bash
pnpm pack:check
```

发布产物包含 `dist/index.js`、`dist/index.d.ts` 和 `dist/style.css`。Nuxt
预览源码不会进入 npm 包。

## 发布

每次发布前先更新 `package.json` 中的 `version`，再推送对应的 `v*` 标签，
或在 GitHub Actions 中手动运行 `Publish to npm`。工作流需要配置
`NPM_TOKEN`，并会在发布前自动执行组件构建。
