import React from "react"
import { Promise } from "es6-promise"

export default class Lyric extends React.Component {
  constructor() {
    super()
    this.state = {gif: "", ready: false}
  }
  componentDidMount() {
    let promises = []

    setTimeout(() => {
      let gifPromise = new Promise((resolve, reject) => {
        let gif = new Image()
        gif.onload = () => {this.setState({gif: gif.src}); resolve()}
        gif.src = this.props.gif.url
      })
      promises.push(gifPromise)

      let imagePromise = new Promise((resolve, reject) => {
        let image = new Image()
        image.onload = () => {this.setState({image: image.src}); resolve()}
        image.src = this.props.image.url

      })
      promises.push(imagePromise)

      Promise.all(promises).then((response) => {
        this.canDisplayImage()
      })
    })

    let lyric = {line: this.props.line, keyword: this.props.keyword}
    this.setState({lyric: this.splitLyric(lyric)})
  }
  canDisplayImage() {
    this.setState({ready: true})
    this.props.checkLoaded(this.props.id)
  }
  splitLyric(lyric) {
    if(lyric.keyword) {
      let pattern = new RegExp("^(.*)(" + lyric.keyword + ")(.*)$", "im")
      lyric.processed = lyric.line.match(pattern)
    }
    return lyric
  }
  render() {
    return <div key={this.props.id} className={`grid__item ${this.state.ready ? "grid__item--loaded" : ""} ${this.props.active ? "grid__item--active" : ""} ${this.props.current ? "grid__item--current" : ""}`}>
      {this.state.lyric && this.state.lyric.processed
        ? <div className="grid__content">
          {this.state.lyric.processed[1] && <div className="grid__text">{this.state.lyric.processed[1]}</div>}
          {this.state.lyric.processed[2] && <div className="grid__text grid__highlight">
            {!!this.props.info.source ? <a target="_blank" href={this.props.info.source} className="grid__keyword">{this.state.lyric.processed[2]}</a> : <span className="grid__keyword">{this.state.lyric.processed[2]}</span>}
            {this.props.info.source && <a target="_blank" href={this.props.info.source} className="grid__source">{this.props.info.source_tld || this.props.info.source}</a>}
          </div>}
          {this.state.lyric.processed[3] && <div className="grid__text">{this.state.lyric.processed[3]}</div>}
        </div>
        : <div className="grid__content">{this.props.line}</div>
      }
      <div className="grid__image" style={{backgroundImage: `url(${this.state.gif})`}} />
      <div className="grid__background" style={{backgroundImage: `url(${this.state.image})`}} />
    </div>
  }
}