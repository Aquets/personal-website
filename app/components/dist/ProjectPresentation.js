"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var html_react_parser_1 = require("html-react-parser");
var Pill_1 = require("./Pill");
var SectionHeader_1 = require("./SectionHeader");
var ProjectCard_1 = require("./ProjectCard");
var projects_json_1 = require("../projects.json");
var ProjectPresentation = function () {
    var lastSegmentOfUrl = navigation_1.usePathname()
        .substring(navigation_1.usePathname().lastIndexOf("/") + 1)
        .replace(".html", "");
    var project = projects_json_1["default"].find(function (i) { return i.id === lastSegmentOfUrl; });
    project ? projects_json_1["default"][0] : project;
    var cover = "/images/projects/" + project.id + "/cover.png";
    var projectIndex = projects_json_1["default"].findIndex(function (p) { return p.id == project.id; });
    var indexes = [];
    for (var i = 0; i < 3; i++) {
        var index = 0;
        if (i == 0) {
            index = projectIndex;
        }
        else {
            index = indexes[indexes.length - 1];
        }
        if (index >= projects_json_1["default"].length - 1) {
            index = index - projects_json_1["default"].length + 1;
        }
        else {
            index++;
        }
        indexes.push(index);
    }
    var otherProjects = [
        projects_json_1["default"].at(indexes[0]),
        projects_json_1["default"].at(indexes[1]),
        projects_json_1["default"].at(indexes[2]),
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flex flex-col gap-5" },
            react_1["default"].createElement("div", { className: "flex flex-row justify-between" },
                react_1["default"].createElement("h1", { className: "text-large font uppercase" },
                    project.name,
                    " ",
                    react_1["default"].createElement("sup", { className: "text-sm" }, project.year))),
            react_1["default"].createElement("div", { className: "overflow-hidden rounded-lg" },
                react_1["default"].createElement(image_1["default"], { src: cover, alt: project.name, width: 1080, height: 1080, style: {
                        width: "100%",
                        height: "100%"
                    }, className: "object-cover" }))),
        react_1["default"].createElement("div", { className: "flex flex-row flex-wrap justify-between gap-10 lg:gap-0" },
            react_1["default"].createElement("p", { className: "text-large basis-full lg:basis-3/4 pr-10" }, html_react_parser_1["default"](project.description)),
            react_1["default"].createElement("div", { className: "flex flex-col gap-8 basis-full lg:basis-1/4" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(SectionHeader_1["default"], { title: "Client" }),
                    react_1["default"].createElement("p", { className: "text-xl" }, project.client)),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(SectionHeader_1["default"], { title: "Role" }),
                    react_1["default"].createElement("p", { className: "text-xl" }, project.role)),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(SectionHeader_1["default"], { title: "Categories" }),
                    react_1["default"].createElement("div", { className: "flex flex-col gap-2 items-start" }, project.categories.map(function (cat) {
                        return react_1["default"].createElement(Pill_1["default"], { key: cat, small: true, content: cat });
                    }))))),
        react_1["default"].createElement("div", { className: "flex flex-col gap-5" }, project.images
            ? project.images.map(function (image) {
                return (react_1["default"].createElement("div", { className: "overflow-hidden rounded-lg", key: image },
                    react_1["default"].createElement(image_1["default"], { src: "/images/projects/" + project.id + "/" + image, alt: image, width: 1080, height: 1080, style: {
                            width: "100%",
                            height: "100%"
                        }, className: "object-cover" })));
            })
            : null),
        project.collaborators ? (react_1["default"].createElement("div", null,
            react_1["default"].createElement(SectionHeader_1["default"], { title: "Team" }),
            react_1["default"].createElement("div", null, project.collaborators
                ? project.collaborators.map(function (collaborator) {
                    return (react_1["default"].createElement("p", { className: "text-xl", key: collaborator }, collaborator));
                })
                : null))) : null,
        react_1["default"].createElement("div", { className: "pt-20" },
            react_1["default"].createElement(SectionHeader_1["default"], { title: "Other projects" }),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" }, otherProjects.map(function (p) {
                return (react_1["default"].createElement(ProjectCard_1["default"], { key: p.id, project: p, small: true }));
            })))));
};
exports["default"] = ProjectPresentation;
