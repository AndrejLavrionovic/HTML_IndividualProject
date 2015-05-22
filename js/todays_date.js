function todaysDate()
{
	var da = new Date();
	var d = da.getDate();
	var m = da.getMonth();
	var year = da.getFullYear();
	if(d===1||d===21||d===31)
	{
		var s="st";
	}
	else if(d===2||d===22)
	{
		var s="nd";
	}
	else if(d===3||d===23)
	{
		var s="rd";
	}
	else
	{
		var s="th";
	}
	var month;
	switch (m)
	{
		case 0:
		month="January";
		break;
		
		case 1:
		month="February";
		break;
		
		case 2:
		month="March";
		break;
		
		case 3:
		month="April";
		break;
		
		case 4:
		month="May";
		break;
		
		case 5:
		month="June";
		break;
		
		case 6:
		month="July";
		break;
		
		case 7:
		month="August";
		break;
		
		case 8:
		month="September";
		break;
		
		case 9:
		month="October";
		break;
		
		case 10:
		month="November";
		break;
		
		case 11:
		month="December";
		break;
		
		default: 
		month="Unknown Month???";
		break;
	}
	document.write("Today is "+d+s+" of "+month+" "+year);
}