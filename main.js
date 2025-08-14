document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".navigacija ul li");
  const ul = document.querySelector(".navigacija ul");
  const menuLine = document.querySelector('.navigacija .menu-line');
  const logoImg = document.querySelector('#logo img.logo-fade');

  // 1. Dugmići odmah razbacani po ekranu bez animacije
  navItems.forEach((item) => {
    item.style.transition = 'none';
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 60;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const rot = Math.random() * 360 - 180; // -180 do 180 stepeni
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    item.style.transform = `rotate(${rot}deg)`;
  });

  // 2. Posle 1 sekunde animirano se sređuju u red
  setTimeout(() => {
    navItems.forEach((item) => {
      item.style.transition = 'left 1s, top 1s, transform 1s';
    });
    ul.classList.add("horizontal");
    navItems.forEach((item, i) => {
      item.style.top = "0px";
      item.style.left = `${i * 120}px`;
      item.style.transform = "rotate(0deg)";
    });
    // Prikazi liniju sa efektom povlačenja s leva na desno
    setTimeout(() => {
      menuLine.style.left = '0';
      menuLine.style.width = '100%';
      menuLine.classList.add('visible');
    }, 900); // malo kasnije zbog animacije dugmića
    // Fade-in logo
    logoImg.classList.add('visible');
  }, 1000);
});