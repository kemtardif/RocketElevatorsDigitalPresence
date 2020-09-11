 
 
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

    $("#deploycom").val(total);

    if (choiceCom == "1") {

        $("#unitcom").val("7,565.00");

        x3 = 0.1*7565*total;
        x3 = x3.formatMoney(2, '.', ',');
        $("#feescom").val(x3);

    
        total= (1+0.1)*7565*total;
        y3 = total.formatMoney(2, '.', ',');
        $("#totalcom").val(y3);

    } else if (choiceCom == "2") {

        $("#unitcom").val("12,345.00");
        
        x3 = 0.13*12345*total;
        x3 = x3.formatMoney(2, '.', ',');
        $("#feescom").val(x3);

    
        total= (1+0.13)*12345*total;
        y3 = total.formatMoney(2, '.', ',');
        $("#totalcom").val(y3);

    } else if (choiceCom == "3") {

        $("#unitcom").val("15,400.00");
        
        x3 = 0.16*15400*total;
        x3 = x3.formatMoney(2, '.', ',');
        $("#feescom").val(x3);

    
        total= (1+0.16)*15400*total;
        y3 = total.formatMoney(2, '.', ',');
        $("#totalcom").val(y3);
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

    $("#deploycorp").val(totalEls);

   

    if (selectCorp == "1") {

        $("#unitcorp").val("7,565.00");

        x2 = 0.1*7565*totalEls;
        x2 = x2.formatMoney(2, '.', ',');
        $("#feescorp").val(x2);

    
        totalCorp= (1+0.1)*7565*totalEls;
        y2 = totalCorp.formatMoney(2, '.', ',');
        $("#totalcorp").val(y2);
        
    } else if (selectCorp == "2") {

        $("#unitcorp").val("12,345.00");
        
        x2 = 0.13*12345*totalEls;
        x2 = x2.formatMoney(2, '.', ',');
        $("#feescorp").val(x2);

    
        totalCorp= (1+0.13)*12345*totalEls;
        y2 = totalCorp.formatMoney(2, '.', ',');
        $("#totalcorp").val(y2);

       

    } else if (selectCorp == "3") {

        $("#unitcorp").val("15,400.00");
        
        x2 = 0.16*15400*totalEls;
        x2 = x2.formatMoney(2, '.', ',');
        $("#feescorp").val(x2);

    
        totalCorp= (1+0.16)*15400*totalEls;
        y2 = totalCorp.formatMoney(2, '.', ',');
        $("#totalcorp").val(y2);
       
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
     
     
    
    var choiceRes = $("#selectRes").val();

    $("#deployres").val(cages);


    if (choiceRes == "1") {

        $("#unitres").val("7,565.00");

        x1 = 0.1*7565*cages;
        x1 = x1.formatMoney(2, '.', ',');
        $("#feesres").val(x1);

        totalRes= (1+0.1)*7565*cages; 
        y1 = totalRes.formatMoney(2, '.', ',');
        $("#totalres").val(y1);

    } else if (choiceRes == "2") {

        $("#unitres").val("12,345.00");

        x1 = 0.13*12345*cages;
        x1 = x1.formatMoney(2, '.', ',');
        $("#feesres").val(x1);

        totalRes= (1+0.13)*12345*cages; 
        y1 = totalRes.formatMoney(2, '.', ',');
        $("#totalres").val(y1);

    } else if (choiceRes == "3") {

        $("#unitres").val("15,400.00");

        x1 = 0.16*15400*cages;
        x1 = x1.formatMoney(2, '.', ',');
        $("#feesres").val(x1);

        totalRes= (1+0.16)*15400*cages; 
        y1 = totalRes.formatMoney(2, '.', ',');
        $("#totalres").val(y1);

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
         
    $("#deployhyb").val(totalEls1);

    if (selectHyb == "1") {
        
        $("#unithyb").val("7,345.00");

        y = 0.1*7565*totalEls1;
        y = y.formatMoney(2, '.', ',');
        $("#feeshyb").val(y);

        totalHyb= (1+0.1)*7565*totalEls1;
        x = totalHyb.formatMoney(2, '.', ',')
        $("#totalhyb").val(x);


    } else if (selectHyb == "2") {

        $("#unithyb").val("12,345.00");

        y = 0.13*12345*totalEls1;
        y = y.formatMoney(2, '.', ',');
        $("#feeshyb").val(y);
       

        totalHyb = (1+0.13)*12345*totalEls1;
        x = totalHyb.formatMoney(2, '.', ',');
        $("#totalhyb").val(x);

       

    } else if (selectHyb == "3") {

        $("#unithyb").val("15,400.00");

       y = 0.16*15400*totalEls1;
        y = y.formatMoney(2, '.', ',');
        $("#feeshyb").val(y);

        totalHyb= (1+0.16)*15400*totalEls1;
        x = totalHyb.formatMoney(2, '.', ',');
        $("#totalhyb").val(x);

       
    }
 }

 
$("#selecthyb").change(calculateHyb);
$("#tenantshyb").change(calculateHyb);
$("#floorhyb").change(calculateHyb);
$("#bashyb").change(calculateHyb);








 
 















