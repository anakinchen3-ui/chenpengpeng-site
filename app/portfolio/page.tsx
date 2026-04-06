import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: '电商平台数据可视化',
    description: '为电商平台开发的实时数据看板，支持多维度数据分析和自定义报表导出',
    image: '/images/project-1.jpg',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: '个人知识管理系统',
    description: '基于 Markdown 的知识管理工具，支持标签系统、全文搜索和双向链接',
    image: '/images/project-2.jpg',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: '团队协作工具',
    description: '轻量级项目管理工具，支持看板视图、任务分配和实时通知',
    image: '/images/project-3.jpg',
    tags: ['Vue 3', 'Firebase', 'Pinia', 'Element Plus'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: 'AI 内容生成器',
    description: '集成 GPT API 的智能写作助手，支持多种内容模板和风格定制',
    image: '/images/project-4.jpg',
    tags: ['React', 'OpenAI API', 'Vercel AI SDK'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: '移动端电商 App',
    description: '跨平台移动应用，支持商品浏览、购物车、订单管理和支付集成',
    image: '/images/project-5.jpg',
    tags: ['React Native', 'Expo', 'Redux', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    title: '自动化工作流平台',
    description: '可视化流程编排工具，支持定时任务、Webhook 和多种服务集成',
    image: '/images/project-6.jpg',
    tags: ['Node.js', 'Bull Queue', 'React Flow', 'Docker'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
]

export default function PortfolioPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">作品集</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          这里展示了我近年来参与开发和设计的主要项目，涵盖 Web 应用、移动应用和工具开发
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
          精选项目
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-slate-400 rounded-full"></span>
          更多项目
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project, featured = false }: { project: typeof projects[0], featured?: boolean }) {
  return (
    <div className={`group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all ${featured ? 'border-primary-200' : ''}`}>
      {/* Image */}
      <div className={`relative bg-slate-100 ${featured ? 'h-56' : 'h-48'}`}>
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <span className="text-sm">项目截图</span>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <a
            href={project.demoUrl}
            className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium flex items-center gap-2 hover:bg-primary-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            预览
          </a>
          <a
            href={project.githubUrl}
            className="px-4 py-2 bg-slate-800 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            代码
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-slate-100 text-slate-600 text-sm rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
