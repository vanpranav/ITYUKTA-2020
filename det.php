<?php 

// TO GET and Display Details
$name=$_POST["name"];
$college=$_POST["col"];
$email=$_POST["email"];
$gender=$_POST["gender"];
$phone=$_POST["phone"];
$technical='';
$tid='';
$total=0;
$time=date("Y-m-d H:i:s"); 

//Total Amount
if(isset($_POST["workshop"]))
	if($_POST["workshop"] == "DA")
		$total=$total+700;
	else if($_POST["workshop"] == "NL")
		$total=$total+350;
	else
		$total=$total+500;

if(isset($_POST["CB"])) 
    $total=$total+100;
if(isset($_POST["STC"])) 
    $total=$total+50;
if(isset($_POST["ST"])) 
    $total=$total+50;
if(isset($_POST["OTH"])) 
    $total=$total+50;    
if(isset($_POST["PPT"])) 
	$total=$total+100; 

//Technical Events Display

if(!(isset($name)))
	echo nl2br("Unexpected Error, Please allow popups, clear cache and retry once again. If problem persists contact our coordinators\n");

echo nl2br("------------------");
echo nl2br("\nYour Details:\n");
echo nl2br("------------------");
echo nl2br("\n\n Name: ".$name."\n");
echo nl2br(" College: ".$college."\n");
echo nl2br(" Gender: ".$gender."\n");
echo nl2br(" Email: ".$email."\n");
echo nl2br(" Phone: ".$phone."\n");
echo nl2br("\nTotal Amount to be paid: ".$total);

//Get Workshop Names	
if(isset($_POST["workshop"]))
	$workshop=$_POST["workshop"];
else
	$workshop="";

if(isset($_POST["PPT"]))
	$technical.=$_POST["PPT"].=", ";
if(isset($_POST["OTH"]))
	$technical.=$_POST["OTH"].=", ";
if(isset($_POST["CB"]))
	$technical.=$_POST["CB"].=", ";
if(isset($_POST["STC"]))
	$technical.=$_POST["STC"].=", ";
if(isset($_POST["ST"]))
	$technical.=$_POST["ST"].=", ";

$arr=array("$name", "$college", "$email", "$gender", "$phone", "$workshop", "$technical", "$total","$time");

?>