# 盘古钢铁首页模板

当前包的本地首页预览，不包含工作台、侧栏或顶部导航。页面代码和资源全部位于本项目中，不依赖其他前端项目或外部预览服务。

## 本地预览

安装依赖后启动开发服务器：

```bash
pnpm install
pnpm dev
```

浏览器打开：

```text
http://localhost:3000
```

## 构建与预览产物

```bash
pnpm build
pnpm preview
```

生产构建和本地开发都只使用当前包内的代码与依赖。

## 发布到 npm

当前包已配置为公开 npm 包，发布内容仅包含首页模板源码、公共资源和 Nuxt 配置。

```bash
# 首次发布前登录 npm
npm login

# 检查实际打包内容
pnpm pack:check

# 发布当前版本
pnpm publish
```

发布新版本前，先更新 `package.json` 中的 `version`。`prepublishOnly` 会在发布前自动执行生产构建，构建失败时不会上传包。
