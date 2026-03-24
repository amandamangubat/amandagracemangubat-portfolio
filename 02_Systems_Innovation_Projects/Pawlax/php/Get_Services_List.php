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
    $sql_get = "select * from service_info";
    $result = mysqli_query($con, $sql_get); 
    //$result = $conn->query($sql_get);

    $values = [];
    if($result)
    while ($row = $result->fetch_assoc()) {
        $values[] = $row['description'];
    }
    else
        echo "No Information";

    // Return the values as JSON
    header('Content-Type: application/json');
    echo json_encode($values);

    $con->close();
?>