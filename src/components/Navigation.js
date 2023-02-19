import React from "react"
import Actions from "../events/Actions"

export default class Navigation extends React.Component {  
  handleAbout(e) {
    Actions.displayAbout()
  }
  render() {
    return (
      <header className="navigation">
        {false && <a className="navigation__item" href="http://music.wearebrightly.com" target="_blank">Bandcamp</a>}
        <a className="navigation__item" onClick={e => this.handleAbout(e)}>About</a>
      </header>
    )
  }
}