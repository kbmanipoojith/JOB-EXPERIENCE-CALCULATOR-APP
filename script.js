function calculateDiff() {
  let date_1 = document.getElementById("Year Of Join").value;
  let date_2 = document.getElementById("currentdate").value;

  if (!date_2) {
    date_2 = new Date().toJSON().slice(0, 10);
  }

  let Year Of Join = new Date(date_1);
  let Year Of Relieving = new Date(date_2);

  let diff = new Date(YearOfRelieving.getTime() - YearOfJoin.getTime());

  let output = document.getElementById("show Total Years Of Experience");
  output.id = "show Total Years Of Experience";
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
      "<h2>Wooo... Happy Annivereary! <br>Stanger</h2> " +
      "Total Years Of Experience: " +
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
    "Total Years Of Experience: " +
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
