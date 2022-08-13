// © 2022 gparap

function calculate() {
  //get input values
  let initialBill = document.getElementById('bill-initial').value;
  let tipPercentage = document.getElementById('tip-percentage').value;
  let personsCount = document.getElementById('no-of-persons').value;

  //do not allow negative values
  //or persons to be zero
  if ((parseInt(initialBill) < 0) || (parseInt(tipPercentage) < 0) || (parseInt(personsCount) <= 0)) {
    alert("Please, enter correct values!");
    return;
  }

  //calculate values
  let totalBill = parseFloat(initialBill) + parseFloat((initialBill * tipPercentage / 100));
  let billPerPerson = totalBill / personsCount;
  let tipsTotal = totalBill - initialBill;
  let tipsPerPerson = tipsTotal / personsCount;

  //display results
  document.getElementById('bill-total').innerHTML = totalBill.toFixed(2);
  document.getElementById('bill-split').innerHTML = billPerPerson.toFixed(2);
  document.getElementById('tips-total').innerHTML = tipsTotal.toFixed(2);
  document.getElementById('tips-split').innerHTML = tipsPerPerson.toFixed(2);
}
