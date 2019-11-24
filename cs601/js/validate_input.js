function validateInputIsPass() {

    /*
     * Null check:
     * <input> tag's 'required' attribute already checks that input cannot be null
     */

    /*
     * JS Regex:
     * '^'        : asserts position at start of the string.
     * '[a-zA-Z]' : matches characters between a (char 97) and z (char 122),
     *                  and characters between A (char 65) and Z (char 90).
     * '{2,}      : quantifier; matches between 2 to unlimited times.
     * '$'        : asserts position at end of the string before line terminates.
     */
    const name_regex = /^[a-zA-Z]{2,}$/;
    
    const facilitatorsList = ["Josh Hanson", "Chris Carducci", "Fazil Harroon"];
    // grabbing only first names (saved as lowercase for easier comparison)
    const facilitatorsFirstNameList = facilitatorsList.map(name => 
        name.split(' ')[0].toLowerCase());

    // all inputs grabbed from form
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const facilitator = document.getElementById("facilitator").value;
    
    // using this bool so func will display all alerts for all failed conditions,
    // and not just terminate right after one of the conditional checks fails
    let allIsPass = true;

    if (!firstName.match(name_regex)) {
        alert("Please check input entered for \"First Name\" !");
        allIsPass = false;
    }

    if (!lastName.match(name_regex)) {
        alert("Please check input entered for \"Last Name\" !");
        allIsPass = false;
    }

    // .includes() is case sensitive, so check using all lower case
    if (!facilitatorsFirstNameList.includes(facilitator.toLowerCase())) {
        alert(`"${facilitator}\" is not an active facilitator this semester!`);
        allIsPass = false;
    }

    return allIsPass;
}