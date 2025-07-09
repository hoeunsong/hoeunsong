// admin.js

document.getElementById('downloadBtn').addEventListener('click', () => {
  // 1) localStorage에서 불러오기
  const data = JSON.parse(localStorage.getItem('consults') || '[]');
  if (data.length === 0) {
    alert('저장된 상담 신청 내역이 없습니다.');
    return;
  }

  // 2) CSV 헤더 & 로우 생성
  const header = ['이름','통신사','전화번호','보험유형','신청시간'];
  const rows = data.map(d => [
    d.name,
    d.carrier,
    `${d.phone1}-${d.phone2}-${d.phone3}`,
    d.type,
    d.time
  ]);

  // 3) CSV 문자열로 변환 (각 필드를 큰따옴표로 감싸고, BOM 추가)
  let csvContent = header.join(',') + '\n'
    + rows
        .map(r => r.map(f => `"${f}"`).join(','))
        .join('\n');

  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '상담신청내역.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
