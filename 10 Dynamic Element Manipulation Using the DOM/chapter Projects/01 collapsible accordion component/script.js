
let elements = document.querySelectorAll(".title");
let texts = document.querySelectorAll(".myText");

elements.forEach((el) => {
    el.addEventListener("click", (e) => {
        console.log(el.nextElementSibling);
        remover();
        el.nextElementSibling.classList.toggle("active");
    })
})

function remover() {
  texts.forEach((ele) => {
    ele.classList.remove("active");
  });
}
