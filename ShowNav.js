// Get the div and button elements
const sideNav = document.getElementById("side-nav");
const mainText = document.getElementById("main-text");

function buttonClicked(){
    // Toggle the display property of the div
  sideNav.style.display = (sideNav.style.display === "none") ? "block" : "none";
  //document.getElementById("change_visibility").style.value = (sideNav.style.display === "none") ? "show" : "hide";
  mainText.style.display = (sideNav.style.display === "none") ? "block" : "none";
}

window.addEventListener('resize', () => {
    alert(window.innerWidth)
    if(window.innerWidth >= 780){
        sideNav.style.display = "block";
        mainText.style.display = "block";
    }
    else {
        sideNav.style.display = "none";
        mainText.style.display = "block";
    }
})