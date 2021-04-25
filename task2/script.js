const consoleLogElem = document.querySelector('#consoleLog');
const alertElem = document.querySelector('#alert');
const promptElem = document.querySelector('#prompt');

consoleLogElem.addEventListener('click', () => alert('console.log() выводит сообщение в веб-консоль.'));
alertElem.addEventListener('click', () => alert('alert() показывает диалоговое окно с опциональным (необязательным) сообщением и кнопкой OK.'));
promptElem.addEventListener('click', () => alert('prompt() отображает диалоговое окно с необязательным запросом на ввод текста.'));
