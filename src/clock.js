const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart("2", 0);
  const Minutes = String(date.getMinutes()).padStart("2", 0);
  const Seconds = String(date.getSeconds()).padStart("2", 0);

  clock.innerHTML = `${hours} : ${Minutes} : ${Seconds}`;
}
function time() {
  setInterval(getTime, 1000);
}
time();
