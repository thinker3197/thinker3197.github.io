const fadeOut = (element) => {
  var op = 1;
  var timer = setInterval(function() {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
};

class Terminal {
  constructor() {
    this.cover = document.querySelector('#cover');
    this.terminalMenu = document.querySelector('i');
    this.intro = document.querySelector('.intro');

    fadeOut(this.cover);

    this.attachListeners();
  }
  attachListeners() {
    this.terminalMenu.onclick = () => {
      this.intro.classList.toggle('clicked');
    }
  }
}

window.onload = () => {
  let Term = new Terminal;
}
