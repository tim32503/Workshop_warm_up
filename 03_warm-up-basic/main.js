// TO DO
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#button').addEventListener('click', (e) => {
    debugger
    /*
      你可能要會知道以下的方法在幹嘛：
      nextElementSibling
      previousElementSibling
      parentNode
      children
      firstElementChild
      lastElementChild
    */

  /* 題目1: 把包著 內容1 的 div 加上 .pink 的 class  */
    // to do...
    e.target.nextElementSibling.classList.add('pink');

  /* 題目2: 把「內容1」加上 .blue class  */
    // to do...
    e.target.nextElementSibling.firstElementChild.classList.add('blue');

  /* 題目3: 把「內容2」的文字內容改變 */
    // to do...
    e.target.nextElementSibling.lastElementChild.textContent = 'Hi!!';

  /* 題目4 : 把「標題」的文字顏色改變 */
    // to do...
    e.target.parentElement.parentElement.previousElementSibling.style = "color: red;";

  })
})