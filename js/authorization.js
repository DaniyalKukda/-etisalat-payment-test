function authorization() {
  const authorization = {
    Authorization : {
      Customer : document.querySelector('#authorizationCustomerId').value,
      Language : document.querySelector('#authorizationLanguage').value,
      Currency : document.querySelector('#authorizationCurrency').value,
      OrderName : document.querySelector('#authorizationOrderName').value,
      OrderID : document.querySelector('#authorizationOrderID').value,
      Channel : document.querySelector('#authorizationChannel').value,
      Amount : document.querySelector('#authorizationAmount').value,
      TransactionHint : document.querySelector('#authorizationTransactionHint').value,
      CardNumber : document.querySelector('#authorizationCardNumber').value,
      ExpiryMonth : document.querySelector('#authorizationExpiryMonth').value,
      ExpiryYear : document.querySelector('#authorizationExpiryYear').value,
      VerifyCode : document.querySelector('#authorizationVerifyCode').value,
      UserName : document.querySelector('#authorizationUserName').value,
      Password : document.querySelector('#authorizationPassword').value
    }
  }

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const transaction = JSON.parse(this.responseText).Transaction;

      let result = `<h1>Response</h1>
      <div class="response-table">
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
          <div class="response-col response-key">ResponseClass Description</div>
          <div class="response-col response-value">${transaction.ResponseClassDescription}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Language</div>
          <div class="response-col response-value">${transaction.Language}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Approval Code</div>
          <div class="response-col response-value">${transaction.ApprovalCode}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Account</div>
          <div class="response-col response-value">${transaction.Account}</div>
        </div>`;

      result += `<div class="response-row">
        <div class="response-col response-key">Balance - Value</div>
        <div class="response-col response-value">${transaction.Balance.Value}</div>
      </div>`;

      if(transaction.Balance.Printable) {
        result += `<div class="response-row">
          <div class="response-col response-key">Balance - Printable</div>
          <div class="response-col response-value">${transaction.Balance.Printable}</div>
        </div>`;
      }

      result += `<div class="response-row">
        <div class="response-col response-key">Order ID</div>
        <div class="response-col response-value">${transaction.OrderID}</div>
      </div>`;

      result += `<div class="response-row">
        <div class="response-col response-key">Amount - Value</div>
        <div class="response-col response-value">${transaction.Amount.Value}</div>
      </div>`;

      if(transaction.Amount.Printable) {
        result += `<div class="response-row">
          <div class="response-col response-key">Amount - Printable</div>
          <div class="response-col response-value">${transaction.Amount.Printable}</div>
        </div>`;
      }

      result += `<div class="response-row">
        <div class="response-col response-key">Fees - Value</div>
        <div class="response-col response-value">${transaction.Fees.Value}</div>
      </div>`;

      if(transaction.Fees.Printable) {
        result += `<div class="response-row">
          <div class="response-col response-key">Fees - Printable</div>
          <div class="response-col response-value">${transaction.Fees.Printable}</div>
        </div>`;
      }

      result += `<div class="response-row">
        <div class="response-col response-key">Card Number</div>
        <div class="response-col response-value">${transaction.CardNumber}</div>
      </div>`;

      if(transaction.Payer) {
        result += `<div class="response-row">
          <div class="response-col response-key">Payer</div>
          <div class="response-col response-value">${transaction.Payer.Information}</div>
        </div>`;
      }

      result += `<div class="response-row">
          <div class="response-col response-key">Card Token</div>
          <div class="response-col response-value">${transaction.CardToken}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Card Brand</div>
          <div class="response-col response-value">${transaction.CardBrand}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Card Type</div>
          <div class="response-col response-value">${transaction.CardType}</div>
        </div>
        <div class="response-row">
          <div class="response-col response-key">Unique ID</div>
          <div class="response-col response-value">${transaction.UniqueID}</div>
        </div>
      </div>`;

      // Add into DOM
      getResponseContainer.innerHTML = result;
    }
  };
  xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://demo-ipg.ctdev.comtrust.ae:2443", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send(JSON.stringify(authorization));
}