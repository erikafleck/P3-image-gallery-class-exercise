// JavaScript Document

$(document).ready(function(){
	//switch to grid view 
	$('#grid').click(function() {
		//hide paragraphs
		$('p').hide();
		//remove existing class
		$('section').removeClass('col-md-6');
		//add new class
		$('section').addClass('col-md-3');
		
	});
	
		//switch to list view 
	$('#list').click(function() {
		//hide paragraphs
		$('p').show();
		//remove existing class
		$('section').removeClass('col-md-3');
		//add new class
		$('section').addClass('col-md-6');
		
	});
	
	
	
});