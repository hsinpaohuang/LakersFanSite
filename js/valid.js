function validate()
{
	var items = 
		[
			document.forms["contact"]["fname"].value,
			document.forms["contact"]["lname"].value,
			document.forms["contact"]["email"].value,
			document.forms["contact"]["phone"].value,
		 	document.forms["contact"]["comments"].value
		]; //items
	
	for(var i=0; i < 5; i++)
	{
		
		if(items[i] == null || items[i] == "")
		{
			missing(i);
			return false;
		} //if
	} //for
	
	if(document.forms["contact"]["method"].value == "select")
	{
		missing(5);
		return false;
	}
	
	return true;
} //validate

function validate_signup()
{
	
	if(document.forms["signup"]["email"].value == null || document.forms["signup"]["email"].value == "")
	{
		missing(2);
		return false;
	} //if
	else
	{
		return true;
	} //else
} //validate_signup

function missing(item)
{
	switch(item)
	{
		case 0: alert("Please enter your first name");
				break;
		case 1: alert("Please enter your last name");
				break;
		case 2: alert("Please enter your email address");
				break;
		case 3: alert("Please enter your telephone number");
				break;
		case 4: alert("Please enter your comments");
				break;
		case 5: alert("Please select a prefered contact method");
	} //switch
} //missing