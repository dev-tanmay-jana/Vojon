<?php
    require 'DbConnect.php';   
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    
$result = $conn->query("SELECT * FROM foods ORDER BY id DESC");

$foods = [];
while ($row = $result->fetch_assoc()) {
    $foods[] = $row;
}

echo json_encode($foods);

$conn->close();
?>