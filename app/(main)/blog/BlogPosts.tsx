import { getLatestPosts } from '~/data'

import { BlogPostCard } from './BlogPostCard'

export function BlogPosts({ limit = 5 }) {
  const posts = getLatestPosts(limit)
  const views = posts.map(() => Math.floor(Math.random() * 1000))

  return (
    <>
      {posts.map((post, idx) => (
        <BlogPostCard post={post} views={views[idx] ?? 0} key={post._id} />
      ))}
    </>
  )
}
