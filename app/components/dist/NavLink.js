"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var NavLink = function (_a) {
    var href = _a.href, title = _a.title;
    var currentRoute = navigation_1.usePathname();
    return (React.createElement(link_1["default"], { href: href, className: currentRoute === href ? "underline" : "" }, title));
};
exports["default"] = NavLink;
