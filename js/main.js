

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(100).fadeOut('slow');
});

$(document).ready(function(){
    $('.view-source .hide').hide();
    $a = $('.view-source a');
    $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp(500);
        $(this).next().slideToggle(500);
    });
});
    
$(function() {
    $(window).resize(function (){
        $('.block').width($('.block').height());
    });
    $('.block').width($('.block').height());

    $(window).resize(function (){
        var $width = $('.block').width();
        $('.before-block').width($width);
        $('.after-block').width($width);
    });
    var $width = $('.block').width();
    $('.before-block').width($width );
    $('.after-block').width($width );

    $(window).resize(function (){
        var $width2 = $('.before-block').height();
        var $heightmenu = $('.block').height();
        $('.test1').width($width2 * 1.8);
        $('.test2').width($width2 * 1.8);
        $('.lefttabs').height($heightmenu * 0.065);
        $('.news').height($heightmenu * 0.075);
        $('.img-cont').height($heightmenu * 0.5);
        $('.circle').height($heightmenu * 0.2);
        $('.circle').width($heightmenu * 0.2);
        $('.loader').height($heightmenu);
        $(".customer_arrow").height($heightmenu * 0.07);
    });
    var $width2 = $('.before-block').height();
    var $heightmenu = $('.block').height();
    $('.test1').width($width2 * 1.8);
    $('.test2').width($width2 * 1.8);
    $('.lefttabs').height($heightmenu * 0.065);
    $('.news').height($heightmenu * 0.075);
    $('.img-cont').height($heightmenu * 0.5);
    $('.circle').height($heightmenu * 0.2);
    $('.circle').width($heightmenu * 0.2);
    $('.loader').height($heightmenu);
    $(".customer_arrow").height($heightmenu * 0.07);

    var $kube = $("#kube");
    $(".logo-animate, .logo-animate2").click(function(){
        if ($("#kube").hasClass("kube")) {
            setTimeout(function(){
                $kube.removeClass("kube").addClass("kube-white");
            }, 1000);
        }
        else {
            $kube.removeClass("kube-white").addClass("kube");
        }
    });

    $('#carousel_1').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll:1,
        adaptiveHeight: true,
        verticalSwiping: true,
        dots: false,
        vertical: true,
        prevArrow: '<a href="#" class="arrow_cont prev"><img src="images/left_arrow.png" alt="" class="customer_arrow" /></a>',
        nextArrow: '<a href="#" class="arrow_cont next"><img src="images/right_arrow.png" alt=""  class="customer_arrow" /></a>'
    });

    var $hid = $(".media-cont");
    $(".logo-animate, .logo-animate2").click(function(){
        if ($(".media-cont").hasClass("hidden-kube")) {
             $hid.removeClass("hidden-kube");
        }
        else {
            $hid.addClass("hidden-kube");
        }
    });

    var $leftblock = $("#test2");
    $("#test2").fadeOut(1);
    $(".logo-animate, .logo-animate2").click(function(){
        if ($("#test2").hasClass("dis-none2")) {
            $leftblock.removeClass("dis-none2");
        } else {
            $leftblock.addClass("dis-none2");
        }

    });
    var $topbox = $('#before-block');
    $("#before-block").fadeOut(1);
    $(".logo-animate, .logo-animate2").click(function(){
        if ($("#before-block").hasClass("dis-none3")) {
            $topbox.removeClass("dis-none3");
        } else {
            $topbox.addClass("dis-none3");
        }

    });

    var $rightblock = $("#test1");
    $("#test1").fadeOut(1);
    $(".logo-animate, .logo-animate2").click(function(){
        if ($("#test1").hasClass("dis-none1")) {
            $rightblock.removeClass("dis-none1");
        } else {
            $rightblock.addClass("dis-none1");
        }

    });

    var $botbox = $('#after-block');
    $("#after-block").fadeOut(1);
    $(".logo-animate, .logo-animate2").click(function(){
        if ($("#after-block").hasClass("dis-none4")) {
            $botbox.removeClass("dis-none4");
        } else {
            $botbox.addClass("dis-none4");
        }

    });

    var $logoanimat = $('.logo-animate');
    $(".logo-animate, .logo-animate2").click(function(){
        if ($(".logo-animate").hasClass("dis-none5")) {
            $logoanimat.removeClass("dis-none5");
        } else {
            $logoanimat.addClass("dis-none5");
        }

    });

    $(function(){
        $('.tab-nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
        $('.tab-panels>.media-cont>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
        $('.tab-nav a[href^="#"]').click(function(){                         // При клике на вкладку
            $('.tab-panels>.media-cont>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
            $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
            $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
            // $('.scale_small').animate({scrollTop: 0}, 1500);
            return (false);                                         // - прерывается обработка события onClick
        });
    });

    $('[href^="#"]').on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('.scale_small').animate({scrollTop: 0}, 100);
    });
});
