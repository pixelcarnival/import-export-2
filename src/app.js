import { COOKIE_CONSENT_KEY } from './constants' // Импортируем наш будущий ключь в файл в котором он нам пригодится.

export default class checkCookies {
  // Создаем класс для удобства работы с нашей задачей. Так как localStorage работает с объектами, так же как и класс.
  constructor(selector) {
    this.el = document.querySelector(selector) // this.el инициализируем ключ el бех передачи в параметров. Он выступает своего рода переменной. В которой хранится див с текстом о куки и кнопкой. Через эту команду мы инициализируем саму плашку.
    if (localStorage.getItem(COOKIE_CONSENT_KEY) !== 'true' && this.el) {
      // тут мы проверяем, что если хранилище получает ключ который мы определили ранее и одновременно теперь можно использовать этот ключ и он не равняется истине или нашему Диву, а он не ровняется....
      this.acceptBtn = this.el.querySelector('.cookie-consent__button') // ...то... тут мы снова инициализируем новый ключ. передаем в этот ключ нашу кнопку по классу кнопки.
      this.acceptBtn?.addEventListener('click', this.onAccept.bind(this)) // тут мы используем ? в место if добавляя еще одно условие. Обращаясь к кнопке мы навешиваем слушатель клика. При этом создавая связанную функцию, для хранения значений this. В связную функцию onAccept.
    } else {
      this.el.classList.add('hide') // в противном случае мы добавляем нашу плашку с куки во временное хранилище методом add.
    }
  }
  onAccept() {
    // Связная функция в которой храняться все наши данные  в локальном хранилище, после нажатия на кнопку.
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true') // Ключ для временного пользования
    this.el.classList.add('hide') // наш див с информацией о куки и кнопкой
    this.acceptBtn?.removeEventListener('click', this.onAccept.bind(this)) // информация о нажатие на кнопку
  }
}
