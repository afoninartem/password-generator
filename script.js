(function() {
  const buttons = Array.from(document.querySelectorAll('.btn'));
  buttons.length = 4;
  // console.log(buttons)
  buttons.forEach(
    button => button.addEventListener('click', function(e) {
      console.log(this.target);
    })
  );
}());