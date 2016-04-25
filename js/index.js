$(function(){
    /* 导航 开始 */
    var head=$(".head");
    var headbox1=$(".headbox1");
    var headbox2=$(".headbox2");
    $(".headbox2 a:nth-child(2)").click(function(){
        $(".headbox2 a:first-child").css("display","inline-block");
        $(".headbox2 a:nth-child(2)").css("display","none");
        headbox1.slideDown();
    })
    $(".headbox2 a:first-child").click(function(){
        headbox1.slideUp();
        $(".headbox2 a:nth-child(2)").css("display","inline-block");
        $(".headbox2 a:first-child").css("display","none");
    })
    /* 导航 结束 */

    /*/!* banner 开始 *!/
    var banner=$(".bannerbox");
    var bannerF=$(".bannerbox a:first-child");
    //var bannerW=100+"%";
    var bannerA=$(".bannerbox a");
    //console.log(bannerW)
    var now=0;
    var next=0;
    var flag=true;
    bannerF.css("left","0");
    var t=setInterval(move,3000);
    function move(){
        if(!flag){
            return
        };
        flag=false;
        next++;
        if(next==bannerA.length){
            next=0;
        }
        bannerA.eq(next).css({left:"100%"});
        bannerA.eq(now).animate({left:"-100%"});
        bannerA.eq(next).animate({left:0},function(){
            flag=true;
        });
        $('.btn li').removeClass('sty').eq(next).addClass('sty');
        now=next;
    }
    $('.banner').hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,3000);
    });
    $('.btn li').click(function(){
        if(now==$(this).index()||!flag){
            return;
        }
        if($(this).index()<now){
            bannerA.eq($(this).index()).animate({left:0});
            bannerA.eq(now).animate({left:"100%"});
        }else{
            flag=false;
            bannerA.eq($(this).index()).css({left:"100%"});
            bannerA.eq(now).animate({left:"-100%"},function(){
                flag=true;
            });
            bannerA.eq($(this).index()).animate({left:0});
        }
        $('.btn li').removeClass('sty').eq($(this).index()).addClass('sty');
        now=next=$(this).index();
    })
    $('.rightbtn').click(function(){
        move();
    })
    $('.leftbtn').click(function(){
        if(!flag){return};
        flag=false;
        next--;
        if(next==-1){
            next=bannerA.length-1;
        }
        bannerA.eq(next).css({left:"-100%"});
        bannerA.eq(now).animate({left:"100%"});
        bannerA.eq(next).animate({left:0},function(){
            flag=true;
        });
        $('.btn li').removeClass('sty').eq(next).addClass('sty');
        now=next;
    })
    /!* banner 结束 *!/*/

    /* 底部 开始 */
    var bottom=$(".bottom a");
    var botS=$(".bottom a h3");
    var botL=$(".bottom a li");
    var W=document.documentElement.clientWidth;
    if(W<768){
        $(".btn2").css("display","none");
    }
    if(W>768){
        $(".btn2").css("display","block");
    }
    botS.click(function(){
        W=document.documentElement.clientWidth;
        if(W>768){
            return false;
        }
        $(this).nextAll().slideToggle();

    });
    /* 底部 结束 */
})