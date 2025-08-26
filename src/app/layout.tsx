import type { Metadata } from 'next'
import { Inter, Roboto, Open_Sans, Poppins, Montserrat, JetBrains_Mono, Fira_Code, Source_Code_Pro, IBM_Plex_Mono, Space_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

// Choose one of these font combinations:

// Option 1: Modern Tech Look (Inter - current)
const inter = Inter({ subsets: ['latin'] })

// Option 2: Clean & Professional (Roboto)
// const roboto = Roboto({ 
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'] 
// })

// Option 3: Friendly & Readable (Open Sans)
// const openSans = Open_Sans({ 
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'] 
// })

// Option 4: Modern & Elegant (Poppins)
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

// Option 5: Professional & Clean (Montserrat)
// const montserrat = Montserrat({ 
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'] 
// })

// MONOSPACED FONT OPTIONS (Great for developer websites):

// Option 6: JetBrains Mono (Excellent for code, very readable)
const jetbrainsMono = JetBrains_Mono({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

// Option 7: Fira Code (Great for code, includes ligatures)
const firaCode = Fira_Code({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

// Option 8: Source Code Pro (Adobe's monospace font)
const sourceCodePro = Source_Code_Pro({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

// Option 9: IBM Plex Mono (Professional, clean)
const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Dylan Havelock - Software Engineer',
  description: 'Personal website of Dylan Havelock, a software engineer focused on AI and modern web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Dylan Havelock
                  </Link>
                </div>
                <div className="flex items-center space-x-8">
                  <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                  <Link href="/posts" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Posts
                  </Link>
                  <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About
                  </Link>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://github.com/dhavelock"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/dylan-havelock"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="text-center text-gray-600 dark:text-gray-400">
                <p>&copy; 2025 Dylan Havelock. Built with Next.js and Tailwind CSS.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
