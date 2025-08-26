"use strict";

// ===== globals =====
const isMobile = window.matchMedia("(max-width: 599px)");
const eventsTrigger = ["pageshow", "scroll"];

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

// ### ===== DOMCONTENTLOADED ===== ###
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fadeout");
});
window.addEventListener("DOMContentLoaded", init);
