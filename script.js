
function toggleInput() {
    var input = document.querySelector("input");
    var container = document.querySelector(".container");
    container.classList.toggle("expanded");
    if (container.classList.contains("expanded")) {
        input.focus();
    }
}
