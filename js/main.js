$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });
    $('#scroll_top').click(function () {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});


$(window).scroll(function () {
    if ($(".header__wrap").offset().top > 0) {
        $(".header__wrap").addClass("header__wrap_active");
    } else {
        $(".header__wrap").removeClass("header__wrap_active");
    }
});


$('.burger-menu').click(function () {
    $(".burger-menu__list").toggleClass('burger-menu__list_active');
    $(".header").toggleClass('header_active');
    $(".burger-flex").toggleClass('burger-flex_active');
});

$('.faq-block__question').click(function () {
    if (!$(this).hasClass('faq-block__question_active')) {
        $(".faq-block__question").removeClass("faq-block__question_active")
        $(".faq-block__answer").removeClass("faq-block__answer_active")
        $(this).next(".faq-block__answer").addClass('faq-block__answer_active')
        $(this).addClass('faq-block__question_active')
    } else {
        $(this).next(".faq-block__answer").toggleClass('faq-block__answer_active')
        $(this).removeClass('faq-block__question_active')
    }
});


// Модальное окно №1
$('#id_30').click(function () {
    $(".modal_opacity-bg").toggleClass('modal_opacity-bg-active');
    $(".modal_k").toggleClass('modal_k-active');
});
$('#close-modal').click(function () {
    $(".modal_k").toggleClass('modal_k-active');
    $(".modal_opacity-bg").toggleClass('modal_opacity-bg-active');
});
$('#close-modal__message-list').click(function () {
    $(".message-list").toggleClass('message-list-active');
    $(".hide2").toggleClass('hide-active');
});

$('#show-deploy-table').click(function () {
    $(".deployed").toggleClass('deployed-active');
});

$(document).mouseup(function (e) {
    var modalctr = $(".modal_opacity-bg-active");
    var modal = $(".modal_k-active");
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
        modalctr.removeClass('modal_opacity-bg-active');
        modal.removeClass('modal_k-active');
    }
});


