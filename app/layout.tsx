import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '陈鹏 Peng Chen - 跨境品牌独立站操盘手',
  description: '资深跨境品牌独立站操盘手，4年专注高客单价品类出海，兼具从0到1冷启动与规模化增长的双重视野。管理年度$20M+广告预算，带领5-7人团队实现品牌年度10倍+增长。',
  keywords: ['跨境电商', '独立站', '品牌出海', 'DTC品牌', 'Shopify', 'Google Ads', 'Meta Ads', '海外营销'],
  authors: [{ name: '陈鹏' }],
  openGraph: {
    title: '陈鹏 Peng Chen - 跨境品牌独立站操盘手',
    description: '4年专注高客单价品类出海，管理$20M+年度预算，带领团队实现品牌10倍+增长',
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
