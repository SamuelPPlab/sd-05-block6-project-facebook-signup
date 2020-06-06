const submitButton = document.getElementById('button-login');

function alerta() {
  const login = document.getElementById('user-email-phone').value;
  alert(login);
}

submitButton.addEventListener('click', alerta);


const picker = new Pikaday({
  field: document.getElementById('data'),
  firstDay: 1,
  format: 'DD/MM/YYYY',
  maxDate: new Date(),
  yearRange: [1910, 2020],
});
console.log(picker);