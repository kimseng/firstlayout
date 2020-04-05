/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  $("button").click(function(){
      
      /* this if else to change the text in the button */
      if($("button").text() == "☰"){
       $("button").text("x");
      }else{
        $("button").text("☰");
      }
    
    /* this function toggle the visibility of our "li" elements */
    $("li").toggle("slow");
  });

  $(window).resize(function(){
    var $theWindowSize=$(this).width();
    if($theWindowSize>800){
     /* this function toggle the visibility of our "li" elements */
     $("li").text("show");
    }
  });
  
});