<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
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
    $sql_get = "select * from owner_info";
    $result = mysqli_query($con, $sql_get); 
    $row = mysqli_num_rows($result) + 1;

    //check if email exist in owner_info table
    $sql_get1 = "select * from owner_info where email_add = '$email'";
    $result1 = mysqli_query($con, $sql_get1); 
    $row1 = mysqli_num_rows($result1) + 1;

    $values = [];
    while ($row = mysqli_fetch_assoc($result1)) {
        $values[] = $row['customer_id'];
    }

    //count records for existing customer
    $sql_get2 = "SELECT MAX(service_no) AS max_service_no FROM availed_services WHERE customer_id = '$values[0]'";
    $result2 = mysqli_query($con, $sql_get2); 

    $values1= [];
    while ($row = mysqli_fetch_assoc($result2)) {
        $values1[] = $row['max_service_no']+1;
    }

    // using sql to create a data entry query
    if($row1 === 1){
        $sql_post_owner = "INSERT INTO owner_info (customer_id, first_name, last_name, phone_number, email_add) VALUES ('$row','$firstname', '$lastname', '$number', '$email')";
        $wr_owner = mysqli_query($con, $sql_post_owner); // send query to the database to add values and confirm if successful
        $sql_post_services = "INSERT INTO availed_services(customer_id, service_no, services_availed,date,time) VALUES ('$row', 1, '$services', '$appointment_date','$appointment_time')";
        $wr_services = mysqli_query($con, $sql_post_services); // send query to the database to add values and confirm if successful
    }

    $sql_post_services = "INSERT INTO availed_services(customer_id, service_no, services_availed,date,time) VALUES ('$values[0]', '$values1[0]', '$services', '$appointment_date','$appointment_time')";
    $wr_services = mysqli_query($con, $sql_post_services); // send query to the database to add values and confirm if successful

    if($wr_services)
        header("Location: Booking_New_Schedule.html");
    
        // close connection
    mysqli_close($con);

?>