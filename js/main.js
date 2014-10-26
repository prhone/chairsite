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
  
  $(".list_arrow").on("click", function() {
//      $(".list_panel").slideToggle();
        $(this).next(".list_panel").slideToggle();
  });
  
  $(".list_panel").children("li").on("click", function(){
      //console.log($(this).text());
      var textZlisty=$(this).text();
      $(this).parent().siblings(".list_label").text(textZlisty);
      $(this).parent().slideUp();
      //$(".panel_left").children(".title").text(textZlisty);
      var numerListy = $(this).parent().parent().index();
      //console.log(numerListy);
      var cena = $(this).data("value");
      switch(numerListy) {
          case 0: {
               $(".panel_left").children(".title").text(textZlisty);
               $(".panel_right").children(".title").text(cena);
               break;  
          }
          case 1: {
               $(".panel_left").children(".color").text(textZlisty);
               $(".panel_right").children(".color").text(cena);
               break;
          }
          case 2: {
               $(".panel_left").children(".pattern").text(textZlisty);
               $(".panel_right").children(".color").text(cena);
          }
      };
      
      
  });
    $(".checkbox").on("click", function () {
//      $(this).addClass("active");
        $(this).toggleClass("active");
        var TekstTransport = $(this).next().text();
        var CenaTransport = $(this).next().data("value");

//      if($(".active").is(":visible")) {
//          $(".summary_panel").children(".panel_left").find(".transport").text(TekstTransport);
//          $(".summary_panel").children(".panel_right").find(".transport").text(CenaTransport);
//      }
//      else {
//          $(".summary_panel").children(".panel_left").find(".transport").text("");
//          $(".summary_panel").children(".panel_right").find(".transport").text("");
//      }


        if ($('.active').is(':visible')) {
            $('.summary_panel').children('.panel_left').find('.transport').text(TekstTransport);
            $('.summary_panel').children('.panel_right').find('.transport').text(CenaTransport);
        } else {
            $('.summary_panel').children('.panel_left').find('.transport').text("");
            $('.summary_panel').children('.panel_right').find('.transport').text("");
        }
    });
});


