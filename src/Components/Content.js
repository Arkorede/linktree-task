import React from 'react'
import myImage from './myImage.jpg'
import shareButton from './shareButton.png'
import dotsButton from './dotsButton.png'
import slack from './slack.png'
import Icon from './Icon.png'
import { Link } from 'react-router-dom'

function Content() {
  return <div>
    {/* <div className="header"> */}
    <img src={myImage} id="profile__img" alt="Israel Ashaolu" />
    <p id='twitter'>Israel Ashaolu</p>
    <p id="slack">Arkorede</p>
    <img src={shareButton} className="btn-share" alt="A share button" />
    <img src={dotsButton} className="btn-dots" alt="A dots button" />
    {/* </div> */}

    <div className="text-links">
      <a href="https://twitter.com/IsraelAshaolu" id="twitter__link" className="text-link">Twitter Link</a>
      <a href="https://training.zuri.team/" id="btn__zuri" className="text-link">Zuri Team</a>
      <a href="https://books.zuri.team/" id="books" title="This is where you find books about design and coding" className="text-link">Zuri Books</a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<arkorede>" id="book__python" title="Buy Python for Beginner😊" className="text-link">Python Books</a>
      <a href="https://background.zuri.team/" id="pitch" title="Where you pitch a service for doing background checks on coders" className="text-link">Background Check for Coders</a>
      <a href="https://books.zuri.team/design-rules" id="book__design" title="Where you pitch the free design book offered by Zuri." className="text-link">Design Books</a>
      <Link to="/contact" id="contact" className="text-link">Contact Me</Link>
    </div>
    <br />
    <br />
    <br />
    <div className="social-link">
      <a href="https://app.slack.com/client/T042F7V19Q8/D04840ZD28N/rimeto_profile/U047W2MBK9D">
        <img src={slack} alt="Slack logo" />
      </a>
      <a href="https://github.com/Arkorede">
        <img src={Icon} alt="GitHub logo" />
      </a>
    </div>
    <br />
    <br />
    <br />
    <br />
  </div>
}

export default Content;