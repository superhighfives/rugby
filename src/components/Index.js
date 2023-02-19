import React from "react"
import {Link} from "react-router"
import Dispatcher from '../events/Dispatcher'
import Constants from '../events/Constants'
import Actions from '../events/Actions'

export default class PageIndex extends React.Component {  
  constructor() {
    super()
    this.state = {dataLoaded: false, audioLoaded: false, imageryLoaded: false, playable: false, playing: false}
  }
  componentWillMount() {
    Dispatcher.register((action) => {
      switch(action.actionType) {
        case Constants.DATA_LOADED: 
          this.setState({dataLoaded: true})
        break
        case Constants.AUDIO_LOADED: 
          this.setState({audioLoaded: true})
        break
        case Constants.IMAGERY_LOADED:
          this.setState({imageryLoaded: true})
        break
        case Constants.PLAYING:
          this.setState({playing: true})
        break
      }
    })
  }
  handlePlay(e) {
    Actions.start()
  }
  render() {
    if(!this.state.playable && this.state.dataLoaded && this.state.audioLoaded && this.state.imageryLoaded) {
      this.preplay = true
      setTimeout(() => {
        this.setState({playable: true})
      }, 500)
    }
    let playable = this.state.dataLoaded && this.state.audioLoaded && this.state.imageryLoaded
    return this.state.playing
    ? null
    : <div className="page helper-spacing" ref="page">
      <hgroup className="text--serif text--shadow text--sm text--center">
        <img className="logo" src="/assets/images/logo.png" />
        <h2 className="text--uppercase text--spaced text--bold">Brightly</h2>
        <h1 className="text--xl text--italic">Rugby</h1>
      </hgroup>
      <div>{this.state.playable
        ? <a className="button" onClick={(e) => this.handlePlay(e)}>Play</a>
        : <div className={`fetching ${this.preplay ? "fetching--complete" : ""}`}><img src="/assets/images/preloader.svg" width="12" height="12" />
            <span> Fetching </span>
            <span className={`fetching__item ${this.state.dataLoaded ? "fetching__item--complete" : ""}`}>lyrics</span>
            <span> / </span>
            <span className={`fetching__item ${this.state.audioLoaded ? "fetching__item--complete" : ""}`}>audio</span>
            <span> / </span>
            <span className={`fetching__item ${this.state.imageryLoaded ? "fetching__item--complete" : ""}`}>gifs</span>
            <span className="fetching__waiting">(Sorry for the wait...)</span>
        </div>
      }</div>
    </div>
  }
}
