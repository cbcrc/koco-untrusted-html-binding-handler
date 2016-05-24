'use strict';

var _knockout = require('knockout');

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _stringUtilities = require('string-utilities');

var _stringUtilities2 = _interopRequireDefault(_stringUtilities);

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_knockout2.default.bindingHandlers.untrustedHtml = {
    update: function update(element, valueAccessor, allBindingsAccessor) {

        var value = _knockout2.default.unwrap(valueAccessor());
        var incomingSettings = value.settings;

        var defaultSettings = {
            defaultText: _i18next2.default.t('koco-untrusted-html-binding-handler.defaultText')
        };
        var settings = _jquery2.default.extend({}, defaultSettings, incomingSettings);

        _knockout2.default.bindingHandlers.html.update(element, function () {
            var su = _stringUtilities2.default;
            var text = _knockout2.default.unwrap(value.text);
            var santitizedValue = text ? su.stripHtmlFromText(text) : settings.defaultText;
            var trimmedValue = su.trimRight(santitizedValue);
            return trimmedValue;
        });
    }
};