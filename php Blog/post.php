<?php
    require('config/config.php');
    require('config/db.php');

    // Check For Delete
    if(isset($_POST['delete'])){
        // echo 'Submitted';

        // Get form data
        $delete_id = mysqli_real_escape_string($conn, $_POST['delete_id']); 
        

        $query = "DELETE FROM posts WHERE id = {$delete_id}";
        // die($query); // to see what passed and what didn't
        if(mysqli_query($conn, $query)){
            // If its succesful redirect
            header('Location: '.ROOT_URL ); // ili samo index.php
        } else {
            echo 'ERROR: '.mysqli_error($conn);
        }
    }

    // Get id into variable
    $id = mysqli_real_escape_string($conn, $_GET['id']);
    
    // Create Query
    $query = 'SELECT * FROM posts WHERE id = '.$id;     

    // Get Result
    $result = mysqli_query($conn, $query);
    
    // Fetch Data
    $post = mysqli_fetch_assoc($result); //will take one post and turn it in assoc arr
    // var_dump($post);

    // Free Result
    mysqli_free_result($result);

    // Close Connection
    mysqli_close($conn);

?>

<?php include('inc/header.php'); ?>
    
        <div class="container">
            <a href="<?php echo ROOT_URL; ?>" class="btn btn-secondary">Back</a>
            <h1><?php echo $post['title']; ?></h1>
            <div class="jumbotron">
                <small>Created on <?php echo $post['created_at']; ?> by <?php echo $post['author']; ?></small>
                <p><?php echo $post['body']; ?></p>
            </div>
            <hr>
            <form class="float-right" method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="hidden" name="delete_id" value="<?php echo $post['id']; ?>">
                <input type="submit" name="delete" value="Delete" class="btn btn-danger" >
            </form>
            <a href="<?php echo ROOT_URL; ?>editpost.php?id=<?php echo $post['id']; ?>" class="btn btn-secondary">Edit</a>
        </div>
<?php include('inc/footer.php'); ?>

