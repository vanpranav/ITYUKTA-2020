<!DOCTYPE html>
<html>
<head>
	<title>Payment</title>
	<link rel="icon" type="image/ico" href="img/logo.png"/>
	<link rel="stylesheet" type="text/css" href="css/pay.css">
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.0/css/all.css">
</head>
<body>

	<?php include 'det.php'; ?>

	<center>
		<h1 style="text-shadow: 2px 2px 5px blue;">Scan  And Pay</h1>
		<table border=5 cellspacing="15" borderColor='black'>
			<tr></p><td colspan=5><img src='img/pay/phonepe.png' alt='phonepe' height=200 width=200></img><p align="center"><img src="img/pay/PhonePe.svg" height="100px" width="100px"></p><h3 align="center">&nbsp +91-8500820812</h3>
			<h5>PhonePe TransactionID starts with 'P'</h5> </td><td colspan=5><img src='img/pay/gpay.png' alt='tez' height=200 width=200> </img><p align="center"><img src="img/pay/google-pay.svg" height="100px" width="100px"></p><h3 align="center">&nbsp +91-8500820812</h3><h5>For GPay send UPI TransactionID</h5></td></tr>
		</table> 
		<br>
		<br>
		<form name="transaction" action='process.php' method='post'>
			<table>
				<tr>
					<td>
						<input type='text' name='transactionID' placeholder="Please enter your Transaction ID here: " size="40" required>
					</td>
					<td>
						<button type='submit' class='btn-success'>Send<i class='fas fa-paper-plane'></i></button>
					</td>
				</tr>
			</table>
			
			<input type='hidden' name='d1' value='<?php print_r($arr[0]); ?>' />
			<input type='hidden' name='d2' value='<?php print_r($arr[1]); ?>' />
			<input type='hidden' name='d3' value='<?php print_r($arr[2]); ?>' />
			<input type='hidden' name='d4' value='<?php print_r($arr[3]); ?>' />
			<input type='hidden' name='d5' value='<?php print_r($arr[4]); ?>' />
			<input type='hidden' name='d6' value='<?php print_r($arr[5]); ?>' />
			<input type='hidden' name='d7' value='<?php print_r($arr[6]); ?>' />
			<input type='hidden' name='d8' value='<?php print_r($arr[7]); ?>' />
			<input type='hidden' name='d9' value='<?php print_r($arr[8]); ?>' />
		</form>
	</center>
	
	<script src="js/vendor/jquery.min.js"></script>
	<script src="js/vendor/bootstrap.bundle.min.js"></script>
	<script src="js/vendor/jquery.easing.min.js"></script>
	<script src="js/ityukta.js"></script>
</body>
</html>