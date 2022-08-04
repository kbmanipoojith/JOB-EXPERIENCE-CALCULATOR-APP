function calculateDiff() {
  let date_1 = document.getElementById("bDate").value;
  let date_2 = document.getElementById("cDate").value;

  
  if (!date_2) {
    date_2 = new Date().toJSON().slice(0, 10);
  }

  let yearOfJoin = new Date(date_1);
  let yearOfRelieving = new Date(date_2);

  let diff = new Date(yearOfRelieving.getTime() - yearOfJoin.getTime());

  let output = document.getElementById("showTotalYearsOfExperience");
  output.id = "showTotalYearsOfExperience";
  if (diff == NaN) {
    console.log("Plese select data first!");
  }

  if (date_1 > date_2) {
    output.innerHTML = "Invalid Input!";
    return;
  }

  if (!date_1) {
    output.innerHTML = "please select date first!";
    return;
  }

  date_1 = new Date(date_1).toJSON().slice(6, 10);
  date_2 = new Date(date_2).toJSON().slice(6, 10);

  if (date_1 == date_2) {
    output.innerHTML =
      "<h2>Wooo... Happy Anniversary! <br>Stanger</h2> " +
      "TotalYearsOfExperience: " +
      " " +
      Number(diff.getUTCFullYear() - 1970) +
      " Years " +
      " " +
      diff.getUTCMonth() +
      " Months " +
      " " +
      Number(diff.getUTCDate() - 1) +
      " Days";
    return;
  }

  output.innerHTML =
    "TotalYearsOfExperience: " +
    " " +
    Number(diff.getUTCFullYear() - 1970) +
    " Years " +
    " " +
    diff.getUTCMonth() +
    " Months " +
    " " +
    Number(diff.getUTCDate() - 1) +
    " Days";
}
