'use client'

import { useState } from 'react'
import { Copy, Check, Hash, Calendar, Type, QrCode, Calculator } from 'lucide-react'

const tools = [
  {
    id: 'json-formatter',
    name: 'JSON 格式化',
    description: '格式化、验证和压缩 JSON 数据',
    icon: Hash,
    component: JsonFormatter
  },
  {
    id: 'text-counter',
    name: '文本统计',
    description: '统计字数、字符数、行数等',
    icon: Type,
    component: TextCounter
  },
  {
    id: 'date-calculator',
    name: '日期计算',
    description: '计算日期间隔、添加天数',
    icon: Calendar,
    component: DateCalculator
  }
]

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState(tools[0].id)

  const currentTool = tools.find(t => t.id === activeTool)
  const ToolComponent = currentTool?.component

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">实用工具</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          我开发的在线小工具，帮助你提升工作效率
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Tool List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200">
              <h2 className="font-semibold text-slate-900">工具列表</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id)}
                    className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                      activeTool === tool.id
                        ? 'bg-primary-50 text-primary-700'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {tool.description}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Tool Content */}
        <div className="lg:col-span-3">
          {ToolComponent && <ToolComponent />}
        </div>
      </div>
    </div>
  )
}

// JSON 格式化工具
function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
    } catch (e) {
      setError('无效的 JSON 格式')
      setOutput('')
    }
  }

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError('')
    } catch (e) {
      setError('无效的 JSON 格式')
      setOutput('')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">JSON 格式化工具</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            输入 JSON
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="在此粘贴 JSON 数据..."
            className="w-full h-64 p-4 border border-slate-200 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            输出结果
          </label>
          <textarea
            value={output}
            readOnly
            placeholder="格式化后的 JSON..."
            className="w-full h-64 p-4 border border-slate-200 rounded-lg font-mono text-sm resize-none bg-slate-50"
          />
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          onClick={formatJson}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          格式化
        </button>
        <button
          onClick={minifyJson}
          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
        >
          压缩
        </button>
        <button
          onClick={copyToClipboard}
          disabled={!output}
          className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 disabled:opacity-50"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? '已复制' : '复制结果'}
        </button>
      </div>
    </div>
  )
}

// 文本统计工具
function TextCounter() {
  const [text, setText] = useState('')

  const stats = {
    characters: text.length,
    charactersNoSpace: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text ? text.split('\n').length : 0,
    paragraphs: text.trim() ? text.trim().split(/\n\s*\n/).length : 0
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">文本统计工具</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="在此输入文本..."
        className="w-full h-48 p-4 border border-slate-200 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-6"
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: '字符数', value: stats.characters },
          { label: '不含空格', value: stats.charactersNoSpace },
          { label: '单词数', value: stats.words },
          { label: '行数', value: stats.lines },
          { label: '段落数', value: stats.paragraphs }
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 日期计算工具
function DateCalculator() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
  const [endDate, setEndDate] = useState('')
  const [daysToAdd, setDaysToAdd] = useState(30)

  const calculateDiff = () => {
    if (!startDate || !endDate) return null
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = end.getTime() - start.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const calculateFutureDate = () => {
    if (!startDate) return null
    const start = new Date(startDate)
    const future = new Date(start.getTime() + daysToAdd * 24 * 60 * 60 * 1000)
    return future.toISOString().split('T')[0]
  }

  const diff = calculateDiff()
  const futureDate = calculateFutureDate()

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">日期计算工具</h2>

      <div className="space-y-6">
        {/* 日期差计算 */}
        <div className="p-4 bg-slate-50 rounded-lg">
          <h3 className="font-medium text-slate-900 mb-4">计算日期间隔</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                开始日期
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                结束日期
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          {diff !== null && (
            <div className="text-center p-3 bg-primary-50 text-primary-700 rounded-lg">
              相差 <span className="font-bold text-lg">{diff}</span> 天
            </div>
          )}
        </div>

        {/* 日期加减 */}
        <div className="p-4 bg-slate-50 rounded-lg">
          <h3 className="font-medium text-slate-900 mb-4">日期加减</h3>
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                起始日期
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                添加天数
              </label>
              <input
                type="number"
                value={daysToAdd}
                onChange={(e) => setDaysToAdd(Number(e.target.value))}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="text-center p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-sm text-slate-500">结果日期</div>
              <div className="font-bold text-primary-600">{futureDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
