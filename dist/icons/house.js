"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var House = function House(_ref) {
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
    "class": "lucide lucide-house"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }));
};
var _default = exports["default"] = House;