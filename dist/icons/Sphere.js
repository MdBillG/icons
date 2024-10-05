"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Sphere = function Sphere(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 100 : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000s000' : _ref$color;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("radialGradient", {
    id: "sphereGradient",
    cx: "30%",
    cy: "30%",
    r: "70%"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "1"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0.6"
  }))), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    r: "40",
    fill: "url(#sphereGradient)"
  }), /*#__PURE__*/_react["default"].createElement("ellipse", {
    cx: "35",
    cy: "35",
    rx: "10",
    ry: "7",
    fill: "#ffffff",
    fillOpacity: "0.4"
  }));
};
var _default = exports["default"] = Sphere;