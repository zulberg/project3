var score=document.getElementById("fico").value;
var maxAutoloan=[5000, 10000, 16500, 22500, 37500, 100000];
var maxAutoprice=[15000, 22500, 35000, 50000, 75000];
var autoInterestRate=[.225, .175, .125, .089, .049, .009];
var autoMinDownPmt;
var autorate;
var autoloan;
var autoprice;

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
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 22.5%";
  } else if (score >= 630 && score <= 689) {
    index=2;
    autoPriceIndex=2;
    maxAutoloanIndex=2;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 22.5%";
  } else if (score >= 690 && score <= 719) {
    index=3;
    autoPriceIndex=3;
    maxAutoloanIndex=3;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 22.5%";
  } else if (score >= 720 && score <= 789) {
    index=4;
    autoPriceIndex=4;
    maxAutoloanIndex=4;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $"maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 22.5%";
  } else if (score >= 790 && score <= 850) {
    index=5;
    maxAutoloanIndex=5;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $"maxAutoloan+".";
    document.getElementById("fico").innerHTML="You can buy any vehicle you want.";
    document.getElementById("fico").innerHTML="Your interest rate is "autoInterestRate+", or 22.5%";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }
  autoloan = maxAutoloan[maxAutoloanIndex];
  autoprice = maxAutoprice[autoPriceIndex];
  autorate = autoInterestRate[index];
}
