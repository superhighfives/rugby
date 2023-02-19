import React from "react"
import Actions from "../events/Actions"

export default class About extends React.Component {  
  componentWillMount() {
    document.body.classList.add('is-modal')
  }
  componentWillUnmount() {
    document.body.classList.remove('is-modal')
  }
  handleClose(e) {
    this.refs.close.style.opacity = 0
    this.refs.self.classList.add('is-unmounting')
    setTimeout(() => {
      this.refs.self.classList.remove('is-unmounting')
      Actions.closeAbout()
    }, 600)
  }
  render() {
    return <div>
      <div className="modal" ref="self">
        <div className="modal__viewport" ref="viewport">
          <div className="page page--thin helper-spacing">
            <hgroup className="helper-spacing--sm">
              <h1 className="text--serif text--spaced text--uppercase text--center">About</h1>
              <h2 className="text--center text--lg text--lh-xl"><em>Rugby</em> is a song from the <a className="text--link" href="http://wearebrightly.com" target="_blank">Brightly</a> LP <a className="text--link" href="http://music.wearebrightly.com" target="_blank">One&nbsp;For&nbsp;Sorrow, Two&nbsp;For&nbsp;Joy</a>.</h2>
            </hgroup>
            <div className="helper-spacing--sm text--lh-lg">
              <p>This music video, built to celebrate the successful <a href="https://www.kickstarter.com/projects/207221174/one-for-sorrow-two-for-joy-an-experiment-in-partic" target="_blank" className="text--link">crowdfunding of the record</a>, hinges off the <a className="text--link" href="https://github.com/Giphy/GiphyAPI" target="_blank">Giphy API</a> and is built with a mix of Ruby, Node and React. It grabs fresh GIFs in real-time that match the keywords from the song, making every experience unique. It is, in many ways, the spiritual successor to <a href="http://tweetflight.wearebrightly.com/" target="_blank" className="text--link">Tweetflight</a>.</p>
              <p>It uses a bunch of new browser technologies, and works best in the latest <a href="https://www.google.com/chrome/" target="_blank" className="text--link">Google Chrome</a>. It also works a treat in the latest mobile Safari.</p>
              <p>If you'd like to support <a href="http://wearebrightly.com" target="_blank" className="text--link">Brightly</a>, you can <a href="http://music.wearebrightly.com" target="_blank" className="text--link">hear more on Bandcamp</a>, follow via <a href="https://www.facebook.com/wearebrightly/" target="_blank" className="text--link">Facebook</a> or tweet short love letters to <a href="https://twitter.com/wearebrightly" target="_blank" className="text--link">@wearebrightly</a>.</p>
              <img className="logo logo--centered" src="/assets/images/logo.png" />
            </div>
          </div>
        </div>
      </div>
      <a ref="close" onClick={e => this.handleClose(e)} className="modal__close">✕</a>
    </div>
  }
}
