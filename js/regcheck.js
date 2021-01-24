function my() 
{
	alert('Confirm your details');

	var total = 0;
	var a = 0;

	var event1 = 50;
	var event2 = 100;

	var workshop1 = 700;
	var workshop2 = 500;
	var workshop3 = 350;

	var name = document.forms['regform']['name'].value;
	var namelen = name.length;
	
	var col = document.forms['regform']['col'].value;
	var collen = col.length;

	var phone = document.forms['regform']['phone'].value;
	var phonelen = phone.length;

	if (name) 
	{
		if (namelen < 3) 
		{
			window.alert('Enter atleast three characters in name field!!');
			return false;
		}

		var k = 0;

		for (i = 0; i < namelen; i++) 
		{
			l = /[a-z\s]/i;
			if (l.exec(name[i])) 
			{
				if (name[i] == ' ') k = parseInt(k) + 1;
				else k = 0;

				if (k > 2) 
				{
					alert('Name cannot contain more spaces!!');
					return false;
				}
				continue;
			} 
			else 
			{
				window.alert('Name cannot contain special characters or numbers!!');
				return false;
			}
		}
	}

	if (col) 
	{
		if (collen < 3) 
		{
			window.alert('Enter atleast Three characters in college name field!!');
			return false;
		}

		var k = 0;

		for (i = 0; i < collen; i++) 
		{
			l = /[a-z\s]/i;

			if (l.exec(col[i]))
			{
				if (col[i] == ' ') k = parseInt(k) + 1;
				else k = 0;

				if (k > 3)
				{
					alert('College Name cannot contain more spaces!!');
					return false;
				}
				continue;
			} 
			else 
			{
				window.alert('College Name cannot contain special characters or numbers!!');
				return false;
			}
		}
	}

	if (phone) 
	{
		var num = /^\d+$/;
		var pattern = /^[6-9]\d{9}$/;

		if (!phone.match(num))
		{
			alert('Phone Number can contain only numbers');
			return false;
		}
		else if(phonelen != 10)
		{
			alert('Phone Number must contain 10 digits');
			return false;
		}
		else if (!phone.match(pattern))
		{
			alert('Phone number should begin with either 6/7/8/9');
			return false;
		}
	}

	if (document.forms['regform']['CB'].checked)
	{
		a = 1;
		total += event2;
	}

	if (document.forms['regform']['STC'].checked)
	{
		a = 1;
		total += event1;
	}

	if (document.forms['regform']['ST'].checked)
	{
		a = 1;
		total += event1;
	}

	if (document.forms['regform']['PPT'].checked)
	{
		a = 1;
		total += event2;
	}

	if (document.forms['regform']['OTH'].checked)
	{
		a = 1;
		total += event1;
	}

	if (document.getElementById('DA').checked)
	{
		a = 1;
		total += workshop1;
	} 
	else if (document.getElementById('BC').checked)
	{
		a = 1;
		total += workshop2;
	}
	else if (document.getElementById('RPA').checked)
	{
		a = 1;
		total += workshop2;
	}
	else if (document.getElementById('NL').checked)
	{
		a = 1;
		total += workshop3;
	}

	if (a == 0)
	{
		alert('Please select any workshops or events inorder to pay the amount!!!');
		return false;
	}

	alert('Total amount to be paid: ' + total);
}
