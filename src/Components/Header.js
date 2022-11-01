import React from 'react'
import myImage from './myImage.jpg'
import shareButton from './shareButton.png'
// import cameraImage from './cameraImage.png'

function Header() {
  return <div>
    <div className="header">
      <img src={myImage} id="profile__img" alt="Israel Ashaolu" />
      <p id='twitter'>Israel Ashaolu</p>
      <p id="slack">Arkorede</p>
      <img src={shareButton} className="btn-share" alt="A share button" />
    </div>
  </div >
}

export default Header;