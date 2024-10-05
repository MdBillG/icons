"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Hospital = function Hospital(_ref) {
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
    "class": "lucide lucide-hospital"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 6v4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 14h-4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 18h-4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 8h-4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"
  }));
};
var _default = exports["default"] = Hospital;