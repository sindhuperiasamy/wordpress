window._4ORMAT = window._4ORMAT || {}, window._4ORMAT.importResponsiveUtilities = function() {
    "use strict";
    var e = 767,
        i = 1024,
        t = function() {
            return window.matchMedia("(max-device-width:" + e + "px)").matches
        },
        n = function() {
            return window.matchMedia("(max-device-width:" + i + "px)").matches
        },
        r = {};
    return r.mobile = function() {
        return t()
    }, r.tablet = function() {
        return n()
    }, r.device = function() {
        return n() || t()
    }, r.mobileLandscape = function() {
        return t() && window.matchMedia("(orientation: landscape)").matches
    }, r.fullHeightModeOrDevice = function() {
        return "Full Browser Height" === window._4ORMAT_DATA.theme.gallery_image_height || this.device()
    }, r
};