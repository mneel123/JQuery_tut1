$("document").ready(function(){
    $("#div1").accordion({
        collapsible: true,
        icons:{
            header:"ui-icon-arrow-1-se",activeHeader:"ui-icon-arrow-1-se"},
            animate: 1000,
            event : "mouseover"
        
    });
})