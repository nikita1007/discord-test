const groupSidebarHeader = document.querySelector("#group-sidebar__header");
const groupSettingsPopup = document.querySelector("#group-settings-popup");
const groupSettingsPopupElems = groupSettingsPopup.querySelectorAll(
  ".group-settings__list .group-settings__item"
);

let isPopupEventDone = true;

function groupSidebarRender() {
  groupSidebarHeader.addEventListener("click", sidebarHeaderClickEvent);

  groupSettingsPopupElems.forEach((popupElem) => {
    popupElem.addEventListener("click", popupElementClickEvent);
  });

  document.addEventListener("click", (e) => {
    if (
      e.target !== groupSidebarHeader &&
      e.target !== groupSettingsPopup &&
      e.target !== groupSettingsPopup.querySelector("ul.group-settings__list")
    ) {
      groupSettingsPopupHide();
      groupSidebarHeader.classList.remove("group-sidebar__header--active");
    }
  });
}

function sidebarHeaderClickEvent(e) {
  e.stopPropagation();
  if (!isPopupEventDone) return false;

  isPopupEventDone = false;

  sidebarHeaderChangeActiveStatus();

  groupSettingsPopupShowHideEvent();
}

function sidebarHeaderChangeActiveStatus() {
  groupSidebarHeader.classList.toggle("group-sidebar__header--active");
}

function groupSettingsPopupShowHideEvent() {
  if (groupSettingsPopup.classList.contains("popup--show")) {
    groupSettingsPopupHide();
  } else {
    groupSettingsPopupShow();
  }
}

function groupSettingsPopupShow() {
  groupSettingsPopup.style.cssText = `display: block;`;
  setTimeout(() => {
    groupSettingsPopup.classList.add("popup--show");
  }, 0);
  groupSettingsPopup.addEventListener("transitionend", () => {
    isPopupEventDone = true;
  });
}

function groupSettingsPopupHide() {
  groupSettingsPopup.classList.remove("popup--show");
  setTimeout(() => {
    groupSettingsPopup.style.cssText = ``;
    isPopupEventDone = true;
  }, 150);
}

function popupElementClickEvent(e) {
  e.stopPropagation();
  groupSettingsPopupHide();
  sidebarHeaderChangeActiveStatus();
}

exports = module.exports = groupSidebarRender;
