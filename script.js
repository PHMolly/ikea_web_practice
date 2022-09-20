$(function(){
    //下拉式選單
    $('nav>ul>li').on({
        mouseover:function(){
            $(this).children("div").stop().slideDown();
        },
        mouseout:function(){
            $(this).children("div").stop().slideUp();
        },
    });
    
    //套入jQuery UI的套件頁籤（Tabs)
    $( "#tabs" ).tabs();

});