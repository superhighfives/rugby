"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _Dispatcher = require("../events/Dispatcher");

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Constants = require("../events/Constants");

var _Constants2 = _interopRequireDefault(_Constants);

var _Actions = require("../events/Actions");

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageIndex = function (_React$Component) {
  _inherits(PageIndex, _React$Component);

  function PageIndex() {
    _classCallCheck(this, PageIndex);

    var _this = _possibleConstructorReturn(this, (PageIndex.__proto__ || Object.getPrototypeOf(PageIndex)).call(this));

    _this.state = { dataLoaded: false, audioLoaded: false, imageryLoaded: false, playable: false, playing: false };
    return _this;
  }

  _createClass(PageIndex, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _Dispatcher2.default.register(function (action) {
        switch (action.actionType) {
          case _Constants2.default.DATA_LOADED:
            _this2.setState({ dataLoaded: true });
            break;
          case _Constants2.default.AUDIO_LOADED:
            _this2.setState({ audioLoaded: true });
            break;
          case _Constants2.default.IMAGERY_LOADED:
            _this2.setState({ imageryLoaded: true });
            break;
          case _Constants2.default.PLAYING:
            _this2.setState({ playing: true });
            break;
        }
      });
    }
  }, {
    key: "handlePlay",
    value: function handlePlay(e) {
      _Actions2.default.start();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.playable && this.state.dataLoaded && this.state.audioLoaded && this.state.imageryLoaded) {
        this.preplay = true;
        setTimeout(function () {
          _this3.setState({ playable: true });
        }, 500);
      }
      var playable = this.state.dataLoaded && this.state.audioLoaded && this.state.imageryLoaded;
      return this.state.playing ? null : _react2.default.createElement(
        "div",
        { className: "page helper-spacing", ref: "page" },
        _react2.default.createElement(
          "hgroup",
          { className: "text--serif text--shadow text--sm text--center" },
          _react2.default.createElement("img", { className: "logo", src: "/assets/images/logo.png" }),
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
          "div",
          null,
          this.state.playable ? _react2.default.createElement(
            "a",
            { className: "button", onClick: function onClick(e) {
                return _this3.handlePlay(e);
              } },
            "Play"
          ) : _react2.default.createElement(
            "div",
            { className: "fetching " + (this.preplay ? "fetching--complete" : "") },
            _react2.default.createElement("img", { src: "/assets/images/preloader.svg", width: "12", height: "12" }),
            _react2.default.createElement(
              "span",
              null,
              " Fetching "
            ),
            _react2.default.createElement(
              "span",
              { className: "fetching__item " + (this.state.dataLoaded ? "fetching__item--complete" : "") },
              "lyrics"
            ),
            _react2.default.createElement(
              "span",
              null,
              " / "
            ),
            _react2.default.createElement(
              "span",
              { className: "fetching__item " + (this.state.audioLoaded ? "fetching__item--complete" : "") },
              "audio"
            ),
            _react2.default.createElement(
              "span",
              null,
              " / "
            ),
            _react2.default.createElement(
              "span",
              { className: "fetching__item " + (this.state.imageryLoaded ? "fetching__item--complete" : "") },
              "gifs"
            ),
            _react2.default.createElement(
              "span",
              { className: "fetching__waiting" },
              "(Sorry for the wait...)"
            )
          )
        )
      );
    }
  }]);

  return PageIndex;
}(_react2.default.Component);

exports.default = PageIndex;