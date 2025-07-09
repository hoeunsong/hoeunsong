// admin.js

const WEB_APP_URL = 'https://script.google.com/macros/s/여기에_YOUR_DEPLOY_ID/exec';

let allData = [];

// 1) 구글 시트에서 데이터 불러오기
async function fetchData() {
  const res = await fetch(WEB_APP_URL);
  allData = await res.json();
  renderTable(allData);
}

// 2) 테이블 렌더링
function renderTable(data) {
  const tbody = document.querySelector('#consult-table tbody');
  tbody.innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');
    ['이름','통신사','전화번호','보험유형','신청시간'].forEach(key => {
      const td = document.createElement('td');
      td.textContent = row[key];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

// 3) 필터 적용
function applyFilters() {
  const date = document.getElementById('filter-date').value;
  const type = document.getElementById('filter-type').value;
  let filtered = allData;

  if (date) {
    filtered = filtered.filter(r => r['신청시간'].startsWith(date));
  }
  if (type) {
    filtered = filtered.filter(r => r['보험유형'] === type);
  }
  renderTable(filtered);
}

// 4) 엑셀(CSV) 다운로드
function downloadCSV() {
  const rows = Array.from(document.querySelectorAll('#consult-table tr'))
    .map(tr => Array.from(tr.cells).map(td => `"${td.textContent}"`).join(','))
    .join('\n');
  const blob = new Blob([`\uFEFF${rows}`], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = '상담신청내역.csv';
  a.click();
}

document.getElementById('applyFilters').addEventListener('click', applyFilters);
document.getElementById('downloadBtn').addEventListener('click', downloadCSV);

fetchData();
