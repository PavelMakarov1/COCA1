export const usePriceSwitcher = () => {
    const switcher = document.querySelector('[data-price="switcher"]');
    const starterPrice = document.querySelector('[data-price="starter"]');
    const popularPrice = document.querySelector('[data-price="popular"]');
    const entriesPrice = document.querySelector('[data-price="enterprise"]');

    const priceList = {
        starter: {
            default: 1440,
            witchSale: 1152,
        },
        popular: {
            default: 20160,
            witchSale: 16128,
        },
        enterprise: {
            default: 30240,
            witchSale: 24192,
        },
    };

    const setPricesWitchSale = () => {
        starterPrice.textContent = priceList.starter.witchSale;
        popularPrice.textContent = priceList.popular.witchSale;
        entriesPrice.textContent = priceList.enterprise.witchSale;
    };

    const setDefaultPrices = () => {
        starterPrice.textContent = priceList.starter.default;
        popularPrice.textContent = priceList.popular.default;
        entriesPrice.textContent = priceList.enterprise.default;
    }

    switcher.checked = true;
    setPricesWitchSale();

    switcher.addEventListener('click', () => {
        if (switcher.checked) {
            setPricesWitchSale();
        } else {
            setDefaultPrices();
        }
    });

};