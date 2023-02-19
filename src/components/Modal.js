import React from "react"
import { Link } from "react-router"

export default class Modal extends React.Component {  
  componentWillMount() {
    document.body.classList.add('is-modal')
  }
  componentWillUnmount() {
    document.body.classList.remove('is-modal')
  }
  render() {
    return <div>
      <div className="modal">
        <div className="modal__viewport">
          {this.props.children}
          <Link to={this.props.returnTo} className="modal__close">✕</Link>
        </div>
      </div>
    </div>
  }
}
