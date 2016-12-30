/**
 * Created by thmos on 2016/12/22.
 */
window.onload=function () {
    var Open = $('.open'),
		Letter = $('.letter'),
		Head1 = $('.head1'),
		Head2 = $('.head2'),
		Head3 = $('.head3'),
		Head4 = $('.head4'),

		First = $('.first'),
		Second = $('.second'),
		Three = $('.three'),
		Four = $('.four'),
		Five = $('.five'),
		Six = $('.six'),
		Seven = $('.seven'),
		Eight = $('.eight'),
		End = $('#end'),
		Footer = $('.footer'),
		Arrow = $('.arrow'),
		Arrow1 = $('.arrow1'),

		F11 = $('.f11'),
		F12 = $('.f12'),
		F13 = $('.f13'),
		F14 = $('.f14'),
		F15 = $('.f15'),
		F16 = $('.f16'),
		F17 = $('.f17'),
		F18 = $('.f18'),
		F19 = $('.f19'),
		Contant = $('.contant'),
		Main = $('.main'),
		Wrapper = $('.wrapper');

    var Aad = $('.add');
    Aad.css({
        display: 'none'
    });

    //实现图片预加载***************************************************************
    function loadImage(url, callback) {
        var img = new Image();
        img.src = url;
        img.onload = function(){ //图片下载完毕时异步调用callback函数。
            callback.call(img); // 将callback函数this指针切换为img。
        };
    }
        loadImage('images/11.png',imgLoaded)
        loadImage('images/12.png',imgLoaded)
        loadImage('images/21.png',imgLoaded)
        loadImage('images/22.png',imgLoaded)
        loadImage('images/31.png',imgLoaded)
        loadImage('images/32.png',imgLoaded)
        loadImage('images/41.png',imgLoaded)
        loadImage('images/42.png',imgLoaded)
        loadImage('images/51.png',imgLoaded)
        loadImage('images/52.png',imgLoaded)
        loadImage('images/61.png',imgLoaded)
        loadImage('images/62.png',imgLoaded)
        loadImage('images/71.png',imgLoaded)
        loadImage('images/72.png',imgLoaded)
        loadImage('images/81.png',imgLoaded)
        loadImage('images/82.png',imgLoaded)
        loadImage('images/91.png',imgLoaded)
        loadImage('images/92.png',imgLoaded)
        loadImage('images/egg_3.png',imgLoaded)
        loadImage('images/egg_1.png',imgLoaded)
        loadImage('images/mast1.jpg',imgLoaded)
    function imgLoaded(){
        $('.a1 img').attr('src','images/11.png')
        $('.f11 img').attr('src','images/12.png')
        $('.a2 img').attr('src','images/21.png')
        $('.f12 img').attr('src','images/22.png')
        $('.a3 img').attr('src','images/31.png')
        $('.f13 img').attr('src','images/32.png')
        $('.a4 img').attr('src','images/41.png')
        $('.f14 img').attr('src','images/42.png')
        $('.a5 img').attr('src','images/51.png')
        $('.f15 img').attr('src','images/52.png')
        $('.a6 img').attr('src','images/61.png')
        $('.f16 img').attr('src','images/62.png')
        $('.a7 img').attr('src','images/71.png')
        $('.f17 img').attr('src','images/72.png')
        $('.a8 img').attr('src','images/81.png')
        $('.f18 img').attr('src','images/82.png')
        $('.a9 img').attr('src','images/91.png')
        $('.f19 img').attr('src','images/92.png')
        $('.arrow3 img').attr('src','images/egg_3.png')
        $('.eagger_first').attr('src','images/egg_1.png')
        $('.row1').attr('src','images/mast1.jpg')

    }
    //*************************************************************************

	Open.click(function() {
		Letter.animate({top:'100%'},5000)
		setTimeout(function() {
			Letter.css({
				display: 'none'
			});
		}, 4500);
		Head1.css({
			opacity: '1'
		});
		setTimeout(function() {
			Head2.animate({
				opacity: '1'
			}, 1000);
		}, 2000)
		setTimeout(function() {
			Head3.animate({
				opacity: '1'
			}, 1000);
		}, 3000)
		setTimeout(function() {
			Head4.animate({
				opacity: '1'
			}, 1000);
			Main.animate({opacity:'1'},500)
		}, 3900)

		setTimeout(function() {
			First.css({
				display: 'block'
			});
			First.animate({
				opacity: '1'
			}, 1000);
			First.addClass('commont');
			F11.animate({
				opacity: '1'
			}, 1000)
		}, 4600);
		setTimeout(function() {
			Second.css({
				display: 'block'
			});
			Second.animate({
				opacity: '1'
			}, 1000);
			Second.addClass('commont');
			F12.animate({
				opacity: '1'
			}, 1000)
		}, 5000);

		setTimeout(function() {
			Three.css({
				display: 'block'
			});
			Three.animate({
				opacity: '1'
			}, 1000);
			Three.addClass('commont');
			F13.animate({
				opacity: '1'
			}, 1000)
		}, 5500);

	});

	$(window).scroll(function() {
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		var Hei = document.body.scrollHeight;
		addEventListener('scroll', function() {
			console.dir(top)
			if(top > 43) {
				Four.css({
					display: 'block'
				});
				Four.addClass('commont');
				setTimeout(function() {
					F14.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 243) {
				Five.css({
					display: 'block'
				});
				Five.addClass('commont');
				setTimeout(function() {
					F15.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 453) {
				Six.css({
					display: 'block'
				});
				Six.addClass('commont');
				setTimeout(function() {
					F16.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 663) {
				Seven.css({
					display: 'block'
				});
				Seven.addClass('commont');
				setTimeout(function() {
					F17.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 863) {
				Eight.css({
					display: 'block'
				});
				Eight.addClass('commont');
				setTimeout(function() {
					F18.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 1063) {
				End.css({
					display: 'block'
				});
				End.addClass('commont');
				setTimeout(function() {
					F19.animate({
						opacity: '1'
					}, 1000)
				}, 1000)
			}
			if(top > 1283) {
				Footer.css({
					display: 'block'
				});
				Footer.animate({
					opacity: '1'
				}, 6000)
				Footer.addClass('commont');
			}
			if(top > 1646) {
				Arrow.css({
					display: 'block'
				});
				Arrow1.css({
					display: 'block'
				});
				Arrow.animate({
					opacity: '1'
				}, 3000)
			}
		}, false)
	});

	var BossBot=$('.boss_bot');
	var Row=$('.row');
	var Row1=$('.row1');
	var EaggeFirst=$('.eagger_first');
    var Back = $('.back');
    var Arrow3=$('.arrow3');

    Arrow1.click(function () {
        BossBot.css({display:'block'});
        EaggeFirst.attr('src','images/egg_2.png');
        Arrow1.removeClass('arrow2')
       setTimeout(function () {
           Arrow3.css({display:'block'});
       },1000)
        setTimeout(function () {
            Row.css({display:'block'});

            setTimeout(function () {
                Row.css({top:'30%'});
                Back.css({display:'block'});
            },2000)
            Row.addClass('botmove')
        },1200)
    });

    Back.click(function() {
        EaggeFirst.attr('src','images/egg_1.png');
        Arrow3.css({display:'none'});
        Row.css({
            display: 'none',
        });
        BossBot.css({display:'none'});
        Back.css({display:'none'});
        Arrow1.addClass("arrow2")
    });
};