
//data
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.split('').map(lit => lit.toUpperCase()).join('');
const digits = '0123456789';
const symbols = '!@#$%^&*()_-+=\|/.,:;[]{}';

//length 
const lengthList = document.querySelectorAll('.length-case');
lengthList.forEach(el => {
  el.addEventListener('click', function (e) {
    lengthList.forEach(btn => btn.classList.remove('length-active'));
    el.classList.toggle('length-active');
  })
});

//user symbols
const optionsList = document.querySelectorAll('.symbols-option');
optionsList.forEach(sym => {
  sym.addEventListener('click', function (e) {
    sym.classList.toggle('option-active');
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
  if (document.querySelector('.length-active') === null) {
    document.querySelector('.error-message').classList.add('generated');
  }
  let password = '';
  const passwordLength = +Array.from(lengthList).filter(l => l.classList.contains('length-active'))[0].innerHTML;
  // console.log(passwordLength)
  let userSymbols = '';
  const userOptions = Array.from(optionsList).filter(o => o.classList.contains('option-active'));
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

//ok button
document.querySelector('#ok').onclick = function () {
  document.querySelector('.error-message').classList.remove('generated');
}
//language switch
const langs = document.querySelectorAll('.js-lang');
langs.forEach(btn => {
  btn.addEventListener('click', function(e) {
    langs.forEach(btn => btn.classList.remove('local-active'));
    btn.classList.add('local-active');
    if (document.querySelector('.local-active').id === 'rus') {
      document.querySelector('#eng').textContent = local.btn__eng.rus;
      document.querySelector('#rus').textContent = local.btn__rus.rus;
      document.querySelector('.language__icon').textContent = local.language__icon.rus;
      document.querySelector('h1').textContent = local.header__title.rus;
      document.querySelector('#length__titile').textContent = local.length.rus;
      document.querySelector('#content').textContent = local.content.rus;
      document.querySelector('#lower').textContent = local.lower.rus;
      document.querySelector('#upper').textContent = local.upper.rus;
      document.querySelector('#digits').textContent = local.digits.rus;
      document.querySelector('#symbols').textContent = local.symbols.rus;
      document.querySelector('#generator').textContent = local.generator.rus;
      document.querySelector('#copy').textContent = local.copy.rus;
      document.querySelector('#download').textContent = local.download.rus;
      document.querySelector('#close').textContent = local.close.rus;
      document.querySelector('.message__body').textContent = local.error__length.rus;
    } else {
      document.querySelector('#eng').textContent = local.btn__eng.eng;
      document.querySelector('#rus').textContent = local.btn__rus.eng;
      document.querySelector('.language__icon').textContent = local.language__icon.eng;
      document.querySelector('h1').textContent = local.header__title.eng;
      document.querySelector('#length__titile').textContent = local.length.eng;
      document.querySelector('#content').textContent = local.content.eng;
      document.querySelector('#lower').textContent = local.lower.eng;
      document.querySelector('#upper').textContent = local.upper.eng;
      document.querySelector('#digits').textContent = local.digits.eng;
      document.querySelector('#symbols').textContent = local.symbols.eng;
      document.querySelector('#generator').textContent = local.generator.eng;
      document.querySelector('#copy').textContent = local.copy.eng;
      document.querySelector('#download').textContent = local.download.eng;
      document.querySelector('#close').textContent = local.close.eng;
      document.querySelector('.message__body').textContent = local.error__length.eng;
    }
  });
});

//language content 
const local = {
  btn__eng: {
    eng: 'English',
    rus: 'Английский'
  },
  btn__rus: {
    eng: 'Russian',
    rus: 'Русский'
  },
  language__icon: {
    eng: 'Language',
    rus: 'Язык'
  },
  header__title: {
    eng: 'Password Generator',
    rus: 'Генератор паролей'
  },
  length: {
    eng: 'Please choose desired length:',
    rus: 'Выберите желаемую длину пароля:'
  },
  content: {
    eng: 'What should your password contain?',
    rus: 'Какие символы должен содержать пароль?'
  },
  lower: {
    eng: 'lower case',
    rus: 'строчные'
  },
  upper: {
    eng: 'upper case',
    rus: 'прописные'
  },
  digits: {
    eng: 'digits',
    rus: 'цифры'
  },
  symbols: {
    eng: 'symbols',
    rus: 'специальные'
  },
  generator: {
    eng: 'Generate!',
    rus: 'Сгенерировать!'
  },
  copy: {
    eng: 'Copy',
    rus: 'Копировать'
  },
  download: {
    eng: 'download',
    rus: 'Скачать'
  },
  close: {
    eng: 'Close',
    rus: 'Закрыть'
  },
  error__length: {
    eng: "Please choose password's length",
    rus: 'Необходимо выбрать длину пароля!'
  }
};

