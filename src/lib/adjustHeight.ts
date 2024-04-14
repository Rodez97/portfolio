function adjustHeight() {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty("--vh", vh + "px");
}

window.addEventListener("resize", adjustHeight);
adjustHeight();
