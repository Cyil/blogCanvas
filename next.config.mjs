/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    taint: true,
  },

  redirects() {
    return [
      {
        "source": "/twitter",
        "destination": "https://x.com/chenyme",
        "permanent": true
      },
      {
        "source": "/x",
        "destination": "https://x.com/chenyme",
        "permanent": true
      },
      {
        "source": "/youtube",
        "destination": "https://youtube.com/@chenyme",
        "permanent": true
      },
      {
        "source": "/tg",
        "destination": "https://t.me/chenyme",
        "permanent": true
      },
      {
        "source": "/linkedin",
        "destination": "https://www.linkedin.com/in/chenyme/",
        "permanent": true
      },
      {
        "source": "/github",
        "destination": "https://github.com/chenyme",
        "permanent": true
      },
      {
        "source": "/bilibili",
        "destination": "https://space.bilibili.com/504270254",
        "permanent": true
      }
    ]
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig
