define(['knockout', 'jquery', 'string-utilities', 'i18next'],
    function(ko, $, stringUtilities, i18n) {
        'use strict';

        ko.bindingHandlers.untrustedHtml = {
            update: function(element, valueAccessor, allBindingsAccessor) {
                
                var value = ko.unwrap(valueAccessor());
                var incomingSettings = value.settings;
                
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
