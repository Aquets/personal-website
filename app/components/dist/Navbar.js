"use client";
"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var NavLink_1 = require("./NavLink");
var MenuOverlay_1 = require("./MenuOverlay");
var navLinks = [
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Experiments",
        path: "/experiments"
    },
    {
        title: "Info",
        path: "/info"
    },
    {
        title: "Contact",
        path: "/contact"
    },
];
exports.Navbar = function () {
    var _a = react_1.useState(false), navbarOpen = _a[0], setNavbarOpen = _a[1];
    return (react_1["default"].createElement("nav", { className: "fixed top-0 left-0 right-0 " },
        react_1["default"].createElement("div", { className: "flex flex-wrap justify-between items-center " },
            react_1["default"].createElement(link_1["default"], { href: "/" }, "Alessandro Quets"),
            react_1["default"].createElement("div", { className: "mobile-menu block md:hidden" },
                react_1["default"].createElement("button", { onClick: function () { return setNavbarOpen(!navbarOpen); } }, navbarOpen ? "X" : "=")),
            react_1["default"].createElement("div", { className: "menu hidden md:block" },
                react_1["default"].createElement("ul", { className: "flex flex-row space-x-5" }, navLinks.map(function (link) {
                    return (react_1["default"].createElement("li", null,
                        react_1["default"].createElement(NavLink_1["default"], { href: link.path, title: link.title })));
                })))),
        navbarOpen ? react_1["default"].createElement(MenuOverlay_1["default"], { navLinks: navLinks }) : null));
};
