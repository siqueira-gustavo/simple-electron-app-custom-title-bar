const mySidebar = document.getElementById("mySidebar");
let isLeftMenuActive = true;

// Toggle left menu
showHideMenus.addEventListener('click', () => {
    if (isLeftMenuActive) {
        mySidebar.style.width = "0px";
        isLeftMenuActive = false;
    } else {
        mySidebar.style.width = "280px";
        isLeftMenuActive = true;
    }
});