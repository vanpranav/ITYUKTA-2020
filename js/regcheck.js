function my() {
	alert('Confirm your details');
	var total = 0;
	var a = 0;
	var events1 = 50;
	var events2 = 100;
	var workshops1 = 700;
	var workshops2 = 500;
	var workshops3 = 350;
	var name = document.forms['regform']['name'].value;
	var namelen = name.length;
	var col = document.forms['regform']['col'].value;
	var collen = col.length;
	var phone = document.forms['regform']['phone'].value;
	var phonelen = phone.length;

	if (name) {
		if (namelen < 3) {
			window.alert('Enter atleast three characters in name field!!');
			return false;
		}
		var k = 0;
		for (i = 0; i < namelen; i++) {
			l = /[a-z\s]/i;
			if (l.exec(name[i])) {
				if (name[i] == ' ') k = parseInt(k) + 1;
				else k = 0;
				if (k > 2) {
					alert('Name cannot contain more spaces!!');
					return false;
				}
				continue;
			} else {
				window.alert('Name cannot contain special characters or numbers!!');
				return false;
			} //else
		} //for
	} //name

	if (col) {
		if (collen < 3) {
			window.alert('Enter atleast Three characters in college name field!!');
			return false;
		}
		var k = 0;
		for (i = 0; i < collen; i++) {
			l = /[a-z\s]/i;
			if (l.exec(col[i])) {
				if (col[i] == ' ') k = parseInt(k) + 1;
				else k = 0;
				if (k > 3) {
					alert('College Name cannot contain more spaces!!');
					return false;
				}
				continue;
			} else {
				window.alert('College Name cannot contain special characters or numbers!!');
				return false;
			} //else
		} //for
	} //name

	if (phone) {
		var phoneno = /^\d{10}$/;
		if (!phone.match(phoneno)) {
			alert('Phone Number can contain only 10 digits and numbers');
			return false;
		}
	}

	if (document.forms['regform']['CB'].checked) {
		a = 1;
		total += events2;
	}

	if (document.forms['regform']['STC'].checked) {
		a = 1;
		total += events1;
	}

	if (document.forms['regform']['ST'].checked) {
		a = 1;
		total += events1;
	}

	if (document.forms['regform']['PPT'].checked) {
		a = 1;
		total += events2;
	}

	if (document.forms['regform']['OTH'].checked) {
		a = 1;
		total += events1;
	}

	if (document.getElementById('DA').checked) {
		a = 1;
		total += workshops1;
	} else if (document.getElementById('BC').checked) {
		a = 1;
		total += workshops2;
	} else if (document.getElementById('RPA').checked) {
		a = 1;
		total += workshops2;
	} else if (document.getElementById('NL').checked) {
		a = 1;
		total += workshops3;
	}

	if (a == 0) {
		alert('Please select any workshops or events inorder to pay the amount!!!');
		return false;
	} //if a
	alert('Total amount to be paid: ' + total);
} //my
