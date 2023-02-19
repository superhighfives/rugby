import React from "react"
import LyricVideo from "./LyricVideo"
import LyricImage from "./LyricImage"
import Dispatcher from '../events/Dispatcher'
import Constants from '../events/Constants'
import Actions from '../events/Actions'
import Mobile from "../utils/Mobile"

export default class Stage extends React.Component {  
  constructor() {
    super()
    this.state = {percentage: 0, currentTime: 0, playing: false, finished: false, currentLyricID: 0}
    this.imagery = false
    this.Lyric = null
  }
  componentDidMount() {
    Mobile.canAutoplay((result) => {
      this.Lyric = result === false || !Modernizr.objectfit ? LyricImage : LyricVideo
      Dispatcher.register((action) => {
        switch(action.actionType) {
          case Constants.STATUS:
            this.setState({currentTime: action.message.currentTime, percentage: action.message.percentage})
            this.props.data.map((lyric) => {
              if(lyric.time == action.message.currentTime) {
                this.setState({currentLyricID: lyric.id})
              }
            })
            if(action.message.currentTime >= 179 && this.state.playing) {
              this.setState({finished: true, playing: false})
            }
          break
          case Constants.PLAYING:
            this.setState({playing: true, finished: false})
          break
        }
      })
    })
  }
  componentWillReceiveProps(props) {
    if(props.data) {
      if(!this.imagery) {
        this.imagery = props.data.map((lyric) => {return lyric.id})
      }
    }
  }
  checkLoaded(id) {
    var index = this.imagery.indexOf(id)
    this.imagery.splice(index, 1)
    if(this.imagery.length <= 3) {
      Actions.imageryLoaded()
    }
  }
  render() {
    let Lyric = this.Lyric
    return <div>
      {this.state.playing && !this.state.finished && <div className="introduction helper-spacing">
        <h1 className="introduction__title">This is a music video.</h1>
        <div className="introduction__description helper-spacing--sm">
          <p>It searches for gifs, that match bits of the lyrics, in real time.</p>
        </div>
      </div>}
      <div className="status">
        <div className="status__percentage" style={{width: `${this.state.percentage}%`}} />
      </div>
      <div className={`grid ${this.state.playing ? "grid--playing" : ""}`} ref="grid">
        {this.props.data && this.props.data.map((lyric) => {
          return <Lyric key={lyric.id} id={lyric.id} info={lyric.image} line={lyric.line} keyword={lyric.keyword} current={lyric.id == this.state.currentLyricID} active={lyric.time <= this.state.currentTime} checkLoaded={(id) => this.checkLoaded(id)} image={lyric.image.images.original_still} gif={lyric.image.images.fixed_height_downsampled} video={lyric.image.images.original} />
        })}
      </div>
      {this.state.finished && <img src="/assets/images/interaction.png" className="icon--interaction" />}
    </div>
  }
}
