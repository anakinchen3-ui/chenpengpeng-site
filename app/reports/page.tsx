import { FileText, BarChart3, TrendingUp, Calendar, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const reports = [
  {
    id: 'q1-deep-analysis',
    title: '团队Q1深度经营分析报告',
    subtitle: '2026年第一季度',
    description: '全面的经营数据分析，包含关键指标、趋势洞察和改进建议',
    icon: BarChart3,
    date: '2026年4月',
    category: '深度分析',
    href: '/reports/q1-deep-analysis.html'
  },
  {
    id: 'q1-management',
    title: '项目组Q1经营汇报',
    subtitle: '管理层汇报版本',
    description: '面向管理层的季度经营汇报，聚焦核心成果与下季度规划',
    icon: TrendingUp,
    date: '2026年4月',
    category: '经营汇报',
    href: '/reports/q1-management-report.html'
  }
]

export const metadata = {
  title: '团队复盘报告 | 陈鹏 Peng Chen',
  description: '团队季度经营分析与复盘报告'
}

export default function ReportsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
          <FileText className="w-4 h-4" />
          团队复盘
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          季度经营分析报告
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          定期复盘是持续改进的基础。这里汇集了团队的季度经营分析与复盘报告，记录成长轨迹。
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {reports.map((report) => {
          const Icon = report.icon
          return (
            <Link
              key={report.id}
              href={report.href}
              target="_blank"
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  report.category === '深度分析'
                    ? 'bg-violet-100 text-violet-600'
                    : 'bg-emerald-100 text-emerald-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                  {report.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                {report.title}
              </h2>
              <p className="text-sm text-slate-500 mb-3">{report.subtitle}</p>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {report.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  {report.date}
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                  查看报告
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Info Section */}
      <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">关于团队复盘</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              团队复盘是持续改进的重要环节。通过定期的数据分析和经验总结，
              我们能够及时发现问题、优化流程，推动团队不断成长。
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors"
          >
            了解更多
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
