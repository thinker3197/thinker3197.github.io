import anime from "animejs";

class Portfolio {
  init() {
    window.onload = () => {
      this.setTabletClasses();
      this.beforeAnimation();
      this.beginAnimation();
      this.afterAnimation();
    };
  }

  setTabletClasses() {
    const tabletClass = "is-tablet";
    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        userAgent
      );
    const tabResponsive = document.querySelectorAll(".tab-responsive");

    if (isTablet) {
      Array.from(tabResponsive).forEach((el) => {
        el.classList.add(tabletClass);
      });
    }
  };

  beforeAnimation() {
    const heading = document.querySelectorAll(".about__content > h1");

    heading.forEach((item) => {
      item.innerHTML = item.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    });
  };

  beginAnimation() {
    this.animation = anime
      .timeline({ easing: "easeOutExpo" })
      .add({
        targets: ".letter",
        translateY: [120, 0],
        delay: anime.stagger(30, { start: 0 }),
      })
      .add(
        {
          targets: ".about__content > p.description",
          translateY: [100, 0],
          opacity: [0, 1],
        },
        "-=300"
      )
      .add(
        {
          targets: ".about__content > p.current",
          translateY: [100, 0],
          opacity: [0, 1],
        },
        "-=600"
      )
      .add(
        {
          targets: ".about__resume",
          opacity: [0, 1],
        },
        "-=400"
      )
      .add(
        {
          targets: ".profile__img",
          scale: [0, 1],
        },
        "-=500"
      )
      .add(
        {
          targets: ".profile__social-item",
          opacity: [0, 1],
        },
        "-=500"
      )
      .add(
        {
          targets: ".profile__divider",
          scale: [0, 1],
          translateY: [100, 0],
        },
        "-=1000"
      )
      .add(
        {
          targets: ".logo",
          translateY: [-100, 0],
        },
        "-=1000"
      )
      .add(
        {
          targets: ".profile__backdrop",
          translateY: [-33, 0],
          translateX: [33, 0],
          opacity: [0, 1],
        },
        "-=500"
      );
  };

  afterAnimation() {
    this.animation.finished.then(() => {
      console.log("done");
    });
  };
}

const app = new Portfolio();
app.init();