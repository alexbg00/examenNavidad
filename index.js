
/* OnClick on img, display none */
function modificarImg(e) {
    const img = document.getElementById("img");
    if(img.classList.contains("active")){
        img.classList.add("noactive");
        img.classList.remove("active");
    } else {
        img.classList.add("active");
        img.classList.remove("noactive");
    }
}
