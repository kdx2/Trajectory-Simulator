   //animations
   function titleanim(){
     var traj = document.getElementById("traj");
     TweenLite.to(traj,2, {opacity:1});

     var simu = document.getElementById("simu");
     TweenLite.to(simu,2,{opacity:1});
   }
    
   
    //some globals
     var m=[], br4coords=0;

   //a check whether app runs through a server or from HDD
      function servcheck(){
        var url, examp='file', temp, answ;
        url = new String(location.href);
        temp=url.substr(0,4);
        if(temp==examp){
        console.log('file://');
        //calls a dialog box after 3 seconds 
        setTimeout("$('#myModal').modal('show');",3000);
        
        return;
        }
        return;
     }

    //real-time coordinates
     function coordinates(e){
     	var xtemp, ytemp;
     	xtemp=e.clientX;
     	ytemp=e.clientY;
     	//document.getElementById("coords").innerHTML = "Coordinates: ("+xtemp+";"+ytemp+")";
     }

    function clearcoords(){
        //document.getElementById("coords").innerHTML = "";
     }

    function saveOO(e){
    	var xo, yo, bheight;
    	xo=e.clientX;
    	yo=e.clientY;
      
      bheight=$("#ball").height();
      $("#ball").show();

    	document.getElementById("saved").innerHTML="The (0;0) = " +"("+xo+";"+yo+")";
    	document.getElementById("ball").style.left=xo+'px';
    	document.getElementById("ball").style.top=yo-bheight+'px';       
    	trajgen();
    }

    function coords4lines(e){
      var xo, yo;
      xo = e.offsetX;
      yo = e.offsetY;
      xylines(xo, yo)
   }



    function xylines(xo, yo){
      var xl, xline, yl, yline, Dx, Dy, a, b, c;
      br4coords;
      a=$("#frames").position();
      b=$("#frames").width();
      c=$("#frames").height();
      Dy=0;
      Dx=0;
   
      xline = document.getElementById("line");
      xline.width=$("#frames").innerWidth();
      xline.height=$("#frames").innerHeight();
      xl=xline.getContext("2d");
      yline = document.getElementById("line");
      yl=yline.getContext("2d");

      if(br4coords==1){
        console.log("LP");
        xl.clearRect(0,0,b,c);
        br4coords=0;
      }

      xl.beginPath();
      xl.moveTo(b,yo);
      xl.lineTo(Dx,yo);
      xl.lineWidth = 2;
      xl.strokeStyle = "lightgray";
      xl.stroke();

      yl.beginPath();
      yl.moveTo(xo,Dy);
      yl.lineTo(xo,c);
      yl.lineWidth = 2;
      yl.strokeStyle = "lightgray";
      yl.stroke(); 

      br4coords++;
    }
    //mouse-<div> interactions finish here    

    //trajectory generator, animated projectile launching and some initialization functions
    $('input[type="text"]').change(function(){
    			trajgen();
    		});

    function trajgen(){
      
    	$(".reddot").remove();
      
    	var p,x, y, xo, yo, angle, speed, gravity, time=1, isin2, angle1, n=0, i=1, a, b, c;
      m=[];
    	p=$("#ball").position();
    	xo=p.left;
    	yo=p.top;
      m.push([xo,yo]);

        speed=$("#speed").val();
        angle=$("#angle").val();
        gravity=$("#gravity").val();
    	  angle1=angle*Math.PI/180;
 
        isin2=true;

    	  while(isin2){
        x=speed*Math.cos(angle1)*time+xo;
        y=speed*Math.sin(-angle1)*time+0.5*gravity*Math.pow(time,2)+yo;

        m.push([x,y]);
        
        $("#frames").append('<div class = "reddot" style = "top: '+ y + 'px; left: '+ x +'px;"><img src="./assets/red1.png" height="15" width="15"></div>');
           
    		time++;
        isin2=isin(x, y);
        
        }
        if (isin2==false){
          $(".reddot").last().remove();
            m.pop([x,y]);
           console.log(m);
        }
      }

 
   function isin(x, y){
      var x, y, Dx, Dy, Bx, By, a, b, c, isin;
  
      a=$("#frames").position();
      b=$("#frames").width();
      c=$("#frames").height();
      Dy=a.top;
      Dx=a.left;
      By=Dy+c-$("#ball").height()/2;
      Bx=Dx+b-$("#ball").width()/2; 
        if(x>Bx||x<Dx||y<Dy||y>By){
        	isin = false;
        	return isin;
        }
        else {
        	isin=true;
        	return isin;
        }
    }

   function movement(){
    console.log('ksoadk');
      //alert(m.join('\n'));
      var xo, yo, i=0;
      var p={
        xo:$("#ball").position().left,
        yo:$("#ball").position().top
      }
      //console.log(m);
      while(i<=m.length-1){
       xo=m[i][0];
       yo=m[i][1];
      //window.alert("x= "+ xo +" y= "+yo);
       $("#ball").animate({'top': yo+ "px", 'left': xo+"px"},80);
       i++;
       //console.log(i);
       if(i==m.length-1){
        xo=p.left;
        yo=p.top;
    
        $("#ball").css({'top': yo + 'px', 'left': xo +'px'});
        
      }
     }
   }    

  //jquery stuff... sliders
   $(document).ready(function(){

     console.log('a');
      $('#fire').click(function(){
         movement();
    });

    $("#angle").hide();
    $("#speed").hide();
    $("#gravity").hide();
    $("#ball").hide();

    $("#slangle").slider({
    	min:0,
    	max:89,
    	value:15,
    	range:"min",
      animate: true,
    	slide: function(event, ui){
         $("#angle").val(ui.value); 
        trajgen();
    	}
    });

    $("#slspeed").slider({
    	min:0,
    	max:250,
    	value:50,
    	range:"min",
      animate: true,
    	slide: function(event, ui){
         $("#speed").val(ui.value); 
       trajgen();
    	}
    });

    $("#slgravity").slider({
    	min:0,
    	max:100,
    	value:10,
    	range:"min",
      animate: true,
    	slide: function(event, ui){
         $("#gravity").val(ui.value); 
        trajgen();
    	}
    });

  function toggleAlert(){
    $(".alert").toggleClass('in out'); 
    return false; // Keep close.bs.alert event from removing from DOM
      }
    $("#VC").on("click", toggleAlert);
    $('#bsalert').on('close.bs.alert', toggleAlert);
 });