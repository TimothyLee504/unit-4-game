$(document).ready(function(){
    var random=Math.floor(Math.random()*101+19);

    $("#randomNumber").text(random);

    var gem1 = Math.floor(Math.random()*11+1);
    var gem2 = Math.floor(Math.random()*11+1);
    var gem3 = Math.floor(Math.random()*11+1);
    var gem4 = Math.floor(Math.random()*11+1);

    var userTotal = 0
    var wins = 0
    var losses = 0

    $("#numberOfWins").text(wins);
    $("#numberOfLosses").text(losses)

    function reset(){
        random=Math.floor(Math.random()*101+19);
      
      $('#randomNumber').text(random);

      gem1= Math.floor(Math.random()*11+1);
      gem2= Math.floor(Math.random()*11+1);
      gem3= Math.floor(Math.random()*11+1);
      gem4= Math.floor(Math.random()*11+1);
      userTotal= 0;

      $('#finalTotal').text(userTotal);
      }
      function win(){
          wins++;
          $("#numberOfWins").text(wins);
          reset ()
      } 
      function lose(){
          losses++;
          $("#numberOfLosses").text(losses);
          reset ()
      }
      $("#one").on("click", function(){
          userTotal = userTotal + gem1;
          $("#finalTotal").text(userTotal);
          if(userTotal===random){
              win()
          }
          else if(userTotal > random){
              lose()
          }
      })
        $("#one").on("click", function(){
        userTotal = userTotal + gem1;
        $("#finalTotal").text(userTotal);
        if(userTotal===random){
            win()
        }
        else if(userTotal > random){
            lose()
            }
        })
        $("#two").on("click", function(){
            userTotal = userTotal + gem2;
            $("#finalTotal").text(userTotal);
            if(userTotal===random){
                win()
            }
            else if(userTotal > random){
                lose()
            }
        })
        $("#three").on("click", function(){
            userTotal = userTotal + gem3;
            $("#finalTotal").text(userTotal);
            if(userTotal===random){
                win()
            }
            else if(userTotal > random){
                lose()
            }
        })
        $("#four").on("click", function(){
            userTotal = userTotal + gem4;
            $("#finalTotal").text(userTotal);
            if(userTotal===random){
                win()
            }
            else if(userTotal > random){
                lose()
            }
        })
    
    }
)