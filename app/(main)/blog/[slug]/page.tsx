import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogPostPage } from '~/app/(main)/blog/BlogPostPage'
import { getPostBySlug } from '~/data'

export const generateMetadata = ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  const { title, description, mainImage } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: mainImage.asset.url,
        },
      ],
      type: 'article',
    },
    twitter: {
      images: [
        {
          url: mainImage.asset.url,
        },
      ],
      title,
      description,
      card: 'summary_large_image',
      site: '@chenyme',
      creator: '@chenyme',
    },
  } satisfies Metadata
}

export default function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  const views = 30578
  const reactions = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 50000)
  )
  const relatedViews: number[] = []

  return (
    <BlogPostPage
      post={post}
      views={views}
      relatedViews={relatedViews}
      reactions={reactions}
    />
  )
}
