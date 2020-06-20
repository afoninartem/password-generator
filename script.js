
//data
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.split('').map(lit => lit.toUpperCase()).join('');
const digits = '0123456789';
const symbols = '!@#$%^&*()_-+=\|/.,:;[]{}';

//length 
const lengthList = document.querySelectorAll('.length-case');
lengthList.forEach(el => {
  el.addEventListener('click', function (e) {
    lengthList.forEach(btn => btn.classList.remove('active'));
    el.classList.toggle('active');
  })
});

//user symbols
const optionsList = document.querySelectorAll('.symbols-option');
optionsList.forEach(sym => {
  sym.addEventListener('click', function (e) {
    sym.classList.toggle('active');
  })
});

//randomise
const randomisePassword = password => {
  const passArray = password.split('');
  let currentIndex = passArray.length, tempVal, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempVal = passArray[currentIndex];
    passArray[currentIndex] = passArray[randomIndex];
    passArray[randomIndex] = tempVal;
  }
  return passArray.join('');
}

//generation
document.querySelector('#generator').onclick = function () {
  let password = '';
  const passwordLength = +Array.from(lengthList).filter(l => l.classList.contains('active'))[0].innerHTML;
  console.log(passwordLength)
  let userSymbols = '';
  const userOptions = Array.from(optionsList).filter(o => o.classList.contains('active'));
  userOptions.forEach(elem => {
    if (elem.id === 'lower') {
      userSymbols += lower;
      password += lower[Math.floor(Math.random() * lower.length)];
    }
    if (elem.id === 'upper') {
      userSymbols += upper;
      password += upper[Math.floor(Math.random() * upper.length)];
    }
    if (elem.id === 'digits') {
      userSymbols += digits;
      password += digits[Math.floor(Math.random() * digits.length)];
    }
    if (elem.id === 'symbols') {
      userSymbols += symbols;
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
  });

  for (let i = 0; i < passwordLength - userOptions.length; i += 1) {
    password += userSymbols[Math.floor(Math.random() * userSymbols.length)];
  }
  password = randomisePassword(password);
  document.querySelector('.result__body').innerHTML = password;
  document.querySelector('.result').classList.add('generated');
}


//copy button
const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = document.querySelector('.result__body').innerText;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

//download button
document.querySelector('#download').onclick = function () {
  var csv = 'Your password:\n'
  let passForCSV = document.querySelector('.result__body').innerHTML;
  csv += passForCSV;
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'Password.csv';
  hiddenElement.click();
}

//close button
document.querySelector('#close').onclick = function () {
  document.querySelector('.result').classList.remove('generated');
}