
  //a value interupting undergoing commands
    var flag=false;

  //Speech recognition
  if (annyang) {
   var stopper ={
    'stop': function(){
     console.log('stop');
     flag=true;
    }
  }
    annyang.addCommands(stopper);

   var angle1 = {
    'increase angle': function() {
     var qpd;
     qpd = $("#slangle").slider("option", "value");
     $( "#slangle" ).slider('option','value', qpd+5);
     $("#angle").val(qpd+5); 
      trajgen(); 
     }
    }
   
   annyang.addCommands(angle1);

   var angle2 = {
    'decrease angle': function() {
      var qpd;
     qpd = $("#slangle").slider("option", "value");
     $( "#slangle" ).slider('option','value', qpd-5);
     $("#angle").val(qpd-5); 
      trajgen(); 
     }
    }
   annyang.addCommands(angle2);

   var angleUP = {
    'angle up': function(){
      flag=false;
      var sens=0.5, currval, maxval; //sens - sensitivity, plays the role of a kind of a slider smoothness controller
       maxval=$("#slangle").slider('option', 'max');
      var myInterval = setInterval(function(){
        console.log("flag= "+flag);
        if(flag==true || currval == maxval){
            window.clearInterval(myInterval);
        };
         currval = $("#slangle").slider('option', 'value');
         $("#slangle").slider('option', 'value', currval+sens);
         $("#angle").val(currval+sens);
         trajgen();
       }, 50);
      
     }
   }
   annyang.addCommands(angleUP);
   
   var angleDOWN = {
    'angle down': function(){
      flag=false;;
      var sens=0.5, currval, maxval; 
       maxval=$("#slangle").slider('option', 'max');
      var myInterval = setInterval(function(){
        if(flag==true || currval == maxval){
            window.clearInterval(myInterval);
        };
         currval = $("#slangle").slider('option', 'value');
         $("#slangle").slider('option', 'value', currval-sens);
         $("#angle").val(currval-sens);
         trajgen();
       }, 50);
     
     }
   }
   annyang.addCommands(angleDOWN);

   var speed1 = {
    'increase speed': function() {
      var qpd;
     qpd = $("#slspeed").slider("option", "value");
     $( "#slspeed" ).slider('option','value', qpd+5);
     $("#speed").val(qpd+5); 
      trajgen();
     }
    }
   
   annyang.addCommands(speed1);

   var speed2 = {
    'decrease speed': function() {
      var qpd;
     qpd = $("#slspeed").slider("option", "value");
     $( "#slspeed" ).slider('option','value', qpd-5);
     $("#speed").val(qpd-5); 
      trajgen(); 
     }
    }
   
   annyang.addCommands(speed2);

   var speedUP = {
    'speed up': function(){
      flag=false;;
      var sens=0.5, currval, maxval;
      maxval=$("#slspeed").slider('option', 'max');
      var myInterval = setInterval(function(){
        if(flag==true || currval == maxval){
            window.clearInterval(myInterval);
        };
         currval = $("#slspeed").slider('option', 'value');
         $("#slspeed").slider('option', 'value', currval+sens);
         $("#speed").val(currval+sens);
         trajgen();
       }, 50);
      
     }
   }
   annyang.addCommands(speedUP);

   var speedDOWN = {
    'speed down': function(){
      flag=false;;
      var sens=0.5, currval, maxval;
       maxval=$("#slspeed").slider('option', 'max');
      var myInterval = setInterval(function(){
        if(flag==true || currval == maxval){
            window.clearInterval(myInterval);
        };
         currval = $("#slspeed").slider('option', 'value');
         $("#slspeed").slider('option', 'value', currval-sens);
         $("#speed").val(currval-sens);
         trajgen();
       }, 50);
      
     }
   }
   annyang.addCommands(speedDOWN);

   var gravity1 = {
    'increase gravity': function() {
      var qpd;
     qpd = $("#slgravity").slider("option", "value");
     $( "#slgravity" ).slider('option','value', qpd+5);
      $("#gravity").val(qpd+5); 
      trajgen(); 
     }
    }
   
   annyang.addCommands(gravity1);

   var gravity2 = {
    'decrease gravity': function() {
      var qpd;
     qpd = $("#slangle").slider("option", "value");
     $( "#slangle" ).slider('option','value', qpd-5);
      $("#gravity").val(qpd-5); 
      trajgen(); 
     }
    }
   
   annyang.addCommands(gravity2);

  var gravityUP = {
    'gravity up': function(){
      flag=false;;
      var sens=0.5, currval, maxval; 
      maxval=$("#slgravity").slider('option', 'max');
      var myInterval = setInterval(function(){
        if(flag==true || currval == maxval){
            window.clearInterval(myInterval);
        };
         currval = $("#slgravity").slider('option', 'value');
         $("#slgravity").slider('option', 'value', currval+sens);
         $("#gravity").val(currval+sens);
         trajgen();
       }, 50);
      
     }
   }
   annyang.addCommands(gravityUP);

   var gravityDOWN = {
    'gravity down': function(){
      flag=false;;
      var sens=0.5, currval, maxval; 
      maxval=$("#slgravity").slider('option', 'max');
      var myInterval = setInterval(function(){
        if(flag==true || currval == maxval){
            window.clearInterval(myInterval);
        };
         currval = $("#slgravity").slider('option', 'value');
         $("#slgravity").slider('option', 'value', currval-sens);
         $("#gravity").val(currval-sens);
         trajgen();
       }, 50);

     }
   }
   annyang.addCommands(gravityDOWN);

    var fire = {
    'shoot': function() {
      movement(); 
     }
    }
  annyang.addCommands(fire);

  annyang.start();
  annyang.debug();
 }
