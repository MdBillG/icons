"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ArrowCircleOutRight = function ArrowCircleOutRight(_ref) {
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
    "class": "lucide lucide-circle-arrow-out-down-right"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 22a10 10 0 1 1 10-10"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 22 12 12"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 16v6h-6"
  }));
};
var _default = exports["default"] = ArrowCircleOutRight;