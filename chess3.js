
	function closeButton() {
	   var url = "http://prefalo.oreillystudent.com/AdvJS/chess2.html";
           location.assign(url);
        }  
	  
        function getLocation(lo) {
          var z = lo;
          var result;
          console.log("Incoming loc is: " + z);
          if ( z == "board1.png" ) {
            result = "http://www.chess.com/emboard?id=2575890";
          } else if ( z == "board2.png" ) {
            result = "http://www.chess.com/emboard?id=2575884";
          } else if ( z == "board3.png" ) {
            result = "http://www.chess.com/emboard?id=2575892";
          } else if ( z == "board4.png" ) {
            result = "http://www.chess.com/emboard?id=2575900";
          } else if ( z == "board5.png" ) {
            result = "http://www.chess.com/emboard?id=2575902";
          } else {
            result = "http://www.chess.com/emboard?id=2269314";			//  board 6 is the default 
          }
        
          return result;
          
        };

        
        window.onload = function() {
          var x = window.location.href;				// get board clicked from window.location
          // $(".fade").hide(0).delay(500).fadeIn(5000)
          var splits = x.split('?');				// parse
          console.log(splits[1]);
          var loc = getLocation(splits[1]);			// get iframe url
          var iframe = document.createElement('iframe');	// create iframe and attributes
          console.log(loc);
          iframe.src = loc;
          iframe.height = "464";
          iframe.width = "620";
          iframe.allowtransparency="true";
          iframe.border = "0";
          iframe.frameBorder = "0";
          iframe.setAttribute("class", "fade");
          document.getElementById("myframe").appendChild(iframe); // add iframe to the page
        };
                 