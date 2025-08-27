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
  },
  {
    id: 'thoughts-on-vibe-coding',
    title: 'Thoughts on Vibe Coding',
    excerpt: 'My personal tips and tricks in the world of \~vibe\~ coding.',
    content: `
# Thoughts on Vibe Coding

“If you don’t learn to use AI, you’ll be replaced by AI”. \- Every CEO in 2025, probably.

While I have no idea if or when that will happen, in case that statement does come to fruition I’ve been on a quest to make sure I don’t get replaced. One of the first bits of AI I’ve been using in my day-to-day is Cursor, among many other coding assistants I’ve played around with. I was hooked instantly and after burning through the free trial I now, somewhat begrudgingly, fork over twenty bucks a month for their Pro plan. In exchange, I am more productive coding than I ever have been before. Not to mention, it’s the most fun I’ve had coding in years. That praise isn’t to say it’s all been rainbows and unicorns, there are definitely a few lessons I’ve learned. That’s what this post is about. 

### 1. Launch, Then Eject

Pure vibe coding is amazing for liftoff. Want to spin up a prototype app or test an idea quickly? Perfect. You can be live in minutes without writing a single line of code.

But once your project is actually up and running, things change. If you just want to update a button label, don’t bother asking Claude – just edit the code yourself. It’s like calling a contractor to hang a picture frame. It takes longer, costs more money, and probably won’t be *exactly* how you want it.

This is also why you **still need to understand the code**. You don’t have to write every line, but you should know where things live and how they work. Because when something breaks (and it will), you’ll need to debug – not play twenty questions with Cursor. 

### 2. Be Specific

Ambiguity is your enemy. Your instructions will almost always be obeyed – that is not the problem. The problem is when you leave room for interpretation, the agent will fill in the blanks differently than you imagined in your head.

When you need to generate a big feature or entire application, you are best off writing a description in plain English of what you are trying to achieve and within the same prompt pair list specific instructions and requirements for how you want it to behave. 

If you don’t, you will have to prompt the agent to go in and make retroactive changes which takes longer and is more error prone. The more context and requirements you can give up front, the more successful you will be.

### 3. Intent vs. Implementation

You want to be clear about **what** your app should do, but not overly prescriptive about **how** it should do it.

Sure, pick the tech stack up front – you don’t want to be stuck with a Rust web server if you don’t know Rust – but then let the AI handle the scaffolding. Otherwise you’re basically back to hand-holding a junior dev, and wasn’t the point of vibe coding to *not* stress about that?

What you do need to do is put your PM hat on. What outcomes are trying to drive for our user? What are the key journeys they should take through our product? What does the customer really need? Focus on clearly translating the answers to these questions into your prompts.

I’ve had success with this format, which all draws from the "be specific" point:

~~~
A few sentences about what the app should do, how the user should interact with, and high level use cases the app accomplishes.
Here are additional requirements:
- The app should be written in TypeScript, use a monogodb for any database needs, and should be dockerized.
- Users should be able to create accounts and login.
- Users should have to verify their emails.
- There should be three main sections to the web app: home page, votes page, and an admin page.
- On the votes page, users should be able to...
~~~

You get the idea.

### **Other Survival Tips**

* **Refactor as you go.** Don’t wait until you’re buried in spaghetti. You’ll need to debug when things break.
* **Commit often.** You’re only one bad prompt from a doom loop of errors.
* **Control the scope.** Be explicit: “give me a function,” not “give me an app.”
* **Security matters.** AI doesn’t (yet) care about OWASP. Use tools like Snyk to catch vulnerabilities.  
* **Models matter**. Just use Claude 4 Sonnet (as of June 2025). I’ve tried the others. They aren’t as good.

Given the rate at which AI-powered dev tools are improving, I have a nagging suspicion that this post will age poorly. In the next twelve months I’m sure there will be improvements to the models and IDEs that make these tips obsolete. Be specific? No way\! In the future there may be no need to be – the IDE will integrate with your GitHub account to look at every line of code you’ve ever written and learn your exact preferences and taste. Who knows. Heck, it’s only been half a year since MCP was announced and at this point you would think it’s one of the fundamental protocols of the internet. Since I can’t predict the future, for now these are the best practices I’ll be rolling with as I continue my ~ vibe coding ~ journey.✌️
    `,
    date: '2025-06-12T12:32:00Z',
    tags: ['Best Practices', 'AI', 'Development'],
    featured: true
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
