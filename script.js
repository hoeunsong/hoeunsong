document.getElementById("consult-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const type = document.getElementById("type").value;

  const consults = JSON.parse(localStorage.getItem("consults")) || [];
  consults.push({ name, phone, type });
  localStorage.setItem("consults", JSON.stringify(consults));

  window.location.href = "thankyou.html";
});
