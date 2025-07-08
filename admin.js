document.getElementById('downloadBtn').addEventListener('click', function () {
  const data = JSON.parse(localStorage.getItem('consults') || '[]');
  if (data.length === 0) {
    alert('저장된 상담 신청 내역이 없습니다.');
    return;
  }

  const header = ['이름', '연락처', '보험유형'];
  const rows = data.map(item => [item.name, item.phone, item.type]);

  let csvContent = '';
  csvContent += header.join(',') + '\n';
  rows.forEach(row => {
    csvContent += row.map(field => `"${field}"`).join(',') + '\n';
  });

  // BOM 추가
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '상담신청내역.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
