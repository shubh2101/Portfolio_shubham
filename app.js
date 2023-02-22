(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
})();

// <!-- typed js effect  -->
var typed = new Typed(".typed-text", {
  strings: ["Web developer"],
  loop: true,
  typeSpeed: 130,
  backSpeed: 25,
  backDelay: 500,
});

// emailjs contact form
// const overlay = document.querySelector(".overlay");
// const alertDialog = document.getElementById("alert-dialog");
// const okButton = document.querySelector(".alert-dialog-ok");

// // function to display the dialog box and overlay

// // function to hide the dialog box and overlay
// const hideDialog = (event) => {
//   event.preventDefault();
//   overlay.style.display = "none";
//   alertDialog.style.display = "none";
// };

function SendMail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_xo5zroe", "template_cnc3pqr", params).then(function () {
    // display overlay and alert dialog box
    const overlay = document.querySelector(".overlay");
    const alertDialog = document.getElementById("alert-dialog");
    const okButton = document.querySelector(".alert-dialog-ok");

    overlay.style.display = "block";
    alertDialog.style.display = "block";

    // add event listener to OK button that hides the overlay and dialog box
    okButton.addEventListener("click", function (event) {
      event.preventDefault();
      overlay.style.display = "none";
      alertDialog.style.display = "none";
    });
  });
  document.querySelector(".contact-form").reset();
}
