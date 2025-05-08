import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} GitHub Name Finder
        </div>
      </footer>
  )
}

export default Footer
