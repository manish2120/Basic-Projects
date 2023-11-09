const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // if ye use nhi kiya toh after clicking calculate button output toh aaiga but page bhi saath meh reload hoga jisse saari values aur output chale jaainge

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  // height and weight event listener meh daala h kyunki after click woh values le sakhe
  // dot value jo h woh string meh return hoti h so that's why usse integer meh convert krne ke liye parseInt use kiya yaha.

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //toFixed use kiya h kyunki 2 decimals tak fixed rakhna h value ko
    // weight in kg divided by height in meters squared
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

// WHAT I LEARNED IN THIS PROJECT :-
/*
1. jabh hum form meh kuch banaye h and uske liye js use krrhe h so preventDefault() page reload hone se bachaata h kyunki if we dont use it toh jo bhi button pe submit ka event laga h woh poore form ko submit krdega and ek reload bhi lagega which basically means form submitted.

2. height and weight event listener meh daala h kyunki after click woh values le sakhe.

3. dot value jo h woh string meh return hoti h so that's why usse integer meh convert krne ke liye parseInt use kiya yaha.
*/
