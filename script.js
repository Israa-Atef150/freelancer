const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.innerHTML = `
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
`;

document.body.appendChild(mobileMenu);

hamburgerMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
});
