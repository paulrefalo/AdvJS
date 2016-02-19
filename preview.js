    var Preview = (function() {					// define closure with Modern pattern
        var preview = {};					// define and scope assoc arrays
        var overlay = {};        
        
        preview.init = function() {  				// init called from window.onload in .html
            var pics = document.querySelectorAll("a"); 		// get the pics
            console.log(pics);          
 
            for (var i = 0; i < pics.length; i++ ) {		// for each pic define onclick as anon. function 
                pics[i].onclick = function (e) {
                  e.preventDefault();  				// stop image from being clicked as default
                  console.log(this, e);
                  displayPic(this); 				// call displayPic after .onclick event
                } 
            }                    

            overlay = document.querySelector('div.previewOverlay');	// access document for display div
            overlay.onclick = function () {  				// if event clicked then close (click anywhere)
                overlay.style.display = "none";				// close overlay
                document.querySelector('img.displayed').remove(); 	// remove the pic
            }
        }
        
        function displayPic(p){
            var pic = document.createElement('img');		// access document for the pic
            pic.setAttribute("src", p.href); 			// set attributes
            pic.className = "displayed"; 			// tag as displayed
            overlay.appendChild(pic);				// append pic
            overlay.style.display = "block"; 			// create block level style
        }
        
        return preview;						// function return
  })();