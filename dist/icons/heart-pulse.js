"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HeartPulse = function HeartPulse(_ref) {
  var size = _ref.size,
    color = _ref.color,
    thickness = _ref.thickness;
  var defaultsize = size ? size : "24";
  var deafultColor = color ? color : "currentColor";
  var deafultThickness = thickness ? thickness : "2";
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: defaultsize,
    height: defaultsize,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: deafultColor,
    "stroke-width": deafultThickness,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "lucide lucide-heart-pulse"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
  }));
};
var _default = exports["default"] = HeartPulse;