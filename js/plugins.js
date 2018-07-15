/*global $, console, alert*/

$(function () {
    'use strict';
    $(window).scroll(function () {
        // when scroll navbar and button will changed background-color 
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').css('background-color', 'rgba(0, 214, 100, 0.6)');
            $('.navbar .btn-nav').css('background-color', 'rgba(0, 214, 100, 0.1)');
        } else {
            $('.navbar').css('background-color', 'rgba(117, 64, 238, 1)');
            $('.navbar .btn-nav').css('background-color', 'rgba(117, 64, 238, 1)');
        }
        
        $('.fixed').each(function () {
            if ($(window).scrollTop() <= $('.plan').offset().top) {
                $(this).animate({
                    opacity : '1'
                }, 1500).css({
                    position : 'absolute',
                    top: '1260px',
                    boxShadow: 'none'
                });
                $('.navbar').css('background-color', 'rgb(138, 113, 196)');
                $('.navbar .btn-nav').css('background-color', 'rgb(138, 113, 196)');
            
            } else if ($(window).scrollTop() >= $('.learn').offset().top) {
                $(this).animate({
                    opacity : '1'
                }, 1500).css({
                    position : 'absolute',
                    top: '1805px',
                    boxShadow: 'none'
                });
            } else {
                $(this).animate({
                    opacity : '1'
                }, 1500).css({
                    position : 'fixed',
                    top: '20%',
                    boxShadow: '0 15px 30px #9e9e9e'
                });
            }
        });
        
        /*if ($(window).scrollTop() >= $('.plan').offset().top) {
            $('.fixed').animate({
                opacity : '1'
            }, 1500, function () {
                $(this).css({
                    position : 'absolute',
                    top: '195%'
                });
            });
        } else if ($(window).scrollTop() >= $('.learn').offset().top) {
            $(this).animate({
                opacity : '1'
            }, 1500, function () {
                $(this).css({
                    position : 'absolute',
                    top: '280%'
                });
            });
        } else {
            $(this).css('position', 'fixed');
        }
        */
        console.log($('.plan').offset().top + " and the fuck shit is " + $('.learn').offset().top + " and this is  " + $(window).scrollTop());
    });
    // any anchor in document will be prevent default 
    $('a').click(function (e) {
        e.preventDefault();
    });
});