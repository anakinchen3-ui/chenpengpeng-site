'use client'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const dimensions = {
    sm: { container: 'w-8 h-8', text: 'text-lg' },
    md: { container: 'w-10 h-10', text: 'text-2xl' },
    lg: { container: 'w-16 h-16', text: 'text-3xl' }
  }

  const { container, text } = dimensions[size]

  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className={`${container} relative flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* 背景渐变 */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="globeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* 外圆 */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

          {/* 地球/全球化元素 */}
          <ellipse cx="50" cy="50" rx="28" ry="28" fill="none" stroke="url(#globeGradient)" strokeWidth="3" />
          <ellipse cx="50" cy="50" rx="28" ry="14" fill="none" stroke="url(#globeGradient)" strokeWidth="2" />
          <line x1="22" y1="50" x2="78" y2="50" stroke="url(#globeGradient)" strokeWidth="2" />
          <line x1="50" y1="22" x2="50" y2="78" stroke="url(#globeGradient)" strokeWidth="2" />

          {/* 上升箭头/增长 */}
          <path
            d="M35 58 L45 48 L52 55 L65 42"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 42 L65 42 L65 49"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-slate-800 leading-none ${text}`}>
            陈鹏
          </span>
          <span className="text-xs text-slate-500 font-medium tracking-wider">
            PENG CHEN
          </span>
        </div>
      )}
    </div>
  )
}
