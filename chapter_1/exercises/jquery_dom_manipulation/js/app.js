
$(document).ready(function(){

    $('#edit-header').text('The jQuery Challenge');
   
    $('#para1').css('font-size', '30px');
    $('#para1').css('font-weight', 'bold');

    $('.box1').css({"background-color": 'green'});
   
    $('.box2').addClass('spin');

    $('#button1').click(function(){
        alert('You clicked my button')
    })

    
    $('.box3').hover(function(){
            $(this).css("background-color", 'green');
        });


        $('.box4').animate({left:"80%"}, "slow");
        $('.box4').animate({top:"60%"}, "slow");
    })
        
      


//Write your jQuery code in this file