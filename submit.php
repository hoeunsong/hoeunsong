<?php
$name = $_POST['name'] ?? '';
$carrier = $_POST['carrier'] ?? '';
$phone1 = $_POST['phone1'] ?? '';
$phone2 = $_POST['phone2'] ?? '';
$phone3 = $_POST['phone3'] ?? '';
$type = $_POST['type'] ?? '';

// 전화번호 조합
$phone = $phone1 . '-' . $phone2 . '-' . $phone3;

// 로그 형식 지정 (줄바꿈 추가)
$log = "이름: $name\n통신사: $carrier\n연락처: $phone\n보험유형: $type\n\n";

// 로그 파일에 저장
file_put_contents("data.txt", $log, FILE_APPEND);

echo "ok";
?>
