import React from "react"
import { Link } from "react-router"

export default class Footer extends React.Component {  
  render() {
    return (
      <footer className="footer">
        <ul className="list list--horizontal">
          <li><img className="image--small-on-xs" src="/assets/images/giphy.png" alt="Powered by Giphy" /></li>
        </ul>
      </footer>
    )
  }
}