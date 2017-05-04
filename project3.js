var score=document.getElementById("fico").value;
var autoprice=document.getElementById("price").value;
var homeprice=document.getElementById("hprice").value;
var autoDownPayment=document.getElementById("autodownpmt").value;
var homeDownPayment=document.getElementById("homedownpmt").value;
var autopmt[];
var homepmt[];
var autoInterestRate=[.225, .175, .125, .089, .049, .009];
var homeInterestRate=[.1375, .1085, .0675, .0475, .0395, .0325]

function nextPage() {
window.location.href="page1.html";
}

function ficoscore(score, autoInterestRate, homeInterestRate) {
  if (score < 300) {
    autoInterestRate = .225;
    homeInterestRate = .1375;
  } else if (score >= 300 && score <= 629) {
    autoInterestRate = .175;
    homeInterestRate = .1085;
  } else if (score >= 630 && score <= 689) {
    autoInterestRate = .125;
    homeInterestRate = .0675;
  } else if (score >= 690 && score <= 719) {
    autoInterestRate = .089;
    homeInterestRate = .0475;
  } else if (score >= 720 && score <= 789) {
    autoInterestRate = .049;
    homeInterestRate = .0395;
  } else if (score >= 790) {
    autoInterestRate = .009;
    homeInterestRate = .0325;
  }
}

function autoLoanAmt(score) {

  if (score < 300) {

  }
}
