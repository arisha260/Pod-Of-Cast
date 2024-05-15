const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");


burger.addEventListener('click', () => {
  burger.classList.toggle('active-b');
  document.body.classList.toggle('hidden');
  nav.classList.toggle('active-n');
});
