/**
 * Created by thmos on 2016/12/22.
 */
window.onload=function () {
    var Open=$('.open');
    var Letter=$('.letter');

    var Head1=$('.head1');
    var Head2=$('.head2');
    var Head3=$('.head3');
    var Head4=$('.head4');

   Open.click(function () {
      Letter.addClass('lettermove');
      setTimeout(function () {
          Letter.css({display:'none'});
      },5000);
       Head1.css({opacity:'1'});
       setTimeout(function () {
           Head2.animate({opacity:'1'},1000);
       },1000)
        setTimeout(function () {
            Head3.animate({opacity:'1'},1000);
        },2000)
       setTimeout(function () {
           Head4.animate({opacity:'1'},1000);
       },3000)


   });

    var Aad=$('.add');
    Aad.css({display:'none'});


    /*var oScroll = null;
    var top = document.body.scrollTop||document.documentElement.scrollTop;
    setTimeout(function (){
        var Contant=$('.contant');
        oScroll = new iScroll('contant',{//iScroll版本4不加#，版本5加#
                hScrollbar:false,
                vScrollbar:false,
                onScrollMove: function (){
                    //console.dir(1)
                    var top = document.body.scrollTop||document.documentElement.scrollTop;
                    //console.dir(top)
                    /!*addEventListener('scroll', function() {
                        console.dir(2)},false);*!/
                 },
                onScrollEnd: function (){console.dir(2)},
                //onRefresh: function (){console.dir(3)},
            });

    },100);*/


    var Three=$('.three');
    var Four=$('.four');
    var Five=$('.five');
    var Six=$('.six');
    var Seven=$('.seven');
    var Eight=$('.eight');
    var End=$('#end');
    var Footer=$('.footer');
    var Arrow=$('.arrow');

    var F13=$('.f13');
    Three.css({display:'block'});
    Three.animate({opacity:'1'},6000);
    Three.addClass('commont');
    F13.animate({opacity:'1'},10000)

    var F14=$('.f14');
    var F15=$('.f15');
    var F16=$('.f16');
    var F17=$('.f17');
    var F18=$('.f18');
    var F19=$('.f19');
    var Contant=$('.contant');
    var Main=$('.main');
    var Wrapper=$('.wrapper');

    $(window).scroll(function () {
        var top = document.body.scrollTop||document.documentElement.scrollTop;
        var Hei = document.body.scrollHeight;
        addEventListener('scroll', function() {
            console.dir(top);
            if(top>128){
                Four.css({display:'block'});
                Four.addClass('commont');
                setTimeout(function () {
                    F14.animate({opacity:'1'},1000)
                },2000)
            }
            if(top>319){
                Five.css({display:'block'});
                Five.addClass('commont');
                setTimeout(function () {
                    F15.animate({opacity:'1'},1000)
                },2000)
            }
            if(top>526){
                Six.css({display:'block'});
                Six.addClass('commont');
                setTimeout(function () {
                    F16.animate({opacity:'1'},1000)
                },2000)
            }
            if(top>728){
                Seven.css({display:'block'});
                Seven.addClass('commont');
                setTimeout(function () {
                    F17.animate({opacity:'1'},1000)
                },2000)
            }
            if(top>910){
                Eight.css({display:'block'});
                Eight.addClass('commont');
                setTimeout(function () {
                    F18.animate({opacity:'1'},1000)
                },2000)
            }
            if(top>1120){
                End.css({display:'block'});
                End.addClass('commont');
                setTimeout(function () {
                    F19.animate({opacity:'1'},1000)
                },2000)
            }
            if(top>1152){
                Footer.css({display:'block'});
                Footer.animate({opacity:'1'},6000)
                Footer.addClass('commont');
            }
            if(top>1745){
                Arrow.css({display:'block'});
                Arrow.animate({opacity:'1'},6000)
                Arrow.addClass('commont');
            }

        }, false)


        var scrollTop=$(this).scrollTop();
        var scrollHeight=$(document).height();
        var windowHeight=$(this).height();
        var Row=$('.row');
        var Row1=$('.row1');
        var Arrow=$('.arrow');
        if(scrollTop+windowHeight===scrollHeight){
            Arrow.click(function () {
                Wrapper.css({display:'none'});
                Row.css({display:'block'});
                Row.animate({opacity:'1'},4000);
                Row1.addClass('boss');
            });
        }

    });

}
