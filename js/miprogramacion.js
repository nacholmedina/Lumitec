$(document).ready(function() {
    $("#productos").click(function(){
        $("#totalidad").load("sale.html");
    });

    $("#faqs").click(function(){
        $("#totalidad").load("faqs.html");
    });

    $("#tyc").click(function(){
        $("#totalidad").load("tyc.html");
    });
});