(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['knockout', 'jquery', 'koco-string-utilities', 'i18next'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('knockout'), require('jquery'), require('koco-string-utilities'), require('i18next'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.knockout, global.jquery, global.kocoStringUtilities, global.i18next);
        global.untrustedHtmlBindingHandler = mod.exports;
    }
})(this, function (_knockout, _jquery, _kocoStringUtilities, _i18next) {
    'use strict';

    var _knockout2 = _interopRequireDefault(_knockout);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _kocoStringUtilities2 = _interopRequireDefault(_kocoStringUtilities);

    var _i18next2 = _interopRequireDefault(_i18next);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _knockout2.default.bindingHandlers.untrustedHtml = {
        update: function update(element, valueAccessor, allBindingsAccessor) {

            var value = _knockout2.default.unwrap(valueAccessor());
            var incomingSettings = value.settings;

            var defaultSettings = {
                defaultText: _i18next2.default.t('koco-untrusted-html-binding-handler.defaultText')
            };
            var settings = _jquery2.default.extend({}, defaultSettings, incomingSettings);

            _knockout2.default.bindingHandlers.html.update(element, function () {
                var su = _kocoStringUtilities2.default;
                var text = _knockout2.default.unwrap(value.text);
                var santitizedValue = text ? su.stripHtmlFromText(text) : settings.defaultText;
                var trimmedValue = su.trimRight(santitizedValue);
                return trimmedValue;
            });
        }
    };
});