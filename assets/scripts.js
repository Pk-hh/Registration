const form = document.getElementById('registrationForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    roll: form.roll.value,
    email: form.email.value,
    phone: form.phone.value,
    college: form.college.value
  };

  fetch("https://script.google.com/macros/s/AKfycbzg1C2y1GEK_cVGHjHA3THjv_ki1n03MQHAdFCe3Fa1WADbLFHnZqsoupYlzF9UADrjDA/exec", {
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
