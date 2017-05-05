var score=document.getElementById("fico").value;
var autoprice=document.getElementById("aprice").value;
var homeprice=document.getElementById("hprice").value;
var autoDownPayment=document.getElementById("autodownpmt").value;
var homeDownPayment=document.getElementById("homedownpmt").value;
var autopmt[];
var homepmt[];
var autoInterestRate=[.225, .175, .125, .089, .049, .009];
var homeInterestRate=[.1375, .1085, .0675, .0475, .0395, .0325]
var maxAutoprice=[15000, 27500, 50000, 70000, 125000];
var maxAutoloan=[5000, 10000, 16500, 22500, 37500, 100000];
var autorate;
var homerate;
var autoMinDownPmt;
function nextPage() {
window.location.href="page1.html";
}

function autoficoscore(score, autoInterestRate, maxAutoprice, maxAutoloan) {
  var index;
  var autoPriceIndex;
  var maxAutoloanIndex;
  if (score < 300) {
    index=0;
    autoPriceIndex=0;
    maxAutoloanIndex=0;
    document.getElementById("fico").innerHTML="Your maximum loan amount is " maxAutoloan+".";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is " maxAutoprice+".";
    document.getElementById("fico").innerHTML="Your interest rate is " autoInterestRate+", or 22.5%";
  } else if (score >= 300 && score <= 629) {
    index=1;
    autoPriceIndex=1;
    maxAutoloanIndex=1;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $10,000.";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $27,500.";
  } else if (score >= 630 && score <= 689) {
    index=2;
    autoPriceIndex=2;
    maxAutoloanIndex=2;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $16,500.";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $50,000.";
  } else if (score >= 690 && score <= 719) {
    index=3;
    autoPriceIndex=3;
    maxAutoloanIndex=3;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $22,500.";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $70,000.";
  } else if (score >= 720 && score <= 789) {
    index=4;
    autoPriceIndex=4;
    maxAutoloanIndex=4;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $37,500.";
    document.getElementById("fico").innerHTML="Your maximum vehicle price is $125,000.";
  } else if (score >= 790 && score <= 850) {
    index=5;
    maxAutoloanIndex=5;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $100,000.";
    document.getElementById("fico").innerHTML="You can buy any vehicle you want.";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }

  autorate = autoInterestRate[index];
}

function homeficoscore(score, homeInterestRate) {
  var homeindex;
  if (score < 300) {
    homeindex=0;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $55,000.";
  } else if (score >= 300 && score <= 629) {
    homeindex=1;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $112,500.";
  } else if (score >= 630 && score <= 689) {
    homeindex=2;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $187,500.";
  } else if (score >= 690 && score <= 719) {
    homeindex=3;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $265,000.";
  } else if (score >= 720 && score <= 789) {
    homeindex=4;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $562,500.";
  } else if (score >= 790 && score <= 850) {
    homeindex=5;
    document.getElementById("fico").innerHTML="Your maximum loan amount is $1,250,000.";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }
  homerate = homeInterestRate[homeindex];
}

function autodownpmt() {
  document.getElementById("price")

}
