// all pages uses this JS to grab navigation bar & footer
// from the URL and append on to individual pages

const url_page_attr = "https://gist.githubusercontent.com/miffycs/3918490c03cd9a1e96926973f636b102/raw/fcc18a166f12069ad010c3bb8a2dad4fc14d6aa6/page_attributes.html";

window.onload = function() {
    $("nav").load(`${url_page_attr} nav`);
    $("footer").load(`${url_page_attr} #footer-details`);
};
