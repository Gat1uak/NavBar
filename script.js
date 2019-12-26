console.log("Connection made!");

const navabarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');


navabarBtn.addEventListener('click', function () {
   let value = navbarLinks.classList.contains('navbar__collapse');

   if (value) {
      navbarLinks.classList.remove('navbar__collapse');
      navabarBtn.classList.remove('change');
   } else {
      navbarLinks.classList.add('navbar__collapse');
      navabarBtn.classList.add('change');
   }
})