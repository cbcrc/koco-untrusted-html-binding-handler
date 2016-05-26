import ko from 'knockout';
import $ from 'jquery';
import stringUtilities from 'koco-string-utilities';
import i18n from 'i18next';


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
                var text = ko.unwrap(value.text);
                var santitizedValue = text ? su.stripHtmlFromText(text) : settings.defaultText;
                var trimmedValue = su.trimRight(santitizedValue);
                return trimmedValue;
            });
    }
};
