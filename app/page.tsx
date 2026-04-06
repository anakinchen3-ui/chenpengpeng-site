import Link from 'next/link'
import { ArrowRight, Briefcase, TrendingUp, Award, Globe, Users, BarChart3 } from 'lucide-react'

const highlights = [
  {
    icon: TrendingUp,
    title: '独立站操盘',
    description: '4年专注高客单价品类出海，从0到1冷启动与规模化增长双重视野',
    href: '/about',
    color: 'bg-blue-500'
  },
  {
    icon: BarChart3,
    title: '数据驱动',
    description: 'GA4认证分析师，搭建数据中枢与自动化报表体系，决策效率提升70%',
    href: '/about',
    color: 'bg-emerald-500'
  },
  {
    icon: Users,
    title: '团队管理',
    description: '带领5-7人优化师团队，搭建OKR体系，培养2位高级优化师晋升',
    href: '/about',
    color: 'bg-violet-500'
  }
]

const achievements = [
  { value: '$20M+', label: '年度广告预算管理' },
  { value: '10倍+', label: '品牌年度增长' },
  { value: '4年', label: '跨境出海经验' },
  { value: '5-7人', label: '团队规模管理' }
]

const coreSkills = [
  '独立站全生命周期管理',
  '高客单价品类操盘',
  '整合营销策略',
  '数据驱动增长',
  '欧美市场深耕',
  '团队搭建与管理'
]

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              跨境品牌独立站操盘手
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Hi, I'm <span className="text-primary-600">陈鹏</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              资深跨境品牌独立站操盘手，4年专注高客单价品类出海
            </p>

            <p className="text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto">
              兼具从0到1冷启动与规模化增长的双重视野，擅长以生意全局视角统筹运营，
              将前端流量获取与后端商品定价、利润管理协同闭环，驱动品牌在海外市场的可持续增长。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                查看详细履历
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:anakinchen3@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                联系我
              </a>
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
            {achievements.map((stat) => (
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

      {/* Core Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">核心能力</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            精通独立站全生命周期管理，擅长高客单价品类操盘与整合营销
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-primary-300 hover:shadow-sm transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">专业领域</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            深耕跨境品牌出海领域，具备全链路运营能力与团队管理经验
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-primary-300 transition-all"
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

      {/* Featured Experience */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">深圳艾维品牌营销有限公司</h2>
              <p className="text-primary-300 text-lg mb-4">项目经理（独立站运营管理）</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                带领5-7人团队，为头部品牌客户提供独立站增长服务，管理年度$20M+广告预算，
                主导多个品类从0到1冷启动，实现品牌年度10倍+增长。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                查看详细经历
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">户外家居品类</span>
                </div>
                <p className="text-slate-300 text-sm">3个月内从0到1，月销售额突破$100W+</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">智能投影仪新品</span>
                </div>
                <p className="text-slate-300 text-sm">新品发布当月销售500单，全年$600W销售额</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">黑五大促</span>
                </div>
                <p className="text-slate-300 text-sm">Cyber Week销售额增长300%，峰值$250K+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-600 to-violet-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">寻找跨境品牌增长专家？</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            4年专注高客单价品类出海，从0到1冷启动与规模化增长经验丰富，
            期待与您探讨品牌出海的增长机会
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:anakinchen3@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              联系我
            </a>
            <a
              href="tel:13276675516"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              13276675516
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
