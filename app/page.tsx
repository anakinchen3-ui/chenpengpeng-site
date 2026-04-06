import Link from 'next/link'
import { ArrowRight, Briefcase, FileText, Wrench, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    title: '项目作品',
    description: '展示我的技术项目和产品设计案例',
    href: '/portfolio',
    color: 'bg-blue-500'
  },
  {
    icon: FileText,
    title: '技术博客',
    description: '分享前端开发、产品思考和学习笔记',
    href: '/blog',
    color: 'bg-emerald-500'
  },
  {
    icon: Wrench,
    title: '实用工具',
    description: '我开发的在线工具，提升工作效率',
    href: '/tools',
    color: 'bg-violet-500'
  }
]

const stats = [
  { value: '5+', label: '年工作经验' },
  { value: '20+', label: '完成项目' },
  { value: '50+', label: '技术文章' },
  { value: '1000+', label: 'GitHub Stars' }
]

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              欢迎来到我的数字花园
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Hi, I'm <span className="text-primary-600">你的名字</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              一名热爱技术与产品的创作者，专注于前端开发和用户体验设计。
              在这里，我分享我的项目作品、技术文章和实用工具。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                查看作品
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">探索更多</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            这里汇集了我在技术、设计和产品方面的工作成果，欢迎浏览交流
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
                <div className="mt-4 flex items-center text-primary-600 font-medium">
                  了解更多
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-600 to-violet-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">有项目想法？一起聊聊</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            我对技术合作、产品咨询和创意项目都保持开放态度，欢迎随时联系我
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            联系我
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
