# jQuery.picturefill

This is an implementation of Scott Jehl's [scottjehl/picturefill](https://github.com/scottjehl/picturefill) wrapped as 
a jQuery plugin. It has been tested with jQuery 1.9 and utilizes `[Modernizr.mq()](http://modernizr.com/docs/#mq)` for testing 
media queries. 

## Why?

I decided to make this because I wasn't totally happy with the fact that the original picturefill looked for any `div` with a 
data-picture attribute. I often only had a handful of images that needed to be made responsive and I felt it would be better to
target them individually or through any common selector. I usually use a class but data-attributes work just as well. Since most 
of my projects use jQuery and Modernizr, it made sense to work with those libraries.

## Good to know

This plugin does not implement the listeners present in [scottjehl/picturefill](https://github.com/scottjehl/picturefill). It 
made more sense to me to allow these to be implemented on the developer's terms. 

There is also a special query that can be passed to target high pixel density displays such as retina devices. By passing `:highdensity` 
as the media query, it will be replaced by `(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)`. 
Since it is such a long query with all the vendor specific properties, I thought it would be nice to not have to rewrite it.

## Sample implementation

Your markup should be formatted the same as when using [scottjehl/picturefill](https://github.com/scottjehl/picturefill). The only
difference is the above mentioned `:highdensity` "psuedo query" for when you want to target retina displays.

```html
<div class="picture" data-alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
    <div data-src="small.jpg"></div>
    <div data-src="medium.jpg"     data-media="(min-width: 400px)"></div>
    <div data-src="large.jpg"      data-media="(min-width: 800px)"></div>
    <div data-src="extralarge.jpg" data-media="(min-width: 1000px)"></div>
    <div data-src="extralarge@2x.jpg" data-media=":highdensity"></div>

    <!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
    <noscript>
        <img src="external/imgs/small.jpg" alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
    </noscript>
</div>
```

You can apply the picturefill with the following Javascript. It is up to you to decide when it's appropriate to call the function.
```js
$('.client-logo').picturefill();
```
