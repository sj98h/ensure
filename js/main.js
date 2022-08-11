$(document).ready(function () {
    $('.mo_menu_bt').click(function () {
        $('.mo_side').show(0, function () {
            $('.mo_menu_bg').show()
            $('.mo_menu_bg').animate({ opacity: 1 }, 300)
            $('.mo_side').animate({ right: 0 + "vw" }, 300)
        })
    })
    $('.mo_close').click(function () {
        $('.mo_side').animate({ right: -50 + "vw" }, 300, function () {
            $(this).hide()
        });
        $('.mo_menu_bg').animate({ opacity: 0 }, 500, function () {
            $(this).hide()
        })
    })
    $('.mo_menu_li.claim').children('span').click(function () {
        $(this).siblings('.mo_sub').slideToggle()
    })
    setInterval(function () {
        if (window.innerWidth > 500) {
            $('.mo_side').animate({ right: -50 + "vw" }, 0, function () {
                $(this).hide()
            });
            $('.mo_menu_bg').animate({ opacity: 0 }, 0, function () {
                $(this).hide()
            })
        }
    })

    $('.menu_li.claim').mouseenter(function () {
        $(this).children('.sub').stop().slideDown(300)
    })
    $('.menu_li.claim').mouseleave(function () {
        $(this).children('.sub').stop().slideUp(300)
    })
})