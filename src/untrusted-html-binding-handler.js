define(['knockout', 'jquery', 'string-utilities', 'koco-i18next'],
    function(ko, $, stringUtilities, kocoI18next) {
        'use strict';

        ko.bindingHandlers.untrustedHtml = {
            update: function(element, valueAccessor, allBindingsAccessor) {
                
                var value = ko.unwrap(valueAccessor());
                var incomingSettings = value.settings;
                
                var i18n = kocoI18next.i18next;
                var defaultSettings = {
                    defaultText: i18n.t('koco-untrusted-html-binding-handler.defaultText')
                };
                var settings = $.extend({}, defaultSettings, incomingSettings);

                ko.bindingHandlers.html.update(element,
                    function() {
                        var su = stringUtilities;
                        var santitizedValue = value.text ? su.stripHtmlFromText(value.text) : settings.defaultText;
                        var trimmedValue = su.trimRight(santitizedValue);
                        return trimmedValue;
                    });
            }
        };
});
