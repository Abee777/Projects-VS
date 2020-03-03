<?php
// Conect to MySQL
$conn = mysqli_connect("localhost", "root", "123456", "ajaxphpshoutbox");

if (mysqli_connect_errno()){
    echo 'Failed to connect: '.mysqli_connect_errno();
}