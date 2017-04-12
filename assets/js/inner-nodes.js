/* validated with JSLint edition 2017-04-10 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsInnerNodes: an algorithm to replace inner HTML element content
 * see https://github.com/Project4Dimensions/jsInnerNodes
 */

function jsInnerNodes(parent, inner) {
    "use strict";
    var a = document.getElementById(parent);
    a.innerHTML = inner;
}
