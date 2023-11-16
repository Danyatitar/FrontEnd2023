const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const container = document.querySelector(".container");

sendRequest = async () => {
  const data = fetch("https://randomuser.me/api");
  return data
    .then((response) => response.json())
    .then((data) => data.results[0])
    .catch((err) => null);
};

render = async () => {
  const data = await sendRequest();
  if (data) {
    result.innerHTML = "Success";
    container.innerHTML += `<div class="item">
    <img
      src=${data.picture.large}
      alt="character"
      class="img"
    />
    <div class="info">
    <p> Cell: ${data.cell}</p>
    <p> Country: ${data.location.country}</p>
    <p> PostCode: ${data.location.postcode}</p>
    <p> Email: ${data.email}</p>
    </div>
  </div>`;
  } else {
    result.innerHTML = "Error";
  }
};

btn.addEventListener("click", render);
