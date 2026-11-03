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

## 通过 GitHub Actions 发布到 npm

当前包已配置为公开 npm 包，发布内容仅包含首页模板源码、公共资源和 Nuxt 配置。

第一次发布前，在 GitHub 仓库的 `Settings > Secrets and variables > Actions`
中添加名为 `NPM_TOKEN` 的 repository secret。该令牌需要拥有此包的发布权限；
由于账号启用了 2FA，首次引导发布时需要使用允许发布操作的 Granular Access Token。

完成配置后，可以在 GitHub 仓库的 `Actions > Publish to npm` 页面手动运行工作流。
也可以推送与 `package.json` 版本一致的标签来触发发布：

```bash
git tag v0.0.1
git push origin v0.0.1
```

发布前工作流会自动安装依赖、执行生产构建并生成 npm provenance。发布新版本时，
先更新 `package.json` 中的 `version`，再创建对应的 `v*` 标签。

首次发布完成后，可以在 npm 包设置中改用 Trusted Publishing，将发布权限
绑定到本仓库的 `Publish to npm` 工作流，后续即可移除长期有效的 `NPM_TOKEN`。
