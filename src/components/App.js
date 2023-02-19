import React from "react"
import classnames from "classnames"
import Header from "./Header"
import Navigation from "./Navigation"
import Footer from "./Footer"
import Stage from "./Stage"
import About from "./About"
import Unsupported from "./Unsupported"
import Dispatcher from '../events/Dispatcher'
import Constants from '../events/Constants'
import Actions from '../events/Actions'
import json from "isomorphic-jsonp"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {data: [], unsupported: false}
    this.canPlayAudio = this.canPlayAudio.bind(this)
    this.playingAudio = this.playingAudio.bind(this)
    this.endedAudio = this.endedAudio.bind(this)
  }
  canPlayAudio() {
    this.audio.addEventListener('play', this.playingAudio)
    this.audio.addEventListener('ended', this.endedAudio)
    this.setState({audio: this.audio})
    Actions.audioLoaded()
  }
  playingAudio() {
    // if(this.state.audio.currentTime < 16) {this.state.audio.currentTime = 16} 
    // if(this.state.audio.currentTime < 174) {this.state.audio.currentTime = 174}
    this.setState({playing: true, finished: false})
    this.playing = true
    this.finished = false
    window.requestAnimationFrame(() => this.audioPlaying())
  }
  endedAudio() {
    this.setState({playing: false, finished: true})
    this.playing = false
    this.finished = true
  }
  componentDidMount() {
    if(Modernizr.flexbox) {
      // Get data
      let gif_url = window.location.toString().match(/localhost/) && !window.location.toString().match(/\?live=1/) ? "http://localhost:5000/data.json?callback=JSON_CALLBACK" : "https://rugby-server.herokuapp.com/data.json?callback=JSON_CALLBACK";
      json(gif_url).then((res) => {
        Actions.dataLoaded()
        let data = res.map((lyric) => {
          lyric.image = lyric.images[Math.floor(Math.random()*lyric.images.length)]
          return lyric
        })
        this.setState({data: data})
      })

      // Set up audio
      this.audio = new Audio('assets/audio/rugby.mp3')
      // this.audio.volume = 0.0
      if(this.audio.readyState > 3) {
        this.canPlayAudio()
      } else {
        this.audio.addEventListener('canplaythrough', this.canPlayAudio)
      }
      this.audio.load()

      Dispatcher.register((action) => {
        switch(action.actionType) {
          case Constants.PLAYING:
            this.state.audio.play()
          break
          case Constants.FINISHED:
            this.setState({playing: false, finished: true})
            this.playing = false
            this.finished = true
          break
          case Constants.DISPLAY_ABOUT:
            this.setState({displayAbout: true})
          break
          case Constants.CLOSE_ABOUT:
            this.setState({displayAbout: false})
          break
        }
      })
    } else {
      this.setState({unsupported: true})
    }
  }
  audioPlaying() {
    let currentTime = Math.ceil(this.state.audio.currentTime)
    let percentage = Math.ceil(Math.ceil(this.state.audio.currentTime) / Math.ceil(this.state.audio.duration) * 100)
    if(this.currentTime != currentTime) {
      this.currentTime = currentTime
      if(this.percentage != percentage) {
        this.percentage = percentage
      }
      console.log(`Playing - ${this.currentTime} / ${this.percentage}%`)
      Actions.status(currentTime, percentage)
      if(currentTime >= 179) {
        Actions.finished()
      }
    }
    if(this.percentage < 100) window.requestAnimationFrame(() => this.audioPlaying())
  }
  render() {
    let path = this.props.location.pathname
    let currentNode = path.substr(path.lastIndexOf('/') + 1) || 'index'
    return this.state.unsupported ?
        <Unsupported />
      : <div className={classnames("app", `app--${currentNode} ${this.state.finished ? "app--finished" : ""}`)}>
        <Stage data={this.state.data} />
        {this.state.playing || this.state.finished ? <Header /> : null}
        <Navigation />
        {this.props.children}
        <Footer />
        {this.state.displayAbout && <About />}
      </div> 
  }
}
