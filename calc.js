var service = document.querySelector("select").value;
var calculate = document.querySelector("button");
var h3 = document.querySelector("h3");

calculate.addEventListener("click", function() {
  var billSize = parseInt(document.querySelector(".bill").value);
  var people = parseInt(document.querySelector(".people").value);
  var myBill = billSize / people;
  if (service === "bad") {
    tips = myBill * 0.05;
    h3.textContent = "You should leave " + tips + " $ for a tip.";
  } else if (service === "good") {
    tips = myBill * 0.1;
    h3.textContent = "You should leave " + tips + " $ for a tip.";
  } else if (service === "great") {
    tips = myBill * 0.15;
    h3.textContent = "You should leave " + tips + " $ for a tip.";
  }
});
