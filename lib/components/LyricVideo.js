"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lyric = function (_React$Component) {
  _inherits(Lyric, _React$Component);

  function Lyric() {
    _classCallCheck(this, Lyric);

    var _this = _possibleConstructorReturn(this, (Lyric.__proto__ || Object.getPrototypeOf(Lyric)).call(this));

    _this.state = { image: "", ready: false };
    _this.canPlayThrough = _this.canPlayThrough.bind(_this);
    return _this;
  }

  _createClass(Lyric, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.refs.video.readyState > 3) {
        this.canPlayThrough();
      } else {
        this.refs.video.addEventListener('canplaythrough', this.canPlayThrough);
      }

      var lyric = { line: this.props.line, keyword: this.props.keyword };
      this.setState({ lyric: this.splitLyric(lyric) });
    }
  }, {
    key: "canPlayThrough",
    value: function canPlayThrough() {
      var _this2 = this;

      this.refs.video.autoplay = true;
      this.refs.video.muted = true;
      this.refs.video.playing = false;
      this.refs.video.playsInline = true;
      this.refs.video.play();
      this.refs.video.removeEventListener('canplaythrough', this.canPlayThrough);
      setTimeout(function () {
        var image = new Image();
        image.onload = function () {
          _this2.setState({ image: image.src, ready: true });
          _this2.props.checkLoaded(_this2.props.id);
        };
        image.src = _this2.props.image.url;
      });
    }
  }, {
    key: "splitLyric",
    value: function splitLyric(lyric) {
      if (lyric.keyword) {
        var pattern = new RegExp("^(.*)(" + lyric.keyword + ")(.*)$", "im");
        lyric.processed = lyric.line.match(pattern);
      }
      return lyric;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { key: this.props.id, className: "grid__item " + (this.state.ready ? "grid__item--loaded" : "") + " " + (this.props.active ? "grid__item--active" : "") + " " + (this.props.current ? "grid__item--current" : "") },
        this.state.lyric && this.state.lyric.processed ? _react2.default.createElement(
          "div",
          { className: "grid__content" },
          this.state.lyric.processed[1] && _react2.default.createElement(
            "div",
            { className: "grid__text" },
            this.state.lyric.processed[1]
          ),
          this.state.lyric.processed[2] && _react2.default.createElement(
            "div",
            { className: "grid__text grid__highlight" },
            !!this.props.info.source ? _react2.default.createElement(
              "a",
              { target: "_blank", href: this.props.info.source, className: "grid__keyword" },
              this.state.lyric.processed[2]
            ) : _react2.default.createElement(
              "span",
              { className: "grid__keyword" },
              this.state.lyric.processed[2]
            ),
            this.props.info.source && _react2.default.createElement(
              "a",
              { target: "_blank", href: this.props.info.source, className: "grid__source" },
              this.props.info.source_tld || this.props.info.source
            )
          ),
          this.state.lyric.processed[3] && _react2.default.createElement(
            "div",
            { className: "grid__text" },
            this.state.lyric.processed[3]
          )
        ) : _react2.default.createElement(
          "div",
          { className: "grid__content" },
          this.props.line
        ),
        _react2.default.createElement(
          "video",
          { ref: "video", className: "grid__video", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "auto" },
          this.props.video.webp && _react2.default.createElement("source", { type: "video/webp", src: this.props.video.webp }),
          this.props.video.mp4 && _react2.default.createElement("source", { type: "video/mp4", src: this.props.video.mp4 })
        ),
        _react2.default.createElement("div", { className: "grid__background", style: { backgroundImage: "url(" + this.state.image + ")" } })
      );
    }
  }]);

  return Lyric;
}(_react2.default.Component);

exports.default = Lyric;