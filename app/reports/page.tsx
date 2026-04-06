import { FileText, BarChart3, TrendingUp, Calendar, ArrowRight, FolderOpen } from 'lucide-react'
import Link from 'next/link'

// 报告数据结构 - 按时间分类
const reportData = {
  2026: {
    year: 2026,
    quarters: [
      {
        id: 'q1',
        label: 'Q1 (第一季度)',
        period: '1月 - 3月',
        reports: [
          {
            id: 'deep-analysis',
            title: '团队Q1深度经营分析报告',
            type: '深度分析',
            description: '全面的经营数据分析，包含关键指标、趋势洞察和改进建议',
            icon: BarChart3,
            href: '/reports/2026/q1/deep-analysis',
            color: 'violet'
          },
          {
            id: 'management',
            title: '项目组Q1经营汇报',
            type: '经营汇报',
            description: '面向管理层的季度经营汇报，聚焦核心成果与下季度规划',
            icon: TrendingUp,
            href: '/reports/2026/q1/management',
            color: 'emerald'
          }
        ]
      }
    ]
  }
}

export const metadata = {
  title: '团队复盘报告 | 陈鹏 Peng Chen',
  description: '团队季度经营分析与复盘报告 - 按时间分类整理'
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
          定期复盘是持续改进的基础。这里按时间整理了团队的季度经营分析与复盘报告，记录成长轨迹。
        </p>
      </div>

      {/* 时间轴结构 */}
      <div className="space-y-12">
        {Object.entries(reportData).map(([yearKey, yearData]) => (
          <div key={yearKey} className="relative">
            {/* 年份标题 */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200">
                <span className="text-2xl font-bold text-white">{yearData.year}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{yearData.year}年</h2>
                <p className="text-sm text-slate-500">{yearData.quarters.length} 个季度 · {yearData.quarters.reduce((acc, q) => acc + q.reports.length, 0)} 份报告</p>
              </div>
            </div>

            {/* 季度列表 */}
            <div className="space-y-8 pl-8 border-l-2 border-slate-200 ml-8">
              {yearData.quarters.map((quarter) => (
                <div key={quarter.id} className="relative">
                  {/* 季度标记点 */}
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white border-4 border-primary-400 rounded-full" />

                  {/* 季度标题 */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3">
                      <FolderOpen className="w-5 h-5 text-primary-600" />
                      <h3 className="text-lg font-bold text-slate-900">{quarter.label}</h3>
                    </div>
                    <p className="text-sm text-slate-500 ml-8 mt-1">{quarter.period}</p>
                  </div>

                  {/* 报告卡片 */}
                  <div className="grid md:grid-cols-2 gap-4 ml-8">
                    {quarter.reports.map((report) => {
                      const Icon = report.icon
                      const colorClasses = {
                        violet: 'bg-violet-100 text-violet-600 hover:border-violet-300 hover:shadow-violet-100',
                        emerald: 'bg-emerald-100 text-emerald-600 hover:border-emerald-300 hover:shadow-emerald-100',
                        blue: 'bg-blue-100 text-blue-600 hover:border-blue-300 hover:shadow-blue-100',
                        amber: 'bg-amber-100 text-amber-600 hover:border-amber-300 hover:shadow-amber-100'
                      }
                      return (
                        <Link
                          key={report.id}
                          href={report.href}
                          className={`group bg-white rounded-xl p-5 border border-slate-200 transition-all duration-300 hover:shadow-lg ${colorClasses[report.color as keyof typeof colorClasses] || colorClasses.blue}`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${report.color === 'violet' ? 'bg-violet-100' : 'bg-emerald-100'}`}>
                              <Icon className={`w-6 h-6 ${report.color === 'violet' ? 'text-violet-600' : 'text-emerald-600'}`} />
                            </div>
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                              {report.type}
                            </span>
                          </div>

                          <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {report.title}
                          </h4>

                          <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            {report.description}
                          </p>

                          <div className="flex items-center text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                            查看报告
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
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
