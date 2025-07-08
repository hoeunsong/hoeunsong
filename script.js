document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name  = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const type  = document.getElementById('type').value;

  fetch('https://script.google.com/macros/s/AKfycbzea5M4Pm05apWhpPLW-y5ZbeSoEWlhYR1jTjAKdAqewcev-XC2cb1kHCjDXCTjHc56pQ/exec', {
    method: 'POST',
    contentType: 'application/json',
    body: JSON.stringify({ name, phone, type })
  })
  .then(res => res.json())
  .then(json => {
    if (json.status === 'success') {
      window.location.href = 'thankyou.html';
    } else {
      alert('제출 실패: ' + json.message);
    }
  })
  .catch(err => alert('통신 에러: ' + err));
});
