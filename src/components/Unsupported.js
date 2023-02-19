import React from "react"

export default class Unsupported extends React.Component {  
  render() {
    return (
      <div className="unsupported helper-spacing">
        <hgroup className="text--serif text--shadow text--sm">
          <h2 className="text--uppercase text--spaced text--bold">Brightly</h2>
          <h1 className="text--xl text--italic">Rugby</h1>
        </hgroup>
        <h1 className="text--serif text--uppercase text--spaced text--sm">Unsupported browser</h1>
        <p>Friend! It looks like you're using a browser that doesn't support the fancy features that this music video requires. But fear not! All is not lost.</p>
        <p>As it uses a bunch of new browser technologies, it works best in the latest <a href="https://www.google.com/chrome/" target="_blank" className="text--link">Google Chrome</a>, which you can download for your phone, tablet or other gadget.</p>
        <p>In the meantime, if you'd like to support Brightly, you can <a href="http://music.wearebrightly.com/" target="_blank" className="text--link">listen to the album</a>, follow on <a href="https://www.facebook.com/wearebrightly/" target="_blank" className="text--link">Facebook</a> or tweet short love letters things to <a href="https://twitter.com/wearebrightly" target="_blank" className="text--link">@wearebrightly</a>.</p>
      </div>
    )
  }
}