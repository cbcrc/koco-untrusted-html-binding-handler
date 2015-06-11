define(['knockout', 'jquery', 'string-utilities', 'koco-i18next'],
    function(ko, $, stringUtilities, kocoI18next) {
        'use strict';

        ko.bindingHandlers.untrustedHtml = {
            update: function(element, valueAccessor, allBindingsAccessor) {
                var value = ko.unwrap(valueAccessor());
                var i18next = kocoI18next.i18next;
                var defaultText = i18next.t('koco-untrusted-html-binding-handler.defaultText');
                var defaultSettings = {
                    defaultText: '[' + defaultText + ']'
                };

                var settings = $.extend({}, defaultSettings, allBindingsAccessor().utHtmlSettings);

                ko.bindingHandlers.html.update(element,
                    function() {
                        var su = stringUtilities;
                        var santitizedValue = value ? su.stripHtmlFromText(value) : settings.defaultTitle;
                        var trimmedValue = su.trimRight(santitizedValue);
                        return trimmedValue;
                    });
            }
        };
});
