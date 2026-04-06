import Link from 'next/link'
import { Mail, Phone, MapPin, FileText } from 'lucide-react'
import Logo from '@/components/Logo'

const footerLinks = [
  {
    title: '导航',
    links: [
      { label: '首页', href: '/' },
      { label: '关于我', href: '/about' },
      { label: '团队复盘', href: '/reports' }
    ]
  },
  {
    title: '联系方式',
    links: [
      { label: 'anakinchen3@gmail.com', href: 'mailto:anakinchen3@gmail.com' },
      { label: '13276675516', href: 'tel:13276675516' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo size="md" showText={true} />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              资深跨境品牌独立站操盘手，4年专注高客单价品类出海，
              致力于驱动品牌在海外市场的可持续增长。
            </p>
            <div className="space-y-2 text-sm">
              <a href="mailto:anakinchen3@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                anakinchen3@gmail.com
              </a>
              <a href="tel:13276675516" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                13276675516
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                深圳
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} 陈鹏 Peng Chen. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            跨境品牌独立站操盘手
          </p>
        </div>
      </div>
    </footer>
  )
}
