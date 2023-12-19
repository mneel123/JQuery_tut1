$("document").ready(function(){
    $("#img1").resizable({
        // animate: true,
        // containment : "parent",
        maxHeight : 400,
        maxWidth : 400,
        minHeight: 150,
        minWidth:150,
        //ghost:true,
        aspectRation: 16/9
    })
})