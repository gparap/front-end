// © 2022 gparap

function calculate() {
  //get UI elements
  let loan = document.getElementById('loan').value;
  let interest =  document.getElementById('interest').value;
  let years =  document.getElementById('years').value;

  //calculate the number of months
  let months = parseInt(years) * 12;

  //calculate the interest rate per month
  let interestPerMonth = parseFloat(interest) / 100 / 12;

  //apply the loan payment formula and update the UI
  monthlyPayment = (parseInt(loan) * interestPerMonth * Math.pow((1 + interestPerMonth), 60)) / (Math.pow((1 + interestPerMonth), 60) - 1) ;
  document.getElementById('payment-monthly').innerHTML = monthlyPayment.toFixed(2);
  totalPayment = monthlyPayment * months;
  document.getElementById('payment-total').innerHTML = totalPayment.toFixed(2);
  totalInterest = totalPayment - parseInt(loan);
  document.getElementById('interest-total').innerHTML = totalInterest.toFixed(2);
}
