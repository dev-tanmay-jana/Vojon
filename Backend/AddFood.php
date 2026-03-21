<?php
    require 'DbConnect.php';   
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        $name = $_POST['name'];
        $category = $_POST['category'];
        $ratings = floatval($_POST['ratings']);
        $price = intval($_POST['price']);
        $discount = $_POST['discount'];

        // Handle image upload
        $imagePath = "";
        if (isset($_FILES['image'])) {
            $fileName = $_FILES['image']['name'];
            $tempName = $_FILES['image']['tmp_name'];

            $targetDir = "uploads/";
            if (!is_dir($targetDir)) {
                mkdir($targetDir, 0777, true);
            }

            $newFileName = time() . "_" . basename($fileName);
            $targetFile = $targetDir . $newFileName;

            if (move_uploaded_file($tempName, $targetFile)) {
                $imagePath = $targetFile;
            }
        }

        $sql = "INSERT INTO foods (name, category, ratings, price, discount, image)
                VALUES ('$name', '$category', $ratings, $price, '$discount', '$imagePath')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Food added successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Invalid request"]);
    }

    $conn->close();

?>