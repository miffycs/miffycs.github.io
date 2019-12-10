// handle button onclick actions
const url_pets = "https://miffychen.tech/cs601/final/assets/pets.json";
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
