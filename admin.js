// admin.js
const tbody = document.querySelector('#consult-table tbody');
const data  = JSON.parse(localStorage.getItem('consults')||'[]');

// 테이블 채우기
data.forEach(item => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.phone}</td>
    <td>${item.type}</td>
    <td>${item.time}</td>
  `;
  tbody.appendChild(tr);
});

// CSV 다운로드
document.getElementById('downloadBtn').addEventListener('click', () => {
  if (!data.length) return alert('저장된 내역이 없습니다.');
  const header = ['이름','연락처','보험유형','신청시간'];
  const rows   = data.map(o => [o.name,o.phone,o.type,o.time]);
  const BOM    = '\uFEFF';
  let csv = header.join(',') + '\n'
    + rows.map(r => r.map(f => `"${f}"`).join(',')).join('\n');
  const blob = new Blob([BOM+csv], { type:'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '상담신청내역.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
});
