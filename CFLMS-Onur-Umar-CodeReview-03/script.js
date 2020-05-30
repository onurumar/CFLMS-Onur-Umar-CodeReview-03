function calculateInsurance(formname,formage,formhp,formcountry) {

	formname = document.getElementById("fullname").value;
	console.log(formname);
	formage = Number(document.getElementById("age").value);
	console.log(formage);
	formhp = Number(document.getElementById("hp").value);
	console.log(formhp);
	formcountry = document.getElementById("country").value;
	console.log(formcountry);

		if (formcountry == "Austria") {
			document.getElementById("result").innerHTML = formname + "," + " your insurance costs " + Math.floor(formhp*100/formage+50) + "."}
		
		else if (formcountry == "Hungary") {
			document.getElementById("result").innerHTML = formname + "," + " your insurance costs " + Math.floor(formhp*120/formage+100) + "."} 
		
		else (formcountry == "Greece") 
			document.getElementById("result").innerHTML = formname + "," + " your insurance costs " + Math.floor(formhp*150/(formage+3)+50) + "."}
		
	

	document.getElementById("calculationbutton").addEventListener("click", calculateInsurance, false);




