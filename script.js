const btn = document.querySelector("button");

const generate = () => {
  const res = document.querySelector("p");
  const fromNumber = document.getElementById("fromNumber").value;
  const toNumber = document.getElementById("toNumber").value;

  
  if (fromNumber === "" || toNumber === "") {
    res.innerHTML = "Please, type a number in both fields.";
  } else {
    const fromNum = Math.ceil(Number(fromNumber));
    const toNum = Math.floor(Number(toNumber));

    const randomNum = Math.floor(Math.random() * (toNum - fromNum + 1)) + fromNum;
    res.innerHTML = `Number: <span>${randomNum}</span>`;
  }
};

btn.addEventListener("click", generate);