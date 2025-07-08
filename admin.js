// 1) 로컬스토리지(또는 Google Sheets 연동)에서 데이터 불러오기
// 여기서는 localStorage.getItem('consults') 로 예시
const data = JSON.parse(localStorage.getItem('consults') || '[]');
const tbody = document.querySelector('#consult-table tbody');

// 2) 테이블에 행 추가
data.forEach(item => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.phone}</td>
    <td>${item.type}</td>
    <td>${new Date(item.timestamp).toLocaleString()}</td>
  `;
  tbody.appendChild(tr);
});

// 3) CSV 다운로드
document.getElementById('downloadBtn').addEventListener('click', () => {
  if (data.length === 0) {
    alert('저장된 신청 내역이 없습니다.');
    return;
  }

  const header = ['이름','연락처','보험유형','신청시간'];
  const rows = data.map(item => [
    item.name,
    item.phone,
    item.type,
    new Date(item.timestamp).toISOString()
  ]);

  let csv = header.join(',') + '\n';
  rows.forEach(r => { csv += r.map(f => `"${f}"`).join(',') + '\n'; });

  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '상담신청내역.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
