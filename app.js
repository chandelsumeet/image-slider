const imageContainer = document.getElementById("image-container-id");
let imgList = document.querySelectorAll("#image-container-id img");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
console.log(imgList);

let idx = 0;
let interval = setInterval(init, 2000);

function init() {
  idx++;
  changeImg();
}

function changeImg() {
  console.log(idx, idx * 500);
  if (idx > imgList.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgList.length - 1;
  }
  imageContainer.style.transform = `translateX(${(-idx) * 500}px)`;
}

next.addEventListener("click", () => {
  idx++;
  changeImg();
  clearInterval(interval);
  interval = setInterval(init,2000);
});
prev.addEventListener("click", () => {
  idx--;
  changeImg();
  clearInterval(interval);
  interval = setInterval(init,2000);
});