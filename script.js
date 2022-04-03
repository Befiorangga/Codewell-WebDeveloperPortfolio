const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('menu');
    const button = document.getElementById('btn1');

      hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      button.classList.toggle('show');
    });