<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include 'DbConnect.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($data->name) && !empty($data->email) && !empty($data->mobile) && !empty($data->password)) {
        $name = mysqli_real_escape_string($conn, $data->name);
        $email = mysqli_real_escape_string($conn, $data->email);
        $mobile = mysqli_real_escape_string($conn, $data->mobile);
        $password = password_hash($data->password, PASSWORD_BCRYPT);
        $role = !empty($data->role) ? mysqli_real_escape_string($conn, $data->role) : 'user';

        // Check if email or mobile already exists
        $check_query = "SELECT id FROM users WHERE email = '$email' OR mobile = '$mobile'";
        $check_result = mysqli_query($conn, $check_query);

        if (mysqli_num_rows($check_result) > 0) {
            echo json_encode(["status" => "error", "message" => "Email or mobile number already exists"]);
        } else {
            $insert_query = "INSERT INTO users (name, email, mobile, password, role) VALUES ('$name', '$email', '$mobile', '$password', '$role')";
            if (mysqli_query($conn, $insert_query)) {
                echo json_encode(["status" => "success", "message" => "Registration successful"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Registration failed"]);
            }
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Incomplete data"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
<!-- CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mobile VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -->