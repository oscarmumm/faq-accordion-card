const questions = document.querySelectorAll('.expandable');

questions.forEach( el => {
  el.addEventListener('click', (e) => {
    console.log(el.childNodes[1].childNodes[0]);
    el.childNodes[3].classList.toggle('expanded');
    el.childNodes[3].classList.toggle('collapsed');
    el.childNodes[1].childNodes[3].classList.toggle('rotate');
    el.childNodes[1].childNodes[1].classList.toggle('bold');
  })
})