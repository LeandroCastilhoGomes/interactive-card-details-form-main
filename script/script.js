const form = document.getElementById('form')
const concluido = getElementById('concluido')

const nomeins = document.getElementById('nome').value(String)
const numeroins = document.getElementById('numero').value(Number)
const mesins = document.getElementById('mes').value(Number)
const anoins = document.getElementById('ano').value(Number)
const cvcins = document.getElementById('codigo').value(Number)

const nomecard = document.getElementById('nome-card').value(String)
const numcard = document.getElementById('numcard').value(Number)
const mescard = document.getElementById('card-mes').value(Number)
const anocard = document.getElementById('card-ano').value(Number)
const cvccard = document.getElementById('cod-seg').value(Number)

const nomeinfo = document.getElementById('nomeinfo').value(String)
const numinfo = document.getElementById('numinfo').value(Number)
const datainfo = document.getElementById('datainfo').value(Number)
const cvcinfo = document.getElementById('cvcinfo').value(Number)

const onNameChange = (event) => {
    const name = event.target.value;
    nomecard.textContent = name.length ? name : 'Jane Appleseed';
  };
  
  const onNumberChange = (event) => {
    const number = event.target.value;
    numcard.textContent = number.length ? number : '0000 0000 0000 0000';
  };
  
  const onMonthChange = (event) => {
    if (event.target.value.length > 2) {
      event.target.value = event.target.value.slice(0, 2);
    }
    const month = event.target.value;
    mescard.textContent = month.length ? month : '00';
  };
  
  const onYearChange = (event) => {
    if (event.target.value.length > 2) {
      event.target.value = event.target.value.slice(0, 2);
    }
    const year = event.target.value;
    anocard.textContent = year.length ? year : '00';
  };
  
  const onCVCChange = (event) => {
    if (event.target.value.length > 2) {
      event.target.value = event.target.value.slice(0, 3);
    }
    const cvc = event.target.value;
    cvccard.textContent = cvc.length ? cvc : '000';
  };
  
  nomeins.addEventListener('input', onNameChange);
  numeroins.addEventListener('input', onNumberChange);
  mesins.addEventListener('input', onMonthChange);
  anoins.addEventListener('input', onYearChange);
  cvcins.addEventListener('input', onCVCChange);
  
  // Mask
  const maskCardNumber = (event) => {
    // Key pressed is not backspace or delete
    if (event.keyCode != 46 && event.keyCode != 8) {
      const i = numeroins.value.length;
      if (i === 4 || i === 9 || i === 14) {
        numeroins.value += ' ';
      }
    }
  };
  
  document.addEventListener('keydown', maskCardNumber);
  
  // Validation
  const genericValidation = (name, value, condition, input, info) => {
    if (condition) {
      input.style.borderColor = 'hsl(0, 100%, 66%)';
      info.textContent = 'Invalid ' + name;
  
      if (!value.length) {
        info.textContent = "Can't be blank";
      }
    } else {
      input.style.borderColor = 'hsl(270, 3%, 87%)';
      info.textContent = '';
    }
  };
  
  const nameValidate = (event) => {
    const name = 'name';
    const value = event.target.value;
    const condition = value.length < 4 || !value.includes(' ');
  
    genericValidation(name, value, condition, nomeins, nomeinfo);
  };
  
  const numberValidate = (event) => {
    const name = 'card number';
    const value = event.target.value;
    const condition = value.length !== 19 || !/^[0-9\s]*$/.test(value);
  
    genericValidation(name, value, condition, numeroins, numinfo);
  };
  
  const monthValidate = (event) => {
    const name = 'month';
    const value = event.target.value;
    const condition = value < 1 || value > 12;
  
    genericValidation(name, value, condition, mesins, datainfo);
  };
  
  const yearValidate = (event) => {
    const name = 'year';
    const value = event.target.value;
    const condition = value < 23 || value > 30;
  
    genericValidation(name, value, condition, anoins, datainfo);
  };
  
  const CVCValidate = (event) => {
    const name = 'CVC';
    const value = event.target.value;
    const condition = value.length !== 3;
  
    genericValidation(name, value, condition, cvcins, cvcinfo);
  };
  
  nomeins.addEventListener('blur', nomeValidate);
  numeroins.addEventListener('blur', numeroValidate);
  mesins.addEventListener('blur', mesValidate);
  anoins.addEventListener('blur', anoValidate);
  cvcins.addEventListener('blur', cvcValidate);
  
  // Submit
  const onSubmit = (event) => {
    event.preventDefault();
  
    let formIsValid = true;
  
    const name = nameInput.value.trim();
    if (name.length < 4 || !name.includes(' ')) {
      formIsValid = false;
    }
  
    const number = numeroins.value.trim();
    if (number.length !== 19 || !/^[0-9\s]*$/.test(number)) {
      formIsValid = false;
    }
  
    const month = +mesins.value.trim();
    if (month < 1 || month > 12) {
      formIsValid = false;
    }
  
    const year = +anoins.value.trim();
    if (year < 23 || year > 30) {
      formIsValid = false;
    }
  
    const cvc = cvcins.value.trim();
    if (+cvc < 1 || +cvc > 999 || cvc.length !== 3) {
      formIsValid = false;
    }
  
    if (formIsValid) {
      form.style.display = 'none';
      successScreen.style.display = 'block';
    }
  };
  
  form.addEventListener('submit', onSubmit);