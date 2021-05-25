   $(function() {
       // start styles from scratch
       $("link[rel=stylesheet][href*='stylesheet']").remove();

       // Wrap <ul></ul> with <nav></nav> tag
       $("header ul.nav").wrap("<nav></nav>");
       $("header ul.nav > li > a").wrapInner("<span></span>");

       var $window = $(window),
           $html = $("nav > ul > li.parent > a"),
           $header = $("header > .content-wrapper"),
           searchSvg = '<svg class="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.14 49.94"><style>.icon {transition: all 0.4 ease-in-out;}li.search:hover .icon {fill: #fff;}</style><g class="icon"><path d="M24.46,0A21.88,21.88,0,0,1,37.87,4.66c3.72,3,5.76,6.73,5.17,11.66a24.31,24.31,0,0,0,0,4.18c.24,4.74-1.9,8.31-5.54,11.05-5,3.75-10.68,4.84-16.77,4.3a15.07,15.07,0,0,1-3.41-.62c-1.12-.37-1.59,0-2.13,1-2.21,3.87-4.5,7.7-6.79,11.53a4.37,4.37,0,0,1-4.69,2.15A4.46,4.46,0,0,1,.09,46.3a4.78,4.78,0,0,1,.73-3.54C3.06,39,5.26,35.21,7.53,31.46a1.15,1.15,0,0,0-.19-1.71,11.19,11.19,0,0,1-3.55-7.86A68.13,68.13,0,0,1,4,13.08c.5-4.4,3.26-7.41,6.89-9.68C14.74,1,19,0,24.46,0Zm-2,25.8c6.28,0,11-1.67,14.18-4.63,4-3.74,4.14-9,.26-12.87A17.26,17.26,0,0,0,26.27,3.56C21,3,16,3.81,11.59,7c-5.7,4.13-5.82,10.62-.29,15A18.58,18.58,0,0,0,22.45,25.8Zm-4.53,6.05a.58.58,0,0,0,.22.12c6.27,1.39,12.17.65,17.45-3.22a9.58,9.58,0,0,0,3.76-5.42C33.09,28.81,25.9,30,18.24,28.74ZM15,29.78c-.29-.32-.61-.92-.89-.9a2,2,0,0,0-1.4.71c-3,4.91-5.88,9.85-8.81,14.78-.41.7-.72,1.45.14,2s1.35-.17,1.76-.85l8.64-14.6C14.65,30.6,14.79,30.27,15,29.78Zm-4-3.78L7.53,23.26l-.29.2,2.37,4.09Z"/></g></svg>';

       // add search icon before 'Search' in nav
       $("ul.nav li.search a").prepend(searchSvg);

       $("main").prepend("<a id='main-content'></a>");

       function headerHeight(element) {
           var headerHeightValue = element.outerHeight();
           return headerHeightValue;
       }

       $("header").next().css("margin-top", headerHeight($("header")) + "px");

       // add mobile navigation button
       $header.append("<button type='button' class='hamburger is-closed animated fadeInRight hide' data-toggle='offcanvas'><span class='hamb-top'></span><span class='hamb-middle'></span><span class='hamb-bottom'></span></button>");

       $("header ul.nav > li.parent > a > span").append('<i class="fa fa-chevron-down" aria-hidden="true"></i>');

       //if ($(window).width() < 1031) {
       //  	$html.append('<span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>');
       //}

       // Scroll trigger init
       ScrollTrigger.create({
           start: "top -10",
           end: 99999,
           toggleClass: {
               className: "--scrolled",
               targets: ".site-header"
           }
       });

       $(document).ready(function() {
           $("a[href^='#']").click(function(e) {
               e.preventDefault();
               var position = $($(this).attr("href")).offset().top;
               $("body, html").animate({
                   scrollTop: position - 60
               }, 700);
           });
       });

       var trigger = $('.hamburger'),
           overlay = $('.overlay'),
           nav = $('nav'),
           expandToggle = $('ul.nav > li > a > span'),
           isClosed = false;

       trigger.click(function() {
           hamburger_cross();
       });

       expandToggle.click(function(event) {
           event.preventDefault();
           $(this).find('i').toggleClass('rotate');
           $(this).parent().toggleClass('open');

           $(this).parent().next('.nccUlMenuSub1').slideToggle();
       });

       function hamburger_cross() {
           if (isClosed == true) {
               overlay.hide();
               trigger.removeClass('is-open');
               trigger.addClass('is-closed');
               isClosed = false;
               nav.removeClass('slideOut');
               $('body').toggleClass('no-scroll');
               trigger.attr("aria-expanded", "false");
           } else {
               overlay.show();
               trigger.removeClass('is-closed');
               trigger.addClass('is-open');
               isClosed = true;
               nav.addClass('slideOut');
               $('body').toggleClass('no-scroll');
               trigger.attr("aria-expanded", "true");
           }
       }

       $('[data-toggle="offcanvas"]').click(function() {
           $('#wrapper').toggleClass('toggled');
       });

       $("input.SearchTextBox").attr("placeholder", "Search");

       var $div1 = $("#search");
       $(".search > a").on("click", function(e) {
           e.preventDefault();

           $div1.toggleClass('isOpen').slideToggle()

           var isOut = $div1.hasClass('isOpen')
           $div1.animate({ marginTop: isOut ? '' : '-55px' }, 300)

       });

       $("section > .content-wrapper > p > img").each(function() {
           if ($(this).css("float") == "left") {
               $(this).addClass("imgLeft");
           } else if ($(this).css("float") == "right") {
               $(this).addClass("imgRight");
           } else {
               // do nothing
           }
       });

   });