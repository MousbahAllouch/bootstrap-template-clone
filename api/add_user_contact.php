<?php
include("connection.php");

$fullname = $_POST["fullname"];
$email = $_POST["email"];
$number = $_POST["number"];
$message= $_POST["message"];

// $query = "INSERT INTO contact(fullname, email, number, message) VALUE (" . $fullname .", ?)";

$query = $mysqli->prepare("INSERT INTO contact(fullname, email, number, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $fullname, $email,$number, $message);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>