$(document).ready(function () {
    $('.mo_menu_bt').click(function () {
        $('.mo_side').show()
        $('.mo_menu_bg').show()
        $('.mo_menu_bg').animate({ opacity: 1 })
        $('.mo_side').animate({ right: 0 + "vw" }, 500)
    })
    $('.mo_close').click(function () {
        $('.mo_side').animate({ right: -50 + "vw" }, 500, function () {
            $(this).hide()
        });
        $('.mo_menu_bg').animate({ opacity: 0 }, 500, function () {
            $(this).hide()
        })
    })
})