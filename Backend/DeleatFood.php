<?php
// Allow React to call this
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require 'DbConnect.php';
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['id'])) {
    echo json_encode(["success" => false, "message" => "No ID provided"]);
    exit;
}

$id = intval($data['id']);

// Optionally delete the image file too
$sqlImg = "SELECT image FROM foods WHERE id = $id";
$result = $conn->query($sqlImg);
if ($result && $row = $result->fetch_assoc()) {
    $image = $row['image'];
    if ($image && file_exists("uploads/".$image)) {
        unlink("uploads/".$image);
    }
}

$sql = "DELETE FROM foods WHERE id = $id";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>
