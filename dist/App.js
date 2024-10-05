"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _logo = _interopRequireDefault(require("./logo.svg"));
require("./App.css");
var _circleArrowOutDownLeft = _interopRequireDefault(require("./icons/circle-arrow-out-down-left"));
var _circleArrowOutDownRight = _interopRequireDefault(require("./icons/circle-arrow-out-down-right"));
var _heart = _interopRequireDefault(require("./icons/heart"));
var _stethoscope = _interopRequireDefault(require("./icons/stethoscope"));
var _heartPulse = _interopRequireDefault(require("./icons/heart-pulse"));
var _heartOff = _interopRequireDefault(require("./icons/heart-off"));
var _handHeart = _interopRequireDefault(require("./icons/hand-heart"));
var _hospital = _interopRequireDefault(require("./icons/hospital"));
var _activity = _interopRequireDefault(require("./icons/activity"));
var _house = _interopRequireDefault(require("./icons/house"));
var _housePlus = _interopRequireDefault(require("./icons/house-plus"));
var _wifi = _interopRequireDefault(require("./icons/wifi"));
var _citrus = _interopRequireDefault(require("./icons/citrus"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: _logo["default"],
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.js"), " and save to reload."), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")), /*#__PURE__*/React.createElement(_circleArrowOutDownLeft["default"], {
    size: "40"
  }), /*#__PURE__*/React.createElement(_circleArrowOutDownRight["default"], {
    color: "#5e6e0c"
  }), /*#__PURE__*/React.createElement(_heart["default"], null), /*#__PURE__*/React.createElement(_stethoscope["default"], null), /*#__PURE__*/React.createElement(_heartPulse["default"], null), /*#__PURE__*/React.createElement(_heartOff["default"], null), /*#__PURE__*/React.createElement(_handHeart["default"], null), /*#__PURE__*/React.createElement(_hospital["default"], null), /*#__PURE__*/React.createElement(_activity["default"], null), /*#__PURE__*/React.createElement(_house["default"], null), /*#__PURE__*/React.createElement(_housePlus["default"], null), /*#__PURE__*/React.createElement(_wifi["default"], null), /*#__PURE__*/React.createElement(_citrus["default"], null));
}
var _default = exports["default"] = App;