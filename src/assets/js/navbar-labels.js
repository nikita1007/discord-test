function renderCircleElems(params) {
  const circleLinksElems = document.querySelectorAll(".navbar .circle-link");
  
  // Создаем для всех элементов в navbar popup-label
  circleLinksElems.forEach((circleLink) => {
    createAndInsertLabel(circleLink);
  });
  
}

function createAndInsertLabel(domElem) {
  const newLinkLabel = document.createElement("div");
  const newLinkLabelInner = document.createElement("div");

  newLinkLabel.classList.add("label-popup");
  newLinkLabelInner.classList.add("label-popup__inner");

  newLinkLabelInner.innerText = domElem.dataset.label ?? 'NoNameGroup';

  newLinkLabel.appendChild(newLinkLabelInner);
  domElem.appendChild(newLinkLabel);
}

exports = module.exports = renderCircleElems;