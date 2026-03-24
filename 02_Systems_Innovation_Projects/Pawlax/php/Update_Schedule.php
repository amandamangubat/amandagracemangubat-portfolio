<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $services = implode(", ",$_POST['selectedService']);
        $appointment_date = $_POST['appointment_date'];
        $appointment_time = $_POST['appointment_time'];
    }

    // database details
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pet_shop";

    $param1 = $_GET['paramName'];
    $param2 = $_GET['service_no'];

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    //$sql_post_owner = "INSERT INTO owner_info (customer_id, first_name, last_name, phone_number, email_add) VALUES ('$row','$firstname', '$lastname', '$number', '$email')";
    //$sql_post_services = "INSERT INTO availed_services(customer_id,services_availed,date,time) VALUES ('$row','$services', '$appointment_date','$appointment_time')";
    
    $sql_post_services = "UPDATE availed_services 
    set services_availed = '$services',
    date = '$appointment_date',
    time = '$appointment_time'
    where customer_id = (select customer_id from owner_info where email_add = '$param1')
    and service_no = $param2";
    
    // send query to the database to add values and confirm if successful
    //$wr_owner = mysqli_query($con, $sql_post_owner);
    $wr_services = mysqli_query($con, $sql_post_services);

    if($wr_services)
        {header("Location: Booking_New_Schedule.html?");}
        //$paramValue = $email_add; // Replace with the actual parameter value
        //header("Location: View_Customer_Schedule.html?paramName=$paramValue");
        //{header('Location: View_Customer_Schedule.html'); }
    //     {header('Location: Booking_New_Schedule.html'); }
    // close connection
    mysqli_close($con);

?>