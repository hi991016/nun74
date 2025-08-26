"use strict";

// ===== init =====
const init = () => {
  // # app height
  appHeight();
};

// ===== app height =====
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${doc.clientHeight}px`);
};
window.addEventListener("resize", appHeight);

// ===== scroll trigger =====
const [fadeInArray, lineArray] = [
  document.querySelectorAll("[data-fadein]"),
  document.querySelectorAll("[data-vertical-line]"),
];

const initScrollTrigger = (arr) => {
  arr.forEach((elem) => {
    const distInView =
      elem.getBoundingClientRect().top - window.innerHeight + 100;
    elem.classList.toggle("--show", distInView < 0);
  });
};

let ticking = false;
const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      initScrollTrigger(fadeInArray);
      initScrollTrigger(lineArray);
      ticking = false;
    });
    ticking = true;
  }
};

["pageshow", "scroll"].forEach((evt) => {
  window.addEventListener(evt, onScroll, { passive: true });
});

// ===== email =====
const user = "contact",
  domain = "noun-coltd.jp",
  mail = `${user}@${domain}`,
  link = `<a href="mailto:${mail}">Mail: ${mail}</a>`;
document.querySelector("[data-mail]").innerHTML = link;

// ### ===== DOMCONTENTLOADED ===== ###
window.addEventListener("pageshow", () => {
  history.scrollRestoration = "manual";
  document.body.classList.remove("fadeout");
});
window.addEventListener("DOMContentLoaded", init);
