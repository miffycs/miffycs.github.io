window.onload = function() {

    $("#pet-album").on("click", ".polaroid", function (event) {
        
        let modal = document.getElementById("modal");
        let modalImg = document.getElementById("modalImg");
        let captionText = document.getElementById("caption");

        let img = this.querySelector("img");
        let figcaption_p = this.querySelector("figcaption p");

        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = figcaption_p.innerHTML;

    });

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

};