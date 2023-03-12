function setActiveLinks() {
  const circleLinks = document.querySelectorAll(".circle-link");
  // Получаем элемент, который имеет класс 'active' из NodeList
  let activeLink = Array.prototype.slice.call(circleLinks).filter((link) =>
    link.classList.contains("circle-link--active")
  )[0];
  
  // Добавляем ивент на клик, который будет убирать класс 'active' с предидущего и добавлять к текущему
  circleLinks.forEach((circleLink) => {
    circleLink.addEventListener('click', () => {
      if ((activeLink == circleLink)) return 0;
      
      activeLink.classList.remove("circle-link--active");
      circleLink.classList.add("circle-link--active");
      activeLink = circleLink;
    });
  });
}


exports = module.exports = setActiveLinks;