const getElement = (selector) => {
    return document.querySelector(selector);
}

window.onscroll = () => { scrollHeader() };

const scrollHeader = () => {
    if (document.documentElement.scrollTop > 10) {
        getElement(".header").classList = "header fixed-top nav-header";
    } else {
        getElement(".header").classList = "header fixed-top";
    }

    if (document.documentElement.scrollTop > 700) {
        getElement(".backToTop").classList = "backToTop active";
    } else {
        getElement(".backToTop").classList = "backToTop";
    }
}