var userName = "";
var welcomeMsg = document.getElementById("welcome-msg");
if (welcomeMsg) {
    var reName = welcomeMsg.textContent += userName.length === 0 ? " Guest" : userName;
    console.log(reName);
}
else {
    console.log("Element not found");
}
