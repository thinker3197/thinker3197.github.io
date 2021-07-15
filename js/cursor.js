let map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

const DEFAULT_CURSOR_SIZE = 24;

export class Cursor {
  constructor() {
    this.cursorEl = document.querySelector("#cursor");
    this.currentJobEl = document.querySelector("#current-job");
    document.addEventListener("mousemove", this.mousemove.bind(this));
    document.addEventListener("touchstart", this.touchstart.bind(this));

    let textCursorNodes = Array.from(document.querySelectorAll("h1, p"));
    textCursorNodes.forEach((el) => this.bindTextCursorNodes(el));

    let btnNodes = Array.from(document.querySelectorAll(".btn"));

    btnNodes.forEach((el) => this.bindBtnNodes(el));

    this.currentDiameter = DEFAULT_CURSOR_SIZE / 2;
    this.isCursorLocked = false;
    this.isTouchLocked = false;
    this.currentPosition = { x: -9999, y: 0 };

    return this.cursorEl;
  }

  mousemove({ x, y }) {
    this.currentPosition = { x: x, y: y };

    if (!this.isCursorLocked && !this.isTouchLocked) {
      this.cursorEl.style.top =
        this.currentPosition.y + window.pageYOffset + "px";
      this.cursorEl.style.left =
        this.currentPosition.x + window.pageXOffset + "px";
    }
  }

  touchstart() {
    this.cursorEl.style.display = "none";
    this.isTouchLocked = true;
  }

  bindTextCursorNodes(el) {
    let fontSize = parseInt(
      window
        .getComputedStyle(el)
        .getPropertyValue("font-size")
        .replace("px", "")
    );
    el.addEventListener(
      "mouseover",
      (e) => {
          console.log(e.target.id)
        if (!this.isTouchLocked && e.target !== this.currentJobEl) {
          this.currentDiameter = fontSize * 1.4;
          this.cursorEl.style.height = this.currentDiameter + "px";
          this.cursorEl.classList.add("cursor--text");
        }
      },
      { passive: true }
    );
    el.addEventListener(
      "mouseout",
      (e) => {
        if (!this.isTouchLocked && e.target !== this.currentJobEl) {
          this.currentDiameter = DEFAULT_CURSOR_SIZE;
          this.cursorEl.removeAttribute("style");
          this.cursorEl.classList.remove("cursor--text");
        }
      },
      { passive: true }
    );
  }

  bindBtnNodes(el) {
    let rect = null;

    el.addEventListener("mouseenter", (event) => {
      if (this.isTouchLocked) return;

      this.isCursorLocked = true;

      rect = el.getBoundingClientRect();

      let borderRadius = window
        .getComputedStyle(el)
        .getPropertyValue("border-radius")
        .replace("px", "");

      this.cursorEl.classList.add("is-locked");
      this.cursorEl.style.width = rect.width + "px";
      this.cursorEl.style.height = rect.height + "px";
      this.cursorEl.style.borderRadius = borderRadius + "px";
      this.cursorEl.style.left =
        rect.x + window.pageXOffset + rect.width / 2 + "px";
      this.cursorEl.style.top =
        rect.y + window.pageYOffset + rect.height / 2 + "px";
    });

    el.addEventListener("mousemove", (event) => {
      if (this.isTouchLocked) return;

      const halfHeight = rect.height / 2;
      const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
      const halfWidth = rect.width / 2;
      const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;

      this.cursorEl.style.transform = `translate(calc(-50% + ${leftOffset}px), calc(-50% + ${topOffset}px))`;
      this.cursorEl.style.opacity = 1;

      if (el.matches(".btn")) {
        el.style.transform = `translate(${leftOffset * 6}px, ${
          topOffset * 6
        }px)`;
      }

      if(el.matches(".profile__social-item")) {
        this.cursorEl.style.opacity = 0;
      }
    });

    el.addEventListener("mouseleave", (event) => {
      if (this.isTouchLocked) return;

      this.isCursorLocked = false;
      this.cursorEl.classList.remove("is-locked");
      this.cursorEl.classList.remove("cursor--text");
      this.cursorEl.style.borderRadius = "100%";
      this.cursorEl.style.width = DEFAULT_CURSOR_SIZE + "px";
      this.cursorEl.style.height = DEFAULT_CURSOR_SIZE + "px";

      el.removeAttribute("style");
      if (el.firstElementChild) {
        el.firstElementChild.removeAttribute("style");
      }

      if(el.matches(".btn, .profile__social-item")) {
        this.cursorEl.style.opacity = 0.5;
      }
    });
  }
}
