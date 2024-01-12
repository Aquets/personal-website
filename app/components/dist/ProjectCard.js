"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var ProjectCard = function (_a) {
    var project = _a.project;
    return (react_1["default"].createElement("div", { className: "flex flex-col" },
        react_1["default"].createElement("h3", { className: "text-2xl py-3 font uppercase" },
            project.name,
            " ",
            react_1["default"].createElement("sup", { className: "text-sm" }, project.year)),
        react_1["default"].createElement("div", { className: "overflow-hidden rounded-lg" },
            react_1["default"].createElement(image_1["default"], { src: project.cover, alt: project.name, width: 720, height: 720, style: {
                    width: "100%",
                    height: "auto"
                } })),
        react_1["default"].createElement("p", { className: "py-2" }, project.shortDescription),
        project.categories.map(function (cat) {
            return react_1["default"].createElement("p", null, cat);
        })));
};
exports["default"] = ProjectCard;
