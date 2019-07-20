var number = 50;

    
    var intervalId;

    
    $("#stop").on("click", stop);

    
    $("#resume").on("click", run);

   
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    
    function decrement() {

      
      number--;

      
      $("#timer").html("<h2>" + number + "</h2>");


     
      if (number === 0) {

        
        stop();

        
        alert("Time Up!");
        
        message001.innerHTML = "End of Quiz.";
        question001.innerHTML = "";
        option001.innerHTML = "";
        option002.innerHTML = "";
        option003.innerHTML = "";
        option004.innerHTML = "";
        next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
        answer001.innerHTML = "";
      }
    }

    
    function stop() {

      
      clearInterval(intervalId);
    }

    
    run();
