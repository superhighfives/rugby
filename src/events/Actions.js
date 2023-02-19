import Dispatcher from './Dispatcher'
import Constants from './Constants'

export default class Actions {
  static start() {
    Dispatcher.dispatch({
      actionType: Constants.PLAYING
    })
  }
  static dataLoaded() {
    Dispatcher.dispatch({
      actionType: Constants.DATA_LOADED
    })
  }
  static audioLoaded() {
    Dispatcher.dispatch({
      actionType: Constants.AUDIO_LOADED
    })
  }
  static imageryLoaded() {
    Dispatcher.dispatch({
      actionType: Constants.IMAGERY_LOADED
    })
  }
  static audioFinished() {
    Dispatcher.dispatch({
      actionType: Constants.AUDIO_FINISHED
    })
  }
  static status(currentTime, percentage) {
    Dispatcher.dispatch({
      actionType: Constants.STATUS,
      message: {currentTime: currentTime, percentage: percentage}
    })
  }
  static finished() {
    Dispatcher.dispatch({
      actionType: Constants.FINISHED
    })
  }
  static displayAbout() {
    Dispatcher.dispatch({
      actionType: Constants.DISPLAY_ABOUT
    })
  }
  static closeAbout() {
    Dispatcher.dispatch({
      actionType: Constants.CLOSE_ABOUT
    })
  }
}