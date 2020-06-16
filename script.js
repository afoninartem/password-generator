const btns = Array.from(document.querySelectorAll('.btn'));
btns.splice(btns.length-1);
// console.log(btns);
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  })
});

const goActive = () => {
  document.querySelector('#length').classList.add('active');
}

document.querySelector('#generator').onclick = function() {
  console.log(123)
}