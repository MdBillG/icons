"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Wifi = function Wifi(_ref) {
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
    "class": "lucide lucide-wifi"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 20h.01"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 8.82a15 15 0 0 1 20 0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 12.859a10 10 0 0 1 14 0"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.5 16.429a5 5 0 0 1 7 0"
  }));
};
var _default = exports["default"] = Wifi;