const btnForward = document.querySelector("#btn-forward");
const btnBackward = document.querySelector("#btn-backward");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const mainBox = document.querySelector(".main-box");
let nextScroll = 0;
let previousScroll = 3;
const scollBox = [0, 330, 660, 990];
const scrollEle = (i) => {
  mainBox.scroll({
    left: scollBox[i],
    behavior: "smooth",
  });
};
btnForward.addEventListener("click", () => {
  nextScroll++;
  if (nextScroll > 0) {
    backward.style.display = "flex";
  }
  if (nextScroll === 3) {
    forward.style.display = "none";
  }
  scrollEle(nextScroll);
  previousScroll = nextScroll - 1;
});

btnBackward.addEventListener("click", () => {
  if (previousScroll < 3) {
    forward.style.display = "flex";
  }
  scrollEle(previousScroll);
  previousScroll--;
  nextScroll = previousScroll + 1;
  if (previousScroll === -1) {
    backward.style.display = "none";
    previousScroll = 3;
  }
});

var textItems = document.querySelectorAll("#text-item");

textItems.forEach(ele=>{
  ele.innerText = ele.innerText.substring(0,37)+"...";
})
