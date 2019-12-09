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
    let container_album = document.createElement('div');
    container_album.setAttribute("class", "container_album");

    pets.forEach(pet => {
        pet = pet.pet;

        for (let i = 1; i <= pet["num"]; i++) {

            let polaroid = document.createElement('div');
            polaroid.setAttribute("class", "polaroid");

            let fig = document.createElement('figure');

            let film_wrapper = document.createElement('div');
            film_wrapper.setAttribute("class", "film_wrapper");

            let img = document.createElement('img');
            img.setAttribute("src", `${pet["url"]}0${i}.jpg`);
            img.setAttribute("alt", pet["alt"]);

            film_wrapper.appendChild(img);

            let figcaption = document.createElement('figcaption');
            figcaption.setAttribute("class", "caption");

            let p = document.createElement('p');
            let node = document.createTextNode(pet["caption"]);
            p.appendChild(node);

            figcaption.appendChild(p);

            fig.appendChild(film_wrapper);
            fig.appendChild(figcaption);

            polaroid.appendChild(fig);
            container_album.appendChild(polaroid);
        }

    });

    document.getElementById("photos").appendChild(container_album);
};