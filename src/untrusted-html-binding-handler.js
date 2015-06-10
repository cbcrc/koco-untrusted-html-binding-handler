define(['knockout', 'jquery', 'koco-i18next'],
    function(ko, $, kocoI18next) {
        'use strict';

        ko.bindingHandlers.untrustedHtml = {
            update: function(element, valueAccessor, allBindingsAccessor) {
                var value = ko.unwrap(valueAccessor());
                
                var defaultText = this.kocoI18next.i18next.t('koco-untrusted-html-binding-handler.defaultText');
                var defaultSettings = {
                    defaultText: '[' + defaultText + ']'
                };

                var settings = $.extend({}, defaultSettings, allBindingsAccessor().htmlTitleSettings);

                ko.bindingHandlers.html.update(element,
                    function() {
                        return value ? value.replace(/&nbsp;/gi, ' ').trim() : settings.defaultTitle;
                    });
            }
        };
});
