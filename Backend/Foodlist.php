<?php
require 'DbConnect.php';

// CORS headers
header("Access-Control-Allow-Origin: https://vojon-git-main-dev-tanmay-janas-projects.vercel.app/");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// 🔥 VERY IMPORTANT
header("Content-Type: application/json");

// Debug mode (temporary)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check DB connection
if (!$conn) {
    echo json_encode(["error" => "Database connection failed"]);
    exit();
}

// Run query
$sql = "SELECT * FROM foods ORDER BY id DESC";
$result = $conn->query($sql);

// Check query success
if (!$result) {
    echo json_encode([
        "error" => "Query failed",
        "message" => $conn->error
    ]);
    exit();
}

// Fetch data
$foods = [];
while ($row = $result->fetch_assoc()) {
    $foods[] = $row;
}

// Return JSON
echo json_encode($foods);

$conn->close();
?>