export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Lino Mayer. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/LinoMayer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/lino-mayer-2441a528b/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              LinkedIn
            </a>
            <a href="https://x.com/lino_mayer0" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

