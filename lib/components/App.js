"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _Navigation = require("./Navigation");

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Footer = require("./Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _Stage = require("./Stage");

var _Stage2 = _interopRequireDefault(_Stage);

var _About = require("./About");

var _About2 = _interopRequireDefault(_About);

var _Unsupported = require("./Unsupported");

var _Unsupported2 = _interopRequireDefault(_Unsupported);

var _Dispatcher = require("../events/Dispatcher");

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Constants = require("../events/Constants");

var _Constants2 = _interopRequireDefault(_Constants);

var _Actions = require("../events/Actions");

var _Actions2 = _interopRequireDefault(_Actions);

var _isomorphicJsonp = require("isomorphic-jsonp");

var _isomorphicJsonp2 = _interopRequireDefault(_isomorphicJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = { data: [], unsupported: false };
    _this.canPlayAudio = _this.canPlayAudio.bind(_this);
    _this.playingAudio = _this.playingAudio.bind(_this);
    _this.endedAudio = _this.endedAudio.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "canPlayAudio",
    value: function canPlayAudio() {
      this.audio.addEventListener('play', this.playingAudio);
      this.audio.addEventListener('ended', this.endedAudio);
      this.setState({ audio: this.audio });
      _Actions2.default.audioLoaded();
    }
  }, {
    key: "playingAudio",
    value: function playingAudio() {
      var _this2 = this;

      // if(this.state.audio.currentTime < 16) {this.state.audio.currentTime = 16} 
      // if(this.state.audio.currentTime < 174) {this.state.audio.currentTime = 174}
      this.setState({ playing: true, finished: false });
      this.playing = true;
      this.finished = false;
      window.requestAnimationFrame(function () {
        return _this2.audioPlaying();
      });
    }
  }, {
    key: "endedAudio",
    value: function endedAudio() {
      this.setState({ playing: false, finished: true });
      this.playing = false;
      this.finished = true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (Modernizr.flexbox) {
        // Get data
        var gif_url = window.location.toString().match(/localhost/) && !window.location.toString().match(/\?live=1/) ? "http://localhost:5000/data.json?callback=JSON_CALLBACK" : "https://rugby-server.herokuapp.com/data.json?callback=JSON_CALLBACK";
        (0, _isomorphicJsonp2.default)(gif_url).then(function (res) {
          _Actions2.default.dataLoaded();
          var data = res.map(function (lyric) {
            lyric.image = lyric.images[Math.floor(Math.random() * lyric.images.length)];
            return lyric;
          });
          _this3.setState({ data: data });
        });

        // Set up audio
        this.audio = new Audio('assets/audio/rugby.mp3');
        // this.audio.volume = 0.0
        if (this.audio.readyState > 3) {
          this.canPlayAudio();
        } else {
          this.audio.addEventListener('canplaythrough', this.canPlayAudio);
        }
        this.audio.load();

        _Dispatcher2.default.register(function (action) {
          switch (action.actionType) {
            case _Constants2.default.PLAYING:
              _this3.state.audio.play();
              break;
            case _Constants2.default.FINISHED:
              _this3.setState({ playing: false, finished: true });
              _this3.playing = false;
              _this3.finished = true;
              break;
            case _Constants2.default.DISPLAY_ABOUT:
              _this3.setState({ displayAbout: true });
              break;
            case _Constants2.default.CLOSE_ABOUT:
              _this3.setState({ displayAbout: false });
              break;
          }
        });
      } else {
        this.setState({ unsupported: true });
      }
    }
  }, {
    key: "audioPlaying",
    value: function audioPlaying() {
      var _this4 = this;

      var currentTime = Math.ceil(this.state.audio.currentTime);
      var percentage = Math.ceil(Math.ceil(this.state.audio.currentTime) / Math.ceil(this.state.audio.duration) * 100);
      if (this.currentTime != currentTime) {
        this.currentTime = currentTime;
        if (this.percentage != percentage) {
          this.percentage = percentage;
        }
        console.log("Playing - " + this.currentTime + " / " + this.percentage + "%");
        _Actions2.default.status(currentTime, percentage);
        if (currentTime >= 179) {
          _Actions2.default.finished();
        }
      }
      if (this.percentage < 100) window.requestAnimationFrame(function () {
        return _this4.audioPlaying();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var path = this.props.location.pathname;
      var currentNode = path.substr(path.lastIndexOf('/') + 1) || 'index';
      return this.state.unsupported ? _react2.default.createElement(_Unsupported2.default, null) : _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("app", "app--" + currentNode + " " + (this.state.finished ? "app--finished" : "")) },
        _react2.default.createElement(_Stage2.default, { data: this.state.data }),
        this.state.playing || this.state.finished ? _react2.default.createElement(_Header2.default, null) : null,
        _react2.default.createElement(_Navigation2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null),
        this.state.displayAbout && _react2.default.createElement(_About2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;