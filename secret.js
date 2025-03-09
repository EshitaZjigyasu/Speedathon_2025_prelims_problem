function setupSecret(correctIndex) {
    let encodedSecret = "SCQHBB4O"; // Encrypted version of "H4CK3D!" (Base64 + XOR)
    let key = 42; // XOR key (can be changed)

    function decrypt(base64Str, xorKey) {
        let decoded = atob(base64Str); // Decode Base64
        return decoded.split("").map(c => String.fromCharCode(c.charCodeAt(0) ^ xorKey)).join(""); // XOR decrypt
    }

    window.checkButton = function(buttonIndex) {
        if (buttonIndex === correctIndex) {
            let secret = decrypt(encodedSecret, key); // Decrypt the secret
            let codeElement = document.getElementById("secretCode");
            codeElement.innerText = "Secret Code: " + secret;
            codeElement.style.display = "block";
        } else {
            alert("Wrong button! Try again.");
        }
    };
}
