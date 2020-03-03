<?php
    include 'database.php';

    if(isset($_POST['name']) && isset($_POST['shout'])){
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $shout = mysqli_real_escape_string($conn, $_POST['shout']);
        $date = mysqli_real_escape_string($conn, $_POST['date']);

        // Set Timezone
        date_default_timezone_set('Europe/Belgrade');
        $date = date('h:i:s a', time());

        $query = "INSERT INTO shouts (name,shout,date) VALUES('$name','$shout','$date')";

        // Check for Errors
        if(mysqli_query($conn, $query)){
            echo '<li>'.$name.': '.$shout.' ['.$date. ']</li>';
        } else {
            echo 'Error: '.mysqli_error($conn);
        }
    }


?>