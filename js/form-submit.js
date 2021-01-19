const sendResponseForms = document.querySelectorAll('.send-response-item form');

sendResponseForms.forEach(sendResponseForm => {
  sendResponseForm.addEventListener('submit', e => {
    e.preventDefault();
    getResponseContainer.classList.remove('display-none');
    
    if(sendResponseForm.id == 'registrationForm') registration();
    else if(sendResponseForm.id == 'finalizationForm') finalization();
    else if(sendResponseForm.id == 'authorizationForm') authorization(); 
    else if(sendResponseForm.id == 'captureForm') capture();
    else if(sendResponseForm.id == 'reversalForm') reversal();
    else if(sendResponseForm.id == 'refundForm') refund();
    else if(sendResponseForm.id == 'rpForm') rp();
    else if(sendResponseForm.id == 'RP_PresentForm') rpPresent();
    else if(sendResponseForm.id == 'RP_NotPresentForm') rpNotPresent();
  });
});