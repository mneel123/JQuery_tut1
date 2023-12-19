$("document").ready(function(){
    $("#dialog").dialog({
        draggable : true,
        resizable : true,
        closeOnEscape: true,
        modal: false,
        autoOpen: true
    })
    $("#date").datepicker({
        showOtherMonth: true,
        changeMOnth : true,
        changeYear : true,
    })
});