import { type MetadataRoute } from 'next'

import { getAllPosts } from '~/data'
import { url } from '~/lib'

export default function sitemap() {
  const staticMap = [
    {
      url: url('/').href,
      lastModified: new Date(),
    },
    {
      url: url('/blog').href,
      lastModified: new Date(),
    },
    {
      url: url('/projects').href,
      lastModified: new Date(),
    },
    {
      url: url('/guestbook').href,
      lastModified: new Date(),
    },
  ] satisfies MetadataRoute.Sitemap

  const posts = getAllPosts()

  const dynamicMap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`).href,
    lastModified: new Date(),
  })) satisfies MetadataRoute.Sitemap

  return [...staticMap, ...dynamicMap]
}
