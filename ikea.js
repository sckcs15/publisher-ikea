$(document).ready(function(){
    var i=0;
    var len=$(".main").length;
    var move =$(".slide").width();
    window.onbeforeunload =function(){
      window.scrollTo(0,0);
    }
    //새로고침시 가장상단으로
    $(".gnb >li").mouseenter(function(){
        $(this).children(".sub").stop().fadeIn(300);
    });
    $(".gnb >li").mouseleave(function(){
        $(".gnb >li").children(".sub").stop().fadeOut(300);
    });
    //gnb 
    var lotate =setInterval(function(){
        i =$(".main.on").index();
        $(".main").removeClass("on");
        if(i<len-1){
            i=i+1;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
        else{
            i =len-4;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
    } ,5000);//main 반복슬라이드
    $(".main_wrap").mouseenter(function(){
        clearInterval(lotate);
    });//main hover시 중지
    $(".main_wrap").mouseleave(function(){
        lotate =setInterval(function(){
        i =$(".main.on").index();
        $(".main").removeClass("on");
        if(i<len-1){
            i=i+1;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
        else{
            i =len-4;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
    } ,5000);
    });//main hover안할시 다시 반복 슬라이드 시작
    $(".next").click(function(){
        i =$(".main.on").index();
        $(".main").removeClass("on");
        if(i<len-1){
            i=i+1;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
        else{
            i =len-4;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
    });//main 다음
    $(".prev").click(function(){
        i =$(".main.on").index();
        $(".main").removeClass("on");
        if(len-4<i){
            i=i-1;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
        else{
            i =len-1;
            $(".main").stop().fadeOut(1000);
        $(".main").eq(i).stop().fadeIn(1000);
        $(".main").eq(i).addClass("on");
        $(".slide").stop().animate({"margin-left":move*i});
        }
    });//main 이전
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".btn_top").stop().fadeIn(400);
        }
        else{
            $(".btn_top").stop().fadeOut(400);
        }
        //top버튼 생성 및 제거
        if($(this).scrollTop()>=300){
            $(".new_fix").animate({"margin-left":"0px",opacity:1},300);
            // $(".new_img").eq(1).delay(300).fadeIn(300);
            //fix
        }
        if($(this).scrollTop()>=300 && 1000>$(this).scrollTop()){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(0).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(0).stop().fadeIn(200);
        }
        if($(this).scrollTop()>=1000 && 1200>$(this).scrollTop()){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(1).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(1).stop().fadeIn(200);
        }
        if($(this).scrollTop()>=1200 && 1400>$(this).scrollTop()){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(2).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(2).stop().fadeIn(200);
        }
        if($(this).scrollTop()>=1400 && 1600>$(this).scrollTop()){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(3).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(3).stop().fadeIn(200);
        }
        if($(this).scrollTop()>=1600 && 1800>$(this).scrollTop()){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(4).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(4).stop().fadeIn(200);
        }
        if($(this).scrollTop()>=1800 && 2000>$(this).scrollTop()){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(5).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(5).stop().fadeIn(200);
        }
        if($(this).scrollTop()>=2000 && 2200>$(this).scrollTop()){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(6).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(6).stop().fadeIn(200);
        }
        if($(this).scrollTop()>=2200){
            $(".new_img").stop().fadeOut(200);   
            $(".new_img").eq(7).stop().fadeIn(200);
            $(".new_txt_po").stop().fadeOut(200);
            $(".new_txt_po").eq(7).stop().fadeIn(200);
        }
        //new
        if($(this).scrollTop()>=2900){
            $(".cate_txt").animate({opacity:1},500);
            $(".cate_wrap").delay(200).animate({opacity:1},500);
        }
        if($(this).scrollTop()>3500){
            $(".focus").animate({opacity:1},500);
            $(".more_view").delay(200).animate({opacity:1},500);
        }//more
        if($(this).scrollTop()>4200){
            var i= $(".family_cont ul li").length;
            $(".family_img").animate({"margin-left":"0px",opacity:1},1000);
            $(".family_cont h3").delay(200).animate({"margin-left":"0px",opacity:1},900);
            $(".family_cont .line").delay(200).animate({"margin-left":"0px",opacity:1},900);
            $(".family_cont p").delay(300).animate({"margin-left":"0px",opacity:1},900);
            for(ei=0;i>ei;ei++){
                $(".family_cont ul li").eq(ei).delay(400+(200*ei)).animate({"margin-top":"0px",opacity:1},900);
            }
            $(".family_btn").delay((500+((i-1)*100))).animate({"margin-top":"60px",opacity:1},900);
        }
        if($(this).scrollTop()>4900){
            var i= $(".busin_cont ul li").length;
            $(".busin_img").animate({left:"600px",opacity:1},1000);
            $(".busin_cont h3").delay(200).animate({"margin-left":"0px",opacity:1},900);
            $(".busin_cont .line").delay(200).animate({"margin-left":"0px",opacity:1},900);
            $(".busin_cont p").delay(300).animate({"margin-left":"0px",opacity:1},900);
            for(ei=0;i>ei;ei++){
                $(".busin_cont ul li").eq(ei).delay(400+(200*ei)).animate({"margin-top":"0px",opacity:1},900);
            }
            $(".busin_btn").delay((500+((i-1)*100))).animate({"margin-top":"40px",opacity:1},900);
        }
          // ikea family ,ikea business
         });// 스크롤시 효과
    $(".btn_top").click(function(){
       $("body,html").animate({scrollTop:0},500);
    });//top 클릭시 이동
    $(".cate_tab >li").click(function(){
        $(".cate_tab >li").removeClass("on");
        $(this).addClass("on");
        $(".cate_img").stop().fadeOut(800);
        i= $(this).index();
        $(".cate_img").eq(i).stop().fadeIn(800);
        $(".cate_img").removeClass("on");
        $(".cate_img").eq(i).addClass("on");
    });
    // 카테고리 클릭시 fade
    $(".cate .next").click(function(){
        $(".cate_img.on").stop().animate({"margin-left":"-540px"},300,function(){
            $(".cate_img.on>li").first().appendTo(".cate_img.on");
             $(".cate_img.on").css({"margin-left":"-270px"});
        });
    });
      $(".cate .prev").click(function(){
        $(".cate_img.on").stop().animate({"margin-left":"-0px"},300,function(){
            $(".cate_img.on>li").last().prependTo(".cate_img.on");
             $(".cate_img.on").css({"margin-left":"-270px"});
        });
    });
    $(".cate_img.on").show();
    var cate =setInterval(function(){
       var cate_i= $(".cate_tab>li.on").index();
       var cate_len = $(".cate_tab >li").length;
    if(cate_i<cate_len-1){
        $(".cate_tab>li").removeClass("on");
        $(".cate_tab>li").eq(cate_i+1).addClass("on");
        $(".cate_img").removeClass("on");
        $(".cate_img").eq(cate_i+1).addClass("on");
        $(".cate_img").stop().fadeOut(800);
        $(".cate_img.on").stop().fadeIn(800);
    }
    else{
        cate_i =0;
        $(".cate_tab>li").removeClass("on");
        $(".cate_tab>li").eq(cate_i).addClass("on");
        $(".cate_img").removeClass("on");
        $(".cate_img").eq(cate_i).addClass("on");
    }
    }
    ,5000);
    $(".cate").mouseenter(function(){
        clearInterval(cate);
    });
    $(".cate").mouseleave(function(){
        cate =setInterval(function(){
            var cate_i= $(".cate_tab>li.on").index();
            var cate_len = $(".cate_tab >li").length;
         if(cate_i<cate_len-1){
             $(".cate_tab>li").removeClass("on");
             $(".cate_tab>li").eq(cate_i+1).addClass("on");
             $(".cate_img").removeClass("on");
             $(".cate_img").eq(cate_i+1).addClass("on");
             $(".cate_img").stop().fadeOut(800);
             $(".cate_img.on").stop().fadeIn(800);
         }
         else{
             cate_i =0;
             $(".cate_tab>li").removeClass("on");
             $(".cate_tab>li").eq(cate_i).addClass("on");
             $(".cate_img").removeClass("on");
             $(".cate_img").eq(cate_i).addClass("on");
         }
         }
         ,5000);
    });
    var more =setInterval(function(){
        $(".more_img").stop().animate({"margin-left":"-700px"}
        ,function(){
            $(".more_img >li").eq(1).appendTo(".more_img");
            $(".more_img").stop().css({"margin-left":"-350px"});
        }
        );
    }   ,5000
    );
    $(".more_img").mouseenter(function(){
       clearInterval(more);
    });
    $(".more_img").mouseleave(function(){
        more =setInterval(function(){
            $(".more_img").stop().animate({"margin-left":"-700px"}
            ,function(){
                $(".more_img >li").eq(1).appendTo(".more_img");
                $(".more_img").stop().css({"margin-left":"-350px"});
            }
            );
        }   ,5000
        );
     });
     $(".more_slide").mouseenter(function(){
        clearInterval(more);
     });
     $(".more_slide").mouseleave(function(){
        more =setInterval(function(){
            $(".more_img").stop().animate({"margin-left":"-700px"}
            ,function(){
                $(".more_img >li").eq(1).appendTo(".more_img");
                $(".more_img").stop().css({"margin-left":"-350px"});
            }
            );
        }   ,5000
        );
     });
    //more 슬라이드
    $(".more_img >li").mouseenter(function(){
        $(this).children(".before").stop().fadeOut(300);
        $(this).children(".after").stop().fadeIn(300);
    });
    $(".more_img >li").mouseleave(function(){
        $(this).children(".after").stop().fadeOut(300);
        $(this).children(".before").stop().fadeIn(300);
    });
     $(".more_slide .left").click(function(){
        $(".more_img").stop().animate({"margin-left":"0px"},function(){
            $(".more_img >li").last().prependTo(".more_img");
            $(".more_img").css({"margin-left":"-350px"});
        });
     });
     $(".more_slide .right").click(function(){
        $(".more_img").stop().animate({"margin-left":"-700px"},function(){
            $(".more_img >li").first().appendTo(".more_img");
            $(".more_img").css({"margin-left":"-350px"});
        });
     });
    // more hover시 이미지변환
    $(".service_all").mouseenter(function(){
        $(".service_all >img").removeClass("on")
        $(".service_all .after").addClass("on") 
    });//service_all 이미지변환
    $(".service_all").mouseleave(function(){
        $(".service_all >img").removeClass("on");
        $(".service_all .before").addClass("on");
    });//service_all 이미지변환
});