/***********************************************
*
* Project Name: Login_Form
* Description : Resposive Login form.
* Version     : 1.0
* Author      : AMEUR AZZI .
* Author URI  : http://khamsat/user/azziameur
*
***********************************************/

$(function() {

	'use strict';

    //Adjust header hight 
    
    var myoverlay = $('.overlay');
    
    myoverlay.height($(window).height());
    
	// Toggle between Two Forms

	$('#p-log').click(function () {

		 $('.login-page').hide(100);
         $('.register-page').show(200);
	});
    
    $('#p-reg').click(function () {

         $('.register-page').hide(100);
        
		 $('.login-page').show(200);    
	});
 
    // NICE SCROLL
    
    $("html").niceScroll({
        cursorcolor:'#0095ee',   
        cursorwidth:'10px',
        cursorborder:0,
        cursorborderraduis:0      
    }); 
     $(".bg").niceScroll({
        cursorcolor:'#0095ee',   
        cursorwidth:'10px',
        cursorborder:0,
        cursorborderraduis:0   
    });
    
    
    // Show Color Option DiV When Click On The Gear
	$ (".gear-check").click(function(){
	  $(".color-option").fadeToggle()
	
	});
	
	// show color when clik on the options
	
	var colorLi = $(".color-option ul li");
	
      colorLi
	.eq(0).css("backgroundColor","#ff5555").end()
	.eq(1).css("backgroundColor","blueviolet").end()
	.eq(2).css("backgroundColor","#4281B7").end()
	.eq(3).css("backgroundColor","#009688").end()
	.eq(4).css("backgroundColor","yellowgreen").end()
	.eq(4).css("backgroundColor","brown").end()
	.eq(4).css("backgroundColor","#FF9800").end()
	.eq(5).css("backgroundColor","violet");
	
	colorLi.click(function() {
        
        $("body").css("background-color",$(this).css("backgroundColor")).css("background-image","none");
        $(".overlay").css("background-color","rgba(63, 73, 83,0)");	  
     });
    
    var divBG = $(".bg div");
        divBG
    .eq(0).css("background-image","url(img/0.jpg)").end()
    .eq(1).css("background-image","url(img/1.jpg)").end()
    .eq(2).css("background-image","url(img/2.jpg)").end()
    .eq(3).css("background-image","url(img/3.jpg)").end()
    .eq(4).css("background-image","url(img/4.jpg)").end()
    .eq(5).css("background-image","url(img/5.jpg)").end()
    .eq(6).css("background-image","url(img/7.jpg)").end()
    .eq(7).css("background-image","url(img/9.jpg)").end()
    .eq(8).css("background-image","url(img/12.jpg)").end()
    .eq(9).css("background-image","url(img/13.jpg)").end()
    .eq(10).css("background-image","url(img/14.jpg)").end()
    .eq(11).css("background-image","url(img/16.jpg)").end()
    .eq(12).css("background-image","url(img/8.jpg)");
    
    divBG.click(function() {
        
        $("body").css("background-image",$(this).css("background-image"));	  
        $(".overlay").css("background-color","rgba(63, 73, 83,0.75)");
     });

});

// Loaing Screen 

$(window).load(function() {
    $("body").css("overflow","auto");

	$(".loading-overlay, .loading-overlay .spinner").fadeOut(2000,
	function(){ 
		
	   $("this").parent().fadeOut(2000);	
    });						
});    