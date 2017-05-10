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
  {loan: 1250000, maxprice:7500000, intrate: .0325},
];
var homeprice;
var downpmthome;
var mindwnpmthome;
var autotime=[12,24,36,48,60,72];
var hometime=[60,120,180,240,300,360];

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
    document.getElementById("maxHomeprice").innerHTML="Your maximum home price is $"+hloan[0].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[0].intrate+", or 13.75%";
  } else if (score >= 300 && score <= 629) {
    index=1;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[1].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum home price is $"+hloan[1].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[1].intrate+", or 10.85%";
  } else if (score >= 630 && score <= 689) {
    index=2;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[2].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum home price is $"+hloan[2].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[2].intrate+", or 6.75%";
  } else if (score >= 690 && score <= 719) {
    index=3;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[3].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum home price is $"+hloan[3].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[3].intrate+", or 4.75%";
  } else if (score >= 720 && score <= 789) {
    index=4;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[4].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum home price is $"+hloan[4].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[4].intrate+", or 3.95%";
  } else if (score >= 790 && score <= 850) {
    index=5;
    document.getElementById("maxHomeloan").innerHTML="Your maximum loan amount is $"+hloan[5].loan+".";
    document.getElementById("maxHomeprice").innerHTML="Your maximum home price is $"+hloan[5].maxprice+".";
    document.getElementById("homerate").innerHTML="Your interest rate is "+hloan[5].intrate+", or 3.25%";
  } else if (score > 850) {
    alert("A score of 850 is considered perfect.  Please choose again.");
  }
}

function gethomeprice() {
  homeprice=document.getElementById("homePrice").value;
  if (score < 300 && homeprice > hloan[0].maxprice) {
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
/* The following code is courtesy of Hubpages (https://hubpages.com/technology/Use-a-HTML-Form-with-JavaScript-to-Amortize-a-Loan) */
/* For auto */
function commitData() {
  // Declare and initialize the variables
  var eleId;
  var eleDat;
  var loanAmount=document.form1.amount.value;
  var intRate=document.form1.rate.value;
  var numPay=document.form1.numPay.value;
  var loopNum;
  var tagNum;
  var tagNam;
  // Render the display tables to echo the user input
  document.write("<table>");
  document.write("<tr><td><table id='datTab'>");
  document.write("<tr><td id='amtLab'>Loan Amount: </td><td id='lamount'></td></tr>");
  document.write("<tr><td id='intLab'>Interest Rate: </td><td id='irate'></td></tr>");
  document.write("<tr><td id='numLab'>Number of Payments:   </td><td id='numPmt'></td></tr>");
  document.write("<tr><td id='monLab'>Monthly Payment: </td><td id='monPmt'></td></tr>");
  document.write("</table></td>");
  // Render the amortization table, this table displays the number of
  // rows specified by the number of payments input by the user in the numPay field.
  document.write("<td><table border="+"1"+" id='pmtTab'><tr style='background-color:DeepSkyBlue'><td id='numHead'>Payment Number</td><td id='oldBal'>Previous Balance</td><td id='pt'>Payment</td><td id='oil'>Interest Paid</td><td id='newBal'>New Balance</td><td id='til'>Total Interest</td></tr>");
  for(var i=1;i<=numPay;i++) {
    loopNum=i;
    tagNam="n"+loopNum.toString(10);
    document.write("<tr style='background-color:LightSkyBlue'><td id=tagNam>"+i+"</td>");
    tagNam="b"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>");
    tagNam="p"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>")
    tagNam="oi"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>");
    tagNam="nb"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>");
    tagNam="ti"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td></tr>");
  }
  // This statement outside the loop completes the table
  document.write("</table></td></tr></table>");
  // Echo the input in the display table using the displayTableField() function
  displayTableField("flname",loanName);
  displayTableField("lamount",loanAmount);
  displayTableField("irate",intRate);
  displayTableField("numPmt",numPay);
  //Calculate and display the monthly payment amount
  var monPmt=calcMonthly(loanAmount,numPay,intRate);
  displayTableField("monPmt",monPmt);
  // Call the amortization routine
  amortizePmts(loanAmount,intRate,numPay,monPmt);
  return;
}

function amortizePmts(loanAmount,intRate,numPay,monPmt) {
  var oldBalance=loanAmount;
  var newBalance=loanAmount;
  intRate=(intRate/100)/12;
  var monthly=monPmt;
  var owedInterest=0;
  var totalInterestPd=0;
  var tagNam;
  var dispInt
  // The for loop performs the amortization
  for(var i=1;i<=numPay;i++) {
    var loopNum=i;
    owedInterest=newBalance*intRate;
    dispInt=twoDecimal(owedInterest);
    totalInterestPd=totalInterestPd+owedInterest;
    // Test for the final payment
    if (i<numPay) {
      monthly=twoDecimal(monPmt-dispInt);
      oldBalance=newBalance;
      newBalance=twoDecimal(oldBalance-monthly);
    }
    else {
      monthly=(oldBalance-monthly)+owedInterest;
      oldBalance=newBalance;
      newBalance=0;
      monthly=twoDecimal(monthly);
    }
    tagNam="b"+loopNum.toString(10);
    displayTableField(tagNam,oldBalance);
    tagNam="p"+loopNum.toString(10);
    displayTableField(tagNam,monthly);
    tagNam="oi"+loopNum.toString(10);
    displayTableField(tagNam,dispInt);
    tagNam="nb"+loopNum.toString(10);
    displayTableField(tagNam,newBalance);
    tagNam="ti"+loopNum.toString(10);
    displayTableField(tagNam,twoDecimal(totalInterestPd));
  }
  return;
}

function displayTableField(eleId,eleDat) {
  document.getElementById(eleId).innerHTML=eleDat;
  return;
}

function calcMonthly(principal,numPay,intRate) {
  var monthly;
  var intRate=(intRate/100)/12;
  var principal;
  // The accounting formula to calculate the monthly payment is
  //    M = P * ((I + 1)^N) * I / (((I + 1)^N)-1)
  // The following code  transforms this accounting formula into JavaScript to calculate the monthly payment
  monthly=(principal*(Math.pow((1+intRate),numPay))*intRate/(Math.pow((1+intRate),numPay)-1));
  return twoDecimal(monthly);
}

function twoDecimal(chgVar) {
  var chgVar;
  var twoDec=chgVar.toFixed(2);
  return twoDec;
}
/* for home */
function commitData() {
  // Declare and initialize the variables
  var eleId;
  var eleDat;
  var loanAmount=document.form1.amount.value;
  var intRate=document.form1.rate.value;
  var numPay=document.form1.numPay.value;
  var loopNum;
  var tagNum;
  var tagNam;
  // Render the display tables to echo the user input
  document.write("<table>");
  document.write("<tr><td><table id='datTab'>");
  document.write("<tr><td id='amtLab'>Loan Amount: </td><td id='lamount'></td></tr>");
  document.write("<tr><td id='intLab'>Interest Rate: </td><td id='irate'></td></tr>");
  document.write("<tr><td id='numLab'>Number of Payments:   </td><td id='numPmt'></td></tr>");
  document.write("<tr><td id='monLab'>Monthly Payment: </td><td id='monPmt'></td></tr>");
  document.write("</table></td>");
  // Render the amortization table, this table displays the number of
  // rows specified by the number of payments input by the user in the numPay field.
  document.write("<td><table border="+"1"+" id='pmtTab'><tr style='background-color:DeepSkyBlue'><td id='numHead'>Payment Number</td><td id='oldBal'>Previous Balance</td><td id='pt'>Payment</td><td id='oil'>Interest Paid</td><td id='newBal'>New Balance</td><td id='til'>Total Interest</td></tr>");
  for(var i=1;i<=numPay;i++) {
    loopNum=i;
    tagNam="n"+loopNum.toString(10);
    document.write("<tr style='background-color:LightSkyBlue'><td id=tagNam>"+i+"</td>");
    tagNam="b"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>");
    tagNam="p"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>")
    tagNam="oi"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>");
    tagNam="nb"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td>");
    tagNam="ti"+loopNum.toString(10);
    document.write("<td id="+tagNam+"></td></tr>");
  }
  // This statement outside the loop completes the table
  document.write("</table></td></tr></table>");
  // Echo the input in the display table using the displayTableField() function
  displayTableField("flname",loanName);
  displayTableField("lamount",loanAmount);
  displayTableField("irate",intRate);
  displayTableField("numPmt",numPay);
  //Calculate and display the monthly payment amount
  var monPmt=calcMonthly(loanAmount,numPay,intRate);
  displayTableField("monPmt",monPmt);
  // Call the amortization routine
  amortizePmts(loanAmount,intRate,numPay,monPmt);
  return;
}

function amortizePmts(loanAmount,intRate,numPay,monPmt) {
  var oldBalance=loanAmount;
  var newBalance=loanAmount;
  intRate=(intRate/100)/12;
  var monthly=monPmt;
  var owedInterest=0;
  var totalInterestPd=0;
  var tagNam;
  var dispInt
  // The for loop performs the amortization
  for(var i=1;i<=numPay;i++) {
    var loopNum=i;
    owedInterest=newBalance*intRate;
    dispInt=twoDecimal(owedInterest);
    totalInterestPd=totalInterestPd+owedInterest;
    // Test for the final payment
    if (i<numPay) {
      monthly=twoDecimal(monPmt-dispInt);
      oldBalance=newBalance;
      newBalance=twoDecimal(oldBalance-monthly);
    }
    else {
      monthly=(oldBalance-monthly)+owedInterest;
      oldBalance=newBalance;
      newBalance=0;
      monthly=twoDecimal(monthly);
    }
    tagNam="b"+loopNum.toString(10);
    displayTableField(tagNam,oldBalance);
    tagNam="p"+loopNum.toString(10);
    displayTableField(tagNam,monthly);
    tagNam="oi"+loopNum.toString(10);
    displayTableField(tagNam,dispInt);
    tagNam="nb"+loopNum.toString(10);
    displayTableField(tagNam,newBalance);
    tagNam="ti"+loopNum.toString(10);
    displayTableField(tagNam,twoDecimal(totalInterestPd));
  }
  return;
}

function displayTableField(eleId,eleDat) {
  document.getElementById(eleId).innerHTML=eleDat;
  return;
}

function calcMonthly(principal,numPay,intRate) {
  var monthly;
  var intRate=(intRate/100)/12;
  var principal;
  // The accounting formula to calculate the monthly payment is
  //    M = P * ((I + 1)^N) * I / (((I + 1)^N)-1)
  // The following code  transforms this accounting formula into JavaScript to calculate the monthly payment
  monthly=(principal*(Math.pow((1+intRate),numPay))*intRate/(Math.pow((1+intRate),numPay)-1));
  return twoDecimal(monthly);
}

function twoDecimal(chgVar) {
  var chgVar;
  var twoDec=chgVar.toFixed(2);
  return twoDec;
}
