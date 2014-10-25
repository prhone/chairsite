/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
//    $("#menu").children("li").hover(function(){
//        $(this).children(".secondLevel").slideToggle();
//    });
//    $(".box_images").children(".box").hover(function(){
//        $(this).children(".white_bell").slideToggle();
//    });
    function slide(parent, children, thischildren){
    $(parent).children(children).hover(function(){
        $(this).children(thischildren).slideToggle();
    });
}
slide("#menu","li",".secondLevel");
slide(".box_images",".box",".white_bell");

  $('.slider1').bxSlider({
    slideWidth: 200,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10
  });
});


