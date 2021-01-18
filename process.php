<?php

$host = "localhost";
//$user="root";
//$pass="";
$user = "test";
$pass = "secret_password";

$db = "myform";
$con = mysqli_connect($host,$user,$pass,$db);

$a = array($_POST["d1"], $_POST["d2"], $_POST["d3"], $_POST["d4"], $_POST["d5"], $_POST["d6"], $_POST["d7"], $_POST["d8"], $_POST["d9"] );

$b = $_POST["transactionID"];

if(!(isset($b)))
	echo nl2br("Unexpected Error, Please re-enter Transaction ID and retry once again. If problem persists contact our coordinators\n");


$sql = "INSERT INTO `register` (`name`, `college`, `email`, `gender`, `phone`, `workshop`, `technical`, `tid`, `total`, `time`) VALUES ('$a[0]', '$a[1]', '$a[2]', '$a[3]', '$a[4]', '$a[5]', '$a[6]', '$b', '$a[7]', '$a[8]');";

if (!mysqli_query($con,$sql))
  echo("Error description: " . mysqli_error($con));
?>

<p> Thank you !!!</p>
<a href="index.html">Click here</a> to go to Homepage.