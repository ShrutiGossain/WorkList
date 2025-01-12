import React from 'react'

export const Footer = () => {
  // let footerStyle = {position: 'relative', width: '100%', top: '70vh'}
  return (
    // id="footer" OR style={footerStyle}
    <footer className="bg-dark text-light py-2">
      <p className="text-center">
        Copyright &copy; TodosList.com
      </p>
    </footer>
  )
}