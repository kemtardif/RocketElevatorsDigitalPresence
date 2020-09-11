 
 
 // SELECT BETWEEN TYPES OF BUILDINGS ////////////////////////

 $("#residential, #commercial, #corporate, #hybrid").hide();

 function show() {

    var value = $("#typeSelect").val();

    if( value == "0"){

        $("#commercial, #corporate, #hybrid").hide();
        $("#residential").show(500);

    } else if (value == "1") {

        $("#residential, #corporate, #hybrid").hide();
        $("#commercial").show(500);

    } else if ( value == "2") {

        $("#residential, #commercial, #hybrid").hide();
        $("#corporate").show(500);

    } else if (value == "3") {

        $("#residential, #commercial, #corporate").hide();
        $("#hybrid").show(500);

    } else {

        $("#residential, #commercial, #corporate, #hybrid").hide();

    }
 }

 $("#typeSelect").change(show);

 // MAKE COST TAB APPEAR //////////////////////////////////

 $("#costres, #costcom, #costcorp, #costhyb").hide();

 $("#selectRes").change( function() {
     $("#costres").show();
 });

 $("#selectcom").change( function() {
    $("#costcom").show();
});

$("#selectcorp").change( function() {
    $("#costcorp").show();
});

$("#selecthyb").change( function() {
    $("#costhyb").show();
});

 //COMMERCIAL CALCULATIONS //////////////////////////////

 function calculateCom() {
    var choiceCom = $("#selectcom").val();
    var total = $("#deployed").val();

    $("#deploycom").html(total.toString());

    if (choiceCom == "1") {

        $("#unitcom").html("7,565.00");

        x3 = 0.1*7565*total;
        x3 = x3.formatMoney(2, '.', ',');
        $("#feescom").html(x3);

    
        total= (1+0.1)*7565*total;
        y3 = total.formatMoney(2, '.', ',');
        $("#totalcom").html(y3);

    } else if (choiceCom == "2") {

        $("#unitcom").html("12,345.00");
        
        x3 = 0.13*12345*total;
        x3 = x3.formatMoney(2, '.', ',');
        $("#feescom").html(x3);

    
        total= (1+0.13)*12345*total;
        y3 = total.formatMoney(2, '.', ',');
        $("#totalcom").html(y3);

    } else if (choiceCom == "3") {

        $("#unitcom").html("15,400.00");
        
        x3 = 0.16*15400*total;
        x3 = x3.formatMoney(2, '.', ',');
        $("#feescom").html(x3);

    
        total= (1+0.16)*15400*total;
        y3 = total.formatMoney(2, '.', ',');
        $("#totalcom").html(y3);
    }
 }

$("#selectcom").change(calculateCom);
$("#deployed").change(calculateCom);


//CORPORATE CALCULATIONS ////////////////////////////




function calculateCorp() {
    var selectCorp = $("#selectcorp").val();
    var tenantsCorp = $("#tenants").val();
    var basementsCorp = $("#bascorp").val();
    var floorsCorp = $("#floorcorp").val();

    f = Number(floorsCorp);
    b = Number(basementsCorp);

    stories = f + b;

    totalTenants = stories*tenantsCorp;

    elevatorsRequired = Math.ceil(totalTenants/1000);

    columnsRequired = Math.ceil(stories/20);

    elevatorPerColumn = Math.ceil(elevatorsRequired/columnsRequired);

    totalEls = elevatorPerColumn*columnsRequired;

    $("#deploycorp").html(totalEls);

   

    if (selectCorp == "1") {

        $("#unitcorp").html("7,565.00");

        x2 = 0.1*7565*totalEls;
        x2 = x2.formatMoney(2, '.', ',');
        $("#feescorp").html(x2);

    
        totalCorp= (1+0.1)*7565*totalEls;
        y2 = totalCorp.formatMoney(2, '.', ',');
        $("#totalcorp").html(y2);
        
    } else if (selectCorp == "2") {

        $("#unitcorp").html("12,345.00");
        
        x2 = 0.13*12345*totalEls;
        x2 = x2.formatMoney(2, '.', ',');
        $("#feescorp").html(x2);

    
        totalCorp= (1+0.13)*12345*totalEls;
        y2 = totalCorp.formatMoney(2, '.', ',');
        $("#totalcorp").html(y2);

       

    } else if (selectCorp == "3") {

        $("#unitcorp").html("15,400.00");
        
        x2 = 0.16*15400*totalEls;
        x2 = x2.formatMoney(2, '.', ',');
        $("#feescorp").html(x2);

    
        totalCorp= (1+0.16)*15400*totalEls;
        y2 = totalCorp.formatMoney(2, '.', ',');
        $("#totalcorp").html(y2);
       
    }
 }

$("#selectcorp").change(calculateCorp);
$("#tenants").change(calculateCorp);
$("#floorcorp").change(calculateCorp);
$("#bascorp").change(calculateCorp);



//RESIDENTIAL CALCULATIONS //////////////////////////////////////////////



function calculateRes() {

    var apptsRes = $("#apptsres").val();
    var floorsRes = $("#floorsres").val();
    var basesRes = $("#basementsres").val();
    
    avgDoors = Math.ceil(apptsRes/floorsRes);

    reqShafts = Math.ceil(avgDoors/6);

    fl = Number(floorsRes);
    bs = Number(basesRes);
    st = fl + bs;

    columns = 1 + Math.floor(st/20);

     cages = reqShafts*columns;

     if(isNaN(cages)) {
         cages =0;
     } 
     
     
    
    var choiceRes = $("#selectRes").val();

    $("#deployres").html(cages.toString());


    if (choiceRes == "1") {

        $("#unitres").html("7,565.00");

        x1 = 0.1*7565*cages;
        x1 = x1.formatMoney(2, '.', ',');
        $("#feesres").html(x1);

        totalRes= (1+0.1)*7565*cages; 
        y1 = totalRes.formatMoney(2, '.', ',');
        $("#totalres").html(y1.toString());

    } else if (choiceRes == "2") {

        $("#unitres").html("12,345.00");

        x1 = 0.13*12345*cages;
        x1 = x1.formatMoney(2, '.', ',');
        $("#feesres").html(x1);

        totalRes= (1+0.13)*12345*cages; 
        y1 = totalRes.formatMoney(2, '.', ',');
        $("#totalres").html(y1);

    } else if (choiceRes == "3") {

        $("#unitres").html("15,400.00");

        x1 = 0.16*15400*cages;
        x1 = x1.formatMoney(2, '.', ',');
        $("#feesres").html(x1);

        totalRes= (1+0.16)*15400*cages; 
        y1 = totalRes.formatMoney(2, '.', ',');
        $("#totalres").html(y1);

    }

}

$("#apptsres").change(calculateRes);
$("#floorsres").change(calculateRes);
$("#selectRes").change(calculateRes);

//HYBRID CALCULATIONS ////////////////////////////////////

function calculateHyb() {
    var selectHyb = $("#selecthyb").val();
    var tenantsHyb = $("#tenantshyb").val();
    var basementsHyb = $("#bashyb").val();
    var floorsHyb = $("#floorhyb").val();
    

    f1 = Number(floorsHyb);
    b1 = Number(basementsHyb);

    stories1 = f1 + b1;

    totalTenants1 = stories1*tenantsHyb;

    elevatorsRequired1 = Math.ceil(totalTenants1/1000);

    columnsRequired1 = Math.ceil(stories1/20);

    elevatorPerColumn1 = Math.ceil(elevatorsRequired1/columnsRequired1);

    totalEls1 = elevatorPerColumn1*columnsRequired1;
        
    $("#deployhyb").html(totalEls1);

    if (selectHyb == "1") {
        
        $("#unithyb").html("7,345.00");

        y = 0.1*7565*totalEls1;
        y = y.formatMoney(2, '.', ',');
        $("#feeshyb").html(y);

        totalHyb= (1+0.1)*7565*totalEls1;
        x = totalHyb.formatMoney(2, '.', ',')
        $("#totalhyb").html(x);


    } else if (selectHyb == "2") {

        $("#unithyb").html("12,345.00");

        y = 0.13*12345*totalEls1;
        y = y.formatMoney(2, '.', ',');
        $("#feeshyb").html(y);
       

        totalHyb = (1+0.13)*12345*totalEls1;
        x = totalHyb.formatMoney(2, '.', ',');
        $("#totalhyb").html(x);

       

    } else if (selectHyb == "3") {

        $("#unithyb").html("15,400.00");

       y = 0.16*15400*totalEls1;
        y = y.formatMoney(2, '.', ',');
        $("#feeshyb").html(y);

        totalHyb= (1+0.16)*15400*totalEls1;
        x = totalHyb.formatMoney(2, '.', ',');
        $("#totalhyb").html(x);

       
    }
 }

 
$("#selecthyb").change(calculateHyb);
$("#tenantshyb").change(calculateHyb);
$("#floorhyb").change(calculateHyb);
$("#bashyb").change(calculateHyb);








 
 















