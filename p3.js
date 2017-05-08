var score=document.getElementById("fico").value;
var vehicleprice;
var downpmtauto;
var mindwnpmt;
var autoloaninfo;
var autoprice;
var aloan=[
  {loan: 5000, maxprice: 15000, intrate: .225},
  {loan: 10000, maxprice: 22500, intrate: .175},
  {loan: 16500, maxprice: 35000, intrate: .125},
  {loan: 22500, maxprice: 50000, intrate: .089},
  {loan: 37500, maxprice: 75000, intrate: .049},
  {loan: 100000, maxprice:250000, intrate: .009},
];
function getscoreauto(score, aloan) {
  var index;
  if (score < 300) {
    index=0;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan.loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan.intrate+", or 22.5%";
  } else if (score >= 300 && score <= 629) {
    index=1;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan.loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan.intrate+", or 17.5%";
  } else if (score >= 630 && score <= 689) {
    index=2;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan.loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan.intrate+", or 12.5%";
  } else if (score >= 690 && score <= 719) {
    index=3;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan.loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan.intrate+", or 8.9%";
  } else if (score >= 720 && score <= 789) {
    index=4;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan.loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan.intrate+", or 4.9%";
  } else if (score >= 790 && score <= 850) {
    index=5;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan.loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan.intrate+", or 0.9%";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }
  aloaninfo = aloan[index];
  return aloaninfo;
}

function getautoprice(score, aloan) {
  vehicleprice=document.getElementById("autoPrice").value;
  var autoPriceIndex;
  autoprice = maxAutoprice[autoPriceIndex];
  if(score < 300 && vehicleprice > maxAutoprice) {
  autoPriceIndex=0;
  document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
  } else if (score >= 300 && score <= 629 && vehicleprice > maxAutoprice){
  autoPriceIndex=1;
  document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
  } else if (score >= 630 && score <= 689 && vehicleprice > maxAutoprice) {
  autoPriceIndex=2;
  document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
  } else if (score >= 690 && score <= 719 && vehicleprice > maxAutoprice) {
  autoPriceIndex=3;
  document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
  } else if (score >= 720 && score <= 789 && vehicleprice > maxAutoprice) {
  autoPriceIndex=4;
  document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
  } else if (score >= 790 && score <= 850 && vehicleprice > maxAutoprice) {
  autoPriceIndex=5;
  document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan.maxprice+".";
  }
  return vehicleprice;
}

function autoDownPmt(score, vehicleprice, aloan, maxAutoprice) {
  downpmtauto=document.getElementById("autodownpmt").value;
  var pmtIndex;
  mindwnpmt=vehicleprice - aloan.loan;
  if (score < 300 && downpmtauto < mindwnpmt) {
    pmtIndex=0;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
  } else if (score >= 300 && score <= 629 && downpmtauto < mindwnpmt) {
    pmtIndex=1;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
  } else if (score >= 630 && score <= 689 && downpmtauto < mindwnpmt) {
    pmtIndex=2;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
  } else if (score >= 690 && score <= 719 && downpmtauto < mindwnpmt) {
    pmtIndex=3;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
  } else if (score >= 720 && score <= 789 && downpmtauto < mindwnpmt) {
    pmtIndex=4;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
  } else if (score >= 790 && score <= 850 && downpmtauto < mindwnpmt) {
    pmtIndex=5;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
  }
  return downpmtauto;
}
