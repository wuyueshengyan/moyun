 //banner左侧内容栏
 $(function() {
     var thisTime;
     //鼠标离开左侧内容栏
     $('.cat_wrap .cat_list .float').mouseleave(function(even) {
         thisTime = setTimeout(thisMouseOut, 1000);
     });
     //鼠标点击左侧内容栏   滑动出弹层
     $('.cat_wrap .cat_list .float').mouseenter(function() {
         $(this).addClass("active").siblings().removeClass("active");
         clearTimeout(thisTime);
         var thisUB = $('.cat_wrap .cat_list .float').index($(this));
         if ($.trim($('.cat_subcont .cat_sublist').eq(thisUB).html()) != "") {
             $('.cat_subcont').addClass('active');
             $('.cat_sublist').hide();
             $('.cat_sublist').eq(thisUB).show();
         } else {
             $('.cat_subcont').removeClass('active');
         }
     });
     //函数——执行鼠标离开左侧内容栏的动作
     function thisMouseOut() {
         $('.cat_subcont').removeClass('active');
         $('.cat_wrap .cat_list .float').removeClass('active');
     }
     $('.cat_subcont').mouseenter(function() {
         clearTimeout(thisTime);
         $('.cat_subcont').addClass('active');
     });
     $('.cat_subcont').mouseleave(function() {
         $('.cat_subcont').removeClass('active');
         $('.cat_wrap .cat_list .float').removeClass('active');
     });
 });

 // 客户签约流程
 $(function() {
     $(".i-process .btn").eq(0).addClass("cur")
     var LightNum = 0,
         LightAuto = setInterval(function() {
             LightNum++;
             if (LightNum == $(".i-process .btn").length) {
                 LightNum = 0
             }
             $(".i-process .btn").eq(LightNum).addClass("cur").siblings().removeClass("cur")

         }, 3000);
 });

 $(function() {
     //行业知识切换
     $('.new_telst li').mouseover(function() {
         var liindex = $('.new_telst li').index(this);
         $(this).addClass('newon').siblings().removeClass('newon');
         $('.new-wrap div.new_lst').eq(liindex).fadeIn(150).siblings('div.new_lst').hide();
         var liWidth = $('.new_telst li').width();
         $('.newtel .new_telst p').stop(false, true).animate({ 'left': liindex * liWidth + 'px' }, 300);
     });

 });


 //波浪动画
 $(function() {
     var marqueeScroll = function(id1, id2, id3, timer) {
         var $parent = $("#" + id1);
         var $goal = $("#" + id2);
         var $closegoal = $("#" + id3);
         $closegoal.html($goal.html());

         function Marquee() {
             if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
                 $parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
             } else {
                 $parent.scrollLeft($parent.scrollLeft() + 1);
             }
         }
         setInterval(Marquee, timer);
     }

     var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
     var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);

 });
 var know_con_left_header;
 var now = 'zzdt';
 window.addEventListener('load', function() {
     know_con_left_header = document.getElementById('know_con_left_header');
     know_con_left_header.addEventListener('click', function(evt) {
         var e = evt || window.event;
         var node = document.getElementById(now + '1');
         node.style.display = 'none';
         var nav = document.getElementById(now);
         nav.style.borderTop = '4px solid #fff';
         nav.style.color = '#555';
         //显示选中
         e.target.style.borderTop = '4px solid orange';
         e.target.style.color = 'orange';
         var show_node = document.getElementById(e.target.id + '1');
         show_node.style.display = 'block';
         now = e.target.id;
     })
 })

 // 文章列表的tab切换
 $(function() {
     $('.articleList-content-left li').click(function() {
         var i = $(this).index(); //下标第一种写法
         //var i = $('tit').index(this);//下标第二种写法
         $(this).addClass('articleList-left-tabitemActive').siblings().removeClass('articleList-left-tabitemActive');
         $('.articleList-left-tabContentUl .articleList-left-tabContent').eq(i).addClass("show").siblings().removeClass("show");
     });

 });