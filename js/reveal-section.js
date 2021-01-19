const apiSelect = document.querySelector('#apiSelect');
const sendResponseItems = document.querySelectorAll('.send-response-item');
const getResponseContainer = document.querySelector('#getResponseContainer');

function hideAllSections() {
  sendResponseItems.forEach(sendResponseItem => {
    if(!sendResponseItem.classList.contains('display-none')) {
      sendResponseItem.classList.add('display-none');
    }
  });
}

apiSelect.addEventListener('change', () => {
  hideAllSections(); // Invoking hideAllSections() when selected API changes
  getResponseContainer.classList.add('display-none'); // Displaying nothing in place of get Response Container
  getResponseContainer.innerHTML = ''; // Making Get Response Container empty
  const selectedOption = apiSelect.value;
  document.querySelector(`#${selectedOption}`).classList.remove('display-none');
});