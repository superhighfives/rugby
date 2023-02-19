"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _es6Promise = require("es6-promise");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lyric = function (_React$Component) {
  _inherits(Lyric, _React$Component);

  function Lyric() {
    _classCallCheck(this, Lyric);

    var _this = _possibleConstructorReturn(this, (Lyric.__proto__ || Object.getPrototypeOf(Lyric)).call(this));

    _this.state = { gif: "", ready: false };
    return _this;
  }

  _createClass(Lyric, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var promises = [];

      setTimeout(function () {
        var gifPromise = new _es6Promise.Promise(function (resolve, reject) {
          var gif = new Image();
          gif.onload = function () {
            _this2.setState({ gif: gif.src });resolve();
          };
          gif.src = _this2.props.gif.url;
        });
        promises.push(gifPromise);

        var imagePromise = new _es6Promise.Promise(function (resolve, reject) {
          var image = new Image();
          image.onload = function () {
            _this2.setState({ image: image.src });resolve();
          };
          image.src = _this2.props.image.url;
        });
        promises.push(imagePromise);

        _es6Promise.Promise.all(promises).then(function (response) {
          _this2.canDisplayImage();
        });
      });

      var lyric = { line: this.props.line, keyword: this.props.keyword };
      this.setState({ lyric: this.splitLyric(lyric) });
    }
  }, {
    key: "canDisplayImage",
    value: function canDisplayImage() {
      this.setState({ ready: true });
      this.props.checkLoaded(this.props.id);
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
        _react2.default.createElement("div", { className: "grid__image", style: { backgroundImage: "url(" + this.state.gif + ")" } }),
        _react2.default.createElement("div", { className: "grid__background", style: { backgroundImage: "url(" + this.state.image + ")" } })
      );
    }
  }]);

  return Lyric;
}(_react2.default.Component);

exports.default = Lyric;