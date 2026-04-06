import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'

// 示例博客数据
const posts = [
  {
    slug: 'nextjs-app-router-guide',
    title: 'Next.js App Router 完全指南',
    excerpt: '深入解析 Next.js 14 的 App Router，包括路由定义、数据获取、流式渲染等核心概念...',
    date: '2024-03-15',
    readTime: '15 分钟',
    category: '前端开发',
    tags: ['Next.js', 'React', '教程'],
    featured: true
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS 高效开发技巧',
    excerpt: '分享我使用 Tailwind CSS 的经验，包括自定义配置、组件复用和性能优化...',
    date: '2024-03-10',
    readTime: '8 分钟',
    category: 'CSS',
    tags: ['Tailwind', 'CSS', '效率'],
    featured: false
  },
  {
    slug: 'react-performance-optimization',
    title: 'React 性能优化实战',
    excerpt: '从实际案例出发，讲解如何识别和解决 React 应用的性能瓶颈...',
    date: '2024-03-05',
    readTime: '12 分钟',
    category: 'React',
    tags: ['React', '性能优化', '前端'],
    featured: false
  },
  {
    slug: 'building-portfolio-website',
    title: '如何打造个人作品集网站',
    excerpt: '从零开始构建专业的个人作品集网站，包括设计思路、技术选型和部署方案...',
    date: '2024-02-28',
    readTime: '10 分钟',
    category: '职业发展',
    tags: ['个人品牌', '作品集', 'Next.js'],
    featured: false
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript 最佳实践总结',
    excerpt: '总结在实际项目中使用 TypeScript 的经验，帮助你写出更健壮的代码...',
    date: '2024-02-20',
    readTime: '18 分钟',
    category: 'TypeScript',
    tags: ['TypeScript', '代码质量'],
    featured: false
  }
]

const categories = ['全部', '前端开发', 'React', 'TypeScript', 'CSS', '职业发展']

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">技术博客</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          分享前端开发经验、学习笔记和技术思考，记录成长的每一步
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === '全部'
                ? 'bg-primary-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-12">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary-500 to-violet-600 flex items-center justify-center">
                <span className="text-white text-6xl">📝</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary-600 font-medium">
                  阅读全文
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

function PostCard({ post }: { post: typeof posts[0] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-primary-200 transition-all"
    >
      <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
          {post.category}
        </span>
        <span>{post.date}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
        {post.title}
      </h3>

      <p className="text-slate-600 mb-4 line-clamp-2">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-500">{post.readTime}</span>
        </div>
        <div className="flex gap-1.5">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-slate-50 text-slate-500 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
