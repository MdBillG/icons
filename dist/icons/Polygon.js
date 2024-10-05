"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["size", "color", "sides", "rotate", "strokeWidth"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var PolygonIcon = function PolygonIcon(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    _ref$sides = _ref.sides,
    sides = _ref$sides === void 0 ? 6 : _ref$sides,
    _ref$rotate = _ref.rotate,
    rotate = _ref$rotate === void 0 ? 0 : _ref$rotate,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
    props = _objectWithoutProperties(_ref, _excluded);
  var points = [];
  var angle = Math.PI * 2 / sides;
  var radius = size / 2 - strokeWidth;
  for (var i = 0; i < sides; i++) {
    points.push([radius * Math.cos(angle * i - Math.PI / 2 + rotate) + size / 2, radius * Math.sin(angle * i - Math.PI / 2 + rotate) + size / 2]);
  }
  var pointsString = points.map(function (point) {
    return point.join(',');
  }).join(' ');
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth
  }, props), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: pointsString
  }));
};
var _default = exports["default"] = PolygonIcon;