function validate()
{
  var firstname= document.getElementById("fname")
  var lastname= document.getElementById("lname")
  var password= document.getElementById("password")
  var conpassword= document.getElementById("conpassword")
  var mobile= document.getElementById("mobile")
  var address= document.getElementById("add")
  var city= document.getElementById("city")
  var country= document.getElementById("country")
  var email=document.getElementById("email")
  if(firstname.value.trim()==""){
    alert("Enter first name");
    return false;
  }
  else if(lastname.value.trim()==""){
    alert("Enter last name");
    return false;
  }
  else if(email.value.trim()==""){
    alert("Enter email Id");
    return false;
  }
  else if(password.value.trim()==""){
    alert("Enter password");
    return false;
  }
  else if(password.value.trim()!=""){
    if(password.value.trim()!=conpassword.value.trim())
    {
      alert("Password's do not match.")
    }
    return false;
  }
  else if(mobile.value.trim()==""){
    alert("Enter contact info");
    return false;
  }
  else if(address.value.trim()==""){
    alert("Enter complete address");
    return false;
  }
  else if(city.value.trim()==""){
    alert("Enter city name");
    return false;
  }
  else if(country.value.trim()==""){
    alert("Enter country name");
    return false;
  }
  else{
    return true;
  }
  
}

let input_val = document.getElementById("input_val");

            let num1 = document.getElementById("num1");
            let num2 = document.getElementById("num2");

            const mybtn = document.getElementById("btn");

            //
            // returns a random integer from 0 to 9
            num1.innerText = Math.floor(Math.random() * 10);
            num2.innerText = Math.floor(Math.random() * 10);

            let number1 = num1.innerText;
            let number2 = num2.innerText;

            mybtn.addEventListener("click", () => {
              //
              let sum_result = parseInt(number1) + parseInt(number2);

              let res = parseInt(input_val.value);

              if (res == sum_result) {
                alert("Captcha answer is correct.");
              } else {
                alert("Wrong answer. Try again.");
              }

              window.location.reload();
            });



