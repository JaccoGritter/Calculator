// calculator JavaScript

$(document).ready(function(){

    var value1 = "";
    var value2 = "";
    var calculation = "";
    var operator = "";
    var result = 0.0;

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

    $("#butCorrection").click(function(){
        if(value1 == "0") return;
        value1 = value1.substr(0, value1.length-1);
        if(value1.length == 0) value1 = "0";
        updateInvoerveld();
    });

    $("#butDivide").click(function(){
        value2 = value1;
        value1 = "";
        operator = "/";
    });

    $("#butSubtract").click(function(){
        value2 = value1;
        value1 = "";
        operator = "-";
    });

    $("#butAdd").click(function(){
        value2 = value1;
        value1 = "";
        operator = "+";
    });

    $("#butMultiply").click(function(){
        value2 = value1;
        value1 = "";
        operator = "*";
    });

    $("#butResult").click(function(){
        if (value2 == "0") return;
        var n1=parseFloat(value1);
        var n2=parseFloat(value2);
        switch (operator) {
            case "/":
              result = n2 / n1;
              break;
            case "-":
              result = n2 - n1;
              break;
            case "+":
              result = n2 + n1;
              break;
            case "*":
              result = n2 * n1;
              break;
        }

        value1 = result.toString();
        value2 = "";
        updateInvoerveld();
    });


    function updateInvoerveld(){
        if (value1 == "0") {
            value1 = "";
            $("#invoerveld").html("0");
            return;
            }
        $("#invoerveld").html(value1);
        console.log(calculation);
        
    }


});