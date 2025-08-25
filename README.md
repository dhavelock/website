# Dylan Havelock - Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features a blog-style posts section, search functionality, and a clean developer-focused design.

## Features

- **Modern Design**: Clean, professional design with dark mode support
- **Blog Posts**: Static blog posts with markdown-like content rendering
- **Search Functionality**: Real-time search through posts by title, content, and tags
- **Responsive Layout**: Mobile-first design that works on all devices
- **Static Generation**: No database required - all content is static
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Fast Performance**: Optimized for speed with static generation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update your personal information in the following files:

1. **Layout** (`src/app/layout.tsx`):
   - Update the title and description in the metadata
   - Change your name in the navigation
   - Update GitHub and LinkedIn URLs

2. **Home Page** (`src/app/page.tsx`):
   - Update the hero section with your name and introduction
   - Modify the featured posts section

3. **About Page** (`src/app/about/page.tsx`):
   - Update your personal story and experience
   - Modify skills and technologies
   - Update contact information

### Adding Posts

Posts are stored in `src/lib/posts.ts`. To add a new post:

1. Add a new post object to the `posts` array
2. Include the following fields:
   - `id`: Unique identifier (used in URL)
   - `title`: Post title
   - `excerpt`: Short description
   - `content`: Full post content (supports basic markdown)
   - `date`: ISO date string
   - `tags`: Array of tags
   - `featured`: Boolean (optional, for featured posts)

Example:
```typescript
{
  id: 'my-new-post',
  title: 'My New Post',
  excerpt: 'A brief description of the post',
  content: `
# My New Post

This is the content of my post. You can use markdown-style formatting:

## Subheading

- List item 1
- List item 2

Regular paragraphs work too.
  `,
  date: '2024-01-20T10:00:00Z',
  tags: ['Technology', 'Development'],
  featured: true
}
```

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in the Tailwind classes
- Typography: Modify font sizes and weights
- Layout: Adjust spacing and grid layouts
- Dark mode: Customize dark mode colors

### Social Links

Update your social media links in:
- Navigation bar (`src/app/layout.tsx`)
- About page (`src/app/about/page.tsx`)
- Home page quick links (`src/app/page.tsx`)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any static hosting platform:

1. Build the project:
```bash
npm run build
```

2. Export static files:
```bash
npm run export
```

3. Deploy the `out` folder to your hosting platform

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── posts/
│   │   ├── page.tsx          # Posts listing page
│   │   └── [id]/
│   │       └── page.tsx      # Individual post page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
└── lib/
    └── posts.ts              # Posts data and utilities
```

## Features in Detail

### Search Functionality

The search feature searches through:
- Post titles
- Post excerpts
- Post content
- Post tags

Search is case-insensitive and updates in real-time as you type.

### Post Rendering

Posts support basic markdown-style formatting:
- Headers (`#`, `##`, `###`)
- Lists (`- `)
- Paragraphs
- Line breaks

### Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Readable typography on all devices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the website, feel free to reach out!
