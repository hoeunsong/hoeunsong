<?php
header("Access-Control-Allow-Origin: *");

$name = $_POST['name'] ?? '';
$carrier = $_POST['carrier'] ?? '';
$phone1 = $_POST['phone1'] ?? '';
$phone2 = $_POST['phone2'] ?? '';
$phone3 = $_POST['phone3'] ?? '';
$type = $_POST['type'] ?? '';

$phone = $phone1 . '-' . $phone2 . '-' . $phone3;

$log = "이름: $name, 통신사: $carrier, 연락처: $phone, 보험유형: $type\n";
file_put_contents("data.txt", $log, FILE_APPEND);

echo "ok";
?>
