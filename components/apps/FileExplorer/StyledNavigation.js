"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var StyledNavigation = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgb(25, 25, 25);\n  display: flex;\n  height: ", ";\n\n  svg {\n    color: #fff;\n    fill: currentColor;\n    height: 16px;\n    transition: color 0.35s ease;\n    width: 16px;\n  }\n\n  > button {\n    height: 16px;\n    max-height: 36px;\n    max-width: 34px;\n    min-height: 36px;\n    min-width: 34px;\n\n    &[title^=\"Home\"] {\n      max-width: 0px;\n      min-width: 0px;\n      position: relative;\n      right: 15px;\n      top: -2px;\n    }\n\n    &[title=\"Recent locations\"] {\n      left: -15px;\n      position: relative;\n\n      svg {\n        stroke: currentColor;\n        stroke-width: 3px;\n        width: 16px;\n      }\n    }\n\n    &:active {\n      svg {\n        color: rgb(54, 116, 178);\n        transition: none;\n      }\n    }\n\n    &:hover {\n      svg {\n        color: rgb(50, 152, 254);\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: rgb(140, 140, 140);\n      }\n    }\n  }\n"], ["\n  background-color: rgb(25, 25, 25);\n  display: flex;\n  height: ", ";\n\n  svg {\n    color: #fff;\n    fill: currentColor;\n    height: 16px;\n    transition: color 0.35s ease;\n    width: 16px;\n  }\n\n  > button {\n    height: 16px;\n    max-height: 36px;\n    max-width: 34px;\n    min-height: 36px;\n    min-width: 34px;\n\n    &[title^=\"Home\"] {\n      max-width: 0px;\n      min-width: 0px;\n      position: relative;\n      right: 15px;\n      top: -2px;\n    }\n\n    &[title=\"Recent locations\"] {\n      left: -15px;\n      position: relative;\n\n      svg {\n        stroke: currentColor;\n        stroke-width: 3px;\n        width: 16px;\n      }\n    }\n\n    &:active {\n      svg {\n        color: rgb(54, 116, 178);\n        transition: none;\n      }\n    }\n\n    &:hover {\n      svg {\n        color: rgb(50, 152, 254);\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: rgb(140, 140, 140);\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.sizes.fileExplorer.navBarHeight;
});
exports.default = StyledNavigation;
var templateObject_1;
