const utilMicrophone = document.querySelector("button#util-microphone");
const utilHeadphones = document.querySelector("button#util-headphones");

function userPanelRender() {
  utilMicrophone.addEventListener("click", () => {
    if (utilMicrophone.dataset.status === "active") {
      utilMicrophone.dataset.status = "unactive";
      utilMicrophone.parentNode.querySelector(
        ".label-popup .label-popup__inner"
      ).innerText = "Вкл. микрофон";
    } else {
      utilMicrophone.dataset.status = "active";
      utilMicrophone.parentNode.querySelector(
        ".label-popup .label-popup__inner"
      ).innerText = "Выкл. микрофон";
    }
  });
  utilHeadphones.addEventListener("click", () => {
    if (utilHeadphones.dataset.status === "active") {
      utilHeadphones.dataset.status = "unactive";
      utilHeadphones.parentNode.querySelector(
        ".label-popup .label-popup__inner"
      ).innerText = "Вкл. наушники";
    } else {
      utilHeadphones.dataset.status = "active";
      utilHeadphones.parentNode.querySelector(
        ".label-popup .label-popup__inner"
      ).innerText = "Выкл. наушники";
    }
  });
}

exports = module.exports = userPanelRender;
