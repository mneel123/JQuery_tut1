$("documnet").ready(function(){
    $("#date").datepicker({
        showOtherMonths : true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth:true,
        changeYear:true,
        minDate : new Date(2010,1,5),
        maxDate : new Date(2023,1,6),
        numberofMonth: 2
    });

    $("#tool").tooltip({
        track:true,
        content : "this is the place for name",
        show:{
            effect:"pulsate",
            duration:2000,
            delay:250
        },
        hide:{
            effect:"explolde",
            duration:2000
        }

    });
})