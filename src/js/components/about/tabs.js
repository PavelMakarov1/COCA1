export const useTabs = () => {
    const tabNavItems = document.querySelectorAll('.hero__content-tabs-nav-item');
    const tabContentItems = document.querySelectorAll('.hero__content-swiper');

    tabNavItems[0].classList.add('active');

    tabContentItems[0].classList.add('active');

    tabNavItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabNavItems.forEach((navItem) => navItem.classList.remove('active'));
            item.classList.add('active');

            tabContentItems.forEach((contentItem) => contentItem.classList.remove('active'));
            tabContentItems[index].classList.add('active');
        });
    });
};
