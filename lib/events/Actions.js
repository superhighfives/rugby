'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Constants = require('./Constants');

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = function () {
  function Actions() {
    _classCallCheck(this, Actions);
  }

  _createClass(Actions, null, [{
    key: 'start',
    value: function start() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.PLAYING
      });
    }
  }, {
    key: 'dataLoaded',
    value: function dataLoaded() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.DATA_LOADED
      });
    }
  }, {
    key: 'audioLoaded',
    value: function audioLoaded() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.AUDIO_LOADED
      });
    }
  }, {
    key: 'imageryLoaded',
    value: function imageryLoaded() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.IMAGERY_LOADED
      });
    }
  }, {
    key: 'audioFinished',
    value: function audioFinished() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.AUDIO_FINISHED
      });
    }
  }, {
    key: 'status',
    value: function status(currentTime, percentage) {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.STATUS,
        message: { currentTime: currentTime, percentage: percentage }
      });
    }
  }, {
    key: 'finished',
    value: function finished() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.FINISHED
      });
    }
  }, {
    key: 'displayAbout',
    value: function displayAbout() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.DISPLAY_ABOUT
      });
    }
  }, {
    key: 'closeAbout',
    value: function closeAbout() {
      _Dispatcher2.default.dispatch({
        actionType: _Constants2.default.CLOSE_ABOUT
      });
    }
  }]);

  return Actions;
}();

exports.default = Actions;