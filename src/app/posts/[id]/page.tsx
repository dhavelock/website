import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import { getPostById, formatDate } from '@/lib/posts'

interface PostPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params
  const post = getPostById(id)

  if (!post) {
    notFound()
  }

  // Custom components for ReactMarkdown to maintain styling
  const components: Components = {
    h1: ({ children, ...props }) => (
      <h1 {...props} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 {...props} className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 {...props} className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">{children}</h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 {...props} className="text-lg font-semibold text-gray-900 dark:text-white mt-3 mb-2">{children}</h4>
    ),
    h5: ({ children, ...props }) => (
      <h5 {...props} className="text-base font-semibold text-gray-900 dark:text-white mt-2 mb-1">{children}</h5>
    ),
    h6: ({ children, ...props }) => (
      <h6 {...props} className="text-sm font-semibold text-gray-900 dark:text-white mt-2 mb-1">{children}</h6>
    ),
    p: ({ children, ...props }) => (
      <p {...props} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children, ...props }) => (
      <ul {...props} className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">{children}</ul>
    ),
    ol: ({ children, ...props }) => (
      <ol {...props} className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">{children}</ol>
    ),
    li: ({ children, ...props }) => (
      <li {...props} className="text-gray-700 dark:text-gray-300">{children}</li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote {...props} className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 mb-4">{children}</blockquote>
    ),
    code: ({ children, className, ...props }) => {
      const isInline = !className
      if (isInline) {
        return <code {...props} className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
      }
      return (
        <code {...props} className="block bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm font-mono overflow-x-auto">
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }) => (
      <pre {...props} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
    ),
    a: ({ href, children, ...props }) => (
      <a {...props} href={href} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    img: ({ src, alt, ...props }) => (
      <img {...props} src={src} alt={alt} className="max-w-full h-auto rounded-lg shadow-md my-4" />
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-4">
        <table {...props} className="min-w-full border border-gray-300 dark:border-gray-600">{children}</table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead {...props} className="bg-gray-50 dark:bg-gray-700">{children}</thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody {...props} className="divide-y divide-gray-300 dark:divide-gray-600">{children}</tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr {...props} className="hover:bg-gray-50 dark:hover:bg-gray-600">{children}</tr>
    ),
    th: ({ children, ...props }) => (
      <th {...props} className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td {...props} className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">
        {children}
      </td>
    ),
    hr: (props) => <hr {...props} className="border-gray-300 dark:border-gray-600 my-8" />,
    strong: ({ children, ...props }) => (
      <strong {...props} className="font-semibold text-gray-900 dark:text-white">{children}</strong>
    ),
    em: ({ children, ...props }) => (
      <em {...props} className="italic text-gray-800 dark:text-gray-200">{children}</em>
    ),
    del: ({ children, ...props }) => (
      <del {...props} className="line-through text-gray-500 dark:text-gray-400">{children}</del>
    ),
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Posts */}
        <div className="mb-8">
          <Link 
            href="/posts"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Posts
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              {post.featured && (
                <span className="ml-4 px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={components}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link 
            href="/posts"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Posts
          </Link>
          
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Back to Home
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
