import channelsRender from "./channels.js";
import setActiveLinks from "./circle-links.js";
import groupSidebarRender from "./group-settings.js";
import renderCircleElems from "./navbar-labels.js";
import userPanelRender from "./user-panel.js";

function main() {
  renderCircleElems();
  setActiveLinks();
  groupSidebarRender();
  channelsRender();
  userPanelRender();
}

main();
