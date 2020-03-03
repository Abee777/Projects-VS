<?php
    include 'database.php'; 
?>
<?php
    // Create Query
    $query = "SELECT * FROM shouts ORDER BY id DESC";
    $shouts = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shoutbox</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"
			integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU="
			crossorigin="anonymous">
    </script>
    <script src="js/script.js"></script>
</head>
<body>
    <div id="container">
        <header>
            <h1>Shoutbox</h1>
        </header>
        <div id="shouts">
            <ul>
            <!-- After page refresh, shouts will stay -->
                <?php while($row = mysqli_fetch_assoc($shouts)): ?>
                <li><?php echo $row['name']; ?>: <?php echo $row['shout']; ?> [<?php echo $row['date']; ?>]</li>
                <?php endwhile; ?>
            </ul>
        </div>
        <footer>
            <form>
                <label>Name: </label>
                <input type="text" id="name">
                <label>Shout Text: </label>
                <input type="text" id="shout">
                <input type="submit" id="submit" value="SHOUT!">
            </form>
        </footer>
    </div>
</body>
</html>
