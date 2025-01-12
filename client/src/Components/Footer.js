import React from 'react'

export const Footer = () => {
  let footerStyle = {position: 'absolute', top: '100vh', width: '100%'}
  return (
    // id="footer"
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; TodosList.com
      </p>
    </footer>
  )
}