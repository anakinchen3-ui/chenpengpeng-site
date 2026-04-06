import Link from 'next/link'
import { Github, Twitter, Mail, Linkedin } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:your.email@example.com', icon: Mail, label: 'Email' }
]

const footerLinks = [
  {
    title: '导航',
    links: [
      { label: '首页', href: '/' },
      { label: '作品集', href: '/portfolio' },
      { label: '博客', href: '/blog' },
      { label: '工具', href: '/tools' }
    ]
  },
  {
    title: '资源',
    links: [
      { label: '关于我', href: '/about' },
      { label: '简历下载', href: '/resume.pdf' },
      { label: 'RSS订阅', href: '/rss.xml' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="font-bold text-white">你的名字</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              一名热爱技术与产品的创作者，致力于构建优雅的用户体验和实用的工具。
              欢迎交流技术与创意！
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
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
            © {new Date().getFullYear()} 你的名字. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
