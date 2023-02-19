import React from "react"

export default class Lyric extends React.Component {
  constructor() {
    super()
    this.state = {image: "", ready: false}
    this.canPlayThrough = this.canPlayThrough.bind(this)
  }
  componentDidMount() {
    if(this.refs.video.readyState > 3) {
      this.canPlayThrough()
    } else {
      this.refs.video.addEventListener('canplaythrough', this.canPlayThrough)
    }

    let lyric = {line: this.props.line, keyword: this.props.keyword}
    this.setState({lyric: this.splitLyric(lyric)})
  }
  canPlayThrough() {
    this.refs.video.autoplay = true
    this.refs.video.muted = true
    this.refs.video.playing = false
    this.refs.video.playsInline = true
    this.refs.video.play()
    this.refs.video.removeEventListener('canplaythrough', this.canPlayThrough)
    setTimeout(() => {
      let image = new Image()
      image.onload = () => {
        this.setState({image: image.src, ready: true})
        this.props.checkLoaded(this.props.id)
      }
      image.src = this.props.image.url
    })
  }
  splitLyric(lyric) {
    if(lyric.keyword) {
      let pattern = new RegExp("^(.*)(" + lyric.keyword + ")(.*)$", "im")
      lyric.processed = lyric.line.match(pattern)
    }
    return lyric;
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
      <video ref="video" className="grid__video" autoPlay muted loop playsInline preload="auto">
        {this.props.video.webp && <source type="video/webp" src={this.props.video.webp} />}
        {this.props.video.mp4 && <source type="video/mp4" src={this.props.video.mp4} />}
      </video>
      <div className="grid__background" style={{backgroundImage: `url(${this.state.image})`}} />
    </div>
  }
}
