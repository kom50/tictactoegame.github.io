  //     /* This project is not finish */
   
    var  symbol = "";
    var color ="";
    var fstj = document.getElementById("fst");
    var sndj = document.getElementById("snd");

     function  getSymbol()
       {
            if( k % 2 == 0){
                symbol = "X";
                color = "Blue";     
                fstj.style.color = "red";
                sndj.style.color = "blue";
                
                fstj.style.fontSize = "16px";
                sndj.style.fontSize = "18px";
            }
           else{
                symbol = "O";
                color = "red";
                
                fstj.style.color = "blue";
                sndj.style.color = "red";
                
                fstj.style.fontSize = "18px";
                sndj.style.fontSize = "16px";
           }
       }
      var fields = [];
      var boxFields;
      var divBox;
      function field()
       {
           for(let i = 0; i < boxFields.length; i++){
               fields[i] = boxFields[i].textContent;
           }
       }
      var k = 0;
      var full = 9;
      var win = "" ;
      var fstplayer = 0;
      var sndplayer = 0;
      var roundNo = 1;
      var drawm = 0;
      function Disable(bl)
       {
           for(let i = 0; i < boxFields.length; i++){
               boxFields[i].disabled = bl;
           }
       }
      var bl = true;
      var a = 0;
      divBox = document.getElementById("box");
      boxFields = divBox.getElementsByTagName("button");
           
      function fun(last)
       {         
           a = last - 1;
           getSymbol();
           boxFields[a].textContent = symbol;
           boxFields[a].disabled  = true;
           boxFields[a].style.color = color;
        field();     
       //winner
       if(fields[0] == fields[2] && fields[1] == fields[2])
          {
               //system("color 0D");
            if(fields[0] != "" && fields[1] != "" && fields[2] != "")
             {
              win = fields[1];
              WinBox(1);   
             }  
        }
       if(fields[3] == fields[4] && fields[4] == fields[5])
            {
            if(fields[3] != "" && fields[4] != "" && fields[5] != "")
            {
                win = fields[4];
                WinBox(2);   
             } 
        }
       if(fields[6] == fields[7] && fields[7] == fields[8])
           {
              if(fields[6] != "" && fields[7] != "" && fields[8] != "")
                { 
                  win = fields[7];
                  WinBox(3);   
                } 
             }
       //columns
       if(fields[0] == fields[3] && fields[3] == fields[6])
           {
              if(fields[0] != "" && fields[3] != "" && fields[6] != "")
              {
                  win = fields[3];
                   WinBox(4);   
             }    
           }
       if(fields[1] == fields[4] && fields[4] == fields[7])
           {
              if(fields[1] != "" && fields[4] != "" && fields[7] != "")
                { 
                    win = fields[4];
                  WinBox(5);   
             } 
       }
       if(fields[2] == fields[5] && fields[5] == fields[8])
           {
              if(fields[2] != "" && fields[5] != "" && fields[8] != "")
               {
                   win = fields[5];
                 WinBox(6);   
             } 
       }
       //Diagonal 1
       if(fields[0] == fields[4] && fields[4] == fields[8])
           {
              if(fields[0] != "" && fields[4] != "" && fields[8] != "")
               {
                   win = fields[4];
                 WinBox(7);   
             } 
         }
       //Diagonal 2
       if(fields[2] == fields[4] && fields[4] == fields[6])
           {
             if(fields[2] != "" && fields[4] != "" && fields[6] != "")
              { 
                  win = fields[4];
                  WinBox(8);   
             } 
       }
       // Test for win
       ++k;      
      if(win == "X")
         {
           fstplayer++;
           document.getElementById("fst").innerHTML ="1st player(X) : "+fstplayer; 
           document.getElementById("win").innerHTML=" 1st player is winner !";
           Disable(true);
           document.getElementById("btn").disabled = false;
           document.getElementById("btn1").disabled = false;
         
           nextN();  
           win = "";
           return;
       }
       else if(win == "O")
       {
           sndplayer++;
           //init();
           document.getElementById("snd").innerHTML ="2nd player(O) : "+sndplayer;
           document.getElementById("win").innerHTML=" 2nd player is winner !"; 
           Disable(true);
           document.getElementById("btn").disabled = false;
           document.getElementById("btn1").disabled = false;
           nextN();
           win = "";
           return;
       }
           
       if(k == full)
         {
            drawm ++;
            document.getElementById("win").innerHTML="match draw";          
            document.getElementById("btn").disabled = false;
            document.getElementById("btn1").disabled = false;
            document.getElementById("draw").innerHTML="Draw : "+drawm;   
            nextN();
           return;
        }   
       
   }
      
   function WinBox(a)
      {
          if( a == 1){
                    document.getElementById('b1').style.backgroundColor = "#80ffaa";
                    document.getElementById('b2').style.backgroundColor = "#80ffaa"; 
                    document.getElementById('b3').style.backgroundColor = "#80ffaa";
                  }
          if( a == 2){
            document.getElementById('b4').style.backgroundColor = "#80ffaa";  
            document.getElementById('b5').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b6').style.backgroundColor = "#80ffaa";
          }
          if( a == 3){
            document.getElementById('b7').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b8').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b9').style.backgroundColor = "#80ffaa";
          }
          if( a == 4){
            document.getElementById('b1').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b4').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b7').style.backgroundColor = "#80ffaa";
          }
          if( a == 5){
            document.getElementById('b2').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b5').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b8').style.backgroundColor = "#80ffaa";
          }
          if( a == 6){
            document.getElementById('b3').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b6').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b9').style.backgroundColor = "#80ffaa";
             }
          if( a == 7){
            document.getElementById('b1').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b5').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b9').style.backgroundColor = "#80ffaa";
          }
          if( a == 8){
            document.getElementById('b3').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b5').style.backgroundColor = "#80ffaa"; 
            document.getElementById('b7').style.backgroundColor = "#80ffaa";
        }   
      }
   function board()
       {
           document.getElementById("fst").innerHTML ="1st player(X) : 0"; 
           document.getElementById("snd").innerHTML ="2nd player(O) : 0";
           document.getElementById("win").innerHTML=""; 
           document.getElementById("total").innerHTML="Round No. : 1";   document.getElementById("draw").innerHTML="Draw : ";  
       }
   function nextN()
       {
           next();
       }
    function next()
      {
         n = arguments[0];
         if( n == 11 )
           {
             init();
             Disable(false);
             document.getElementById("btn").disabled = true;
             document.getElementById("btn1").disabled = true;
             document.getElementById("win").innerHTML="";   
             roundNo++;
             document.getElementById("total").innerHTML="Round No. : "+roundNo;
             if( roundNo % 2 != 0){
                 k = 0;
                 full = 9;
               }
               else{
               k = 1;
               full = 10;   
             }
             bl = false;
             a = 0;
          }
       if( n == 12 ){
            document.getElementById("btn").disabled = true;
            document.getElementById("btn1").disabled = true;
         
          if(fstplayer == sndplayer)  
             alert("All are equals...");
          else if(fstplayer > sndplayer)
              alert("X is winner...");
          else
              alert("O is winner...");
           
             init();
             Disable(false);
             roundNo = 1;
             fstplayer = 0;
             sndplayer = 0;
             drawm = 0;
             k = 0;
             bl = false;
             a = 0;
             board();
        }     
      }
      
   function init()
       {
           for(let i = 0; i < boxFields.length; i++){
              boxFields[i].textContent = "";
              boxFields[i].style.backgroundColor = "white"; 
           }
       }

       
    function Rand(a)
       {
          return Math.floor(Math.random() *a + 1);
         }
      