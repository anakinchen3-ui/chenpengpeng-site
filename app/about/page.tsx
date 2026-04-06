import Image from 'next/image'
import Link from 'next/link'
import { Mail, Github, Twitter, MapPin, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react'

const skills = [
  { category: '前端开发', items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS'] },
  { category: '后端开发', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: '工具 & 其他', items: ['Git', 'Docker', 'AWS', 'Figma', 'Notion'] }
]

const experiences = [
  {
    title: '高级前端工程师',
    company: '某知名互联网公司',
    period: '2022 - 至今',
    description: '负责核心产品的前端架构设计和开发，带领 5 人团队完成多个重要项目'
  },
  {
    title: '前端开发工程师',
    company: '创业公司',
    period: '2020 - 2022',
    description: '从零搭建产品前端架构，实现高性能的电商后台管理系统'
  },
  {
    title: 'Web 开发实习生',
    company: '科技公司',
    period: '2019 - 2020',
    description: '参与企业官网和营销页面开发，学习现代前端开发流程'
  }
]

const education = [
  {
    degree: '计算机科学学士',
    school: '某某大学',
    period: '2016 - 2020',
    description: '主修软件工程，辅修产品设计，GPA 3.8/4.0'
  }
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Avatar */}
          <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-violet-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            你
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">你的名字</h1>
            <p className="text-lg text-primary-600 font-medium mb-4">
              全栈开发工程师 · 产品设计师
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500 mb-6">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                中国，上海
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                your.email@example.com
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                5 年工作经验
              </span>
            </div>

            <div className="flex justify-center md:justify-start gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-4 h-10 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                联系我
              </a>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8 pt-8 border-t border-slate-100">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">关于我</h2>
          <p className="text-slate-600 leading-relaxed">
            我是一名热爱技术与设计的全栈开发工程师，拥有 5 年的 Web 开发经验。
            专注于构建高性能、用户友好的 Web 应用，擅长 React 生态系统和现代前端工程化。
            同时，我也关注产品设计和用户体验，相信好的技术应该服务于解决真实问题。
            在工作之余，我喜欢写技术博客、参与开源项目，以及探索新的技术领域。
          </p>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-primary-600" />
          技能栈
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary-600" />
          工作经历
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                <span className="text-sm text-primary-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-slate-500 font-medium mb-2">{exp.company}</p>
              <p className="text-slate-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary-600" />
          教育背景
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
                <span className="text-sm text-primary-600 font-medium">{edu.period}</span>
              </div>
              <p className="text-slate-500 font-medium mb-2">{edu.school}</p>
              <p className="text-slate-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
