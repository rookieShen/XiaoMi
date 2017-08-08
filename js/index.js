/**
 * Created by Administrator on 2017/7/31.
 */
$(function () {
/*顶部的鼠标移入颜色变化*/
//1.发生的目标元素 a
//2.什么时间 mouseover，mouseout
//3.改变链接颜色
    $('.top a').mouseover(function (event) {
        $(this).css('color','#fff');
    }).mouseout(function () {
        $(this).css('color','#a4b094');
    })
//   ************** 购物车**************
    $('.shopCar').mouseover(function () {
        $(this).css({color:'#222',background:'#999'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function () {
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();})
    var flag = true;
//  表单的输入框移入效果
    $('.ser1').mouseover(function () {
        if (flag){
            $('.ser1 input').css('border','1px solid #000');
            $('.ser2').css('border','1px solid #000').css('borderLeft','none');}
    }).mouseout(function () {
        if (flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $('.ser2').css('border','1px solid #ccc');}})
//    热门搜索的移入效果
    $('.hot a').mousemove(function () {
        $(this).css({'color':'#fff', 'background':'orange'
        }).mouseout(function () {
            $(this).css({'color':'#757575', 'background':'#eee'
            })})
    //    按钮移入后效果
        $('.ser2').mouseover(function () {
            $('.ser1 input').css({'border':'1px solid #000', 'border-right':'none'});
            $(this).css({'background':'orange', 'color':'#fff',})
        }).mouseout(function () {
            $('.ser1 input').css('border','1px solid #ccc');
            $(this).css({'background':'#fff', 'color':'#ccc', 'border':'1px solid #ccc', 'border-left':'none'})
        });
    //    表单获取焦点的时候
        $('.ser1 input').focus(function () {
            flag = false;
            $('.hot').addClass('hide');
            $(this).css('border-color','orange');
            $('.ser2').css('border-color','orange');
            $('.keywordsList').slideDown().css('border-color','orange')
        }).blur(function () {
            flag = true;
            $('.hot').removeClass('hide');
            $(this).css('border-color','#ccc');
            $('.ser2').css('border-color','#ccc');
            $('.keywordsList').slideUp().css('border-color','#ccc')
        })
    })
//    ***************导航效果开始*********
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color','#ff6700');
        if($(this).index()<7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');}
    }).mouseout(function () {
        $(this).children('a').css('color','#333');
        $('.select').slideUp();})
        $('.nav').mouseout(function () {
            $('.select').slideUp();});
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish()
    }).mouseout(function () {
        $('.select').slideUp();})
    // ***************主体内容************
//轮播图
    var num = 0;
    var timer;
    timer = setInterval(autoplay,2000)
   $('.round li').mouseover(function () {
        clearInterval(timer);
        num = $(this).index();
        displayImg()})
    $('.banner').mouseover(function () {
        clearInterval(timer)
    }).mouseout(function (){
        timer = setInterval(autoplay,2000)})
    $('.direcL').click(function () {
        //上一张
        clearInterval(timer);
        num = num - 1;
        if (num < 0){num = 4;}
        displayImg()})
    $('.direcR').click(function () {
        //下一张
        clearInterval(timer);
        num = num + 1;
        if (num > 4){num = 0;}
        displayImg()})
    function displayImg() {
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
        $('.round li').eq(num).css('background','orange').siblings().css({'background':'#000', 'opacity':'0.6'});}
    function autoplay (){num ++;if(num > 4){num = 0;}displayImg();}
//隐藏的导航
    $('.navL li').mouseover(function () {
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {$(this).css('background','transparent');});
    //鼠标移出二级导航
    $('.navL').mouseout(function () {$('.navHide').addClass('hide');});
    //用户移入三级导航的时候
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');});
    // ***********明星单品特效开始**********
    //自动轮播
    timer = setInterval(function () {if (num>0){num = 0}showImg();num++;},5000);
    function showImg() {
        if (flag){$('.scroll').css({'left':'-1226px'});$('.starPro').css('overflow','hidden');
            flag = false;
        }else {$('.scroll').css({'left':'0'});flag = true;}}
    // 下一张
    nextPlay($('.next'),1,$('.scroll'),$('.prev'))
    // 上一张
    prevPlay($('.prev'),$('.scroll'),$('.next'))
//    主题开始
//   *********** 硬件设备开始***********
    to($('.toAll a'))
    //左边
    marginList($('.product1 li'));
    //右边
    marginList($('.productYJ li'));
    //*************主题内容 搭配 配件 周边的所有部分***********
    //所有右边a标签里的
    $('.productR li a').mouseover(function () {$(this).css('color','#ff6700')}).mouseout(function () {$(this).css('color','#333333')})
    // 所有右边的
    $('.productL li').mouseover(function () {$(this).css({marginTop:'12px',boxShadow:'0 0 28px #aaa'})}).mouseout(function () {$(this).css({marginTop:'14px',boxShadow:'none'})})
    //左边的阴影部分
    $('.ProLi>li').mouseover(function(){
        if($(this).index()!=7){$(this).css({marginTop:'12px','box-shadow':'0px 0px 28px #aaa'});}
    }
    ).mouseout(function(){
        if($(this).index()!=7){$(this).css({marginTop:'14px','box-shadow':'none'});}});
    //所有左边最后一个阴影
    $('.twoRow li').mouseover(function () {
        $(this).css({marginTop:'12px',boxShadow:'0 0 28px #aaa'})
    }
    ).mouseout(function () {$(this).css({marginTop:'14px',boxShadow:'none'})})
    //所有鼠标经过评价向上事件
    $('.ProLi li').mouseover(function() {
        $(this).find('.slideDiv').stop(true,false).slideDown('fast');
    }
    ).mouseout(function() {$(this).find('.slideDiv').stop(true,false).slideUp('fast');})
    //*********搭配********
    displayList($('.list41'),'li',$('.productR2>ul'));
    //*********** 配件********
    displayList($('.list42'),'li',$('.productR3>ul'));
    // ********周边***********
    displayList($('.list5'),'li',$('.productR4>ul'));
//  **************  为你推荐******************
    $('.scroll2 li').mouseover(function(){$(this).find('img').css('marginTop','48px');
    }
    ).mouseout(function(){$(this).find('img').css('marginTop','50px');});
    nextPlay($('.next2'),3,$('.scroll2'),$('.prev2'));
    prevPlay($('.prev2'),$('.scroll2'),$('.next2'));
//  *****************  热评产品*****************
    marginList($('.hotList li'));
    //***********内容**************
    //显示隐藏图标
    $('.contList>li').mouseover(function(){index=$(this).index();$(this).find('.p2').css('opacity','1');
    }
    ).mouseout(function(){$(this).find('.p2').css('opacity','0');});
    //左右按钮阴影
    $('.p2').mouseover(function () {
        $(this).css('background','#757575');
    }
    ).mouseout(function () {$(this).css('background','#b0b0b0');})
    //最后的导航背景
    $('.goTo').mouseover(function () {
        $(this).css({background:'#ffac13',color:'#fff'})
    }
    ).mouseout(function () {$(this).css({background:'#fff',color:'#ffac13'})})
//    ********左右移动*********
    nextPlay2($('.r2'),3,$('.contBox'),$('.round2>p'))
    prevPlay2($('.l2'),0,$('.contBox'),$('.round2>p'))
    roud($('.round2>p'),$('.contBox'))
    //********2222********
    $('.goTo2').mouseover(function () {
        $(this).css({background:'#83c44e',color:'#fff'})
    }
    ).mouseout(function () {$(this).css({background:'#fff',color:'#83c44e'})})
    nextPlay2($('.r3'),3,$('.contBox2'),$('.round3>p'))
    prevPlay2($('.l3'),0,$('.contBox2'),$('.round3>p'))
    roud($('.round3>p'),$('.contBox2'))
//    ***333******
    $('.goTo3').mouseover(function () {$(this).css({background:'#e53935',color:'#fff'})
    }
    ).mouseout(function () {$(this).css({background:'#fff',color:'#e53935'})})
    nextPlay2($('.r4'),3,$('.contBox3'),$('.round4>p'))
    prevPlay2($('.l4'),0,$('.contBox3'),$('.round4>p'))
    roud($('.round4>p'),$('.contBox3'))
//   *** 444***
    $('.goTo4').mouseover(function () {
        $(this).css({background:'#2196f3',color:'#fff'})
    }
    ).mouseout(function () {$(this).css({background:'#fff',color:'#2196f3'})})
    nextPlay2($('.r5'),3,$('.contBox4'),$('.round5>p'))
    prevPlay2($('.l5'),0,$('.contBox4'),$('.round5>p'))
    roud($('.round5>p'),$('.contBox4'))
//    ***********视频*******
    to($('.video .toAll1 a'))
    marginList($('.videoList li'));
    $('.videoList>li img').mouseover(function () {
        $(this).siblings('.icon-bofang').css('color','#ff6700')
    }).mouseout(function () {
        $(this).siblings('.icon-bofang').css('color','#fff')
    })
//    *********主要内容结束******
//  ***********  函数部分***************
    var number = 0; // 对应ul左偏移量
    var n = 0; // 鼠标点击的次数
    /**@intro  封装一个鼠标移入相应产品的就出现阴影的函数
     /* @param  obj1 公共部分相应产品下的li
     */
    function marginList(obj1) {
        obj1.mouseover(function() {$(this).css({'marginTop': '12px','boxShadow': '0 0 28px #aaa'});
        }).mouseout(function() {$(this).css({'marginTop': '14px','boxShadow': 'none'});
        });return;}
    function to(obj1) {
        obj1.mouseover(function () {
            $(this).css('color','#ff6700')
            $('.icon-chakanquanbu-copy').css('color','#ff6700')
        }).mouseout(function () {
            $(this).css('color','#424242')
            $('.icon-chakanquanbu-copy').css('color','rgb(176,176,176)')})}
    /**@intro  封装一个鼠标移入相应分类就显示相应产品的函数
     /* @param  obj1 指的是装下这些产品列表的ul
     /* @param  obj1的子对象 指的是装下这些产品列表的li
     /* @param  obj2 相应分类的那个li,当鼠标移到这个li上时，显示相应分类的产品
     */
    function displayList(obj1,s1,obj2){
        obj1.find(s1).mouseover(function(){
            var a=$(this).index();
            obj1.find(s1).css({color:'#000',borderBottom:'none'});
            $(this).css({color:'#FF6700',borderBottom:'2px solid #FF6700'});
            obj2.addClass('hide');
            obj2.eq(a).removeClass('hide');});return;}
    /**@intro  封装一个鼠标点击就显示相应产品的函数
     /* @param  obj1 指的是下一张的按钮
     /* @param  obj2 按钮点击的次数
     /* @param  obj3 指的是装下这些产品列表的ul的左偏移量
     /* @param  obj4 指的是上一张
     */
    function nextPlay(obj1,obj2,obj3,obj4) {
        obj1.click(function() {
            if(n < obj2){n++;number = -(n * 1226) + 'px';
                obj3.css('left',number);
                obj4.css('color','#888')}
            if(n == obj2) {
                $(this).css('color','rgb(223, 223, 224)');
            }}).mouseover(function() {if(n < obj2) {
            $(this).css('color','#ff6700');
            $(this).css('cursor','pointer');
            }else {$(this).css('cursor','default');}
        }).mouseout(function() {
            if(n == obj2) {$(this).css('color','rgb(223, 223, 224)');
            }else {$(this).css('color','#888')
            }})}
    var arr = [Num1=0,Num2=0,Num3=0,Num4=0];
    var number1 = 0;
    function nextPlay2(obj1,obj2,obj3,obj4) {
       obj1.click(function () {
            if(arr[index] < obj2){arr.splice(index,1,arr[index]+1);number1 = -(arr[index] * 296) + 'px';
                obj3.css('left',number1);
                obj4.eq(arr[index]).css({border:'2px solid #ff6700',background:'#fff'})
                obj4.eq(arr[index]).siblings().css({border:'none',background:'#b0b0b0'})
            }else{arr[index] = 3;}})}
    function prevPlay2(obj1,obj2,obj3,obj4) {
        $(obj1).click(function () {
            if (arr[index] > obj2) {arr.splice(index,1,arr[index]-1);number1 = -(arr[index] * 296) + 'px';
                obj3.css('left',number1);
                obj4.eq(arr[index]).css({border: '2px solid #ff6700', background: '#fff'})
                obj4.eq(arr[index]).siblings().css({border: 'none', background: '#b0b0b0'})
            } else {arr[index] = obj2;}
        })}
    /**@intro  封装一个鼠标点击就显示相应产品的函数
     /* @param  obj1 指的是上一张的按钮
     /* @param  obj2 指的是装下这些产品列表的ul的左偏移量
     /* @param  obj3 指的是下一张
     */
    function prevPlay(obj1,obj2,obj3) {
        obj1.click(function() {
            if(n > 0){n--;number = -(n * 1226) + 'px';obj2.css('left',number);obj3.css('color','#888')}
            if(n == 0) {$(this).css('color','rgb(223, 223, 224)')}
        }).mouseover(function() {
            if(obj2.css('left') != '0px') {$(this).css('color','#ff6700');$(this).css('cursor','pointer');
            }else{$(this).css('cursor','default');}
        }).mouseout(function() {
            if(obj2.css('left') != '0px') {$(this).css('color','#888')}}
            )}
    /**@intro  封装一个鼠标点击就显示相应产品的函数
     /* @param  obj1 指的是上一张的按钮
     /* @param  obj3 指的是下一张
     */
    function roud(obj1,obj2) {
        obj1.click(function () {
            $(this).css({border:'1px solid red',background:'#fff'}).siblings().css({border:'none',background:'#b0b0b0'})
            obj2.css('left','');var stop =($(this).index()) * 296;obj2.css('left','-' + stop + 'px')
        })}
})