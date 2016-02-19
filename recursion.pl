<!doctype html>
<html>
<head>
  <title> Recursion </title>
  <meta charset="utf-8">
  <style>
    .square {
        background-color: lightblue;
        cursor: pointer;
    }
    .square p {
        padding-top: 35%;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
  </style>
  <script>  
    function Square(id, size) {
        this.id = id;
        this.size = size;

        this.display = function() {
            var el = document.createElement("div");
            el.setAttribute("id", this.id);
            el.setAttribute("class", "square");
            el.style.width = this.size + "px";
            el.style.height = this.size + "px";
            el.innerHTML = "<p>" + this.id + "</p>";
            console.log(this.id + " has size " + this.size +
                ", and is a " + this.constructor.name);
            document.getElementById("squares").appendChild(el);
        };
    }
    
    function createSquares(n) {
        var size = 10;
        if (n == 0) {
          return;
        }
        while (n >= 1) {
          var s = new Square(("s" + n), n * size);
          s.display();
          n--;
        }
    }
    
    window.onload = function() {
      createSquares(7);
    };
  </script>
</head>
<body>
<div id="squares"></div>
</body>
</html>         