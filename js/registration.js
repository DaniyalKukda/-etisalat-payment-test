function registration() {
  const registration = {
    Registration: {
      Currency: document.querySelector('#registrationCurrency').value,
      ReturnPath: document.querySelector('#registrationReturnPath').value,
      TransactionHint: document.querySelector('#registrationTransactionHint').value,
      OrderID: document.querySelector('#registrationOrderId').value,
      Store: document.querySelector('#registrationStore').value,
      Terminal: document.querySelector('#registrationTerminal').value,
      Channel: document.querySelector('#registrationChannel').value,
      Amount: document.querySelector('#registrationAmount').value,
      Customer: document.querySelector('#registrationCustomerId').value,
      OrderName: document.querySelector('#registrationOrderName').value,
      UserName: document.querySelector('#registrationUserName').value,
      Password: document.querySelector('#registrationPassword').value
    }
  }

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const transaction = JSON.parse(this.responseText).Transaction;

      let result = `<h1>Response</h1> 
      <form action=${transaction.PaymentPage} URL method="post">
        <input type='Hidden' name='TransactionID' value='${transaction.TransactionID}' />
        <input class="btn send-request-btn goToPayment-btn" type="submit" value="Go to Payment Portal">
      </form>
      <div class="response-table">
        <div class="response-row">
          <div class="response-col response-key">Payment Portal</div>
          <div class="response-col response-value">
            <a href=${transaction.PaymentPortal}>${transaction.PaymentPortal}</a>
          </div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Payment Page</div>
          <div class="response-col response-value">
            <a href=${transaction.PaymentPage}>${transaction.PaymentPage}</a>
          </div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Response Code</div>
          <div class="response-col response-value">${transaction.ResponseCode}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Response Class</div>
          <div class="response-col response-value">${transaction.ResponseClass}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Response Description</div>
          <div class="response-col response-value">${transaction.ResponseDescription}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Transaction ID</div>
          <div class="response-col response-value">${transaction.TransactionID}</div>
        </div>`;

      result += `<div class="response-row">
        <div class="response-col response-key">Balance - Value</div>
        <div class="response-col response-value">${transaction.Balance.Value}</div>
      </div>`;

      if (transaction.Balance.Printable) {
        result += `<div class="response-row">
          <div class="response-col response-key">Balance - Printable</div>
          <div class="response-col response-value">${transaction.Balance.Printable}</div>
        </div>`;
      }

      result += `<div class="response-row">
        <div class="response-col response-key">Amount - Value</div>
        <div class="response-col response-value">${transaction.Amount.Value}</div>
      </div>`;

      if (transaction.Amount.Printable) {
        result += `<div class="response-row">
          <div class="response-col response-key">Amount - Printable</div>
          <div class="response-col response-value">${transaction.Amount.Printable}</div>
        </div>`;
      }

      result += `<div class="response-row">
        <div class="response-col response-key">Fees - Value</div>
        <div class="response-col response-value">${transaction.Fees.Value}</div>
      </div>`;

      if (transaction.Fees.Printable) {
        result += `<div class="response-row">
          <div class="response-col response-key">Fees - Printable</div>
          <div class="response-col response-value">${transaction.Fees.Printable}</div>
        </div>`;
      }

      if (transaction.Payer) {
        result += `<div class="response-row">
          <div class="response-col response-key">Payer</div>
          <div class="response-col response-value">${transaction.Payer.Information}</div>
        </div>`;
      }

      result += `<div class="response-row">
          <div class="response-col response-key">Unique ID</div>
          <div class="response-col response-value">${transaction.UniqueID}</div>
        </div>
      </div>`;

      result += `<form action=${transaction.PaymentPortal} method="POST" class="payment-portal-form"> 
        <input type='hidden' name='TransactionID' value=${transaction.TransactionID}/> 
        <input class="btn submit-btn" type="submit" value="Submit">
      </form>`;

      // Add into DOM
      getResponseContainer.innerHTML = result;
    }
  };
  xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://demo-ipg.ctdev.comtrust.ae:2443", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send(JSON.stringify(registration));
}