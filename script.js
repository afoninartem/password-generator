let password = '';
//data
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.split('').map(lit => lit.toUpperCase()).join('');
const digits = '0123456789';
const symbols = '!@#$%^&*()_+=';

//length 
const lengthList = document.querySelectorAll('.length-case');
lengthList.forEach(el => {
  el.addEventListener('click', function(e) {
    lengthList.forEach(btn => btn.classList.remove('active'));
    el.classList.toggle('active');
  })
});

//user symbols
const optionsList = document.querySelectorAll('.symbols-option');
optionsList.forEach(sym => {
  sym.addEventListener('click', function(e) {
    sym.classList.toggle('active');
  })
});

//generation
document.querySelector('#generator').onclick = function() {
  const passwordLength = +Array.from(lengthList).filter(l => l.classList.contains('active'))[0].innerHTML;
  let userSymbols = '';
  const userOptions = Array.from(optionsList).filter(o => o.classList.contains('active'));
  userOptions.forEach(elem => {
    if (elem.id === 'lower') userSymbols += lower;
    if (elem.id === 'upper') userSymbols += upper;
    if (elem.id === 'digits') userSymbols += digits;
    if (elem.id === 'symbols') userSymbols += symbols;
  });

  for (let i = 0; i < passwordLength; i += 1) {
    password += userSymbols[Math.floor(Math.random() * userSymbols.length)];
  }
  document.querySelector('.result__body').innerHTML += password;
  document.querySelector('.result').classList.add('generated');
}

document.querySelector('#ok').onclick = function() {
  document.querySelector('.result').classList.remove('generated');
}

document.querySelector('#download').onclick = function() {
  var csv = 'Your password:\n'
  csv += password;
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'Password.csv';
  hiddenElement.click();
}