/*for(var i=0 ;i<7; i++)
{
   
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML;
    makesound(buttoninnerhtml);
    buttonAnimations(buttoninnerhtml);
    
    
   });
}
document.addEventListener("keypress",function(event){
   makesound(event.key)
});
function makesound(key){
      switch (key) {
         case "w":
           var tom1 = new Audio("sounds/tom1.mp3");
           tom1.play();
          
           break;
         case "a":
           var tom2 = new Audio("sounds/tom2.mp3");
           tom2.play();
           break;
         case "s":
              var tom3 = new Audio("sounds/tom3.mp3");
              tom3.play();
              break;
           case "d":
                 var tom4 = new Audio("sounds/tom4.mp3");
                 tom4.play();
                 break;
           case "j":
              var tom5 = new Audio("sounds/tom5.mp3");
              tom5.play();
               break;
           case "k":
               var tom6 = new Audio("sounds/tom6.mp3");
              tom6.play();
              break;
           case "l":
                 var tom7 = new Audio("sounds/tom7.mp3");
                 tom7.play();
                  break;
      
         default:
            console.log(1);
            break;

   }
   function buttonAnimations(cuurentkey){

      document.querySelector("."+currentkey);
   }

}*/
function openWin() {
   window.open("next.html");
 }

