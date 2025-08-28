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
    id: 'mcp-server-for-dummies',
    title: 'MCP Server for Dummies',
    excerpt: '',
    content: `
# MCP Server for Dummies

Everyone is chatting up a storm about MCP and the possibilities that it unlocks for the future. What I don't think everyone understands is just how easy it is to automate and _AI-ify_ existing experiences right now. This post walks through how we can take the traditional APIs we already have and create a delightful experiences.

## Example: Interfacing with our CRM

<video 
  src="https://s3.ca-central-1.amazonaws.com/dylanhavelock.com/media/crm_email_list_cursor.webm"
  controls
  muted
  loop
  className="rounded-lg shadow-md"
/>


## How's it work?

All you need is an MCP Client and a thin wrapper around your existing APIs -- the MCP Server. Then we plug the Server into the Client.

You can either use an existing MCP Client, like Claude Desktop or Cursor, or your own application can serve as  the MCP Client.

What's powerful is that you can easily leverage your existing product capabilities to create seemingly AI-native experiences with a relatively small amount of code.

## The details

The following code snippet is the barebones of what you need to AI-ify existing APIs that you have.

~~~
import requests
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("My MCP Server")

@mcp.tool()
def my_mcp_tool():
    """Detailed description about what this tool (in this case your API endpoint) does."""
    
    # The API endpoint you are wrapping
    url = "https://your_api_url.com/api"

    # Fill in the necessary headers and body
    data = {}
    headers = {}

    # Make the API request
    response = requests.post(url, headers=headers, json=data)

    return response.json()

if __name__ == "__main__":
    # Initialize and run the server
    mcp.run(transport='stdio')
~~~

That's all it takes to interface with your own APIs using natural language, assuming you have an MCP Client to plug into ;).

You can see the full code for the Hubspot CRM example here: https://github.com/dhavelock/crm-mcp-server.

The MCP configuration in Cursor looks something like this:
~~~
{
  "mcpServers": {
    "crm-mcp-server": {
      "command": "uv",
      "args": ["--directory", "/absolute/path/to/crm-mcp-server", "run", "crm_mcp_server.py"],
      "env": {
        "HUBSPOT_API_TOKEN": "my-super-secret-hubspot-pat"
      }
    }
  }
}
~~~

## Other considerations

This is of course the simplest possible way to set up an MCP Server and there are other ways to make this better. Key considerations are:
- **Schema Design**: In this example we don't define input parameters to our tool or what the output looks like. Adding this can help with both flexibility and consistency of our tool.
- **Context Sensitivity**: Our current example just dumps all contact info into the context window for the model to handle. That's fine for a small dataset, but when producitonizing this we would want to include pagination, search, and filtering to prevent overwhelming the model.
- **Error Handling**: This is a great to enable the agent to recover gracefully. For example, an error message like "invalid parameter X, expected string" can allow the agent to make a follow up tool call with the corrected input.
- **Security & Access Control**: Ensure proper access controls are in place, especially for destructive API calls. You may want to ensure there is a human-in-the-loop where appropriate in your application.
    `,
    date: '2025-07-24T14:00:00Z',
    tags: ['MCP', 'AI', 'Development'],
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
  },
  {
    id: 'what-am-i-doing',
    title: 'What am I doing here?',
    excerpt: 'Good question...',
    content: `
What am I doing here? 

That’s a good question. Does anyone *really* know what they’re doing anywhere?

All jokes aside, this is a place where I can put my thoughts, share my projects, and write about tech topics I find interesting. It’s not meant to be that serious, so please don’t take it that way.

If you do find anything I write here interesting, feel free to [shoot me a message](https://www.linkedin.com/in/dylan-havelock/) to chat more.
    `,
    date: '2025-06-05T13:00:00Z',
    tags: ['Hello, World'],
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
