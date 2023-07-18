function menuItemEnter() {
    const submenu = document.getElementsByClassName("menu__sub")[0];
    submenu.style.display = "block";
}

function menuItemLeave() {
    const submenu = document.getElementsByClassName("menu__sub")[0];
    if (active) {
        active.classList.remove("menu__main__item--active");
      }
    submenu.style.display = "none";
}

let active = null;

function onMenuItemMouseEnter(item) {
  if (active) {
    active.classList.remove("menu__main__item--active");
  }
  active = item;
  item.classList.add("menu__main__item--active");
  menuItemEnter();
}

const menuItems = document.getElementsByClassName("menu__main__item");

for (let i=0; i < menuItems.length; i++) {
    menuItems[i].onmouseenter =  () => onMenuItemMouseEnter(menuItems[i]);
}

const menu = document.getElementsByClassName("menu")[0];
menu.onmouseleave = menuItemLeave;