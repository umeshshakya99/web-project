function validation(){
			var use=document.getElementById('username').value;
			var pass=document.getElementById('passw').value;
            var mobileNumber=document.getElementById('mobileNumber').value;
            var emails=document.getElementById('email').value;



			if (use=="") {
				document.getElementById('user').innerHTML="Please fill the usrname "
				return false;
			}
			if((use.length <=2) || (use.length >10) ){
				document.getElementById('user').innerHTML="Please enter the name between 2 and 10 "
				return false;

			}
			if(!isNaN(use)){
				document.getElementById('user').innerHTML="only character are allowed "
				return false;

			}

			if (pass=="") {
				document.getElementById('password').innerHTML="Please fill the password "
				return false;
			}
			if((pass.length<=6) || (pass.length >13) ){
				document.getElementById('password').innerHTML="Please enter the password between 6 and 13 "
				return false;

			}
			

			
			if (mobileNumber=="") {
				document.getElementById('mobilenumber').innerHTML="Please fill the MobileNumber"
				return false;
			}
			if(isNaN (mobileNumber)){
				document.getElementById('mobilenumber').innerHTML="Digit Only"
				return false;

			}
			if (mobileNumber.length!=10){
				document.getElementById('mobilenumber').innerHTML="  must be 10 Digit "
				return false;
			}

			if (emails=="") {
				document.getElementById('em').innerHTML="Please fill the email"
				return false;
			}
			if (emails.indexOf('@') <=0) {
				document.getElementById('em').innerHTML="invalid position of @"
				return false;

			}
			if((emails.charAt(emails.length -4)!='.')&& (emails.charAt(emails.length -3)!='.')){
				document.getElementById('em').innerHTML="please enter invalid email "
				return false;
			}
		}
