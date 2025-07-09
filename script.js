// 슬라이더는 CSS @keyframes로 무한 애니메이션 처리

// 폼 제출 시 localStorage에 저장
document.getElementById('consult-form').addEventListener('submit', e => {
  const form = e.target;
  const data = {
    name: form.name.value,
    carrier: form.carrier.value,
    phone: `${form.phone1.value}-${form.phone2.value}-${form.phone3.value}`,
    type: form.type.value,
    time: new Date().toLocaleString()
  };
  const list = JSON.parse(localStorage.getItem('consults') || '[]');
  list.push(data);
  localStorage.setItem('consults', JSON.stringify(list));
  // 실제 폼 전송(iframe)
});
