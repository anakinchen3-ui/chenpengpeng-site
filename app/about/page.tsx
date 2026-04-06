'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Download, Briefcase, GraduationCap, Award, Target, Users, TrendingUp, BarChart3, Globe } from 'lucide-react'

const skills = [
  { category: '核心能力', items: ['独立站全生命周期管理', '高客单价品类操盘', '整合营销策略', '数据驱动增长', '用户生命周期运营', '从0到1冷启动'] },
  { category: '广告与流量', items: ['广告预算统筹', '流量与转化优化', '全渠道营销整合', '欧美市场深耕', '红人种草营销', '品牌出海战略'] },
  { category: '团队与管理', items: ['团队搭建与管理', '跨部门协作', '精细化运营', 'OKR目标管理', '人才培养', '项目统筹'] }
]

const tools = [
  { category: '核心工具', items: ['Google Analytics 4 (认证)', 'Shopify', 'Meta Ads Manager', 'Google Ads', 'Klaviyo'] },
  { category: '数据与调研', items: ['Google Looker Studio', 'SEMrush', 'Similarweb', 'Google Trends'] },
  { category: '协作平台', items: ['飞书', 'Google Workspace', 'Canva'] }
]

const experiences = [
  {
    title: '项目经理（独立站运营管理）',
    company: '深圳艾维品牌营销有限公司',
    period: '2022.04 - 至今',
    location: '深圳',
    summary: '作为核心业务线负责人，带领5-7人团队，为头部品牌客户提供独立站增长服务，直接对GMV、ROI及品牌增长负责。',
    achievements: [
      {
        title: '战略规划与体系搭建',
        points: [
          '主导品牌出海"三步诊断法"，综合运用Google Trends、Similarweb进行市场大盘与竞品热度分析，借助SEMrush反查竞品流量结构与广告策略',
          '从0到1设计并搭建以GA4+Shopify为核心的数据中枢，建立6大核心看板，数据复盘效率提升70%以上',
          '建立产品分级运营机制，将产品划分为主推、次推、清仓三类，匹配差异化预算权重与营销打法'
        ]
      },
      {
        title: '营销策略与爆品孵化',
        points: [
          '制定"日常养量+节点爆发"年度营销日历，欧洲独立站销售占比提升至40%以上',
          '跑通"曝光+转化"广告分层模型，新品发布当月销售500单（目标200），销售额$130W，全年销售$600W',
          '主导户外家居独立站从0到1搭建，3个月内月销售额突破$100W+',
          '运用Klaviyo搭建EDM营销体系，构建分层触达策略，提升用户LTV与复购率'
        ]
      },
      {
        title: '大促策划与预算管控',
        points: [
          '统筹头部客户黑五、网一全案，投影机品牌Cyber Week销售额增长300%（$70K→$240K）',
          '管理年度$20M+广告预算，大促单日消耗峰值$150K精准调控，获客成本CPC控制在$1-2.5（低于行业均值$1.5-3）',
          '引入双周OKR对齐机制，跨团队需求交付准时率提升40%'
        ]
      },
      {
        title: '精细化运营与团队建设',
        points: [
          '运用GA4搭建"流量-转化-复购"三维漏斗分析模型，优化结账流程使CVR从0.3%提升至0.37%（客单价$1500）',
          '利用Google Sheets+Supermetrics搭建自动化日报系统，每日节省1.5小时人工处理时间',
          '直接管理5-7人优化师团队，推动2位成员6个月内晋升，打造品牌服务小组'
        ]
      }
    ]
  }
]

const projects = [
  {
    title: '户外家居/雕刻机品牌独立站运营',
    tags: ['0-1搭建', '欧洲市场', '高客单价'],
    description: '主导户外家居（亚马逊Best Seller）及激光雕刻机品类独立站0-1搭建与市场拓荒，构建欧洲本地化营销漏斗，该区域销售占比突破40%，3个月内月销售额突破$100W+'
  },
  {
    title: '智能投影仪品牌新品上市推广',
    tags: ['新品全案', '爆款打造', '大促爆发'],
    description: '深度运作Google/Meta/GMC北美流量渠道，负责头部投影机品牌新品全案，极短周期内打造为畅销爆款，大促销售环比爆发300%'
  },
  {
    title: '运动耳机品牌Google Ads账户重构',
    tags: ['账户优化', '预算拓盘', 'ROI达标'],
    description: '重构头部运动耳机品牌Google Ads账户矩阵，统筹北美渠道投放策略。在确保ROAS达标前提下，将核心广告日均预算规模化拓盘150%以上'
  },
  {
    title: '户外品牌全渠道营销',
    tags: ['DTC品牌', '全渠道', '10倍增长'],
    description: '负责北美及全球市场DTC品牌全渠道营销，2023年起全面接管户外品牌营销大盘，通过精细化渠道组合与用户生命周期管理，实现线上年度增长超10倍'
  },
  {
    title: '户外安防品牌增长破局',
    tags: ['受众重构', '转化优化', '规模利润双增'],
    description: '精准重构受众漏斗并优化产品结构，通过精细化用户分层与差异化投放策略。半年内实现月销售额10倍增长，客单价与转化率双增30%'
  }
]

const education = [
  {
    degree: '生态学（本科）',
    school: '南京信息工程大学（双一流）',
    period: '2015.09 - 2019.06'
  }
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('experience')

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary-600 to-violet-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Avatar */}
          <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-4xl font-bold border-2 border-white/30">
            陈
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">陈鹏 <span className="text-white/80 text-xl font-normal">Peng Chen</span></h1>
            <p className="text-primary-100 text-lg mb-4">资深跨境品牌独立站操盘手 | 4年出海经验</p>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                <MapPin className="w-4 h-4" />
                深圳
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                统招本科 | 29岁
              </span>
              <a href="mailto:anakinchen3@gmail.com" className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
                anakinchen3@gmail.com
              </a>
              <a href="tel:13276675516" className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
                13276675516
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary-600" />
          个人概述
        </h2>
        <p className="text-slate-600 leading-relaxed">
          资深跨境品牌独立站操盘手，4年专注高客单价品类出海，兼具从0到1冷启动与规模化增长的双重视野。擅长以生意全局视角统筹运营，将前端流量获取与后端商品定价、利润管理协同闭环，追求品牌健康度与规模的双重增长。
        </p>
        <p className="text-slate-600 leading-relaxed mt-3">
          精于整合红人种草、SEM收割、品牌广告的组合拳，为户外储能、智能家电等品类打造差异化增长路径。具备数据驱动的精细化运营能力，善于构建用户生命周期管理体系，提升转化与复购效率。拥有从0到1搭建并管理5-7人团队的经验，注重梯队建设与效能提升，致力于驱动品牌在海外市场的可持续增长。
        </p>
      </div>

      {/* Skills Matrix */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary-600" />
          能力矩阵
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-primary-50 text-primary-700 text-sm rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-slate-200 mb-8">
        <div className="flex border-b border-slate-200">
          {[
            { id: 'experience', label: '工作经历', icon: Briefcase },
            { id: 'projects', label: '核心项目', icon: TrendingUp },
            { id: 'tools', label: '技术能力', icon: BarChart3 },
            { id: 'education', label: '教育经历', icon: GraduationCap }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="p-6">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6">{exp.summary}</p>

                  <div className="space-y-5">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          {achievement.title}
                        </h4>
                        <ul className="space-y-2">
                          {achievement.points.map((point, pidx) => (
                            <li key={pidx} className="text-slate-600 text-sm pl-4 relative">
                              <span className="absolute left-0 text-primary-400">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-primary-100 text-primary-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div className="grid md:grid-cols-3 gap-4">
              {tools.map((toolGroup) => (
                <div key={toolGroup.category} className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-slate-900 mb-3">{toolGroup.category}</h3>
                  <ul className="space-y-2">
                    {toolGroup.items.map((tool) => (
                      <li key={tool} className="text-slate-600 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start gap-4 bg-slate-50 rounded-lg p-5">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{edu.degree}</h3>
                    <p className="text-primary-600">{edu.school}</p>
                    <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
