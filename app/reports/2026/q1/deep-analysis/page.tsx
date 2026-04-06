import { ArrowLeft, Calendar, FileText, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: '团队Q1深度经营分析报告 | 陈鹏 Peng Chen',
  description: '2026年第一季度团队深度经营分析报告'
}

export default function Q1DeepAnalysisPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 顶部导航栏 */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link
                href="/reports"
                className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                返回复盘概览
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                2026年 Q1
              </div>
              <a
                href="/reports/q1-deep-analysis.html"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                下载报告
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/reports" className="hover:text-primary-600 transition-colors">
            团队复盘
          </Link>
          <span>/</span>
          <Link href="/reports" className="hover:text-primary-600 transition-colors">
            2026年
          </Link>
          <span>/</span>
          <Link href="/reports" className="hover:text-primary-600 transition-colors">
            Q1
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">深度经营分析报告</span>
        </nav>
      </div>

      {/* 报告标题 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-violet-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">团队Q1深度经营分析报告</h1>
            <p className="text-slate-500 mt-1">2026年第一季度 · 深度分析版</p>
          </div>
        </div>
      </div>

      {/* 报告内容 iframe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <iframe
            src="/reports/q1-deep-analysis.html"
            className="w-full h-[calc(100vh-280px)] min-h-[600px]"
            title="团队Q1深度经营分析报告"
          />
        </div>
      </div>
    </div>
  )
}
