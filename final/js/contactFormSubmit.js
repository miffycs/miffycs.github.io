function submitForm() {

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
    // can be 1 letter or 2 letters each longer than 2 ch
    const regex_name = /^[a-zA-Z]{2,}\s?[a-zA-Z]{2,}?$/;

    /*
     * Regex validation for email:
     * 
     * 'local' :
     *   - a-z A-Z
     *   - 0-9 digits
     *   - !#$%&'*+-/=?^_`{|}~
     *   - . if it's not first or last ch
     *   - "(),:;<>@[\] allowed inside a quoted string
     *   - length = 2-64
     * 
     * 'domain server' :
     *   - a-z A-Z
     *   - 0-9 digits
     *   - - if it's not first or last ch
     *   - [IP address literal] surrounded with []
     *   - length > 1
     * 
     * 'TLD' :
     *   - a-z A-Z
     *   - length > 2
     * 
     * 'domain + TLD' :
     *   - length not exceeding 253
     */
    // rules are too complicated, just went with 'simple' version:
    // [non-white-space-ch]{2-64 ch}[@][([non-white-space-ch]{len>=1}[.][non-white-space-ch]{len>=2})]{4-253 ch}
    const regex_email_simple = /^\S{2,64}@[\S{1,}\.\w{2,}]{4,253}$/;

    // all inputs grabbed from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // using this bool so func will display all alerts for all failed conditions,
    // and not just terminate right after one of the conditional checks fails
    let isPass = true;

    if (!name.match(regex_name)) {
        let warning = document.getElementById("warning_invalid");
        warning.innerHTML = "Name did not match pattern of: 1 letter or 2 letters \
            (no numbers or special characters)!";
        warning.setAttribute("class", "warnings");
        isPass = false;
    }

    if (!email.match(regex_email_simple)) {
        let warning = document.getElementById("warning_invalid");
        warning.innerHTML = "Invalid email! Are you sure that is really your email?";
        warning.setAttribute("class", "warnings");
        isPass = false;
    }

    return isPass;
}