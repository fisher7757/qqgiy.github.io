/**
 * Created by thmos on 2016/12/22.
 */
window.onload=function () {
    var Open=$('.open'),
        Letter=$('.letter'),
        Head1=$('.head1'),
        Head2=$('.head2'),
        Head3=$('.head3'),
        Head4=$('.head4'),
        
        First=$('.first'),
        Second=$('.second'),
        Three=$('.three'),
        Four=$('.four'),
        Five=$('.five'),
        Six=$('.six'),
        Seven=$('.seven'),
        Eight=$('.eight'),
        End=$('#end'),
        Footer=$('.footer'),
        Arrow=$('.arrow'),
        Arrow1=$('.arrow1'),

        F11=$('.f11'),
        F12=$('.f12'),
        F13=$('.f13'),
        F14=$('.f14'),
        F15=$('.f15'),
        F16=$('.f16'),
        F17=$('.f17'),
        F18=$('.f18'),
        F19=$('.f19'),
        Contant=$('.contant'),
        Main=$('.main'),
        Wrapper=$('.wrapper');

    var Row=$('.row');
        Row.css({dispaly:'none'});

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

        setTimeout(function(){
            First.css({display:'block'});
            First.animate({opacity:'1'},1000);
            First.addClass('commont');
            F11.animate({opacity:'1'},1000)
        },3000);
        setTimeout(function(){
            Second.css({display:'block'});
            Second.animate({opacity:'1'},1000);
            Second.addClass('commont');
            F12.animate({opacity:'1'},1000)
        },3500);
       
       setTimeout(function(){
            Three.css({display:'block'});
            Three.animate({opacity:'1'},1000);
            Three.addClass('commont');
            F13.animate({opacity:'1'},1000)
       },4000);

   });

    var Aad=$('.add');
    Aad.css({display:'none'});

    $(window).scroll(function () {
        var top = document.body.scrollTop||document.documentElement.scrollTop;
        var Hei = document.body.scrollHeight;
        addEventListener('scroll', function() {
            console.dir(top);
            if(top>68){
                Four.css({display:'block'});
                Four.addClass('commont');
                setTimeout(function () {
                    F14.animate({opacity:'1'},1000)
                },1000)
            }
            if(top>259){
                Five.css({display:'block'});
                Five.addClass('commont');
                setTimeout(function () {
                    F15.animate({opacity:'1'},1000)
                },1000)
            }
            if(top>466){
                Six.css({display:'block'});
                Six.addClass('commont');
                setTimeout(function () {
                    F16.animate({opacity:'1'},1000)
                },1000)
            }
            if(top>658){
                Seven.css({display:'block'});
                Seven.addClass('commont');
                setTimeout(function () {
                    F17.animate({opacity:'1'},1000)
                },1000)
            }
            if(top>850){
                Eight.css({display:'block'});
                Eight.addClass('commont');
                setTimeout(function () {
                    F18.animate({opacity:'1'},1000)
                },1000)
            }
            if(top>1070){
                End.css({display:'block'});
                End.addClass('commont');
                setTimeout(function () {
                    F19.animate({opacity:'1'},1000)
                },1000)
            }
            if(top>1002){
                Footer.css({display:'block'});
                Footer.animate({opacity:'1'},6000)
                Footer.addClass('commont');
            }
            if(top>1595){
                Arrow.css({display:'block'});
                Arrow1.css({display:'block'});
                Arrow.animate({opacity:'1'},6000)
                Arrow.addClass('commont');

            }

        }, false)


        var scrollTop=$(this).scrollTop(),
            scrollHeight=$(document).height(),
            windowHeight=$(this).height(),
            Row1=$('.row1'),
            Arrow=$('.arrow');
        if(scrollTop+windowHeight===scrollHeight){
            Arrow.click(function () {
                Wrapper.css({display:'none'});
                Row.css({display:'block'});
                Row.animate({opacity:'1'},4000);
                Row1.addClass('boss');
            });
        }


    });
     var Back=$('.back');
     Back.click(function () {
         Row.css({display:'none'});
         Wrapper.css({display:'block'});
     });

}
