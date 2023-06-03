const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab_contents");
tabContents[0].classList.add("active");
tabs[0].classList.add("active");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const tabTarget = tab.dataset.tab;
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    tabContents.forEach((content) => {
      const contentTarget = content.dataset.tabContent;
      if (tabTarget === contentTarget) {
        content.classList.add("active");
        tab.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});
