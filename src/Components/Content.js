import React from 'react'
import slack from './slack.png'
import icon from './Icon.png'

function Content() {
  return <section>
    <a href="https://twitter.com/IsraelAshaolu" id="twitter__link">Twitter Link</a>
    <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
    <a href="https://books.zuri.team/" id="books" title="This is where you find books about design and coding">Zuri Books</a>
    <a href="https://books.zuri.team/python-for-beginners?ref_id=<arkorede>" id="book__python" title="Buy Python for Beginner😊">Python Books</a>
    <a href="https://background.zuri.team/" id="pitch" title="Where you pitch a service for doing background checks on coders">Background Check for Coders</a>
    <a href="https://books.zuri.team/design-rules" id="book__design" title="Where you pitch the free design book offered by Zuri.">Design Books</a>
    <br />
    <br />
    <br />
    <a href="https://app.slack.com/client/T042F7V19Q8/D04840ZD28N/rimeto_profile/U047W2MBK9D">
      <img src={slack} alt="Slack logo" />
    </a>
    <a href="https://github.com/Arkorede">
      <img src={icon} alt="GitHub logo" />
    </a>

  </section>
}

export default Content;