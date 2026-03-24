<?php
// Database details
$host = "localhost";
$username = "root";
$password = "";
$dbname = "pet_shop"; // Replace with your actual database name

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Execute the SQL query
$sql = "SELECT name, email, address, phone FROM user_info"; // Customize the table name
$result = $conn->query($sql);

// Fetch data and display in an HTML table
if ($result->num_rows > 0) {
    echo '<table>';
    echo '<tr><th>Name</th><th>Email</th><th>Address</th><th>Phone</th></tr>';
    while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        echo '<td>' . $row['name'] . '</td>';
        echo '<td>' . $row['email'] . '</td>';
        echo '<td>' . $row['address'] . '</td>';
        echo '<td>' . $row['phone'] . '</td>';
        echo '</tr>';
    }
    echo '</table>';
} else {
    echo 'No records found.';
}

// Close the connection
$conn->close();
?>