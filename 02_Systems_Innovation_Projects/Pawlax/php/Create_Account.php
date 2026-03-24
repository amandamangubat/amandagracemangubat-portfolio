<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $email_add = $_POST['email_add'];
        $userpass = $_POST['userpass'];
        $userlevel = 2;
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

    // using sql to create a data entry query
    $sql = "INSERT INTO user_info (email_add, user_pass, user_level) VALUES ('$email_add', '$userpass', '$userlevel')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        $paramValue = $email_add; // Replace with the actual parameter value
        header("Location: Customer_Create_Booking.html?paramName=$paramValue");
        //{header('Location: Customer_Create_Booking.html'); } 
    }
  
    // close connection
    mysqli_close($con);

?>