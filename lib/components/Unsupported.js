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

var Unsupported = function (_React$Component) {
  _inherits(Unsupported, _React$Component);

  function Unsupported() {
    _classCallCheck(this, Unsupported);

    return _possibleConstructorReturn(this, (Unsupported.__proto__ || Object.getPrototypeOf(Unsupported)).apply(this, arguments));
  }

  _createClass(Unsupported, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "unsupported helper-spacing" },
        _react2.default.createElement(
          "hgroup",
          { className: "text--serif text--shadow text--sm" },
          _react2.default.createElement(
            "h2",
            { className: "text--uppercase text--spaced text--bold" },
            "Brightly"
          ),
          _react2.default.createElement(
            "h1",
            { className: "text--xl text--italic" },
            "Rugby"
          )
        ),
        _react2.default.createElement(
          "h1",
          { className: "text--serif text--uppercase text--spaced text--sm" },
          "Unsupported browser"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Friend! It looks like you're using a browser that doesn't support the fancy features that this music video requires. But fear not! All is not lost."
        ),
        _react2.default.createElement(
          "p",
          null,
          "As it uses a bunch of new browser technologies, it works best in the latest ",
          _react2.default.createElement(
            "a",
            { href: "https://www.google.com/chrome/", target: "_blank", className: "text--link" },
            "Google Chrome"
          ),
          ", which you can download for your phone, tablet or other gadget."
        ),
        _react2.default.createElement(
          "p",
          null,
          "In the meantime, if you'd like to support Brightly, you can ",
          _react2.default.createElement(
            "a",
            { href: "http://music.wearebrightly.com/", target: "_blank", className: "text--link" },
            "listen to the album"
          ),
          ", follow on ",
          _react2.default.createElement(
            "a",
            { href: "https://www.facebook.com/wearebrightly/", target: "_blank", className: "text--link" },
            "Facebook"
          ),
          " or tweet short love letters things to ",
          _react2.default.createElement(
            "a",
            { href: "https://twitter.com/wearebrightly", target: "_blank", className: "text--link" },
            "@wearebrightly"
          ),
          "."
        )
      );
    }
  }]);

  return Unsupported;
}(_react2.default.Component);

exports.default = Unsupported;