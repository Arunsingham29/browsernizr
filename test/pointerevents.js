/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs","pep"]
}
!*/
/* DOC
Detects support for the DOM Pointer Events API, which provides a unified event interface for pointing input devices, as implemented in IE10+.
*/
var Modernizr = require('./../lib/Modernizr.js');
var domPrefixes = require('./../lib/domPrefixes.js');
var hasEvent = require('./../lib/hasEvent.js');
  // **Test name hijacked!**
  // Now refers to W3C DOM PointerEvents spec rather than the CSS pointer-events property.
  Modernizr.addTest('pointerevents', function() {
    // Cannot use `.prefixed()` for events, so test each prefix
    var bool = false,
      i = domPrefixes.length;

    // Don't forget un-prefixed...
    bool = Modernizr.hasEvent('pointerdown');

    while (i-- && !bool) {
      if (hasEvent(domPrefixes[i] + 'pointerdown')) {
        bool = true;
      }
    }
    return bool;
  });

