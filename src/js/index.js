const ww = window.screen.width.toString();
const wh = window.screen.height.toString();
let maximized = false;
const btnExit = document.querySelector(".be");
const btnMm = document.querySelector(".bMm");
const btnmM = document.querySelector(".bmM");
const btnM = document.querySelector(".bm");
const ws = document.querySelector(".espaciodetrabajo");
const wsd = document.querySelector(".espaciodetrabajo").innerHTML;
const newobj = document.querySelector(".newE");

btnExit.addEventListener("click", (e) => {
  window.close();
});

btnMm.addEventListener("click", (e) => {
  if (maximized == false) {
    window.resizeTo(ww, wh);
    maximized = true;
    btnMm.classList.add("hide");
    btnmM.classList.remove("hide");
  }
});

btnmM.addEventListener("click", (e) => {
  if (maximized != false) {
    window.resizeTo(800, 600);
    maximized = false;
    btnMm.classList.remove("hide");
    btnmM.classList.add("hide");
  }
});

btnM.addEventListener("click", (e) => {
  console.log('<!DOCTYPE html><bosdosbod>kajdksjkd'+ wsd);
});

newobj.addEventListener("click", (e) => {
  ws.insertAdjacentHTML("afterbegin","<button>click me</button>");
});