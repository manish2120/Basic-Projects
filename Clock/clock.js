const time = document.querySelector(".time");
// console.log(date.toLocaleTimeString());
window.setInterval(function() {
  const date = new Date();
   time.innerHTML = date.toLocaleTimeString();
}, 1000);