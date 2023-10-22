  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  function openSidebar() {
    document.getElementById("sidebar").style.width = "240px";
    document.getElementById("main").style.marginLeft = "240px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

const click = document.querySelector('.click');
click.onclick = Counter;
const reset = document.querySelector('.reset');
reset.onclick = resetCounter;
const clicks = document.querySelector('.clicks');
clicks.id = document.querySelector('clicks');

var a = 0;

function Counter() {
    a += 1;
    clicks.innerHTML = a;
}

function resetCounter() {
    a = -1;
    clicks.innerHTML = a;
}


/* for profile */

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

const sidebar = document.querySelector(".sidebar"),
      letters = sidebar.querySelector(".sidebar-letters");

const handleOnMove = e => {
  const rect = sidebar.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letters.style.setProperty("--x", `${x}px`);
  letters.style.setProperty("--y", `${y}px`);

  letters.innerText = randomString(1510);    
}

sidebar.onmousemove = e => handleOnMove(e);

sidebar.ontouchmove = e => handleOnMove(e.touches[0]);