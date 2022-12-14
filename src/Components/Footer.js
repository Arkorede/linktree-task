import React from 'react'
import footerText from './footerText.png'
import ingressive from './ingressive.png'
import zuriInternshipLogo from './zuriInternshipLogo.png'

function Footer() {
  return <div className="footer">
    <img src={zuriInternshipLogo} alt="Zuri Internship logo" className="zuri__logo" />
    <img src={footerText} alt="HNG Internship 9 Front end task" className="footer__text" />
    <img src={ingressive} alt="Ingressive for good logo" className="ingressive__logo" />
  </div>
}

export default Footer;