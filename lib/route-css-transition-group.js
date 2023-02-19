'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactStaticContainer = require('react-static-container');

var _reactStaticContainer2 = _interopRequireDefault(_reactStaticContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteCSSTransitionGroup = function (_React$Component) {
  _inherits(RouteCSSTransitionGroup, _React$Component);

  function RouteCSSTransitionGroup(props, context) {
    _classCallCheck(this, RouteCSSTransitionGroup);

    var _this = _possibleConstructorReturn(this, (RouteCSSTransitionGroup.__proto__ || Object.getPrototypeOf(RouteCSSTransitionGroup)).call(this, props, context));

    _this.state = {
      previousPathname: null
    };
    return _this;
  }

  _createClass(RouteCSSTransitionGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextContext.location.pathname !== this.context.location.pathname) {
        this.setState({ previousPathname: this.context.location.pathname });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      var previousPathname = this.state.previousPathname;

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        props,
        _react2.default.createElement(
          _reactStaticContainer2.default,
          {
            key: previousPathname || this.context.location.pathname,
            shouldUpdate: !previousPathname
          },
          children
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.previousPathname) {
        this.setState({ previousPathname: null });
      }
    }
  }]);

  return RouteCSSTransitionGroup;
}(_react2.default.Component);

RouteCSSTransitionGroup.contextTypes = {
  location: _react2.default.PropTypes.object
};
exports.default = RouteCSSTransitionGroup;