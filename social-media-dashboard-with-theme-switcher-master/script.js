console.log("Hello there!");

document.querySelector(".switch").addEventListener("click", (e) => {
  const darkMode = document.body.classList.toggle("dark-theme");
  e.target.blur();
  localStorage.setItem("dark-theme", darkMode);
});
