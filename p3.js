var score=document.getElementById("fico").value;
var vehicleprice;
var downpmtauto;

var autoMinDownPmt;
var autorate;
var autoloan;
var autoprice;
var aloan=[
  {loan: 5000, maxprice: 15000, intrate: .225},
  {loan: 10000, maxprice: 22500, intrate: .175},
  {loan: 16500, maxprice: 35000, intrate: .125},
  {loan: 22500, maxprice: 50000, intrate: .089},
  {loan: 37500, maxprice: 75000, intrate: .049},
  {loan: 100000, maxprice:250000, intrate: .009},
];
function getscoreauto(score, autoInterestRate, maxAutoprice, maxAutoloan) {
  var index;
  if (score < 300) {
    index=0;
    autoPriceIndex=0;
    maxAutoloanIndex=0;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 22.5%";
  } else if (score >= 300 && score <= 629) {
    index=1;
    autoPriceIndex=1;
    maxAutoloanIndex=1;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 17.5%";
  } else if (score >= 630 && score <= 689) {
    index=2;
    autoPriceIndex=2;
    maxAutoloanIndex=2;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 12.5%";
  } else if (score >= 690 && score <= 719) {
    index=3;
    autoPriceIndex=3;
    maxAutoloanIndex=3;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 8.9%";
  } else if (score >= 720 && score <= 789) {
    index=4;
    autoPriceIndex=4;
    maxAutoloanIndex=4;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 4.9%";
  } else if (score >= 790 && score <= 850) {
    index=5;
    maxAutoloanIndex=5;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="You can buy any vehicle you want.";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 0.9%";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }
  autoloan = maxAutoloan[maxAutoloanIndex];
  autoprice = maxAutoprice[autoPriceIndex];
  autorate = autoInterestRate[index];
  return score;
}

function getautoprice(score, maxAutoprice) {
  vehicleprice=document.getElementById("autoPrice").value;
  var autoPriceIndex;
  autoprice = maxAutoprice[autoPriceIndex];
  if(score < 300 && vehicleprice > maxAutoprice) {
  autoPriceIndex=0;
  document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
  } else if (score >= 300 && score <= 629 && vehicleprice > maxAutoprice){
  autoPriceIndex=1;
  document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
  } else if (score >= 630 && score <= 689 && vehicleprice > maxAutoprice) {
  autoPriceIndex=2;
  document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
  } else if (score >= 690 && score <= 719 && vehicleprice > maxAutoprice) {
  autoPriceIndex=3;
  document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
  } else if (score >= 720 && score <= 789 && vehicleprice > maxAutoprice) {
  autoPriceIndex=4;
  document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
  }
  return vehicleprice;
}

function autoDownPmt(vehicleprice, maxAutoprice) {
  downpmtauto=document.getElementById("autodownpmt").value;
  return downpmtauto;
}

function autoMinDownPmt(downpmtauto, vehicleprice) {
  var mindwnpmt=vehicleprice-autoloan;
  return mindwnpmt;
}
