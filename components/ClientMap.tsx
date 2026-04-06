'use client'

import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

interface Client {
  name: string
  category: string
  logo: string
  isFeatured?: boolean
  description?: string
}

const clients: Client[] = [
  // 储能 - 重点客户 mango
  { name: 'Mango', category: '储能', logo: '/clients/储能-mango.png', isFeatured: true, description: '户外储能品牌，管理年度预算$2M+' },
  { name: 'Vtoman', category: '储能', logo: '/clients/储能-vtoman.png' },

  // 家居 - 重点客户 chita
  { name: 'Chita', category: '家居', logo: '/clients/家居-chita.png', isFeatured: true, description: '户外家居独立站，月销$100W+' },
  { name: 'Magichome', category: '家居', logo: '/clients/家居-magichome.png', isFeatured: true, description: '家居品牌，从0到1搭建独立站' },
  { name: 'WJS', category: '家居', logo: '/clients/家居-wjs.png' },
  { name: 'Belffin', category: '家居', logo: '/clients/家居-belffin.png' },

  // 户外家居 - 重点客户 domi
  { name: 'Domi', category: '户外家居', logo: '/clients/户外家居-domi.png', isFeatured: true, description: '户外家具品牌，欧洲市场占比40%' },
  { name: 'Kozyard', category: '户外家居', logo: '/clients/户外家居-kozyard.png' },

  // 户外出行 - 重点客户 inmotion, kingbull
  { name: 'Inmotion', category: '户外出行', logo: '/clients/户外出行-inmotion.png', isFeatured: true, description: '电动滑板车品牌，Google Ads账户重构' },
  { name: 'Kingbull', category: '户外出行', logo: '/clients/户外出行-kingbull.png', isFeatured: true, description: 'E-bike品牌，半年10倍增长' },
  { name: 'Gotrax', category: '户外出行', logo: '/clients/户外出行-gotrax.png' },
  { name: 'Navee', category: '户外出行', logo: '/clients/户外出行-navee.png' },
  { name: 'Tezus', category: '户外出行', logo: '/clients/户外出行-tezus.png' },
  { name: 'Velotric', category: '户外出行', logo: '/clients/户外出行-velotric.png' },
  { name: 'Valowave', category: '户外出行', logo: '/clients/户外出行-valowave.png' },

  // 灯光 - 重点客户 shehds
  { name: 'Shehds', category: '灯光', logo: '/clients/灯光-shehds.png', isFeatured: true, description: '舞台灯光品牌，B2B独立站运营' },

  // 科技电子 - 重点客户 jmgo
  { name: 'JMGO', category: '科技电子', logo: '/clients/科技电子-jmgo.png', isFeatured: true, description: '智能投影仪，新品全案营销' },
  { name: 'AWOL', category: '科技电子', logo: '/clients/科技电子-awol.png' },
  { name: 'LaserPecker', category: '科技电子', logo: '/clients/科技电子-laserpecker.png' },
  { name: 'Vividstorm', category: '科技', logo: '/clients/科技-vividstorm.png' },

  // 服饰鞋履
  { name: 'Ancosti', category: '服饰鞋履', logo: '/clients/服饰鞋履-ancosti.png' },
  { name: 'Redtop', category: '服饰鞋履', logo: '/clients/服饰鞋履-redtop.svg' },

  // 小家电
  { name: 'Euhomy', category: '小家电', logo: '/clients/小家电-euhomy.png' },

  // 小工具
  { name: 'Hoto', category: '小工具', logo: '/clients/小工具-hoto.png' },

  // 工具
  { name: 'Workpro', category: '工具', logo: '/clients/工具-workpro.png' },

  // 安防
  { name: 'Aosulife', category: '安防', logo: '/clients/安防-aosulife.png' },
  { name: 'Tapo', category: '安防', logo: '/clients/安防-tapo.png' },

  // 假发
  { name: 'Lavivid', category: '假发', logo: '/clients/假发-lavivid.png' },

  // 儿童手表
  { name: 'imoo', category: '儿童手表', logo: '/clients/儿童手表-imoo.png' },

  // 油画
  { name: 'Mesonart', category: '油画', logo: '/clients/油画-mesonart.png' },
]

const categories = Array.from(new Set(clients.map(c => c.category)))

export default function ClientMap() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('全部')

  const filteredClients = activeCategory === '全部'
    ? clients
    : clients.filter(c => c.category === activeCategory)

  const featuredClients = clients.filter(c => c.isFeatured)

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">服务客户地图</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            深耕跨境品牌出海领域，服务涵盖储能、家居、户外、科技电子等多个高客单价品类
          </p>
        </div>

        {/* Featured Clients - Large Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-400"></div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-violet-600 text-white text-sm rounded-full">
                深度合作
              </span>
              重点合作品牌
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-400"></div>
          </div>

          {/* 第一行 - 4个 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
            {featuredClients.slice(0, 4).map((client) => (
              <button
                key={client.name}
                onClick={() => setSelectedClient(client)}
                className="group relative bg-white rounded-2xl p-5 border-2 border-primary-200 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-100 transition-all duration-300 overflow-hidden"
              >
                {/* 顶部渐变条 */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-violet-500"></div>

                {/* 深度合作标识 */}
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  深度
                </div>

                <div className="aspect-[4/3] relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden p-4 mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="text-center">
                  <p className="font-bold text-slate-800 text-base mb-1">{client.name}</p>
                  <p className="text-xs text-slate-500">{client.category}</p>
                </div>

                {/* Hover 查看更多 */}
                <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    查看详情
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* 第二行 - 3个，居中显示 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {featuredClients.slice(4).map((client) => (
              <button
                key={client.name}
                onClick={() => setSelectedClient(client)}
                className="group relative bg-white rounded-2xl p-5 border-2 border-primary-200 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-100 transition-all duration-300 overflow-hidden"
              >
                {/* 顶部渐变条 */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-violet-500"></div>

                {/* 深度合作标识 */}
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  深度
                </div>

                <div className="aspect-[4/3] relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden p-4 mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="text-center">
                  <p className="font-bold text-slate-800 text-base mb-1">{client.name}</p>
                  <p className="text-xs text-slate-500">{client.category}</p>
                </div>

                {/* Hover 查看更多 */}
                <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    查看详情
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('全部')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === '全部'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            全部
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Clients Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
          {filteredClients.map((client) => (
            <button
              key={client.name}
              onClick={() => setSelectedClient(client)}
              className={`group relative bg-white rounded-lg p-3 border transition-all duration-300 ${
                client.isFeatured
                  ? 'border-primary-300 shadow-sm hover:shadow-md'
                  : 'border-slate-200 hover:border-primary-200'
              }`}
            >
              <div className="aspect-square relative flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden p-2">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-xs text-slate-600 mt-2 truncate">{client.name}</p>
              {client.isFeatured && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full border-2 border-white"></div>
              )}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-primary-600">{clients.length}</div>
            <div className="text-sm text-slate-500 mt-1">服务品牌</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-primary-600">{categories.length}</div>
            <div className="text-sm text-slate-500 mt-1">覆盖品类</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-primary-600">{featuredClients.length}</div>
            <div className="text-sm text-slate-500 mt-1">深度合作</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-primary-600">10x</div>
            <div className="text-sm text-slate-500 mt-1">平均增长</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedClient(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 relative flex items-center justify-center bg-slate-100 rounded-xl p-4 mb-4">
                <img
                  src={selectedClient.logo}
                  alt={selectedClient.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">{selectedClient.name}</h3>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full mb-4">
                {selectedClient.category}
              </span>

              {selectedClient.description && (
                <p className="text-slate-600 text-center leading-relaxed">
                  {selectedClient.description}
                </p>
              )}

              {selectedClient.isFeatured && (
                <div className="mt-4 flex items-center gap-2 text-sm text-amber-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  重点合作品牌
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
