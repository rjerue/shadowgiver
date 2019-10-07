"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(elevation, color) {
    var shadowOffset = { width: 0, height: 0.5 * elevation };
    var shadowOpacity = 0.3;
    var shadowRadius = 0.8 * elevation;
    var shadowColor = color || 'black';
    return { shadowOffset: shadowOffset, shadowColor: shadowColor, shadowOpacity: shadowOpacity, shadowRadius: shadowRadius };
}
exports.calculate = calculate;
/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow. This version ONLY returns web box shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */
function shadowgiver(elevation, color) {
    var shadow = calculate(elevation, color);
    return webShadow(shadow);
}
exports.shadowgiver = shadowgiver;
function webShadow(_a) {
    var shadowOffset = _a.shadowOffset, shadowRadius = _a.shadowRadius, shadowColor = _a.shadowColor;
    return {
        boxShadow: shadowOffset.width + "px " + shadowOffset.height + "px " + shadowRadius + "px " + shadowColor,
    };
}
exports.webShadow = webShadow;
//# sourceMappingURL=index.js.map