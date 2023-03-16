const form = document.getElementById('formu')
const concluido = getElementById('concluido')

const nomeins = document.getElementById('nome')
const numeroins = document.getElementById('numero')
const mesins = document.getElementById('mes')
const anoins = document.getElementById('ano')
const cvcins = document.getElementById('codigo')

const cardNome = document.getElementById('nome-card')
const cardNum = document.getElementById('numcard')
const cardMes = document.getElementById('card-mes')
const cardAno = document.getElementById('card-ano')
const cardCvc = document.getElementById('cod-seg')

const nomeinfo = document.getElementById('nomeinfo')
const numinfo = document.getElementById('numinfo')
const datainfo = document.getElementById('datainfo')
const cvcinfo = document.getElementById('cvcinfo')

function nomecard() {
  const nomeins = document.getElementById('nome')
  const cardNome = document.getElementById('nome-card')
  const nome = String(nomeins.value)
  cardNome.innerText = nome

}

function num() {
  const numeroins = document.getElementById('numero')
  const cardNum = document.getElementById('numcard')
  const num = String(numeroins.value)
  cardNum.innerText = num

}

function mes() {
  const mesins = document.getElementById('mes')
  const cardMes = document.getElementById('card-mes')
  const mes = Number(mesins.value)
  cardMes.innerText = mes

}

function ano() {
  const anoins = document.getElementById('ano')
  const cardAno = document.getElementById('card-ano')
  const ano = Number(anoins.value)
  document.getElementById(datainfo).innerText = ano

}

function cvc() {
  const cvcins = document.getElementById('codigo')
  const cardCvc = document.getElementById('cod-seg')
  const cvc = Number(cvcins.value)
  cardCvc.innerText = cvc

}
// const onNomeChange = (event) => {
//     const nome = event.target.value
//     cardNome.textContent = nome.length ? nome : 'Jane Appleseed'
//   }
  
//   const onNumChange = (event) => {
//     const number = event.target.value
//     cardNum.textContent = number.length ? number : '0000 0000 0000 0000'
//   }
  
//   const onMesChange = (event) => {
//     if (event.target.value.length > 2) {
//       event.target.value = event.target.value.slice(0, 2)
//     }
//     const month = event.target.value
//     cardMes.textContent = month.length ? month : '00'
//   }
  
//   const onAnoChange = (event) => {
//     if (event.target.value.length > 2) {
//       event.target.value = event.target.value.slice(0, 2)
//     }
//     const year = event.target.value;
//     cardAno.textContent = year.length ? year : '00'
//   }
  
//   const onCvcChange = (event) => {
//     if (event.target.value.length > 2) {
//       event.target.value = event.target.value.slice(0, 3)
//     }
//     const cvc = event.target.value
//     cardCvc.textContent = cvc.length ? cvc : '000'
//   }
  
//   nomeins.addEventListener('input', onNomeChange)
//   numeroins.addEventListener('input', onNumChange)
//   mesins.addEventListener('input', onMesChange)
//   anoins.addEventListener('input', onAnoChange)
//   cvcins.addEventListener('input', onCvcChange)
  
  // Mask
  // const maskCardNumber = (event) => {
  //   // Key pressed is not backspace or delete
  //   if (event.keyCode != 46 && event.keyCode != 8) {
  //     const i = numeroins.value.length;
  //     if (i === 4 || i === 9 || i === 14) {
  //       numeroins.value += ' '
  //     }
  //   }
  // }
  
  // document.addEventListener('keydown', maskCardNumber)
  
  // // Validation
  // const genericValidation = (name, value, condition, input, info) => {
  //   if (condition) {
  //     input.style.borderColor = 'hsl(0, 100%, 66%)'
  //     info.textContent = 'Invalid ' + name
  
  //     if (!value.length) {
  //       info.textContent = "Can't be blank"
  //     }
  //   } else {
  //     input.style.borderColor = 'hsl(270, 3%, 87%)'
  //     info.textContent = ''
  //   }
  // }
  
  // const nameValidate = (event) => {
  //   const name = 'nome';
  //   const value = event.target.value;
  //   const condition = value.length < 4 || !value.includes(' ')
  
  //   genericValidation(name, value, condition, nomeins, nomeinfo)
  // }
  
  // const numeroValidate = (event) => {
  //   const name = 'numero'
  //   const value = event.target.value;
  //   const condition = value.length !== 19 || !/^[0-9\s]*$/.test(value)
  
  //   genericValidation(name, value, condition, numeroins, numinfo);
  // }
  
  // const mesValidate = (event) => {
  //   const name = 'mes'
  //   const value = event.target.value;
  //   const condition = value < 1 || value > 12
  
  //   genericValidation(name, value, condition, mesins, datainfo)
  // }
  
  // const anoValidate = (event) => {
  //   const name = 'ano'
  //   const value = event.target.value;
  //   const condition = value < 23 || value > 30
  
  //   genericValidation(name, value, condition, anoins, datainfo)
  // }
  
  // const cvcValidate = (event) => {
  //   const name = 'cvc'
  //   const value = event.target.value
  //   const condition = value.length !== 3
  
  //   genericValidation(name, value, condition, cvcins, cvcinfo)
  // }
  
  // nomeins.addEventListener('blur', nameValidate)
  // numeroins.addEventListener('blur', numeroValidate)
  // mesins.addEventListener('blur', mesValidate)
  // anoins.addEventListener('blur', anoValidate)
  // cvcins.addEventListener('blur', cvcValidate)
  
  // // Submit
  // const onSubmit = (event) => {
  //   event.preventDefault()
  
  //   let formIsValid = true
  
  //   const name = nomeins.value.trim()
  //   if (name.length < 4 || !name.includes(' ')) {
  //     formIsValid = false
  //   }
  
  //   const number = numeroins.value.trim();
  //   if (number.length !== 19 || !/^[0-9\s]*$/.test(number)) {
  //     formIsValid = false
  //   }
  
  //   const month = +mesins.value.trim()
  //   if (month < 1 || month > 12) {
  //     formIsValid = false;
  //   }
  
  //   const year = +anoins.value.trim()
  //   if (year < 23 || year > 30) {
  //     formIsValid = false
  //   }
  
  //   const cvc = cvcins.value.trim();
  //   if (+cvc < 1 || +cvc > 999 || cvc.length !== 3) {
  //     formIsValid = false
  //   }
  
  //   if (formIsValid) {
  //     form.style.display = 'none'
  //     concluido.style.display = 'block'
  //   }
  // }
  
  // form.addEventListener('submit', onSubmit)