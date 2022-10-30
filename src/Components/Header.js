import React from 'react'
import myImage from './myImage.jpg'
import shareButton from './shareButton.png'

function Header() {
  return <div>
    <header>
      <img src={myImage} id="profile__img" alt="Israel Ashaolu" />
      <h1 id='twitter'>Israel Ashaolu</h1>
      <h1 id="slack">Arkorede</h1>
      <img src={shareButton} className="btn-share" alt="A share button" />
    </header>
  </div >
}

export default Header;