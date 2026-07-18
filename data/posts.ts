// Static blog post data — replaces Sanity CMS
// Matches the Post / PostDetail types from ~/sanity/schemas/post

export interface Post {
  _id: string
  title: string
  slug: string
  mainImage: {
    _ref: string
    asset: {
      url: string
      lqip?: string
      dominant?: {
        background: string
        foreground: string
      }
    }
  }
  publishedAt: string
  description: string
  categories?: string[]
  body: any // eslint-disable-line @typescript-eslint/no-explicit-any
  readingTime: number
  mood: 'happy' | 'sad' | 'neutral'
}

export interface PostDetail extends Post {
  headings: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
  related?: Post[]
}

const posts: PostDetail[] = [
  {
    _id: 'post-1',
    title: '使用 Next.js 14 构建现代博客',
    slug: 'building-modern-blog-with-nextjs-14',
    mainImage: {
      _ref: 'image-1',
      asset: {
        url: 'https://picsum.photos/seed/nextjs/1200/675',
        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABgAFB//EACQQAAEDAwMEAwAAAAAAAAAAAAECAwQABREGEiETMVGRFCJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEh/9oADAMBAAIRAxEAPwB/bbJJmPeINTHYrbWOo6jcQT2GMjPvuKWQdKEkF5SWx44+1XXQq9WgB74nXCjGBuR2PP7WFi6h0s7dZDLNybfdC1FYZVlIOT68VNo//9k=',
        dominant: {
          background: '#1a1a2e',
          foreground: '#e8e8e8',
        },
      },
    },
    publishedAt: '2025-12-15T08:00:00.000Z',
    description:
      '探索 Next.js 14 的新特性，包括 Server Components、App Router 以及如何利用它们构建高性能的现代博客。',
    categories: ['前端开发', 'React'],
    readingTime: 8,
    mood: 'happy',
    body: [
      {
        _type: 'block',
        _key: 'a1',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a1s', text: '前言' }],
      },
      {
        _type: 'block',
        _key: 'a2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a2s',
            text: 'Next.js 14 带来了许多令人兴奋的新特性。App Router 已经稳定，Server Components 成为了默认选项，Partial Prerendering 也开始进入实验阶段。在这篇文章中，我将分享我使用 Next.js 14 构建博客的经验。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'a3',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a3s', text: 'App Router 的优势' }],
      },
      {
        _type: 'block',
        _key: 'a4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a4s',
            text: 'App Router 使用文件系统来定义路由，这让项目的结构更加直观。每个路由文件夹中可以包含 layout.tsx、page.tsx、loading.tsx 等特殊文件，它们各自负责不同的 UI 层级。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'a5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a5s',
            text: '与 Pages Router 相比，App Router 提供了更好的嵌套布局支持、流式渲染（Streaming）以及更灵活的數據獲取方式。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'a6',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'a6s', text: 'Server Components' },
        ],
      },
      {
        _type: 'block',
        _key: 'a7',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a7s',
            text: 'Server Components 让你可以在服务器端渲染组件，减少客户端的 JavaScript 体积。这意味着更快的首屏加载和更好的 SEO。默认情况下，App Router 中的所有组件都是 Server Components。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'a8',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a8s', text: '性能优化实践' }],
      },
      {
        _type: 'block',
        _key: 'a9',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a9s',
            text: '在构建博客时，我特别关注以下几个方面：图片优化使用 next/image、字体优化使用 next/font、以及利用 ISR（Incremental Static Regeneration）来平衡静态生成和动态内容。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'a10',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a10s',
            text: '通过合理的缓存策略和代码分割，博客的 Lighthouse 评分可以达到 95 分以上。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'a11',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a11s', text: '总结' }],
      },
      {
        _type: 'block',
        _key: 'a12',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a12s',
            text: 'Next.js 14 为现代 Web 开发设立了新的标准。它让开发者能够轻松构建高性能、SEO 友好的应用。如果你还没有尝试过 App Router，现在正是最好的时机。',
          },
        ],
      },
    ],
    headings: [
      {
        _type: 'block',
        _key: 'a1',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a1s', text: '前言' }],
      },
      {
        _type: 'block',
        _key: 'a3',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a3s', text: 'App Router 的优势' }],
      },
      {
        _type: 'block',
        _key: 'a6',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'a6s', text: 'Server Components' },
        ],
      },
      {
        _type: 'block',
        _key: 'a8',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a8s', text: '性能优化实践' }],
      },
      {
        _type: 'block',
        _key: 'a11',
        style: 'h2',
        children: [{ _type: 'span', _key: 'a11s', text: '总结' }],
      },
    ],
    related: [],
  },
  {
    _id: 'post-2',
    title: 'Tailwind CSS 设计系统从零搭建指南',
    slug: 'tailwind-css-design-system',
    mainImage: {
      _ref: 'image-2',
      asset: {
        url: 'https://picsum.photos/seed/tailwind/1200/675',
        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABgAFB//EACQQAAEDAwMEAwAAAAAAAAAAAAECAwQABREGEiETMVGRFCJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEh/9oADAMBAAIRAxEAPwB/bbJJmPeINTHYrbWOo6jcQT2GMjPvuKWQdKEkF5SWx44+1XXQq9WgB74nXCjGBuR2PP7WFi6h0s7dZDLNybfdC1FYZVlIOT68VNo//9k=',
        dominant: {
          background: '#0f172a',
          foreground: '#e2e8f0',
        },
      },
    },
    publishedAt: '2025-11-28T10:30:00.000Z',
    description:
      '分享如何基于 Tailwind CSS 构建一个可扩展的设计系统，包括颜色、字体、间距、组件等核心要素的设计思路。',
    categories: ['前端开发', 'CSS'],
    readingTime: 12,
    mood: 'neutral',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'b1s', text: '为什么需要设计系统' },
        ],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b2s',
            text: '设计系统是一套可复用的组件和设计规范的集合。它帮助团队保持一致的设计语言，提高开发效率，减少设计和开发之间的沟通成本。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'b3s', text: 'Tailwind 的配置化优势' },
        ],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b4s',
            text: 'Tailwind CSS 的配置文件 tailwind.config.js 是构建设计系统的绝佳入口。你可以在其中定义颜色调色板、字体族、间距比例、断点等设计令牌（Design Tokens），确保整个应用的一致性。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'b5s', text: '颜色系统' },
        ],
      },
      {
        _type: 'block',
        _key: 'b6',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b6s',
            text: '一个好的颜色系统应该包含主色、辅助色、中性色以及语义化颜色（成功、警告、错误）。Tailwind 允许你扩展默认的颜色调色板，创建符合品牌需求的自定义颜色。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'h2',
        children: [{ _type: 'span', _key: 'b7s', text: '组件化实践' }],
      },
      {
        _type: 'block',
        _key: 'b8',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b8s',
            text: '利用 Tailwind 的 @apply 指令或直接使用工具类组合，可以构建灵活且一致的组件。结合 React 或 Vue 等框架，可以进一步封装成可复用的 UI 组件库。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b9',
        style: 'h2',
        children: [{ _type: 'span', _key: 'b9s', text: '总结' }],
      },
      {
        _type: 'block',
        _key: 'b10',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'b10s',
            text: '设计系统的建设是一个持续迭代的过程。Tailwind CSS 提供了很好的基础，但真正重要的是建立一套适合自己团队的设计规范和组件使用约定。',
          },
        ],
      },
    ],
    headings: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'b1s', text: '为什么需要设计系统' },
        ],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'b3s', text: 'Tailwind 的配置化优势' },
        ],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'b5s', text: '颜色系统' },
        ],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'h2',
        children: [{ _type: 'span', _key: 'b7s', text: '组件化实践' }],
      },
      {
        _type: 'block',
        _key: 'b9',
        style: 'h2',
        children: [{ _type: 'span', _key: 'b9s', text: '总结' }],
      },
    ],
    related: [],
  },
  {
    _id: 'post-3',
    title: 'TypeScript 高级类型技巧与实战',
    slug: 'typescript-advanced-type-patterns',
    mainImage: {
      _ref: 'image-3',
      asset: {
        url: 'https://picsum.photos/seed/typescript/1200/675',
        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABgAFB//EACQQAAEDAwMEAwAAAAAAAAAAAAECAwQABREGEiETMVGRFCJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEh/9oADAMBAAIRAxEAPwB/bbJJmPeINTHYrbWOo6jcQT2GMjPvuKWQdKEkF5SWx44+1XXQq9WgB74nXCjGBuR2PP7WFi6h0s7dZDLNybfdC1FYZVlIOT68VNo//9k=',
        dominant: {
          background: '#0c0a09',
          foreground: '#fafaf9',
        },
      },
    },
    publishedAt: '2025-11-10T14:00:00.000Z',
    description:
      '深入探讨 TypeScript 的高级类型系统，包括条件类型、模板字面量类型、映射类型等在实际项目中的应用。',
    categories: ['前端开发', 'TypeScript'],
    readingTime: 15,
    mood: 'happy',
    body: [
      {
        _type: 'block',
        _key: 'c1',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'c1s', text: 'TypeScript 类型系统的力量' },
        ],
      },
      {
        _type: 'block',
        _key: 'c2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c2s',
            text: 'TypeScript 的类型系统是图灵完备的，这意味着你可以在类型层面实现非常复杂的逻辑。掌握高级类型技巧可以让你写出更安全、更优雅的代码。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c3',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'c3s', text: '条件类型' },
        ],
      },
      {
        _type: 'block',
        _key: 'c4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c4s',
            text: '条件类型允许你根据类型关系来创建新类型。例如 T extends U ? X : Y 这样的语法，在工具类型如 Exclude、Extract 中都有广泛应用。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c5',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'c5s', text: '模板字面量类型' },
        ],
      },
      {
        _type: 'block',
        _key: 'c6',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c6s',
            text: 'TypeScript 4.1 引入的模板字面量类型让你可以在类型层面操作字符串。这在处理事件名称、CSS 属性等场景中特别有用。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c7',
        style: 'h2',
        children: [{ _type: 'span', _key: 'c7s', text: '实战案例' }],
      },
      {
        _type: 'block',
        _key: 'c8',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c8s',
            text: '让我们看一个实际的例子：如何利用映射类型和条件类型创建一个类型安全的 API 客户端。通过推断路径参数、查询参数和响应体，你可以在编译时就发现潜在的错误。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c9',
        style: 'h2',
        children: [{ _type: 'span', _key: 'c9s', text: '注意事项' }],
      },
      {
        _type: 'block',
        _key: 'c10',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'c10s',
            text: '虽然高级类型很强大，但也要注意可读性和编译性能。过于复杂的类型体操可能会让团队成员难以理解和维护。在类型安全和开发体验之间找到平衡是关键。',
          },
        ],
      },
    ],
    headings: [
      {
        _type: 'block',
        _key: 'c1',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'c1s', text: 'TypeScript 类型系统的力量' },
        ],
      },
      {
        _type: 'block',
        _key: 'c3',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'c3s', text: '条件类型' },
        ],
      },
      {
        _type: 'block',
        _key: 'c5',
        style: 'h3',
        children: [
          { _type: 'span', _key: 'c5s', text: '模板字面量类型' },
        ],
      },
      {
        _type: 'block',
        _key: 'c7',
        style: 'h2',
        children: [{ _type: 'span', _key: 'c7s', text: '实战案例' }],
      },
      {
        _type: 'block',
        _key: 'c9',
        style: 'h2',
        children: [{ _type: 'span', _key: 'c9s', text: '注意事项' }],
      },
    ],
    related: [],
  },
  {
    _id: 'post-4',
    title: '我的 2025 年度总结：技术与生活',
    slug: '2025-year-in-review',
    mainImage: {
      _ref: 'image-4',
      asset: {
        url: 'https://picsum.photos/seed/2025review/1200/675',
        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABgAFB//EACQQAAEDAwMEAwAAAAAAAAAAAAECAwQABREGEiETMVGRFCJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEh/9oADAMBAAIRAxEAPwB/bbJJmPeINTHYrbWOo6jcQT2GMjPvuKWQdKEkF5SWx44+1XXQq9WgB74nXCjGBuR2PP7WFi6h0s7dZDLNybfdC1FYZVlIOT68VNo//9k=',
        dominant: {
          background: '#1c1917',
          foreground: '#f5f5f4',
        },
      },
    },
    publishedAt: '2025-12-31T16:00:00.000Z',
    description:
      '回顾 2025 年，我在技术上的成长、旅行中的见闻、以及对未来的一些思考和规划。',
    categories: ['生活', '年度总结'],
    readingTime: 10,
    mood: 'happy',
    body: [
      {
        _type: 'block',
        _key: 'd1',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd1s', text: '开篇' },
        ],
      },
      {
        _type: 'block',
        _key: 'd2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'd2s',
            text: '2025 年是我收获最多的一年。从技术栈的更新迭代到个人生活的方方面面，这一年都让我感触良多。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'd3',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd3s', text: '技术成长' },
        ],
      },
      {
        _type: 'block',
        _key: 'd4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'd4s',
            text: '今年我深入学习了 Rust 和 WebAssembly，也开始接触 AI 应用开发。在全栈开发的路上，我对系统设计和架构有了更深的理解。开源社区依然是我学习的最大源泉。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'd5',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd5s', text: '旅行见闻' },
        ],
      },
      {
        _type: 'block',
        _key: 'd6',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'd6s',
            text: '暑假期间我去了川西旅行，从成都出发，经过康定、新都桥、稻城亚丁。那片高原的蓝天、雪山和草甸让我至今难忘。旅行不仅是地理上的移动，更是心灵上的放松。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'd7',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd7s', text: '展望 2026' },
        ],
      },
      {
        _type: 'block',
        _key: 'd8',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'd8s',
            text: '新的一年，我希望能够在 AI 和 Web 开发的交叉领域做出一些有意义的尝试。也希望继续保持对生活的热情，去更多的地方，拍更多的照片，写更多的文章。',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'd9',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'd9s',
            text: '感谢每一位读到这里的你。愿新的一年，我们都能成为更好的自己。',
          },
        ],
      },
    ],
    headings: [
      {
        _type: 'block',
        _key: 'd1',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd1s', text: '开篇' },
        ],
      },
      {
        _type: 'block',
        _key: 'd3',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd3s', text: '技术成长' },
        ],
      },
      {
        _type: 'block',
        _key: 'd5',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd5s', text: '旅行见闻' },
        ],
      },
      {
        _type: 'block',
        _key: 'd7',
        style: 'h2',
        children: [
          { _type: 'span', _key: 'd7s', text: '展望 2026' },
        ],
      },
    ],
    related: [],
  },
]

export function getAllPosts(): PostDetail[] {
  return posts
}

export function getPostBySlug(slug: string): PostDetail | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getLatestPosts(limit: number = 5): Post[] {
  return posts.slice(0, limit)
}
