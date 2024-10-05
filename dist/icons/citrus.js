"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Citrus = function Citrus(_ref) {
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
    "class": "lucide lucide-citrus"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.65 15.66A8 8 0 0 1 8.35 4.34"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m14 10-5.5 5.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 17.85V10H6.15"
  }));
};
var _default = exports["default"] = Citrus;