const url_header_footer = "https://gist.githubusercontent.com/miffycs/3918490c03cd9a1e96926973f636b102/raw/b3abac9ce770f472872b34211057a351738a5af0/page_attributes.html";

$(document).ready(() => {
    $("nav").load(`${url_header_footer} nav`);
    $("footer").load(`${url_header_footer} #footer-details`);
});
