function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}
//<body onmousemove="showCoords(event)">
//<div id="demo">Move the mouse on screen</div>
//<script type="text/javascript" src="cursor_coordinates.js"></script>