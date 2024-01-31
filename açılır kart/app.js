const panels = document.querySelectorAll(".panel");

panels.forEach( panel => {
    panel.addEventListener("click", () => {

        removeActive();
        panel.classList.add("active");
    })
    panel.addEventListener("dblclick", () => {


        panel.classList.remove("active");
    })
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}