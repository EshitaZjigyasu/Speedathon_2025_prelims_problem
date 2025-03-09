function setupSecret(correctIndex) {
    let encodedSecret = window.btoa("this_is_it");
    let key = 42;

    function decrypt(base64Str, xorKey) {
        let decoded = atob(base64Str);
        return decoded.split("").map(c => String.fromCharCode(c.charCodeAt(0) ^ xorKey)).join("");
    }

    window.checkButton = function(buttonIndex) {
        if (buttonIndex == correctIndex) {
            let secret = decrypt(encodedSecret, key);
            let codeElement = document.getElementById("secretCode");
            codeElement.innerText = secret;
            codeElement.style.display = "block";
        } else {
            alert("Wrong button! Try again.");
        }
    };
}
