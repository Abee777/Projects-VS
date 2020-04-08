<script>
    function conf() {
        var r = confirm("Are You sure You want to delete <?php echo $post['title']; ?>");
        if (r == true) {
            <?php 
            if(isset($_POST['delete'])){
                // echo 'Submitted';

                // Get form data
                $delete_id = mysqli_real_escape_string($conn, $_POST['delete_id']); 
            
                $query = "DELETE FROM posts WHERE id = {$delete_id}";
                //die($query); // to see what passed and what didn't
                if(mysqli_query($conn, $query)){
                    // If its succesful redirect
                    header('Location: '.ROOT_URL ); // ili samo index.php
                } else {
                    echo 'ERROR: '.mysqli_error($conn);
                }
            }
            ?>
        } else {
            <?php header('Location: '.ROOT_URL); ?> 
        }
    }
</script>

<input type="submit" name="delete" value="Delete" class="btn btn-danger" onclick="conf()">