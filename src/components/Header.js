import React from "react"

export default class Header extends React.Component {  
  render() {
    return (
      <header className="header helper-h-spacing">
        <hgroup className="helper-display--inline">
          <h2 className="text text--serif text--uppercase text--sm text--spaced text--inline helper-display--inline">Brightly </h2>
          <h1 className="text text--serif text--italic text--md text--inline helper-display--inline">Rugby</h1>
        </hgroup>
      </header>
    )
  }
}