# 个人网站项目 - personal-site

## 项目位置
`/Users/yukiwu/Library/Mobile Documents/com~apple~CloudDocs/claude code/work/personal-site`

## 项目结构

```
personal-site/
├── app/                          # Next.js App Router 页面
│   ├── about/                    # 关于我页面
│   ├── blog/                     # 博客页面
│   ├── portfolio/                # 作品集页面
│   ├── reports/                  # 团队复盘报告
│   │   ├── page.tsx              # 复盘概览
│   │   └── 2026/
│   │       └── q1/
│   │           ├── deep-analysis/     # Q1深度分析
│   │           └── management/        # Q1管理汇报
│   ├── tools/                    # 工具页面
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 首页
├── components/                   # React组件
│   ├── ClientMap.tsx             # 客户地图
│   ├── Footer.tsx                # 页脚
│   ├── Header.tsx                # 导航栏
│   └── Logo.tsx                  # 网站Logo
├── public/                       # 静态资源
│   ├── clients/                  # 客户logo
│   └── reports/                  # HTML报告文件
│       ├── q1-deep-analysis.html
│       └── q1-management-report.html
├── scripts/                      # 工具脚本
│   ├── fix_logos.py
│   ├── remove_bg_specific.py
│   └── remove_white_bg.py
├── 客户logo/                      # 原始客户logo文件
├── next.config.js                # Next.js配置
├── package.json                  # 依赖配置
├── tailwind.config.js            # Tailwind配置
└── tsconfig.json                 # TypeScript配置
```

## 网站地址
- 主站: https://chenpengpeng.me
- 团队复盘: https://chenpengpeng.me/reports

## 部署
通过 Vercel 自动部署，GitHub仓库: anakinchen3-ui/chenpengpeng-site
