//length 
console.log(1)
const lengthList = document.querySelectorAll('.length-case');
lengthList.forEach(el => {
  el.addEventListener('click', function(e){
    el.classList.add('active');
    console.log(el.classList)
  })
});