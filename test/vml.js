/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "https://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
  }]
}
!*/
/* DOC
Detects support for VML.
*/
var Modernizr = require('./../lib/Modernizr.js');
var createElement = require('./../lib/createElement.js');
var isSVG = require('./../lib/isSVG.js');
  Modernizr.addTest('vml', function() {
    var containerDiv = createElement('div');
    var supports = false;
    var shape;

    if (!isSVG) {
      containerDiv.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
      shape = containerDiv.firstChild;
      if ('style' in shape) {
        shape.style.behavior = 'url(#default#VML)';
      }
      supports = shape ? typeof shape.adj == 'object' : true;
    }

    return supports;
  });

