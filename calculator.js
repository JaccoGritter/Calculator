// calculator JavaScript

$(document).ready(function(){

    var value1 = "";
    var value2 = "";

    $("#but0").click(function(){
        if (value1.length==0) return;
        value1 += "0";
        updateInvoerveld();
    });

    $("#but1").click(function(){
        value1 += "1";
        updateInvoerveld();
    });

    $("#but2").click(function(){
        value1 += "2";
        updateInvoerveld();
    });

    $("#but3").click(function(){
        value1 += "3";
        updateInvoerveld();
    });

    $("#but4").click(function(){
        value1 += "4";
        updateInvoerveld();
    });

    $("#but5").click(function(){
        value1 += "5";
        updateInvoerveld();
    });

    $("#but6").click(function(){
        value1 += "6";
        updateInvoerveld();
    });

    $("#but7").click(function(){
        value1 += "7";
        updateInvoerveld();
    });

    $("#but8").click(function(){
        value1 += "8";
        updateInvoerveld();
    });

    $("#but9").click(function(){
        value1 += "9";
        updateInvoerveld();
    });

    $("#butPeriod").click(function(){
        if(value1.includes(".")) return;
        if(value1.length==0) value1="0";
        value1 += ".";
        updateInvoerveld();
    });

    function updateInvoerveld(){
        $("#invoerveld").html(value1);
    }


});