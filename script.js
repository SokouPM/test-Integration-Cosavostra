$(document).ready(function () {
    $('#menuButton').click(toggleNavMenu);
    $(window).scroll(tofixedOnScroll);
    $(window).resize(tofixedOnScroll);
})

function toggleNavMenu() {
    if ($("#sideNavMenu").hasClass("menuVisible")) {
        $('#sideNavMenu').addClass('menuNotVisible').removeClass('menuVisible');
    } else {
        $('#sideNavMenu').addClass('menuVisible').removeClass('menuNotVisible');
    }

    $('#menuButton > i').toggleClass('fa-times', 'fa-bars');
    $('#logo').toggleClass('menuVisible');
    $('#intro').toggleClass('menuVisible');
}

function tofixedOnScroll() {
    if ($(window).width() >= 560) {

        let scrollPosTop = $(window).scrollTop();
        let headerBottom = $('header').position().top + $('header').height();
        let footerTop = $('footer').position().top;
        let scrollPosBottom = $(window).scrollTop() + $(window).height();
        let articleIntroBottom = $('#articlesIntro').position().top + $('#articlesIntro').height();

        if (scrollPosBottom >= articleIntroBottom) {
            $('#articlesIntro').removeClass('notFixed').removeClass('notFixedBottom').addClass('fixed');
        }
        if (scrollPosTop <= headerBottom) {
            $('#articlesIntro').removeClass('fixed').removeClass('notFixedBottom').addClass('notFixed');
        }
        if (scrollPosBottom >= footerTop) {
            $('#articlesIntro').removeClass('fixed').removeClass('notFixed').addClass('notFixedBottom');
        }

    } else {
        $('#articlesIntro').removeClass('fixed').removeClass('notFixedBottom').addClass('notFixed');
    }
}