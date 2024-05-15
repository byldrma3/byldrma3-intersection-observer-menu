const menuItems = document.querySelectorAll(".menu-items li");
const items = document.querySelectorAll(".item");

const handleMenuItemPress = (menuItem) => {
  const targetItem = Array.from(items).find((item) => item.dataset.state === menuItem.dataset.state);
  if (targetItem) return targetItem.scrollIntoView({ behavior: "smooth", block: "start" });
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    menuItems.forEach((menuItem) => {
      if (menuItem.dataset.state === entry.target.dataset.state) return menuItem.classList.add("active");

      menuItem.classList.remove("active");
    });
  });
};

const observerOptions = {
  root: null,
  rootMargin: "-10px 0px -99% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(callback, observerOptions);

items.forEach((item) => observer.observe(item));

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => handleMenuItemPress(menuItem));
});
