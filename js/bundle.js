'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fadeOut = function fadeOut(element) {
  var opacity = 1;
  var timer = setInterval(function () {
    if (opacity <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = opacity;
    element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
    opacity -= opacity * 0.1;
  }, 50);
};

var createEl = function createEl(el, className, text) {
  var elem = document.createElement(el);

  elem.innerHTML = text;
  elem.setAttribute('class', className);

  return elem;
};

var Terminal = function () {
  function Terminal() {
    _classCallCheck(this, Terminal);

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

  _createClass(Terminal, [{
    key: 'attachListeners',
    value: function attachListeners() {
      var _this = this;

      this.terminalMenu.onclick = function () {
        _this.intro.classList.toggle('clicked');
      };
      this.terminalInput.onkeypress = function (e) {
        if ((e.keyCode ? e.keyCode : e.which) === 13) {
          _this.getOutput(_this.terminalInput.value);
        }
      };
    }
  }, {
    key: 'getOutput',
    value: function getOutput(value) {
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
  }]);

  return Terminal;
}();

window.onload = function () {
  var Term = new Terminal();
};
