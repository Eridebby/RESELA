// let circles = document.querySelectorAll("#circle");

let logo = document.querySelector("#nav-bar-logo");
let logo_two = document.querySelector(".nav-bar-two");

(function () {
  function updateReadProgressBar() {
    const root = document.documentElement;
    const winScrollTop = root.scrollTop;
    const winScrollHeight = root.scrollHeight;
    const height = root.scrollHeight - root.clientHeight;
    const progressBarWidth = (winScrollTop / height) * 100;

    root.style.setProperty("--scroll-progress-width", progressBarWidth + "%");


    if (progressBarWidth <= 9.656953225337398) {
      logo_two.classList.add("disapper");
    } else {
      logo_two.classList.remove("disapper");
    }

    if (progressBarWidth >= 92.71756141626193) {
      logo_two.classList.add("disapper");
    }
  }

  window.addEventListener("load", updateReadProgressBar);
  window.addEventListener("scroll", updateReadProgressBar);
})();


// Function to save user information and email to local storage
function saveUserInfo() {
 
  let userNameInput = document.getElementById("name");
  let userEmailInput = document.getElementById("email_id");


  let userNameValue = userNameInput.value;
  let userEmailValue = userEmailInput.value;


  if (userNameValue.trim() !== "" && userEmailValue.trim() !== "") {
     
      localStorage.setItem("userInformation", userNameValue);
      localStorage.setItem("userEmail", userEmailValue);

  }
}
