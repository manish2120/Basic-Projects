const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const btn = document.querySelector("form button");

for(let select of dropdowns) {
  for(let currCode in countryList) {
    let newOption = document.createElement('option');
    newOption.innerText = currCode;
    newOption.value = currCode;

    if(select.name === "from" && currCode === "INR") {
      newOption.selected = "selected";
    }
    else if (select.name === "to" && currCode === "USD") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener('change', (evt) => {
    updateFlag(evt.target);
  })
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let img = element.parentElement.querySelector("img");
  newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  img.src = newSrc;
}

const exchangeRate = async () => {
  let amtInput = document.querySelector(".amount input");
  let amtVal = amtInput.value;
  if(amtVal === " " || amtVal < 1) {
    amtVal = 1;
    amtInput.value = "1";
  }

  let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalVal = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalVal} ${toCurr.value}`;
};

btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  exchangeRate();
});

window.addEventListener('load', () => {
  exchangeRate();
});
