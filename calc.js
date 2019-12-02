var service = document.getElementById("service");
var calculate = document.querySelector("button");
var h3 = document.querySelector("h3");

calculate.addEventListener("click", function() {
  var billSize = parseInt(document.querySelector(".bill").value);
  var people = parseInt(document.querySelector(".people").value);
  var myBill = billSize / people;
  if (service.value === "bad") {
    var tips = myBill * 0.05;
    h3.textContent = "You should leave " + tips + " $ for a tip.";
  } else if (service.value === "good") {
    var tips = myBill * 0.1;
    h3.textContent = "You should leave " + tips + " $ for a tip.";
  } else if (service.value === "great") {
    var tips = myBill * 0.15;
    h3.textContent = "You should leave " + tips + " $ for a tip.";
  }
});
