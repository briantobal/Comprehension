$(document).ready(function() {
  console.log('Brian, the javascript is loaded');

//create a class that generates questions
//has question text, an answer, and a date
  function quiz(date, question, answer ) {
    this.date = date;
    this.question = question; 
    this.answer = answer;
  }

 /*An array of all the questions I have */
  var family = new Array();
    family[0] = new quiz (24, "?????", "!!!!1!"); 
    family[1] = new quiz (24, "Why? is it said that HTML is a markup language, not a programming language?", "Its encapsulates, or “marks up” data within HTML tags, which define the data and describe its purpose on the webpage."); 
    family[2] = new quiz (24, "where is the white-o-house?", "D.C."); 

  // Next Button functionality 

  var current_question = 0;
  var d = new Date();
  var n = (d.getDate());
    console.log(n);
  var sss = family[current_question].date;
    console.log(sss);

  // create a date variable for today
  var result = moment().format('YYYY-MM-DD');
  console.log(result);

// Start button functioality. when you click the start button, if the current question is 0 then it will fade in all the elements.  
  $("#start").click(question_start);
  function question_start(){
    if (current_question == 0){
        $("#questionText").text(family[current_question].question);
        $(".submit").fadeIn (1000);
        console.log("start");
        $("#next").fadeIn(1000);
        $("#start").fadeOut(10);
        $("#content").css("display", "block");
        $("#content").fadeIn(1000);
        todaysQuestions()
    }
    else console.log("not start")
    }

/*
for(var a=0; a<family.length;a++){
    console.log(family[current_question].question);
  }
*/


// This function tells you whether the date on the question object is today. 
  function todaysQuestions(){
    if (sss == n){
      console.log("is today");
    }
    else console.log("not today");
    }


  $("#next").click(show_next_question);
    function show_next_question() {
      current_question++;
      if (current_question<family.length){
        $("#questionText").text(family[current_question].question);
        $(".overlay").css("height", "0px");
        $(".overlay").text(" ");
        $(".submit").fadeIn (1000);
      }
      else alert("it's over buddy!")
      }


  $( ".submit" ).click(function() {
    $(".overlay").css("height", "+=50px");
    $(".overlay").text(family[current_question].answer);
    $(".submit").fadeOut (0);
    $(".rating").fadeIn(1200);
    $(".help").fadeIn (1000);
    $(".info").fadeIn (1000);
    $(".related").fadeIn (1000);
    var answer = $('#content').val();
    console.log(answer);
    console.log("submit clicked")
  });


// Easy, medium, and hard buttons

$("#hard").click(dateItD);
      function dateItD(d){
      var d = new Date();
      d.setDate(d.getDate() + 2);
      console.log("d is " +d+ "");
    var x = family[current_question];
      x.date = d;
      console.log(x);
      $(".rating").fadeOut (100);
      show_next_question();
    }

$("#medium").click(dateItC);
      function dateItC(c){
      var c = new Date();
      c.setDate(c.getDate() + 10);
      console.log("c is " +c+ "");
    var x = family[current_question];
      x.date = c;
      console.log(x);
      $(".rating").fadeOut (100);
      show_next_question();
    }

$("#easy").click(dateItB);
      function dateItB(b){
      var b = new Date();
      b.setDate(b.getDate() + 20);
      console.log("b is " +b+ "");
    var x = family[current_question];
      x.date = b;
      console.log(x);
      $(".rating").fadeOut (100);
      show_next_question();
    }
});








  /*
  var q1 = new quiz (1,"Who is the pres-o-dent?","barak obama")
    sayQuestion = function(p) {
      console.log(q1.question);
  }

  sayQuestion(q1);
  */



  /*for(var a=0; a<family.length;a++){
    console.log(family[current_question].question);
  }*/

  // create a date variable for today
  //var result = moment().format('YYYY-MM-DD');




/* 

  $("#time").click(function(d) {
    var d = new Date();
      d.setDate(d.getDate() + 20);
      console.log("d is " +d+ "");
    var x = family[1]
      x.date = "2012-09-11"
      console.log(family[1]);
  });


  $("#change").click(function(){
    console.log(family[1]);
  });

*/




/* System to handle the SRS input and turn it into a new due date for the card*/
/*  System to show me cards that are due today only, looping through for the ones that have the appropriate way */ 

//var d = new Date();
//d.setDate(d.getDate() + 20);
//document.getElementById(".date").innerHTML = d;




