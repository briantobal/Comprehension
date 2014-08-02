
$(document).ready(function() {
	console.log('The javascrtip loaded Brian');
	

	$( ".submit" ).click(function() {
  		$(".overlay").css("height", "+=50px");
  		$(".overlay").text("It encapsulates, or “marks up” data within HTML tags, which define the data and describe its purpose on the webpage.");
  		$(".help").fadeIn (1000);
  		$(".info").fadeIn (1000);
  		$(".related").fadeIn (1000);
      var answer = $('#content').val();
  		console.log(answer);
  		console.log("submit clicked")
	});

 
});


/* create a class that generates questions  */
  /* - Has question text - an answer - and a due date  */
  /*create an array of all the questions I have */
/* System to handle the SRS input and turn it into a new due date for the card*/
/*  System to show me cards that are due today only, looping through for the ones that have the appropriate way */ 














  
/*---------------------------------------------------------------------------------
   Notes
---------------------------------------------------------------------------------*/
/*  

	
	


	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);




 $( "form" ).submit(function(event) {
    event.preventDefault();

    	// the text that's put into the field
    var input_text = $('#text_input').val();

    todo_item++;

    	// Another variable that wraps 
    var newhtml = '<div id="todo_item_'+todo_item+'" class="todoitem" contenteditable="true">'+input_text+"</div>" ;

    	// in the target class append the nethtml variable
    $('.target').append(newhtml); 
    $('<div/>', { class: 'foo', text: 'delete', id:todo_item}).appendTo('.target'); 
    	// trigger a reset - resets the form field
    $('form').trigger("reset"); 

     $('.foo').click(function() {
        $(this).remove(); 
        $('#todo_item_'+$(this).attr('id')).remove();
      });
   });

*/ 