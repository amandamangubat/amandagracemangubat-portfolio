<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $email_add = $_POST['email_add'];
        $userpass = $_POST['userpass'];
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
    $sql = "select user_level from user_info where email_add = '$email_add' and user_pass = '$userpass'";
  
    // send query to the database to add values and confirm if successful
    $result = mysqli_query($con, $sql);

    $values = [];
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $values[] = $row['user_level'];
        }
    }

    if (!empty($values)) {
        if ($values[0] === '1') {
            {header('Location: Booking_New_Schedule.html'); } 
        } else {
            $paramValue = $email_add; // Replace with the actual parameter value
            header("Location: View_Customer_Schedule.html?paramName=$paramValue");
        }
    } else {
        echo "No user found with the specified email and password.";
    }
    
    
    // close connection
    mysqli_close($con);

?>