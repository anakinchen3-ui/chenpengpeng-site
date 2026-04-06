import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '你的名字 - 个人作品集',
  description: '一名热爱技术与产品的创作者，分享技术文章、项目作品和个人思考',
  keywords: ['前端开发', 'React', 'Next.js', '个人博客', '作品集'],
  authors: [{ name: '你的名字' }],
  openGraph: {
    title: '你的名字 - 个人作品集',
    description: '一名热爱技术与产品的创作者',
    type: 'website',
    locale: 'zh_CN'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
