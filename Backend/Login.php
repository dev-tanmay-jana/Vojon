<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include 'DbConnect.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ((!empty($data->email) || !empty($data->mobile)) && !empty($data->password)) {
        $identifier = !empty($data->email) ? mysqli_real_escape_string($conn, $data->email) : mysqli_real_escape_string($conn, $data->mobile);
        $password = $data->password;
        $role = !empty($data->role) ? mysqli_real_escape_string($conn, $data->role) : 'user';

        if (!empty($data->email)) {
            $query = "SELECT * FROM users WHERE email = '$identifier' AND role = '$role'";
        } else {
            $query = "SELECT * FROM users WHERE mobile = '$identifier' AND role = '$role'";
        }

        $result = mysqli_query($conn, $query);

        if (mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);
            if (password_verify($password, $user['password'])) {
                unset($user['password']); // Remove password before sending
                echo json_encode(["status" => "success", "message" => "Login successful", "user" => $user]);
            } else {
                echo json_encode(["status" => "error", "message" => "Invalid credentials or password"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "User not found with these credentials"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Incomplete data"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
