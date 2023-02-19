"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _LyricVideo = require("./LyricVideo");

var _LyricVideo2 = _interopRequireDefault(_LyricVideo);

var _LyricImage = require("./LyricImage");

var _LyricImage2 = _interopRequireDefault(_LyricImage);

var _Dispatcher = require("../events/Dispatcher");

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Constants = require("../events/Constants");

var _Constants2 = _interopRequireDefault(_Constants);

var _Actions = require("../events/Actions");

var _Actions2 = _interopRequireDefault(_Actions);

var _Mobile = require("../utils/Mobile");

var _Mobile2 = _interopRequireDefault(_Mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage = function (_React$Component) {
  _inherits(Stage, _React$Component);

  function Stage() {
    _classCallCheck(this, Stage);

    var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this));

    _this.state = { percentage: 0, currentTime: 0, playing: false, finished: false, currentLyricID: 0 };
    _this.imagery = false;
    _this.Lyric = null;
    return _this;
  }

  _createClass(Stage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _Mobile2.default.canAutoplay(function (result) {
        _this2.Lyric = result === false || !Modernizr.objectfit ? _LyricImage2.default : _LyricVideo2.default;
        _Dispatcher2.default.register(function (action) {
          switch (action.actionType) {
            case _Constants2.default.STATUS:
              _this2.setState({ currentTime: action.message.currentTime, percentage: action.message.percentage });
              _this2.props.data.map(function (lyric) {
                if (lyric.time == action.message.currentTime) {
                  _this2.setState({ currentLyricID: lyric.id });
                }
              });
              if (action.message.currentTime >= 179 && _this2.state.playing) {
                _this2.setState({ finished: true, playing: false });
              }
              break;
            case _Constants2.default.PLAYING:
              _this2.setState({ playing: true, finished: false });
              break;
          }
        });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.data) {
        if (!this.imagery) {
          this.imagery = props.data.map(function (lyric) {
            return lyric.id;
          });
        }
      }
    }
  }, {
    key: "checkLoaded",
    value: function checkLoaded(id) {
      var index = this.imagery.indexOf(id);
      this.imagery.splice(index, 1);
      if (this.imagery.length <= 3) {
        _Actions2.default.imageryLoaded();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var Lyric = this.Lyric;
      return _react2.default.createElement(
        "div",
        null,
        this.state.playing && !this.state.finished && _react2.default.createElement(
          "div",
          { className: "introduction helper-spacing" },
          _react2.default.createElement(
            "h1",
            { className: "introduction__title" },
            "This is a music video."
          ),
          _react2.default.createElement(
            "div",
            { className: "introduction__description helper-spacing--sm" },
            _react2.default.createElement(
              "p",
              null,
              "It searches for gifs, that match bits of the lyrics, in real time."
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "status" },
          _react2.default.createElement("div", { className: "status__percentage", style: { width: this.state.percentage + "%" } })
        ),
        _react2.default.createElement(
          "div",
          { className: "grid " + (this.state.playing ? "grid--playing" : ""), ref: "grid" },
          this.props.data && this.props.data.map(function (lyric) {
            return _react2.default.createElement(Lyric, { key: lyric.id, id: lyric.id, info: lyric.image, line: lyric.line, keyword: lyric.keyword, current: lyric.id == _this3.state.currentLyricID, active: lyric.time <= _this3.state.currentTime, checkLoaded: function checkLoaded(id) {
                return _this3.checkLoaded(id);
              }, image: lyric.image.images.original_still, gif: lyric.image.images.fixed_height_downsampled, video: lyric.image.images.original });
          })
        ),
        this.state.finished && _react2.default.createElement("img", { src: "/assets/images/interaction.png", className: "icon--interaction" })
      );
    }
  }]);

  return Stage;
}(_react2.default.Component);

exports.default = Stage;