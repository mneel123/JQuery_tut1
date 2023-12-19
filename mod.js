$("document").ready(function(){
    $("#dialog").dialog({
        draggable:true,
        resizable:true,
        closeOnEscape:true,
        modal:false,
        autoOpen:true,
        height:250,
        width:250
    })

    $("#btn1").click(function(){
        //alert("Get is Working")
        var modal = $("#dialog").dialog("option","modal")
        alert(modal)
    })
    $("#btn2").click(function(){
        //alert("set is Working")
        $("#dialog").dialog("option","modal",true)
    })
})