// function fun1(){
// document.getElementById('img1').style.width="500px"
// }



$("document").ready(function(){
    // $("#img1").mouseenter(function(){
    //     $("#img1").css('width','500px');
    // });
    // $("#img1").mouseleave(function(){
    //     $("#img1").css('width','250px');
    // })

    $("#img1").hover(fun1,fun2)
    function fun1(){
        $("#img1").css('width','500px');
    }
    function fun2(){
        $("#img1").css('width','250px');
    }
    
});