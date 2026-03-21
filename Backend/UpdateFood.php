<?php
// UpdateFood.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require "DbConnect.php";

// 📥 Get form data
$id        = $_POST["id"] ?? "";
$name      = $_POST["name"] ?? "";
$category  = $_POST["category"] ?? "";
$ratings   = $_POST["ratings"] ?? "";
$price     = $_POST["price"] ?? "";
$discount  = $_POST["discount"] ?? "";

// 🛑 Basic validation
if (!$id || !$name || !$category || !$price) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

// 🔍 Get old image (if no new image uploaded)
$oldImageQuery = $conn->prepare("SELECT image FROM foods WHERE id = ?");
$oldImageQuery->bind_param("i", $id);
$oldImageQuery->execute();
$result = $oldImageQuery->get_result();
$row = $result->fetch_assoc();
$oldImage = $row["image"] ?? "";

// 🖼️ Image upload handling
$imagePath = $oldImage;

if (!empty($_FILES["image"]["name"])) {
    $uploadDir = "uploads/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $fileName = time() . "_" . basename($_FILES["image"]["name"]);
    $targetFile = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        // delete old image
        if ($oldImage && file_exists($oldImage)) {
            unlink($oldImage);
        }
        $imagePath = $targetFile;
    }
}

// 📝 Update query
$stmt = $conn->prepare("
    UPDATE foods SET 
        name = ?, 
        category = ?, 
        ratings = ?, 
        price = ?, 
        discount = ?, 
        image = ?
    WHERE id = ?
");

$stmt->bind_param(
    "ssddssi",
    $name,
    $category,
    $ratings,
    $price,
    $discount,
    $imagePath,
    $id
);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Food updated successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Update failed"]);
}

$stmt->close();
$conn->close();
