/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openSidebar() {
    document.getElementById("sidebar").style.width = "120px";
    document.getElementById("main").style.marginLeft = "120px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}