var score;
var vehicleprice;
var downpmtauto;
var mindwnpmt;
var aloan=[
  {loan: 5000, maxprice: 15000, intrate: .225},
  {loan: 10000, maxprice: 22500, intrate: .175},
  {loan: 16500, maxprice: 35000, intrate: .125},
  {loan: 22500, maxprice: 50000, intrate: .089},
  {loan: 37500, maxprice: 75000, intrate: .049},
  {loan: 100000, maxprice:250000, intrate: .009},
];
var hloan=[
  {loan: 55000, maxprice: 175000, intrate: .1375},
  {loan: 112500, maxprice: 270000, intrate: .1085},
  {loan: 187500, maxprice: 395000, intrate: .0675},
  {loan: 265000, maxprice: 525000, intrate: .0475},
  {loan: 562500, maxprice: 1250000, intrate: .0395},
  {loan: 1250000, maxprice:7500000, intraste: .0325},
];
var homeprice;
var downpmthome;
var mindwnpmthome;

function getscoreauto() {
  var index;
  score=document.getElementById("fico").value;
  if (score < 300) {
    index=0;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan[0].loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan[0].maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan[0].intrate+", or 22.5%";
  } else if (score >= 300 && score <= 629) {
    index=1;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan[1].loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan[1].maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan[1].intrate+", or 17.5%";
  } else if (score >= 630 && score <= 689) {
    index=2;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan[2].loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan[2].maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan[2].intrate+", or 12.5%";
  } else if (score >= 690 && score <= 719) {
    index=3;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan[3].loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan[3].maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan[3].intrate+", or 8.9%";
  } else if (score >= 720 && score <= 789) {
    index=4;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan[4].loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan[4].maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan[4].intrate+", or 4.9%";
  } else if (score >= 790 && score <= 850) {
    index=5;
    document.getElementById("maxAutoloan").innerHTML="Your maximum loan amount is $"+aloan[5].loan+".";
    document.getElementById("maxAutoprice").innerHTML="Your maximum vehicle price is $"+aloan[5].maxprice+".";
    document.getElementById("autorate").innerHTML="Your interest rate is "+aloan[5].intrate+", or 0.9%";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }
}

function getautoprice() {
  vehicleprice=document.getElementById("autoPrice").value;
  if (score < 300 && vehicleprice > aloan[0].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum vehicle price is $"+aloan[0].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
  } else if (score >= 300 && score <= 629 && vehicleprice > aloan[1].maxprice){
  document.getElementById("priceError").innerHTML="Your maximum vehicle price is $"+aloan[1].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
  } else if (score >= 630 && score <= 689 && vehicleprice > aloan[2].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum vehicle price is $"+aloan[2].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
  } else if (score >= 690 && score <= 719 && vehicleprice > aloan[3].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum vehicle price is $"+aloan[3].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
  } else if (score >= 720 && score <= 789 && vehicleprice > aloan[4].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum vehicle price is $"+aloan[4].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
  } else if (score >= 790 && score <= 850 && vehicleprice > aloan[5].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum vehicle price is $"+aloan[5].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
  } else {
  document.getElementById("priceError").innerHTML="Your price selection is acceptable.";
  document.getElementById("priceError").classList.add("has-success");
  }
  return vehicleprice;
}

function autoDownPmt() {
  downpmtauto=document.getElementById("autodownpmt").value;
  var apmt=getautoprice(vehicleprice);
    if (score < 300 && downpmtauto < (apmt - aloan[0].loan)) {
    mindwnpmt=apmt-aloan[0].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 300 && score <= 629 && downpmtauto < (apmt - aloan[1].loan)) {
    mindwnpmt=apmt-aloan[1].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 630 && score <= 689 && downpmtauto < (apmt - aloan[2].loan)) {
    mindwnpmt=apmt-aloan[2].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 690 && score <= 719 && downpmtauto < (apmt - aloan[3].loan)) {
    mindwnpmt=apmt-aloan[3].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 720 && score <= 789 && downpmtauto < (apmt - aloan[4].loan)) {
    mindwnpmt=apmt-aloan[4].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 790 && score <= 850 && downpmtauto < (apmt - aloan[5].loan)) {
    mindwnpmt=apmt-aloan[5].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmt+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else {
    document.getElementById("pmtError").innerHTML="Your down payment amount has been approved.";
    document.getElementById("pmtError").classList.add("has-success");
  }
}

function getscorehome() {
  var index;
  score=document.getElementById("fico").value;
  if (score < 300) {
    index=0;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[0].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum vehicle price is $"+hloan[0].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[0].intrate+", or 13.75%";
  } else if (score >= 300 && score <= 629) {
    index=1;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[1].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum vehicle price is $"+hloan[1].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[1].intrate+", or 10.85%";
  } else if (score >= 630 && score <= 689) {
    index=2;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[2].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum vehicle price is $"+hloan[2].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[2].intrate+", or 6.75%";
  } else if (score >= 690 && score <= 719) {
    index=3;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[3].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum vehicle price is $"+hloan[3].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[3].intrate+", or 4.75%";
  } else if (score >= 720 && score <= 789) {
    index=4;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[4].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum vehicle price is $"+hloan[4].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[4].intrate+", or 3.95%";
  } else if (score >= 790 && score <= 850) {
    index=5;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[5].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum vehicle price is $"+hloan[5].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[5].intrate+", or 3.25%";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }
}

function gethomeprice() {
  homeprice=document.getElementById("homePrice").value;
  if (score < 300 && vehicleprice > hloan[0].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum home price is $"+hloan[0].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
} else if (score >= 300 && score <= 629 && homeprice > hloan[1].maxprice){
  document.getElementById("priceError").innerHTML="Your maximum home price is $"+hloan[1].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
} else if (score >= 630 && score <= 689 && homeprice > hloan[2].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum home price is $"+hloan[2].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
} else if (score >= 690 && score <= 719 && homeprice > hloan[3].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum home price is $"+hloan[3].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
} else if (score >= 720 && score <= 789 && homeprice > hloan[4].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum home price is $"+hloan[4].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
} else if (score >= 790 && score <= 850 && homeprice > hloan[5].maxprice) {
  document.getElementById("priceError").innerHTML="Your maximum home price is $"+hloan[5].maxprice+".";
  document.getElementById("priceError").classList.add("shown-message");
  } else {
  document.getElementById("priceError").innerHTML="Your price selection is acceptable.";
  document.getElementById("priceError").classList.add("has-success");
  }
  return homeprice;
}

function homeDownPmt() {
  downpmthome=document.getElementById("homedownpmt").value;
  var hpmt=gethomeprice(homeprice);
    if (score < 300 && downpmthome < (hpmt - hloan[0].loan)) {
    mindwnpmthome=hpmt-hloan[0].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmthome+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 300 && score <= 629 && downpmthome < (hpmt - hloan[1].loan)) {
    mindwnpmthome=hpmt-hloan[1].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmthome+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 630 && score <= 689 && downpmthome < (hpmt - hloan[2].loan)) {
    mindwnpmthome=hpmt-hloan[2].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmthome+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 690 && score <= 719 && downpmthome < (hpmt - hloan[3].loan)) {
    mindwnpmthome=hpmt-hloan[3].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmthome+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 720 && score <= 789 && downpmthome < (hpmt - hloan[4].loan)) {
    mindwnpmthome=hpmt-hloan[4].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmthome+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else if (score >= 790 && score <= 850 && downpmthome < (hpmt - hloan[5].loan)) {
    mindwnpmthome=hpmt-hloan[5].loan;
    document.getElementById("pmtError").innerHTML="Insufficient down payment entered, your minimum down payment must be at least $"+mindwnpmthome+".";
    document.getElementById("pmtError").classList.add("shown-message");
  } else {
    document.getElementById("pmtError").innerHTML="Your down payment amount has been approved.";
    document.getElementById("pmtError").classList.add("has-success");
  }
}
