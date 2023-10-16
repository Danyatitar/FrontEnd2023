const title = document.getElementById("title");
const birth = document.querySelector(".birth");
const body = document.querySelector(".body");
let inBtn = document.querySelectorAll(".in");
let outBtn = document.querySelectorAll(".out");
const addBtn = document.querySelector(".add");
let deleteBtn = document.querySelectorAll(".delete");
let imgIndex = [2, 3, 4];

title.addEventListener("click", () => {
  title.classList.toggle("green");
});

birth.addEventListener("click", () => {
  birth.classList.toggle("blue");
});

inBtn.forEach((item, index) => {
  item.addEventListener("click", () => handleInButtonClick(index));
});

outBtn.forEach((item, index) => {
  item.addEventListener("click", () => handleOutButtonClick(index));
});

addBtn.addEventListener("click", () => {
  if (imgIndex.length !== 0) {
    const selector = `.container-${imgIndex[0]}`;
    const element = document.querySelector(selector);
    element.classList.remove("hidden");
  }
  imgIndex.shift();
  console.log(imgIndex);
});

deleteBtn.forEach((item, index) => {
  item.addEventListener("click", () => handleDeleteButtonClick(index));
});

function handleOutButtonClick(index) {
  const selector = `.img${index + 1}`;
  const image = document.querySelector(selector);
  console.log(image);
  const currWidth = image.clientWidth;
  const currHeight = image.clientHeight;
  if (currHeight > 400 && currWidth > 850) {
    image.style.height = currHeight - 10 + "px";
    image.style.width = currWidth - 20 + "px";
  }
}

function handleInButtonClick(index) {
  const selector = `.img${index + 1}`;
  const image = document.querySelector(selector);
  const currWidth = image.clientWidth;
  const currHeight = image.clientHeight;
  if (currHeight < 650 && currWidth < 1300) {
    image.style.height = currHeight + 10 + "px";
    image.style.width = currWidth + 20 + "px";
  }
}

function handleDeleteButtonClick(index) {
  const selector = `.container-${index + 1}`;
  const element = document.querySelector(selector);
  element.classList.add("hidden");
  imgIndex.push(index + 1);
  console.log(imgIndex);
}
