/* output validated with Nu Html Checker (https://validator.w3.org/nu/)
 * no errors or warnings to show
 */

/* Set page language */
htmlLang("en");


/* Page head */
headFavicons();
headMetaCreate("name", "application-name", "Project4Dimensions", 4);
headMetaCreate("name", "keywords", "Project4Dimensions, warping, space-time", 4);
headMetaCreate("name", "research", "Project4Dimensions", 4);
headMetaCreate("name", "development", "Project4Dimensions", 4);
headMetaCreate("name", "description", "Project4Dimensions—warping space-time!", 4);
elementInner("head-title", "", "", "", "Project4Dimensions");

/* Top bar */
navbarTop();
navbarHeader("Project4Dimensions");


/* Top image */
image("page-image", "../assets/images/shadow.gif");


/* Title */
elementInner(
    "body-title",
    "",
    "",
    "",
    "…warping space-time!"
);

/* Accordion */
accordion();

/* Introduction */
accordionItem("accordion", "1", "Introduction", "in");

elementInner(
    "panel-body1",
    "",
    "",
    "",
    "…warping space-time? perhaps…<br>"
            + "yet, radiating algorithmic ripples!"
);


/* Repositories */
accordionItem("accordion", "2", "Repositories", "");

elementInner(
    "panel-body2",
    "",
    "",
    "",
    "…space to disperse, intersperse…<br>"
            + "’n lace computational warp ’n weft.<br>"
            + "<br>"
            + "<a href=\"/detectClicks/\">detectClicks</a><br>"
            + "<a href=\"/detectInternet/\">detectInternet</a><br>"
);


/* Footer */
footer(
    "https://github.com/Project4Dimensions",
    "Project4Dimensions",
    "&#xa0;"
);
