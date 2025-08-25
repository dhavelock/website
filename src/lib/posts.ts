export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: 'building-ai-powered-applications',
    title: 'Building AI-Powered Applications: Lessons Learned',
    excerpt: 'My journey building AI applications and the key insights I\'ve gained along the way.',
    content: `
# Building AI-Powered Applications: Lessons Learned

Building AI-powered applications has been an incredible journey filled with both challenges and breakthroughs. In this post, I'll share the key lessons I've learned while developing AI applications.

## The Importance of Data Quality

One of the most critical aspects of AI development is data quality. Garbage in, garbage out - this principle holds especially true in AI applications. I've found that spending time on data preprocessing and validation upfront saves countless hours of debugging later.

## User Experience Matters

AI applications need to be intuitive and user-friendly. Users shouldn't need to understand the underlying AI to benefit from it. I've learned to focus on creating seamless experiences that hide the complexity of AI while delivering clear value.

## Iterative Development

AI development is inherently iterative. Models need to be trained, tested, and refined continuously. I've adopted a rapid prototyping approach that allows for quick experimentation and validation of ideas.

## Monitoring and Observability

Once deployed, AI applications require careful monitoring. I've implemented comprehensive logging and monitoring systems to track model performance and user interactions.

## The Future of AI Development

As AI technology continues to evolve, I'm excited about the possibilities. The key is to stay curious, keep learning, and always focus on solving real problems for real users.
    `,
    date: '2024-01-15T10:30:00Z',
    tags: ['AI', 'Development', 'Machine Learning'],
    featured: true
  },
  {
    id: 'modern-web-development-stack',
    title: 'My Modern Web Development Stack for 2024',
    excerpt: 'A comprehensive overview of the tools and technologies I use for building modern web applications.',
    content: `
# My Modern Web Development Stack for 2024

After years of experimenting with different technologies, I've settled on a modern web development stack that balances productivity, performance, and maintainability.

## Frontend Framework: Next.js

Next.js has become my go-to framework for React applications. The combination of server-side rendering, static generation, and excellent developer experience makes it perfect for most projects.

## Styling: Tailwind CSS

Tailwind CSS has revolutionized how I approach styling. The utility-first approach, combined with excellent documentation and community support, makes it incredibly efficient.

## Type Safety: TypeScript

TypeScript is non-negotiable for any serious project. The type safety it provides catches errors early and makes refactoring much safer.

## State Management: Zustand

For state management, I prefer Zustand over Redux for its simplicity and minimal boilerplate. It's perfect for most applications and scales well.

## Database: Prisma + PostgreSQL

Prisma provides an excellent developer experience for database operations, while PostgreSQL offers the reliability and features I need.

## Deployment: Vercel

Vercel's seamless integration with Next.js and excellent performance make it my preferred deployment platform.

## Testing: Vitest + Testing Library

For testing, I use Vitest for its speed and Testing Library for its focus on testing user behavior rather than implementation details.

This stack has served me well across various projects, from small personal sites to larger applications.
    `,
    date: '2024-01-10T14:20:00Z',
    tags: ['Web Development', 'Next.js', 'TypeScript'],
    featured: true
  },
  {
    id: 'effective-code-review-practices',
    title: 'Effective Code Review Practices for Engineering Teams',
    excerpt: 'Best practices I\'ve developed for conducting and participating in code reviews that actually improve code quality.',
    content: `
# Effective Code Review Practices for Engineering Teams

Code reviews are one of the most important practices in software development, yet they're often done poorly. Here are the practices I've found most effective.

## Set Clear Expectations

Before starting a review, ensure everyone understands the goals. Code reviews should focus on:
- Code quality and maintainability
- Security vulnerabilities
- Performance considerations
- Adherence to team standards

## Use a Checklist

I've found that using a consistent checklist helps ensure nothing is missed:
- [ ] Does the code solve the intended problem?
- [ ] Are there any obvious bugs or edge cases?
- [ ] Is the code readable and well-documented?
- [ ] Are there any security concerns?
- [ ] Does the code follow team conventions?

## Provide Constructive Feedback

Feedback should be specific, actionable, and kind. Instead of "this is wrong," try "consider using X pattern here because Y."

## Review in Small Chunks

Large pull requests are harder to review effectively. I try to keep changes focused and manageable.

## Automate What You Can

Use tools like ESLint, Prettier, and automated tests to catch common issues before review.

## Follow Up

Code reviews shouldn't end when the PR is merged. Follow up to ensure feedback was understood and applied correctly.

These practices have significantly improved the quality of code in teams I've worked with.
    `,
    date: '2024-01-05T09:15:00Z',
    tags: ['Code Review', 'Best Practices', 'Team Collaboration'],
    featured: false
  }
];

export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured);
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id);
}

export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
