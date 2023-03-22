function validation() {
  var name = document.getElementById("name").value;
  var desc = document.getElementById("des").value;
  var dd = document.getElementById("dd").value;
  var sd = document.getElementById("sd").value;

  var date_regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  var error = false;
  //name validation
  if (name.length) {
    document.getElementById("name-valid").style.display = "block";
    document.getElementById("name-invalid").style.display = "none";
  } else {
    document.getElementById("name-invalid").style.display = "block";
    document.getElementById("name-valid").style.display = "none";
    error = true;
  }
  //desc validation
  if (desc.length) {
    document.getElementById("des-valid").style.display = "block";
    document.getElementById("des-invalid").style.display = "none";
  } else {
    document.getElementById("des-invalid").style.display = "block";
    document.getElementById("des-valid").style.display = "none";
    error = true;
  }
  ///////////////////////////
  if (date_regex.test(dd)) {
    // dd && dd.length === 8 && parseInt(dd)
    document.getElementById("dd-valid").style.display = "block";
    document.getElementById("dd-invalid").style.display = "none";
  } else {
    document.getElementById("dd-invalid").style.display = "block";
    document.getElementById("dd-valid").style.display = "none";
    error = true;
  }
  ////////////////////////////////////
  if (date_regex.test(dd)) {
    // sd && sd.length === 8 && parseInt(sd)
    document.getElementById("sd-valid").style.display = "block";
    document.getElementById("sd-invalid").style.display = "none";
  } else {
    document.getElementById("sd-invalid").style.display = "block";
    document.getElementById("sd-valid").style.display = "none";
    error = true;
  }

  var user = {
    name: name,
    description: desc,
    "due date": dd,
    "start date": sd,
  };

  const arr = [JSON.parse(localStorage.getItem("Data"))];
  const newArry = [...arr, user];
  localStorage.setItem("Data", JSON.stringify(newArry));

  if (!error) {
    alert("Your account has been created");

    document.getElementById("name").value = "";
    document.getElementById("des").value = "";
    document.getElementById("dd").value = "";
    document.getElementById("sd").value = "";

    document.getElementById("name-valid").style.display = "none";
    document.getElementById("des-valid").style.display = "none";
    document.getElementById("dd-valid").style.display = "none";
    document.getElementById("sd-valid").style.display = "none";
  }
}
