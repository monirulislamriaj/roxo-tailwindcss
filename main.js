import "./style.css";
const nav = document.querySelector("#mainNav");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuIcons = mobileMenu.querySelectorAll("svg");
const mainMenu = document.querySelector("#mainMenu");
const backToTop = document.querySelector("#backToTop");
const anchors = document.querySelectorAll("[data-disable]");

//**************** */
//functions
//**************** */
const toggleBurger = () => {
    mobileMenuIcons.forEach((mmi) => {
        if (mmi.classList.contains("hidden")) {
            mmi.classList.remove("hidden");
        } else {
            mmi.classList.add("hidden");
        }
    });
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
const debounce = (func, wait, immediate) => {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};

//debounce toggleStickyNav function
const toggleStickyNav = debounce(function() {
    console.log("toggleStickyNav", window.scrollY);
    if (window.scrollY >= 200) {
        nav.classList.add("stickyNav");
    } else {
        nav.classList.remove("stickyNav");

        backToTop.classList.remove("block");
    }
}, 250);

//easeIn function
const easeInCubic = function(t) {
    return t * t * t;
};

//scrollToTop animation function
const scrollToTop = (startTime, currentTime, duration, windowScrollY) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = easeInCubic(progress);

    window.scroll(0, windowScrollY + windowScrollY * -1 * ease);
    if (runtime < duration) {
        requestAnimationFrame((timestamp) => {
            const currentTime = timestamp || new Date().getTime();
            scrollToTop(startTime, currentTime, duration, windowScrollY);
        });
    }
};

//**************** */
//functions
//**************** */

window.addEventListener("scroll", toggleStickyNav);

anchors.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

mobileMenu.addEventListener("click", (e) => {
    e.preventDefault();

    if (mainMenu.classList.contains("hidden")) {
        mainMenu.classList.remove("hidden");
    } else {
        mainMenu.classList.add("hidden");
    }

    toggleBurger();
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();

    const htmlEl = document.querySelector("html");
    htmlEl.style.scrollBehavior = "smooth";
    if (getComputedStyle(htmlEl).scrollBehavior) {
        //css native smooth scroll
        window.scroll({ top: 0, left: 0 });
    } else {
        //custom smooth scroll for brower that don't support smooth scrolling
        const anim = requestAnimationFrame((timestamp) => {
            const stamp = timestamp || new Date().getTime();
            const duration = 1000;
            const start = stamp;

            const windowScrollY = window.scrollY;

            scrollToTop(start, stamp, duration, windowScrollY);
        });
    }
});

$("a.pageScroll").on("click", function(event) {
    var $anchor = $(this);
    $("html, body")
        .stop()
        .animate({ scrollTop: $($anchor.attr("href")).offset().top - 0 }, 1000);
    event.preventDefault();
});