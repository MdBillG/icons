"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ArrowcircleOutLeft = function ArrowcircleOutLeft(_ref) {
  var size = _ref.size,
    color = _ref.color,
    thickness = _ref.thickness;
  var defaultsize = size ? size : "24";
  var deafultColor = color ? color : "currentColor";
  var deafultThickness = thickness ? thickness : "2";
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: defaultsize,
    height: defaultsize,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: deafultColor,
    "stroke-width": deafultThickness,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "arrow-arrow-out-down-left"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 12a10 10 0 1 1 10 10"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "m2 22 10-10"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 22H2v-6"
  })));
};
var _default = exports["default"] = ArrowcircleOutLeft;