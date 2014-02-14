// JavaScript Document
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		$('#b1').tap(function(){
			navigator.notification.beep();
		});//Cierre de tap b1
	}); //Cierre de deviceready
});// Cierre de ready