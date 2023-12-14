function bigger() {
    const info = document.getElementById("info");
    info.style.fontSize = "24pt";
    alert("You pressed the Bigger button!");
}

function modifyStyles() {
    const info = document.getElementById("info");
    const fancy = document.querySelector("#fancy");
    const boring = document.querySelector("#boring");

    if(fancy.checked){
        info.style.fontWeight = "bold";
        info.style.color = "blue";
        info.style.textDecoration = "underline";
        alert("You chose FancyShmancy!");
    }

    if(boring.checked){
        info.style.fontWeight = "normal";
        info.style.color = "black";
        info.style.textDecoration = "none";
        alert("You chose BoringBetty...");
    }
}

function addMoo() {
    const info = document.getElementById("info");
    info.value = info.value.toUpperCase();
    info.value = info.value.split(".").join("-Moo.");
    alert("Moo.");
}