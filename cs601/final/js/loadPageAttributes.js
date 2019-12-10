const url_page_attr = "https://miffychen.tech/cs601/final/page_attributes.html";

window.onload = function() {
    $("nav").load(`${url_page_attr} nav`);
    $("footer").load(`${url_page_attr} #footer-details`);
};
