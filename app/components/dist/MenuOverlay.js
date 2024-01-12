"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NavLink_1 = require("./NavLink");
var MenuOverlay = function (_a) {
    var navLinks = _a.navLinks;
    return (react_1["default"].createElement("ul", { className: "flex flex-col items-center md:hidden" }, navLinks.map(function (link) {
        return (react_1["default"].createElement("li", null,
            react_1["default"].createElement(NavLink_1["default"], { href: link.path, title: link.title })));
    })));
};
exports["default"] = MenuOverlay;
