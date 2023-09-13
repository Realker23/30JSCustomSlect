const select_field = document.getElementById("select_field");
const select_text = document.getElementById("select_text");
const list = document.getElementById("list");
let options = document.getElementsByClassName("options");
const arrow = document.getElementById("arrow");

select_field.onclick = function () {
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
};

for (const option of options) {
  option.onclick = () => {
    select_text.innerHTML = option.textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
}
