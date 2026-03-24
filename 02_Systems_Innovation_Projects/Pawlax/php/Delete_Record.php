<?php

// Assuming you have a database connection established
$host = "localhost";
$username = "root";
$password = "";
$dbname = "pet_shop";

// Create connection
$con = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// Get the email address from the URL parameter
$emailToDelete = $_GET['email'];
$serviceToDelete = $_GET['service_no'];

// SQL to delete the record based on email address
$sql = "DELETE FROM availed_services WHERE customer_id = (select customer_id from owner_info where email_add = '$emailToDelete')  and service_no = $serviceToDelete";
$wr_services = mysqli_query($con, $sql);


if ($wr_services === TRUE) {
    {header("Location: View_Customer_Schedule.html?paramName=$emailToDelete");}}
    //echo "Record deleted successfully";}
//} else {
//    echo "Error deleting record: " . $con->error;
//}
//
$con->close();
?>