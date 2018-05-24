/* validated with JSLint edition 2018-03-14 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsWebsite: algorithms to generate a website
 * see https://github.com/Project4Dimensions/jsWebsite
 */

function bsCssRemote() {
    "use strict";
    return "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
}

function bsCssThemeMainRemote() {
    "use strict";
    return "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css";
}

function bsCssThemeRemote() {
    "use strict";
    return "//getbootstrap.com/examples/theme/theme.css";
}
function bsCssCarouselRemote() {
    "use strict";
    return "//getbootstrap.com/examples/carousel/carousel.css";
}

function bsCssNarrowRemote() {
    "use strict";
    return "//getbootstrap.com/examples/jumbotron-narrow/jumbotron-narrow.css";
}

function bsCssNavbarRemote() {
    "use strict";
    return "//getbootstrap.com/examples/navbar/navbar.css";
}

function bsCssRemoteIe10bug() {
    "use strict";
    return "//getbootstrap.com/assets/css/ie10-viewport-bug-workaround.css";
}

function bsCssStickyFooterRemote() {
    "use strict";
    return "//getbootstrap.com/examples/sticky-footer-navbar/sticky-footer-navbar.css";
}

function jQueryRemote() {
    "use strict";
    return "//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js";
}

function bsJsRemote() {
    "use strict";
    return "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
}

function bsJsRemoteIe10bug() {
    "use strict";
    return "//getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js";
}

function htmlLang(lang_txt) {
    "use strict";
    var a = document.getElementsByTagName("html")[0];
    a.setAttribute("lang", lang_txt);
}

function headMetaCreate(attrib, attrib_txt, content_txt, insert_true) {
    "use strict";
    var a = document.getElementsByTagName("head")[0];
    var aa = document.createElement("meta");
    aa.setAttribute(attrib, attrib_txt);
    if (content_txt.trim().length !== 0) {
        aa.setAttribute("content", content_txt);
    }
    if (insert_true !== 0) {
        a.insertBefore(aa, a.children[4]);
        return;
    }
    a.appendChild(aa);
}

function headLinkCreate(rel, type, color, sizes, href) {
    "use strict";
    var a = document.getElementsByTagName("head")[0];
    var aa = document.createElement("link");
    aa.setAttribute("rel", rel);
    if (type.trim().length !== 0) {
        aa.setAttribute("type", type);
    }
    if (color.trim().length !== 0) {
        aa.setAttribute("color", color);
    }
    if (sizes.trim().length !== 0) {
        aa.setAttribute("sizes", sizes);
    }
    aa.setAttribute("href", href);
    a.insertBefore(aa, a.children[4]);
}

function headFavicons(path) {
    "use strict";
    headLinkCreate("shortcut icon", "", "", "", path.concat("assets/favicons/favicon.ico"));
    headLinkCreate("mask-icon", "", "#5bbad5", "", path.concat("assets/favicons/safari-pinned-tab.svg"));
    headLinkCreate("manifest", "", "", "", path.concat("assets/favicons/manifest.json"));
    headLinkCreate("icon", "image/png", "", "16x16", path.concat("assets/favicons/favicon-16x16.png"));
    headLinkCreate("icon", "image/png", "", "32x32", path.concat("assets/favicons/favicon-32x32.png"));
    headLinkCreate("apple-touch-icon", "", "", "180x180", path.concat("assets/favicons/apple-touch-icon.png"));
    headMetaCreate("name", "theme-color", "#ffffff", 1);
    headMetaCreate("name", "msapplication-config", path.concat("assets/favicons/browserconfig.xml"), 1);
}

function navbarTop() {
    "use strict";
    var a = document.getElementById("navbar-top");
    var aa = document.createElement("div");
    var aaa = document.createElement("div");
    var aab = document.createElement("div");
    var aaba = document.createElement("ul");
    a.setAttribute("class", "navbar navbar-default");
    aa.setAttribute("class", "container-fluid");
    aaa.setAttribute("id", "navbar-header");
    aaa.setAttribute("class", "navbar-header");
    aab.setAttribute("id", "navbar");
    aab.setAttribute("class", "collapse navbar-collapse");
    aaba.setAttribute("id", "nav");
    aaba.setAttribute("class", "nav navbar-nav navbar-right");
    aab.appendChild(aaba);
    aa.appendChild(aaa);
    aa.appendChild(aab);
    a.appendChild(aa);
}

function navbarHeader(title) {
    "use strict";
    var a = document.getElementById("navbar-header");
    var aa = document.createElement("button");
    var aaa = document.createElement("span");
    var aaaa = document.createTextNode("Toggle navigation");
    var aab;
    var ab = document.createElement("a");
    var aba = document.createTextNode(title.trim());
    var i = 0;
    aa.setAttribute("type", "button");
    aa.setAttribute("class", "navbar-toggle collapsed");
    aa.setAttribute("data-toggle", "collapse");
    aa.setAttribute("data-target", "#navbar");
    aa.setAttribute("aria-expanded", "false");
    aa.setAttribute("aria-controls", "navbar");
    aaa.setAttribute("class", "sr-only");
    ab.setAttribute("class", "navbar-brand");
    ab.setAttribute("href", "#");
    aaa.appendChild(aaaa);
    aa.appendChild(aaa);
    while (i < 3) {
        aab = document.createElement("span");
        aab.setAttribute("class", "icon-bar");
        aa.appendChild(aab);
        i += 1;
    }
    ab.appendChild(aba);
    a.appendChild(aa);
    a.appendChild(ab);
}

function dropdownMenu(title) {
    "use strict";
    var a = document.getElementById("nav");
    var aa = document.createElement("li");
    var aaa = document.createElement("a");
    var aaaa = document.createTextNode(title.trim() + " ");
    var aaab = document.createElement("span");
    var aab = document.createElement("ul");
    aa.setAttribute("class", "dropdown");
    aaa.setAttribute("href", "#");
    aaa.setAttribute("class", "dropdown-toggle");
    aaa.setAttribute("data-toggle", "dropdown");
    aaa.setAttribute("role", "button");
    aaa.setAttribute("aria-haspopup", "true");
    aaa.setAttribute("aria-expanded", "false");
    aaab.setAttribute("class", "caret");
    aab.setAttribute("id", "dropdown-menu");
    aab.setAttribute("class", "dropdown-menu");
    aaa.appendChild(aaaa);
    aaa.appendChild(aaab);
    aa.appendChild(aaa);
    aa.appendChild(aab);
    a.appendChild(aa);
}

function dropdownItems(items, path, onclick) {
    "use strict";
    var a = document.getElementById("dropdown-menu");
    var aa;
    var aaa;
    var b = Object.keys(items);
    var i = 0;
    while (i < b.length) {
        aa = document.createElement("li");
        aaa = document.createElement("a");
        aaa.setAttribute("href", path + b[i]);
        aaa.setAttribute("onclick", onclick);
        aaa.appendChild(document.createTextNode(items[b[i]]));
        aa.appendChild(aaa);
        a.appendChild(aa);
        i += 1;
    }
}

function dropdownDivider() {
    "use strict";
    var a = document.getElementById("dropdown-menu");
    var aa = document.createElement("li");
    aa.setAttribute("class", "divider");
    a.appendChild(aa);
}

function image(parent, src) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("img");
    aa.setAttribute("class", "img-responsive center-block");
    aa.setAttribute("alt", src);
    aa.setAttribute("src", src);
    if (parent.trim().length === 0) {
        return aa.outerHTML;
    }
    a.appendChild(aa);
}

function carouselItem(id, active, src, caption) {
    "use strict";
    var a = document.getElementById(id + "inner");
    var aa = document.createElement("div");
    var aaa = document.createElement("img");
    var aab = document.createElement("div");
    if (active.trim().length !== 0) {
        active = " active";
    }
    a.setAttribute("role", "listbox");
    aa.setAttribute("class", "item" + active);
    aaa.setAttribute("alt", src);
    aaa.setAttribute("src", src);
    aab.setAttribute("class", "carousel-caption");
    aab.innerHTML = caption;
    aa.appendChild(aaa);
    aa.appendChild(aab);
    a.appendChild(aa);
}

function thumbnails(parent, path, src1, src2, link1, link2, txt1, txt2) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("div");
    var aaa = document.createElement("div");
    var aaaa = document.createElement("a");
    var aaaaa = document.createElement("img");
    var aaaab = document.createElement("div");
    aa.setAttribute("class", "row");
    aaa.setAttribute("class", "col-xs-6 col-md-3");
    aaaa.setAttribute("class", "thumbnail");
    aaaa.setAttribute("href", link1);
    aaaaa.setAttribute("src", path + src1);
    aaaaa.setAttribute("alt", src1);
    aaaab.setAttribute("class", "caption");
    aaaab.innerHTML = txt1;
    aaaa.appendChild(aaaaa);
    aaaa.appendChild(aaaab);
    aaa.appendChild(aaaa);
    aa.appendChild(aaa);
    if (src2.trim().length !== 0) {
        var aab = document.createElement("div");
        var aaba = document.createElement("a");
        var aabaa = document.createElement("img");
        var aabab = document.createElement("div");
        aab.setAttribute("class", "col-xs-6 col-md-3");
        aaba.setAttribute("class", "thumbnail");
        aaba.setAttribute("href", link2);
        aabaa.setAttribute("src", path + src2);
        aabaa.setAttribute("alt", src2);
        aabab.setAttribute("class", "caption");
        aabab.innerHTML = txt2;
        aaba.appendChild(aabaa);
        aaba.appendChild(aabab);
        aab.appendChild(aaba);
        aa.appendChild(aab);
    }
    a.appendChild(aa);
}

function accordion() {
    "use strict";
    var a = document.getElementById("accordion");
    a.setAttribute("class", "panel-group");
    a.setAttribute("role", "tablist");
    a.setAttribute("aria-multiselectable", "true");
}

function accordionItem(parent, id, title, expand) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("div");
    var aaa = document.createElement("div");
    var aaaa = document.createElement("div");
    var aaaaa = document.createElement("span");
    var aab = document.createElement("div");
    var aaba = document.createElement("div");
    if (expand.trim().length !== 0) {
        expand = " in";
    }
    aa.setAttribute("class", "panel panel-default");
    aaa.setAttribute("id", "heading" + id);
    aaa.setAttribute("class", "panel-heading");
    aaa.setAttribute("data-toggle", "collapse");
    aaa.setAttribute("data-target", "#" + id);
    aaa.setAttribute("role", "button");
    aaaa.setAttribute("class", "panel-title");
    aaaaa.setAttribute("class", "caret");
    aab.setAttribute("id", id);
    aab.setAttribute("class", "panel-collapse collapse" + expand);
    aab.setAttribute("role", "tabpanel");
    aaba.setAttribute("id", "panel-body" + id);
    aaba.setAttribute("class", "panel-body");
    aaaa.appendChild(aaaaa);
    aaaa.appendChild(document.createTextNode(" " + title));
    aaa.appendChild(aaaa);
    aab.appendChild(aaba);
    aa.appendChild(aaa);
    aa.appendChild(aab);
    a.appendChild(aa);
}

function panel(id, expand, title, txt) {
    "use strict";
    var a = document.createElement("div");
    var aa = document.createElement("div");
    var ab = document.createElement("div");
    if (expand.trim().length !== 0) {
        expand = " in";
    }
    a.setAttribute("class", "panel panel-default");
    aa.setAttribute("class", "panel-heading");
    aa.setAttribute("data-toggle", "collapse");
    aa.setAttribute("data-target", "#" + id);
    aa.setAttribute("role", "button");
    ab.setAttribute("id", id);
    ab.setAttribute("class", "panel-body panel-collapse collapse" + expand);
    ab.setAttribute("role", "tabpanel");
    aa.innerHTML = title;
    ab.innerHTML = txt;
    a.appendChild(aa);
    a.appendChild(ab);
    return a.outerHTML;
}

function btnLink(txt, link, target, size, collapse) {
    "use strict";
    var a = document.createElement("a");
    if (size.trim().length !== 0) {
        size = " " + size;
    }
    a.setAttribute("class", "btn btn-default" + size);
    a.setAttribute("role", "button");
    a.setAttribute("data-toggle", collapse);
    a.setAttribute("href", link);
    a.setAttribute("target", target);
    a.innerHTML = txt;
    return a.outerHTML;
}

function paras(parent, classTxt, content) {
    "use strict";
    var a = document.getElementById(parent);
    var aa;
    var i = 0;
    while (i < content.length) {
        aa = document.createElement("p");
        aa.setAttribute("class", classTxt);
        aa.innerHTML = content[i];
        a.appendChild(aa);
        i += 1;
    }
}

function carousel(parent, id, numSlides) {
    "use strict";
    var a = document.getElementById(parent);
    var aa;
    var aaa = document.createElement("ol");
    var aaaa;
    var aab = document.createElement("div");
    var aac = document.createElement("a");
    var aaca = document.createElement("span");
    var aacb = document.createElement("span");
    var aad = document.createElement("a");
    var aada = document.createElement("span");
    var aadb = document.createElement("span");
    var i = 0;
    aa = document.createElement("div");
    aa.setAttribute("id", id);
    aa.setAttribute("class", "carousel slide");
    aa.setAttribute("data-ride", "carousel");
    aaa.setAttribute("class", "carousel-indicators");
    aab.setAttribute("id", id + "inner");
    aab.setAttribute("class", "carousel-inner");
    aab.setAttribute("role", "listbox");
    aac.setAttribute("class", "left carousel-control");
    aac.setAttribute("href", "#" + id);
    aac.setAttribute("role", "button");
    aac.setAttribute("data-slide", "prev");
    aaca.setAttribute("class", "glyphicon glyphicon-chevron-left");
    aaca.setAttribute("aria-hidden", "true");
    aacb.setAttribute("class", "sr-only");
    aad.setAttribute("class", "right carousel-control");
    aad.setAttribute("href", "#" + id);
    aad.setAttribute("role", "button");
    aad.setAttribute("data-slide", "next");
    aada.setAttribute("class", "glyphicon glyphicon-chevron-right");
    aada.setAttribute("aria-hidden", "true");
    aadb.setAttribute("class", "sr-only");
    aacb.innerHTML = "Previous";
    aadb.innerHTML = "Next";
    while (i < numSlides) {
        aaaa = document.createElement("li");
        aaaa.setAttribute("data-target", "#" + id);
        aaaa.setAttribute("data-slide-to", i);
        if (i === 0) {
            aaaa.setAttribute("class", "active");
        }
        aaa.appendChild(aaaa);
        i += 1;
    }
    aac.appendChild(aaca);
    aac.appendChild(aacb);
    aad.appendChild(aada);
    aad.appendChild(aadb);
    aa.appendChild(aaa);
    aa.appendChild(aab);
    aa.appendChild(aac);
    aa.appendChild(aad);
    a.appendChild(aa);
}

function form(parent, id, action, onsubmit) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("form");
    aa.setAttribute("id", id);
    aa.setAttribute("name", id);
    //aa.setAttribute("role", "form");
    aa.setAttribute("accept-charset", "utf-8");
    aa.setAttribute("method", "post");
    aa.setAttribute("action", action);
    aa.setAttribute("onsubmit", onsubmit);
    a.appendChild(aa);
}

function fieldset(parent, id, legend) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("fieldset");
    var aaa = document.createElement("legend");
    aa.setAttribute("id", id);
    aaa.setAttribute("class", "text-muted");
    aaa.innerHTML = legend;
    aa.appendChild(aaa);
    a.appendChild(aa);
}

function input(parent, name, type, classTxt, value, description) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("div");
    var aaa = document.createElement("label");
    var aab = document.createElement("input");
    aa.setAttribute("class", "form-group");
    aaa.setAttribute("class", "sr-only");
    aab.setAttribute("type", type);
    aab.setAttribute("class", "form-control" + classTxt);
    aab.setAttribute("name", name);
    aab.setAttribute("value", value);
    aab.setAttribute("placeholder", description);
    aaa.innerHTML = description;
    aa.appendChild(aaa);
    aa.appendChild(aab);
    a.appendChild(aa);
}

function checkbox(parent, name, value, txt, onclick) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("div");
    var aaa = document.createElement("label");
    var aaaa = document.createElement("input");
    var aaab = document.createElement("span");
    aa.setAttribute("class", "checkbox");
    aaaa.setAttribute("type", "checkbox");
    aaaa.setAttribute("name", name);
    aaaa.setAttribute("value", value);
    aaaa.setAttribute("onclick", onclick);
    aaab.setAttribute("class", "text-muted");
    aaab.innerHTML = txt;
    aaa.appendChild(aaaa);
    aaa.appendChild(aaab);
    aa.appendChild(aaa);
    a.appendChild(aa);
}

function textarea(parent, id, rows, description) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("div");
    var aaa = document.createElement("label");
    var aab = document.createElement("textarea");
    aa.setAttribute("class", "form-group");
    aaa.setAttribute("class", "sr-only");
    aab.setAttribute("id", id);
    aab.setAttribute("name", name);
    aab.setAttribute("placeholder", description);
    aab.setAttribute("rows", rows);
    aab.setAttribute("class", "form-control");
    aa.appendChild(aaa);
    aa.appendChild(aab);
    a.appendChild(aa);
}

function helpBlock(parent, txt) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("span");
    aa.setAttribute("class", "help-block");
    aa.innerHTML = txt;
    a.appendChild(aa);
}

function send(parent, name, onclick, description) {
    "use strict";
    var a = document.getElementById(parent);
    var aa = document.createElement("div");
    var aaa = document.createElement("input");
    var aab = document.createElement("button");
    aa.setAttribute("class", "form-group");
    aaa.setAttribute("type", "hidden");
    aaa.setAttribute("name", "utf8");
    aaa.setAttribute("value", "&#x2713;");
    aab.setAttribute("type", "submit");
    aab.setAttribute("name", name);
    aab.setAttribute("value", name);
    aab.setAttribute("class", "btn btn-default");
    aab.setAttribute("onclick", onclick);
    aab.innerHTML = description;
    aa.appendChild(aaa);
    aa.appendChild(aab);
    a.appendChild(aa);
}

function footer(leftLink, leftTxt, rightTxt) {
    "use strict";
    var a = document.getElementById("footer");
    var aa = document.createElement("small");
    var aaa = document.createElement("a");
    var ab = document.getElementById("footer-a");
    var aba = document.createElement("span");
    a.setAttribute("class", "footer text-muted");
    aa.setAttribute("class", "pull-left");
    aaa.setAttribute("href", leftLink);
    ab.setAttribute("class", "pull-right");
    aaa.innerHTML = leftTxt;
    aba.innerHTML = rightTxt;
    aa.appendChild(aaa);
    ab.insertBefore(aba, ab.childNodes[0]);
    a.appendChild(aa);
}

function showHide(id) {
    "use strict";
    var a = document.getElementById(id);
    if (a) {
        a.className = (a.className === "hide")
            ? "show"
            : "hide";
    }
}

function elementInner(parent, element, id, classTxt, inner) {
    "use strict";
    var a = document.getElementById(parent);
    var aa;
    if (element.trim().length !== 0) {
        aa = document.createElement(element);
        if (id.trim().length !== 0) {
            aa.setAttribute("id", id);
        }
        if (classTxt.trim().length !== 0) {
            aa.setAttribute("class", classTxt);
        }
        aa.innerHTML = inner;
        a.appendChild(aa);
        return;
    }
    a.innerHTML = inner;
}
