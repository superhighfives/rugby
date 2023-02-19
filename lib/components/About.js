"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Actions = require("../events/Actions");

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      document.body.classList.add('is-modal');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove('is-modal');
    }
  }, {
    key: "handleClose",
    value: function handleClose(e) {
      var _this2 = this;

      this.refs.close.style.opacity = 0;
      this.refs.self.classList.add('is-unmounting');
      setTimeout(function () {
        _this2.refs.self.classList.remove('is-unmounting');
        _Actions2.default.closeAbout();
      }, 600);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "modal", ref: "self" },
          _react2.default.createElement(
            "div",
            { className: "modal__viewport", ref: "viewport" },
            _react2.default.createElement(
              "div",
              { className: "page page--thin helper-spacing" },
              _react2.default.createElement(
                "hgroup",
                { className: "helper-spacing--sm" },
                _react2.default.createElement(
                  "h1",
                  { className: "text--serif text--spaced text--uppercase text--center" },
                  "About"
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "text--center text--lg text--lh-xl" },
                  _react2.default.createElement(
                    "em",
                    null,
                    "Rugby"
                  ),
                  " is a song from the ",
                  _react2.default.createElement(
                    "a",
                    { className: "text--link", href: "http://wearebrightly.com", target: "_blank" },
                    "Brightly"
                  ),
                  " LP ",
                  _react2.default.createElement(
                    "a",
                    { className: "text--link", href: "http://music.wearebrightly.com", target: "_blank" },
                    "One\xA0For\xA0Sorrow, Two\xA0For\xA0Joy"
                  ),
                  "."
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "helper-spacing--sm text--lh-lg" },
                _react2.default.createElement(
                  "p",
                  null,
                  "This music video, built to celebrate the successful ",
                  _react2.default.createElement(
                    "a",
                    { href: "https://www.kickstarter.com/projects/207221174/one-for-sorrow-two-for-joy-an-experiment-in-partic", target: "_blank", className: "text--link" },
                    "crowdfunding of the record"
                  ),
                  ", hinges off the ",
                  _react2.default.createElement(
                    "a",
                    { className: "text--link", href: "https://github.com/Giphy/GiphyAPI", target: "_blank" },
                    "Giphy API"
                  ),
                  " and is built with a mix of Ruby, Node and React. It grabs fresh GIFs in real-time that match the keywords from the song, making every experience unique. It is, in many ways, the spiritual successor to ",
                  _react2.default.createElement(
                    "a",
                    { href: "http://tweetflight.wearebrightly.com/", target: "_blank", className: "text--link" },
                    "Tweetflight"
                  ),
                  "."
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "It uses a bunch of new browser technologies, and works best in the latest ",
                  _react2.default.createElement(
                    "a",
                    { href: "https://www.google.com/chrome/", target: "_blank", className: "text--link" },
                    "Google Chrome"
                  ),
                  ". It also works a treat in the latest mobile Safari."
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "If you'd like to support ",
                  _react2.default.createElement(
                    "a",
                    { href: "http://wearebrightly.com", target: "_blank", className: "text--link" },
                    "Brightly"
                  ),
                  ", you can ",
                  _react2.default.createElement(
                    "a",
                    { href: "http://music.wearebrightly.com", target: "_blank", className: "text--link" },
                    "hear more on Bandcamp"
                  ),
                  ", follow via ",
                  _react2.default.createElement(
                    "a",
                    { href: "https://www.facebook.com/wearebrightly/", target: "_blank", className: "text--link" },
                    "Facebook"
                  ),
                  " or tweet short love letters to ",
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/wearebrightly", target: "_blank", className: "text--link" },
                    "@wearebrightly"
                  ),
                  "."
                ),
                _react2.default.createElement("img", { className: "logo logo--centered", src: "/assets/images/logo.png" })
              )
            )
          )
        ),
        _react2.default.createElement(
          "a",
          { ref: "close", onClick: function onClick(e) {
              return _this3.handleClose(e);
            }, className: "modal__close" },
          "\u2715"
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;