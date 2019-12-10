// handle button onclick actions
const url_pets = "https://gist.githubusercontent.com/miffycs/277dc656f33f5b900a5f893135953d51/raw/fcd8156b513d551744c42104b8bf218598fdc28f/pets.json";
makeRequest(url_pets);

// takes url, creates XMLHttpRequest to fetch data
function makeRequest(url_pets) {

    let xmlhttp = new XMLHttpRequest();

    if (!xmlhttp) {
        alert("Cannot create an XMLHTTP instance");
        return false;
    }

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let dataObj = JSON.parse(this.responseText);
            let pets = dataObj.pets;
            appendData(pets);

            checkClicks();
        }
    };
    xmlhttp.open("GET", url_pets, true);
    xmlhttp.send();
}

// append data fetched in table format
function appendData(data) {

    // data passed in
    const pets = data;

    // create album
    let container_album = $('<div/>', { class: 'container_album', id: 'pet-album' });

    pets.forEach(pet => {
        pet = pet.pet;

        for (let i = 1; i <= pet["num"]; i++) {

            let polaroid = $('<div/>', { class: 'polaroid', id: `plr-${pet["id"]}0${i}` });
            let figure = $('<figure/>');
            let film_wrapper = $('<div/>', { class: 'film_wrapper' });
            let figcaption = $('<figcaption/>', { class: 'caption' });

            $(film_wrapper).append(
                $('<img>', {
                    id: `img-${pet["id"]}0${i}`,
                    src: `${pet["url"]}0${i}.jpg`,
                    alt: pet["alt"]
                })
            );

            $(figcaption).append(`<p>${pet["caption"]}</p>`);

            $(figure).append(film_wrapper);
            $(figure).append(figcaption);

            $(polaroid).append(figure);
            $(container_album).append(polaroid);
        }

    });

    $("#photos").append(container_album);
};


function checkClicks() {

    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");

    $("#pet-album").on("click", ".polaroid", function (event) {

        let img = this.querySelector("img");
        let figcaption_p = this.querySelector("figcaption p");

        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = figcaption_p.innerHTML;

    });

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

};