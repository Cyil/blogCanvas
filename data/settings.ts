// Static settings data — replaces Sanity CMS getSettings()

export interface Project {
  _id: string
  name: string
  url: string
  description: string
  icon: {
    _ref: string
    asset: {
      url: string
    }
  }
}

export interface ResumeEntry {
  company: string
  title: string
  start: string
  end?: string | null
  logo: string
}

export interface Settings {
  projects: Project[]
  heroPhotos: string[]
  resume: ResumeEntry[]
}

const settings: Settings = {
  heroPhotos: [
    'https://picsum.photos/seed/photo1/500/500',
    'https://picsum.photos/seed/photo2/500/500',
    'https://picsum.photos/seed/photo3/500/500',
    'https://picsum.photos/seed/photo4/500/500',
    'https://picsum.photos/seed/photo5/500/500',
    'https://picsum.photos/seed/photo6/500/500',
  ],
  projects: [
    {
      _id: 'proj-1',
      name: 'BlogCanvas',
      url: 'https://github.com/Chenyme/blogCanvas',
      description: '一个极简、高性能的个人博客系统，基于 Next.js 14 和 Tailwind CSS 构建，支持暗色模式和 RSS 订阅。',
      icon: {
        _ref: 'icon-1',
        asset: {
          url: 'https://picsum.photos/seed/icon1/100/100',
        },
      },
    },
    {
      _id: 'proj-2',
      name: 'AAVT',
      url: 'https://github.com/Chenyme/AAVT',
      description: '自动音频视频转录工具，利用 Whisper 模型将音视频内容转换为文字，支持多种输出格式。',
      icon: {
        _ref: 'icon-2',
        asset: {
          url: 'https://picsum.photos/seed/icon2/100/100',
        },
      },
    },
    {
      _id: 'proj-3',
      name: 'OaiT',
      url: 'https://github.com/Chenyme/OaiT',
      description: 'OpenAI 翻译工具，提供高质量的文本翻译服务，支持多语言互译和批量处理。',
      icon: {
        _ref: 'icon-3',
        asset: {
          url: 'https://picsum.photos/seed/icon3/100/100',
        },
      },
    },
  ],
  resume: [
    {
      company: '某科技大学',
      title: '计算机科学与技术 · 本科',
      start: '2022',
      end: null,
      logo: 'https://picsum.photos/seed/logo1/100/100',
    },
    {
      company: 'Open Source Community',
      title: '开源贡献者',
      start: '2023',
      end: null,
      logo: 'https://picsum.photos/seed/logo2/100/100',
    },
    {
      company: '某科技公司',
      title: '前端开发实习生',
      start: '2024',
      end: '2025',
      logo: 'https://picsum.photos/seed/logo3/100/100',
    },
  ],
}

export function getSettings(): Settings {
  return settings
}
