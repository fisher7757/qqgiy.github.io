/**
 * Created by thmos on 2016/12/22.
 */
window.onload=function () {
    var Open=$('.open');
    var Lettertop=$('.letter-top');
    var Letterbottom=$('.letter-bottom');
    var Letter=$('.letter');
    Open.click(function () {
        Lettertop.animate({top:'-52%',display:'none'},2000)
        Letterbottom.animate({bottom:'-51%',display:'none'},2000)
        Letter.animate({display:'none',zIndex:'-10'},2000)
        Open.animate({display:'none',opacity:'0'},2000)
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



    var Four=$('.four');
    var Five=$('.five');
    var Six=$('.six');
    var Seven=$('.seven');
    var End=$('#end');
    var Footer=$('.footer');
    var Arrow=$('.arrow');
    Four.css({display:'block'});
    Four.animate({opacity:'1'},6000);
    Four.addClass('commont');

    var Contant=$('.contant');
    var Main=$('.main');
    var Wrapper=$('.wrapper');

    $(window).scroll(function () {
        var top = document.body.scrollTop||document.documentElement.scrollTop;
        var Hei = document.body.scrollHeight;
        addEventListener('scroll', function() {
            console.dir(top);
            if(top>210){
                Five.css({display:'block'});
                Five.animate({opacity:'1'},7000)
                Five.addClass('commont');
            }
            if(top>380){
                Six.css({display:'block'});
                Six.animate({opacity:'1'},7000)
                Six.addClass('commont');
            }
            if(top>580){
                Seven.css({display:'block'});
                Seven.animate({opacity:'1'},7000)
                Seven.addClass('commont');
            }
            if(top>780){
                End.css({display:'block'});
                End.animate({opacity:'1'},7000)
                End.addClass('commont');
            }
            if(top>980){
                Footer.css({display:'block'});
                Footer.animate({opacity:'1'},7000)
                Footer.addClass('commont');
            }
            if(top>1190){
                Arrow.css({display:'block'});
                Arrow.animate({opacity:'1'},7000)
                Arrow.addClass('commont');
            }
           /* if(Hei>1873){
                cons
            }*/

        }, false)


        var scrollTop=$(this).scrollTop();
        var scrollHeight=$(document).height();
        var windowHeight=$(this).height();
        var Row=$('.row');
        var Row1=$('.row1');
        var Arrow=$('.arrow');
        if(scrollTop+windowHeight===scrollHeight){
            //alert('bottom');
            Arrow.click(function () {
                Wrapper.css({display:'none'});
                Row.css({display:'block'});
                Row.animate({opacity:'1'},4000);
                Row1.addClass('boss');
            });
        }

    });


}
