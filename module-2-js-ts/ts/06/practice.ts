const userName = "";
const welcomeMsg: HTMLElement | null = document.getElementById("welcome-msg");

if (welcomeMsg) {
    const reName = welcomeMsg.textContent += userName.length === 0 ? ` Guest` : userName;
    console.log(reName)
} else {
    console.log("Element not found")
}
