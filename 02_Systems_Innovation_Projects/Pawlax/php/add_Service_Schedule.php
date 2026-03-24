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

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    //$sql_post_owner = "INSERT INTO owner_info (customer_id, first_name, last_name, phone_number, email_add) VALUES ('$row','$firstname', '$lastname', '$number', '$email')";
   
    $sql_get_user = "select customer_id from owner_info where email_add = '$param1'";
    $rd_user = mysqli_query($con, $sql_get_user);
  
    $values = [];
    while ($row = mysqli_fetch_assoc($rd_user)) {
        $values[] = $row['customer_id'];
    }

    $sql_get_services = "select service_no from availed_services where customer_id = '$values[0]' order by service_no desc";
    $rd_services = mysqli_query($con, $sql_get_services);
    //$row = mysqli_num_rows($rd_services)+1;

    $values1 = [];
    while ($row = mysqli_fetch_assoc($rd_services)) {
        $values1[] = $row['service_no']+1;
    }

    $sql_post_services = "INSERT INTO availed_services(customer_id,service_no, services_availed,date,time) VALUES ('$values[0]', '$values1[0]', '$services', '$appointment_date','$appointment_time')";

    
    // send query to the database to add values and confirm if successful
    //$wr_owner = mysqli_query($con, $sql_post_owner);
    $wr_services = mysqli_query($con, $sql_post_services);

    if($wr_services)
        {header("Location: View_Customer_Schedule.html?paramName=$param1");}
    //     {header('Location: Booking_New_Schedule.html'); } 
    // close connection
    mysqli_close($con);

?>