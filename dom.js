$("document").ready(function(){
    // $(".div1").click(function(){
    //     var x = $(".p1").html();
    //     $("#span1").text(x)
    // })
    // $(".div1").click(function(){
    //     alert($(".p1").text());
    // })
// $("#btn1").click(function(){
//     $(".p1").attr("id","p2id")
// })
//     $(".p1").click(function(){
//         alert($(".p1").attr("id"))
//     })
// $("#btn1").click(function(){
//     $(".div1").css("background-color", "orange")
// })
// $(".div1").click(function(){
//     alert($(".div1").css("background-color"));
// })
// $("#btn1").click(function(){
//     $(".div1").append("<p>This is Paragraph 2</p>")
// })
$("#btn1").click(function(){
    $(".div1").append('<img src = "images/JQ.png" height="100px" width="100px">')
})
$("#btn2").click(function(){
    $(".div1").prepend("<p>Tis is paragraph 2 using prepend</p>");
})
$("#btn3").click(function(){
    $(".div1").before("<p>Tis is paragraph 2 using before</p>");
})
$("#btn4").click(function(){
    $(".div1").after("<p>Tis is paragraph 2 using after</p>");
})
$("#btn5").click(function(){
    $(".div1").remove();
})
$("#btn6").click(function(){
    $(".div1").empty();
})
});