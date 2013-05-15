/**
 * Javascript picturefill similar to https://github.com/scottjehl/picturefill
 *
 * This jQuery plugin acts as a targetted picture fill. Instead of iterating
 * through every div on the page, specify target divs to apply the picturefill.
 *
 * This plugin utilizes Modernizr's mq() function to match media queries.
 *
 * Media queries are supplied as a data attribute. You can also use the shortcut,
 * :highdensity to automatically target high pixel density displays
 */

"use strict";

(function($, w) {

    $.fn.picturefill = function() {

        var HIGH_DENSITY_PLACEHOLDER = ':highdensity',
            HIGH_DENSITY_VALUE = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)';

        return this.each(function() {
            var sources = this.getElementsByTagName('div'),
                matches = [],
                media;

            for (var i = 0, len = sources.length; i < len; i++) {
                media = sources[i].getAttribute('data-media');
                if (media === HIGH_DENSITY_PLACEHOLDER) {
                    media = HIGH_DENSITY_VALUE;
                }
                if(!media || (Modernizr.mq(media))) {
                    matches.push(sources[i]);
                }
            }

            // Find existing img element
            var img = this.getElementsByTagName('img')[0];

            if (matches.length) {
                if (!img) {
                    img = w.document.createElement('img');
                    img.alt = this.getAttribute('data-alt');
                    this.appendChild(img);
                }
                img.src = matches.pop().getAttribute('data-src');
            } else if (img) {
                this.removeChild(img);
            }

        });
    };

})(jQuery, window);