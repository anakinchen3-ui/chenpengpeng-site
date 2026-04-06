import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

// 模拟文章数据
const posts = {
  'nextjs-app-router-guide': {
    title: 'Next.js App Router 完全指南',
    date: '2024-03-15',
    readTime: '15 分钟',
    category: '前端开发',
    tags: ['Next.js', 'React', '教程'],
    content: `
## 引言

Next.js 14 引入了全新的 App Router，这是一个基于 React Server Components 的路由系统，为构建现代 Web 应用提供了更强大的功能和更好的开发体验。

## 什么是 App Router

App Router 是 Next.js 13+ 引入的新路由系统，它使用文件系统路由，并支持：

- **React Server Components** - 默认在服务端渲染
- **流式传输** - 渐进式加载页面内容
- **嵌套布局** - 更灵活的布局系统
- **Loading UI** - 内置加载状态支持

## 基础用法

### 创建页面

在 app 目录下创建 page.tsx 文件：

\`\`\`tsx
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my site</h1>
    </div>
  )
}
\`\`\`

### 动态路由

使用方括号创建动态路由：

\`\`\`tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  return <div>Post: {params.slug}</div>
}
\`\`\`

## 数据获取

### Server Components

在 Server Components 中直接获取数据：

\`\`\`tsx
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
\`\`\`

## 总结

App Router 为 Next.js 带来了革命性的变化，使得构建现代 Web 应用变得更加简单和高效。建议新项目直接使用 App Router，现有项目可以逐步迁移。
    `
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">文章未找到</h1>
        <Link href="/blog" className="text-primary-600 hover:underline">
          返回博客列表
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回博客
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-sm text-slate-500"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <article
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.content
            .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">$1</h2>')
            .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-slate-900 mt-6 mb-3">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '</p><p class="mb-4 text-slate-600 leading-relaxed">')
            .replace(/- (.*)/g, '<li class="ml-4 text-slate-600">$1</li>')
            .replace(/<li/g, '<ul class="list-disc mb-4"><li')
            .replace(/<\/li>\n(?!\s*-)/g, '</li></ul>')
            .replace(/```tsx\n([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mb-4"><code>$1</code></pre>')
            .replace(/^/, '<p class="mb-4 text-slate-600 leading-relaxed">')
            .replace(/$/, '</p>')
        }}
      />

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <p className="text-slate-500 text-center">
          喜欢这篇文章？欢迎分享和讨论！
        </p>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}
