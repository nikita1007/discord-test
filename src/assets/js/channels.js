
const channelsGroups = document.querySelectorAll(
  ".channels .channels__group-list .channels__group"
);

const channelsGroupsItems = document.querySelectorAll(
  ".channels .channels__group-list .channels__group .channel__group-item"
);
let channelsGroupsItemActive = document.querySelector(
  ".channels .channels__group-list .channels__group .channel__group-item.channel--active"
);

function channelsRender() {
  channelsGroups.forEach((group) => {
    group
      .querySelector(".channel__group-title")
      .addEventListener("click", (e) => {
        e.stopPropagation();
        if (!e.target.closest(".channel__add-button")) {
          group.classList.toggle("channels__group--expanded");
        }
      });
  });

  if (!channelsGroupsItemActive) {
    channelsGroupsItemActive = channelsGroupsItems.item(0);
    channelsGroupsItemActive.classList.add("channel--active");
  }
  
  document.querySelector(
    "header.header .header__channel-name-title"
  ).innerText = channelsGroupsItemActive.querySelector(
    ".channel__group-item-title"
  ).innerText;

  channelsGroupsItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (channelsGroupsItemActive === item) return 0;
      channelsGroupsItemActive.classList.remove("channel--active");
      channelsGroupsItemActive = item;
      channelsGroupsItemActive.classList.add("channel--active");

      document.querySelector(
        "header.header .header__channel-name-title"
      ).innerText = channelsGroupsItemActive.querySelector(
        ".channel__group-item-title"
      ).innerText;
    });
  });
}

exports = module.exports = channelsRender;
