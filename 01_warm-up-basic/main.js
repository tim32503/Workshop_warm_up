document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('button').addEventListener('click', function(){
    let div = document.createElement('div');
    div.classList.add('circle');

    document.querySelector('.box').insertAdjacentElement('afterbegin', div);
  })
})