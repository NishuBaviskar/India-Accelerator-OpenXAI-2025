import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TextStream Template',
  description: 'A template for building text streaming applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex flex-col`}
      >
        {/* Top Navbar */}
        <nav className="w-full py-4 px-8 flex justify-between items-center bg-white/10 backdrop-blur-lg border-b border-white/20">
          <h1 className="text-xl font-bold tracking-wide text-white">TextStream</h1>
          <div className="flex gap-6 text-sm font-medium text-gray-200">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20">
            {/* Hero Section */}
            <header className="mb-8 text-center">
              <h1 className="text-4xl font-extrabold text-white tracking-tight">
                TextStream Template
              </h1>
              <p className="text-lg text-gray-200 mt-2">
                A modern UI for building text streaming applications
              </p>
            </header>

            {/* Children Components */}
            <section className="text-white space-y-4">{children}</section>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-300 text-sm border-t border-white/20 bg-white/10 backdrop-blur-lg">
          Built with ❤️ using Next.js & TailwindCSS
        </footer>
      </body>
    </html>
  )
}
