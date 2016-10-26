'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fadeOut = function fadeOut(element) {
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
};

var Terminal = function () {
  function Terminal() {
    _classCallCheck(this, Terminal);

    this.cover = document.querySelector('#cover');
    this.terminalMenu = document.querySelector('i');
    this.intro = document.querySelector('.intro');

    fadeOut(this.cover);

    this.attachListeners();
  }

  _createClass(Terminal, [{
    key: 'attachListeners',
    value: function attachListeners() {
      var _this = this;

      this.terminalMenu.onclick = function () {
        _this.intro.classList.toggle('clicked');
      };
    }
  }]);

  return Terminal;
}();

window.onload = function () {
  var Term = new Terminal();
};
