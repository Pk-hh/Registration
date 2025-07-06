const form = document.getElementById('registrationForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    roll: form.roll.value,
    email: form.email.value,
    phone: form.phone.value,
    college: form.college.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyfuFiDRU2K2k3h3wUEmS9U4Dh5UKHCkm2TPzR9dv_-c-uJPtw3reviwm4rR_IgneHBeg/exec", {
    method: "POST",
    body: JSON.stringify(data),
  })
  .then(response => response.text())
  .then(result => {
    alert("Registration successful!");
    form.reset();
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert("Submission failed.");
  });
});
