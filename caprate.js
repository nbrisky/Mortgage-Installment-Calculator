function calculateCapRate() {
    const value = parseFloat(document.getElementById("propertyValue").value);
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
  
    if (isNaN(value) || isNaN(income) || isNaN(expenses) || value === 0) {
      alert("Please enter valid numbers in all fields.");
      return;
    }
  
    const noi = income - expenses;
    const capRate = (noi / value) * 100;
  
    document.getElementById("capRateResult").textContent =
      `CAP Rate: ${capRate.toFixed(2)}% (NOI: $${noi.toFixed(2)})`;
  }
  