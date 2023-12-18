var language = ["HTML","CSS","JAVASCRIPT","PHP","PYTHON","C","C++","RUBY","BASIC"]

$("document").ready(function(){
    $("#input").autocomplete({
        source : language
    },{
        delay : 2000,
        minLength : 3,
        autoFocus: false
    })
});