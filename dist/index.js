"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StethoscopeIcon = exports.HeartIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _heart = require("./icons/heart");
var _stethoscope = require("./icons/stethoscope");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HeartIcon = exports.HeartIcon = function HeartIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_heart.ReactComponent, props);
};
var StethoscopeIcon = exports.StethoscopeIcon = function StethoscopeIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_stethoscope.ReactComponent, props);
};
var root = _client["default"].createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals["default"])();