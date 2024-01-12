"use strict";
exports.__esModule = true;
var react_1 = require("react");
var projects_json_1 = require("../projects.json");
var ProjectCard_1 = require("./ProjectCard");
var ProjectsSection = function () {
    return (react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, projects_json_1["default"].map(function (project) {
        return react_1["default"].createElement(ProjectCard_1["default"], { project: project });
    })));
};
exports["default"] = ProjectsSection;
