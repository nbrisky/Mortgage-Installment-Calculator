function calculateROE() {
  const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
  const downPayment = parseFloat(document.getElementById('downPayment').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
  const renovation = parseFloat(document.getElementById('renovation').value);
  const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;
  const monthlyRent = parseFloat(document.getElementById('monthlyRent').value);
  const brokerFee = parseFloat(document.getElementById('brokerFee').value);
  const opex = parseFloat(document.getElementById('opex').value);

  // Validate inputs
  if ([purchasePrice, downPayment, interestRate, renovation, taxRate, monthlyRent, brokerFee, opex].some(isNaN)) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  // Calculations
  const loanAmount = purchasePrice - downPayment;
  const taxesDollar = purchasePrice * taxRate;
  const equity = downPayment + renovation;
  const annualRent = monthlyRent * 12;
  const loanPayment = loanAmount * interestRate;
  const netIncome = annualRent - brokerFee - opex - loanPayment - taxesDollar;
  const roe = (netIncome / equity) * 100;

  document.getElementById('roeResult').textContent =
    `ROE: ${roe.toFixed(1)}% (Annual Net Income: $${netIncome.toFixed(0)})`;
}
