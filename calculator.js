// calculator JavaScript

$(document).ready(function(){

    var value1 = "";
    var value2 = "";
    var operator = "";
    var result = 0.0;

    $("#but0").click(function(){
        if (value1.length==0) return;
        value1 += "0";
        updateInvoerveld();
    });

    // functionality for buttons 1-9
    function handleElement(i) {
        $("#but"+i).click(function(){
            if (value1.length > 12) return;
            value1 += i;
            updateInvoerveld();
            });
    }

    for (var i=1; i<10; i++) {
        handleElement(i);
    }

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
        $(".operator").removeClass("active");
        if (!$("#butDivide").hasClass("active")) $("#butDivide").addClass("active");
        if (value1!="") {
            value2 = value1;
            value1 = "";
        }
        operator = "/";
    });

    $("#butSubtract").click(function(){
        $(".operator").removeClass("active");
        if (!$("#butSubtract").hasClass("active")) $("#butSubtract").addClass("active");
        if (value1!="") {
            value2 = value1;
            value1 = "";
        }
        operator = "-";
    });

    $("#butAdd").click(function(){
        $(".operator").removeClass("active");
        if (!$("#butAdd").hasClass("active")) $("#butAdd").addClass("active");
        if (value1!="") {
            value2 = value1;
            value1 = "";
        }
        operator = "+";
    });

    $("#butMultiply").click(function(){
        $(".operator").removeClass("active");
        if (!$("#butMultiply").hasClass("active")) $("#butMultiply").addClass("active");
        if (value1!="") {
            value2 = value1;
            value1 = "";
        }
        operator = "*";
    });

    $("#butResult").click(function(){
        if (value2 == "") return;
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
        if (value1 == "NaN") value1 = "error";
        updateInvoerveld();
    });

    $("#clearAll").click(function(){
        value1 = "0";
        value2 = "";
        operator = "";
        result = 0.0;
        updateInvoerveld();
    });

    function updateInvoerveld(){
        $(".operator").removeClass("active");
        if (value1 == "0") {
            value1 = "";
            $("#invoerveld").html("0");
            return;
            }
        $("#invoerveld").html(value1);
        
    }

});