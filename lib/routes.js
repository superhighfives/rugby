"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _App = require("./components/App");

var _App2 = _interopRequireDefault(_App);

var _Index = require("./components/Index");

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { name: "app", component: _App2.default, path: "/" },
  _react2.default.createElement(_reactRouter.IndexRoute, { name: "index", component: _Index2.default })
);