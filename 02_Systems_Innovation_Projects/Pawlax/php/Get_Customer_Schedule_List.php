<?php  header('Access-Control-Allow-Origin: *');
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

    $param1 = $_GET['paramName'];

     // get available services from the table
    $sql_get = "select email_add, service_no, services_availed, date, time from owner_info as INFO 
    join availed_services as SERV 
    on INFO.customer_id = SERV.customer_id 
    and INFO.email_add = ?
    order by date,time;";

    $stmt = mysqli_prepare($con, $sql_get);
    if ($stmt) {
        // Bind the parameter
        mysqli_stmt_bind_param($stmt, "s", $param1);
    
        // Execute the query
        mysqli_stmt_execute($stmt);
    
        // Get the result
        $result = mysqli_stmt_get_result($stmt);
    
        // Fetch data (similar to your original code)
        $values = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $values[] = $row;
        }
    
        // Return the values as JSON
        header('Content-Type: application/json');
        echo json_encode($values);
    } else {
        echo "Error preparing the statement: " . mysqli_error($con);
    }
    
    // Close the statement and connection
    mysqli_stmt_close($stmt);
    mysqli_close($con);
    //$result = mysqli_query($con, $sql_get); 
    ////$result = $conn->query($sql_get);
//
    //$values = [];
    //if($result)
    //while ($row = $result->fetch_assoc()) {
    //    $values[] = $row;
    //}
    //else
    //    echo "No Information";
//
    //// Return the values as JSON
    //header('Content-Type: application/json');
    //echo json_encode($values);
//
    //$con->close();
?>