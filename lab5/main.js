const submitBtn = document.getElementById("submit");
const nameInput = document.querySelector(".name");
const dateInput = document.querySelector(".date");
const emailInput = document.querySelector(".email");
const addressInput = document.querySelector(".address");
const telegramInput = document.querySelector(".telegram");
const data = document.getElementById("data");
const table = document.querySelector(".table");
const colorInput = document.querySelector(".color");
const renderTable = () => {
  let tableItems = "";
  let n = 0;
  for (let i = 0; i < 6; i++) {
    tableItems += `<div class="row">`;
    for (let j = 0; j < 6; j++) {
      n++;
      tableItems += `<div class="item" id="item-${n}"> ${n}</div>`;
    }
    tableItems += "</div>";
  }

  table.innerHTML = tableItems;
};
renderTable();
const item = document.getElementById("item-18");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!nameInput.checkValidity()) {
    nameInput.classList.add("error");
    nameInput.reportValidity();
  } else {
    nameInput.classList.remove("error");
  }

  if (!dateInput.checkValidity()) {
    dateInput.classList.add("error");
    dateInput.reportValidity();
  } else {
    dateInput.classList.remove("error");
  }
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("error");
    emailInput.reportValidity();
  } else {
    emailInput.classList.remove("error");
  }
  if (!addressInput.checkValidity()) {
    addressInput.classList.add("error");
    addressInput.reportValidity();
  } else {
    addressInput.classList.remove("error");
  }
  if (!telegramInput.checkValidity()) {
    telegramInput.classList.add("error");
    telegramInput.reportValidity();
  } else {
    telegramInput.classList.remove("error");
  }

  if (
    telegramInput.checkValidity() &&
    addressInput.checkValidity() &&
    emailInput.checkValidity() &&
    dateInput.checkValidity() &&
    nameInput.checkValidity()
  ) {
    data.innerHTML = `<p class="text"><span class="bold">ПІБ:</span> ${nameInput.value}</p>
    <p class="text"><span class="bold">Date of birth:</span>  ${dateInput.value}</p>
    <p class="text"><span class="bold">Address:</span>  ${addressInput.value}</p>
    <p class="text"><span class="bold">Email:</span>  ${emailInput.value}</p>
    <p class="text"><span class="bold">Telegram:</span>  ${telegramInput.value}</p>
  `;
  }
});

item.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

item.addEventListener("click", (e) => {
  e.target.style.backgroundColor = colorInput.value;
});

item.addEventListener("dblclick", (e) => {
  console.log(3);
  e.target.style.backgroundColor = colorInput.value;
  const item2 = document.getElementById("item-30");
  item2.style.backgroundColor = colorInput.value;
});
