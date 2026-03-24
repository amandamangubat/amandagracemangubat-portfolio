<?php
    $paramValue = $_GET['paramName'];

    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $number = $_POST['mobilenumber'];
        $services = implode(", ",$_POST['selectedService']);
        $appointment_date = $_POST['appointment_date'];
        $appointment_time = $_POST['appointment_time'];
        
    }

    // database details
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pet_shop";

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // count records in owner_info table
    //$sql_get = "select * from owner_info where email_add = '$paramValue'";
    $sql_get = "select * from owner_info";
    $result = mysqli_query($con, $sql_get); 
    $row = mysqli_num_rows($result)+1;

    // using sql to create a data entry query
    
    $sql_post_owner = "INSERT INTO owner_info (customer_id, first_name, last_name, phone_number, email_add) VALUES ('$row','$firstname', '$lastname', '$number', '$paramValue')";
    $wr_owner = mysqli_query($con, $sql_post_owner); // send query to the database to add values and confirm if successful
    
    $sql_post_services = "INSERT INTO availed_services(customer_id,service_no, services_availed,date,time) VALUES ('$row','$row','$services', '$appointment_date','$appointment_time')";
    $wr_services = mysqli_query($con, $sql_post_services); // send query to the database to add values and confirm if successful

    if($wr_services)
        //$paramValue = $email; // Replace with the actual parameter value
        header("Location: View_Customer_Schedule.html?paramName=$paramValue");

    // close connection
    mysqli_close($con);

?>