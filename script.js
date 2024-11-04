const btn = document.querySelector("button");

const generate = () => {
  const res = document.querySelector("p");
  const fromNumber = Math.ceil(document.getElementById("fromNumber").value);
  const toNumber = Math.floor(document.getElementById("toNumber").value);

  res.innerHTML = ` Number <span>${Math.floor(Math.random() * (fromNumber - toNumber + 1)) + toNumber}</span>`;
};

btn.addEventListener("click", generate);
