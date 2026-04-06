# 个人作品集网站

使用 Next.js 14 + TypeScript + Tailwind CSS 构建的个人网站。

## 功能特性

- 🏠 **首页** - 个人简介和导航
- 💼 **作品集** - 项目展示
- 📝 **博客** - 技术文章
- 🛠️ **工具** - 实用在线工具
- 👤 **关于** - 个人简历

## 技术栈

- [Next.js 14](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- [Lucide React](https://lucide.dev/) - 图标库

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览构建结果
npm run start
```

开发服务器启动后，访问 http://localhost:3000

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### 其他平台

```bash
npm run build
# 部署 dist 目录
```

## 自定义

### 修改个人信息

编辑 `app/about/page.tsx` 中的个人资料。

### 添加项目

编辑 `app/portfolio/page.tsx` 中的项目数组。

### 添加博客文章

在 `app/blog/[slug]/page.tsx` 中添加新的文章数据。

### 添加工具

编辑 `app/tools/page.tsx` 中的工具列表。

## 许可证

MIT
