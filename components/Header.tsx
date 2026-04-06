'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, User, Mail, FileText, ChevronDown, Calendar } from 'lucide-react'
import Logo from '@/components/Logo'

// 复盘报告数据结构
const reportStructure = {
  2026: {
    quarters: [
      {
        id: 'q1',
        label: 'Q1 (第一季度)',
        reports: [
          { id: 'deep-analysis', label: '深度经营分析报告', href: '/reports/2026/q1/deep-analysis' },
          { id: 'management', label: '项目组经营汇报', href: '/reports/2026/q1/management' }
        ]
      }
    ]
  }
}

const mainNavItems = [
  { href: '/', label: '首页', icon: Home },
  { href: '/about', label: '关于我', icon: User }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReportMenuOpen, setIsReportMenuOpen] = useState(false)
  const pathname = usePathname()

  const isReportActive = pathname?.startsWith('/reports')

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Logo size="sm" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}

            {/* 团队复盘下拉菜单 */}
            <div className="relative">
              <button
                onClick={() => setIsReportMenuOpen(!isReportMenuOpen)}
                onMouseEnter={() => setIsReportMenuOpen(true)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isReportActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                团队复盘
                <ChevronDown className={`w-3 h-3 transition-transform ${isReportMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* 下拉菜单 */}
              {isReportMenuOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50"
                  onMouseLeave={() => setIsReportMenuOpen(false)}
                >
                  {/* 复盘概览入口 */}
                  <Link
                    href="/reports"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600"
                    onClick={() => setIsReportMenuOpen(false)}
                  >
                    <Calendar className="w-4 h-4" />
                    复盘概览
                  </Link>
                  <div className="my-2 border-t border-slate-100" />

                  {/* 按年份分类 */}
                  {Object.entries(reportStructure).map(([year, data]) => (
                    <div key={year}>
                      <div className="px-4 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {year}年
                      </div>
                      {data.quarters.map((quarter) => (
                        <div key={quarter.id}>
                          <div className="px-4 py-1 text-xs font-medium text-slate-500">
                            {quarter.label}
                          </div>
                          {quarter.reports.map((report) => (
                            <Link
                              key={report.id}
                              href={report.href}
                              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-600 pl-8"
                              onClick={() => setIsReportMenuOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                              {report.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="mailto:anakinchen3@gmail.com"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors ml-2"
            >
              <Mail className="w-4 h-4" />
              联系我
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {mainNavItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}

            {/* Mobile 团队复盘菜单 */}
            <div className="border-t border-slate-100 my-2 pt-2">
              <Link
                href="/reports"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  pathname === '/reports'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-5 h-5" />
                团队复盘概览
              </Link>

              {Object.entries(reportStructure).map(([year, data]) => (
                <div key={year} className="mt-2">
                  <div className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {year}年
                  </div>
                  {data.quarters.map((quarter) => (
                    <div key={quarter.id} className="mt-1">
                      <div className="px-3 py-1 text-xs font-medium text-slate-500">
                        {quarter.label}
                      </div>
                      {quarter.reports.map((report) => (
                        <Link
                          key={report.id}
                          href={report.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-600 pl-8"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                          {report.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 my-2 pt-2">
              <a
                href="mailto:anakinchen3@gmail.com"
                className="flex items-center gap-3 px-3 py-2.5 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="w-5 h-5" />
                联系我
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
