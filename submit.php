<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

// 1. 입력값 받기
$name = $_POST['name'] ?? '';
$carrier = $_POST['carrier'] ?? '';
$phone = $_POST['phone'] ?? '';
$type = $_POST['type'] ?? '';
$timestamp = date('Y-m-d H:i:s');

// 2. 기존 엑셀 불러오기 또는 새로 생성
$filePath = 'insurance_submissions.xlsx';

if (file_exists($filePath)) {
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($filePath);
    $sheet = $spreadsheet->getActiveSheet();
    $row = $sheet->getHighestRow() + 1;
} else {
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->fromArray(['Name', 'Carrier', 'Phone', 'Type', 'Timestamp'], NULL, 'A1');
    $row = 2;
}

// 3. 데이터 삽입
$sheet->setCellValue('A' . $row, $name);
$sheet->setCellValue('B' . $row, $carrier);
$sheet->setCellValue('C' . $row, $phone);
$sheet->setCellValue('D' . $row, $type);
$sheet->setCellValue('E' . $row, $timestamp);

// 4. 저장
$writer = new Xlsx($spreadsheet);
$writer->save($filePath);

// 5. 완료 후 thankyou.html로 리디렉션
header('Location: thankyou.html');
exit;
?>
