const fadeOut = (element) => {
  let opacity = 1;
  let timer = setInterval(function() {
    if (opacity <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = opacity;
    element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
    opacity -= opacity * 0.1;
  }, 50);
};

const createEl = (el, className, text) => {
  const elem = document.createElement(el);

  elem.innerHTML = text;
  elem.setAttribute('class', className);

  return elem;
}

class Terminal {
  constructor() {
    this.cover = document.querySelector('#cover');
    this.terminalMenu = document.querySelector('i');
    this.intro = document.querySelector('.intro');
    this.terminal = document.querySelector('.terminal');
    this.terminalInput = document.querySelector('.terminal-input');
    this.console = document.querySelector('.console');

    this.root = true;

    this.attachListeners();

    fadeOut(this.cover);
  }
  attachListeners() {
    this.terminalMenu.onclick = () => {
      this.intro.classList.toggle('clicked');
    }
    this.terminalInput.onkeypress = (e) => {
      if ((e.keyCode ? e.keyCode : e.which) === 13) {
        this.getOutput(this.terminalInput.value);
      }
    }
  }
  getOutput(value) {
    this.terminal.removeChild(this.console);

    if (this.root) {
      this.terminal.appendChild(createEl('P', '', '~ $ashish >> ' + value));
    } else {
      this.terminal.appendChild(createEl('P', '', '~/projects $ashish >> ' + value));
    }

    switch (value) {
      case 'ls':
        if (this.root) {
          this.terminal.appendChild(createEl('P', '', 'projects &nbsp;&nbsp;resume.pdf &nbsp;&nbsp;me.jpg'));
        } else {
          this.terminalMenu.appendChild(createEl('P', '', 'Progressively &nbsp;&nbsp;Clippy &nbsp;&nbsp;ink &nbsp;&nbsp;Erectus'));
        }
    }

    if (this.root) {
      this.terminal.appendChild(createEl('P', 'console', '~ $ashish >> <input type="text" class="terminal-input" autofocus>'));
    } else {
      this.terminal.appendChild(createEl('P', 'console', '~/projects $ashish >> <input type="text" class="terminal-input" autofocus>'));
    }
  }
}


window.onload = () => {
  let Term = new Terminal;
}
