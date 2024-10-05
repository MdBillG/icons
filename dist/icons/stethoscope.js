"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Stethoscope = function Stethoscope(_ref) {
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
    "class": "stethoscope"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 2v2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 2v2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 15a6 6 0 0 0 12 0v-3"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "20",
    cy: "10",
    r: "2"
  }));
};
var _default = exports["default"] = Stethoscope;