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

    // get available services from the table
    $sql_get = "select first_name, last_name, service_no, services_availed, email_add, date, time from owner_info as INFO join availed_services as SERV on INFO.customer_id = SERV.customer_id order by date,time;";
    $result = mysqli_query($con, $sql_get); 
    //$result = $conn->query($sql_get);

    $values = [];
    if($result)
    while ($row = $result->fetch_assoc()) {
        $values[] = $row;
    }
    else
        echo "No Information";

    // Return the values as JSON
    header('Content-Type: application/json');
        echo json_encode($values);

    $con->close();
?>