function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coordinates: " + x + ", Y coordinates: " + y;
    document.getElementById("coords").innerHTML = coords;
}
