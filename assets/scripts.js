const scriptURL = 'https://script.google.com/macros/s/AKfycbyfuFiDRU2K2k3h3wUEmS9U4Dh5UKHCkm2TPzR9dv_-c-uJPtw3reviwm4rR_IgneHBeg/exec';
const form = document.getElementById('registrationForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: data })
    .then(response => {
      alert("✅ Successfully Registered!");
      form.reset();
    })
    .catch(error => {
      alert("❌ Something went wrong.");
      console.error('Error!', error.message);
    });
});
