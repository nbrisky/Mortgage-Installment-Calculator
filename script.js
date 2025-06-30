function generateTable() {
    const propertyCost = parseFloat(document.getElementById("propertyCost").value);
    const loan = parseFloat(document.getElementById("loanAmount").value);
    const capRate = parseFloat(document.getElementById("capRate").value) / 100;
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  
    const annualIncome = propertyCost * capRate;
    let cashPayment = annualIncome;
  
    let balance = loan; // interest is based on loan (principal amount)
    let year = 1;
  
    const tbody = document.querySelector("#mortgage-table tbody");
    tbody.innerHTML = "";
  
    while (balance > 0 && year <= 100) {
      const interest = balance * interestRate;
      let reduction = cashPayment - interest;
  
      if (reduction <= 0) {
        alert("CAP rate income is too low to cover interest. Loan will never be paid off.");
        return;
      }
  
      if (reduction > balance) {
        reduction = balance;
        cashPayment = interest + reduction; // adjusts final year's payment
      }
  
      balance -= reduction;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${year}</td>
        <td>$${cashPayment.toFixed(0)}</td>
        <td>$${interest.toFixed(0)}</td>
        <td>$${reduction.toFixed(0)}</td>
        <td>$${balance.toFixed(0)}</td>
      `;
      tbody.appendChild(row);
      year++;
    }
  }
  
  
  