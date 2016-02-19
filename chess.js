

var game =   (function() {

    var pic1 = false;

    function Bee(id) {

        var el = null;					// declare el 
        
        this.moveBee = function(k) {
            if( k == 104 ){				// h key - left
              el.setAttribute("class", "bee left");	// set CSS classes
              move(-5, 0);				// call move with change in X position and change in Y position
            }
            else if ( k == 106 ){			// j key - down
              el.setAttribute("class", "bee down");	// set CSS classes
              move(0, 5);				// call move with change in X position and change in Y position
            }   
            else if ( k == 107 ){			// k key - up
              el.setAttribute("class", "bee up");	// set CSS classes
              move(0, -5);				// call move with change in X position and change in Y position
            }  
            else if ( k == 108 ){			// l key - right
              el.setAttribute("class", "bee right");	// set CSS classes
              move(5, 0);				// call move with change in X position and change in Y position
            }                    
        };
        
        display();					// call display

	function move( dX, dY ) {
	    var curleft = el.offsetLeft;		// get current left position
	    var curtop = el.offsetTop;			// get current top position
	    el.style.left = curleft + dX + 'px';	// change left by dX
	    el.style.top = curtop + dY + 'px';		// change top by dY
	    if ( (curleft + dX) > 100 && (curleft + dX) < 315 && pic1==false) {
	      if ( (curtop + dY) > 100 && (curtop + dY) < 270 ) {
	       pic1 = true;
	       console.log("over one");
	       addThankYou();
              }
	    }
	}
	
	function addThankYou() {
	    var ty = "Thank you, John!";
	    txt = document.getElementById("ty");
	    document.getElementById("ty").style.textAlign = "center";
            document.getElementById("ty").style.color = "white";
            console.log(ty);
            document.getElementById('ty').innerHTML = ty;
	}
	
	function addText() {
	    var msg = "Move the knight over board number one for a message or click to play the games";
	    txt = document.getElementById("text");
	    document.getElementById("text").style.textAlign = "center";
            document.getElementById("text").style.color = "white";
            document.getElementById('text').innerHTML = msg;
	}
	      
        function display() {
            addText();
            el = document.createElement("div");		// access document
            el.setAttribute("class","bee");		// assign CSS class
            el.style.backgroundImage = "url('kn.png')";	// define backgroundImage
            el.style.top = 30 + "px";			// starting top position
            el.style.left = 160 + "px";			// starting left position
            container.appendChild(el);			// append obj to the container ID
        }
        // calls to create new board objects
        var board1 = new Board(100, 150, "board1.png");
        var board2 = new Board(100, 465, "board2.png");
        var board3 = new Board(100, 780, "board3.png");
        var board4 = new Board(370, 150, "board4.png");
        var board5 = new Board(370, 465, "board5.png");
        var board6 = new Board(370, 780, "board6.png");
        // calls to display each board object
        displayBoard(board1);
        displayBoard(board2);
        displayBoard(board3);
        displayBoard(board4);
        displayBoard(board5);
        displayBoard(board6);
        
        function Board(x, y, board) {	// Define constructor with object properties
      		this.x = x;
      		this.y = y;
      		this.board = board;
        }

        function displayBoard(aBoard) {			// function to set which board and where on the page values
            console.log(aBoard);
            var x = aBoard.x;
            var y = aBoard.y;
            var img = aBoard.board;
            
                
 
            b = document.createElement("div");		// access document
            b.setAttribute("class","board");

            // assign image url
            if ( img == "board1.png" ) {
                b.style.backgroundImage = "url('board1.png')";
            } else if ( img == "board2.png" ) {
                b.style.backgroundImage = "url('board2.png')";
            } else if ( img == "board3.png" ) {
                b.style.backgroundImage = "url('board3.png')";
            } else if ( img == "board4.png" ) {
                b.style.backgroundImage = "url('board4.png')";
            } else if ( img == "board5.png" ) {
                b.style.backgroundImage = "url('board5.png')";
            } else {
                b.style.backgroundImage = "url('board6.png')";
            }
            

            b.style.top = x + "px";			// starting top position
            b.style.left = y + "px";			// starting left position
            boards.appendChild(b);			// append obj to the container ID
            console.log(b);
            var url = "http://prefalo.oreillystudent.com/AdvJS/chess3.html?" + img;
            b.onclick = function() {
   		location.assign(url);
	    };
        }
        
    }
    
    window.onload = function() {
        var bee = new Bee("container");
        

        // j = 106 (down), k = 107 (up), h = 104 (left) , l = 108 (right)
        document.onkeypress = function(e) {
            bee.moveBee((typeof e.which == "number") ? e.which : e.keyCode);
        }
    };
    
  })();