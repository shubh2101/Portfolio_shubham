(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
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
function SendMail() { 

  let params  = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }
  emailjs.send("service_xo5zroe", "template_cnc3pqr", params).then(function(res) {
    alert("Message sent successfully!" + res.status)
  })
  document.querySelector(".contact-form").reset();
}
