//all variables
let question1 = document.getElementById('question1');
let question2 = document.getElementById('question2');
let question3 = document.getElementById('question3');
let question4 = document.getElementById('question4');
let question5 = document.getElementById('question5');
let question6 = document.getElementById('question6');

let question7 = document.getElementById('question7');
let question8 = document.getElementById('question8');

let question9 = document.getElementById('question9');

let question10 = document.getElementById('question10');

//for closing home banner 
function closeHomeBanner() {
     document.getElementById("HomeBanner").style.display = "none";
     localStorage.setItem('HomeBanner','none');
}
let getHomeBanner = localStorage.getItem('HomeBanner');
    document.getElementById("HomeBanner").style.display = getHomeBanner;
    
  //dark mode script 
function toggler() {
let darkModeBody  = document.querySelector("*");
  darkModeBody.classList.toggle("darkMode");
  let  toggler = document.getElementById("toggler");
  toggler.classList.toggle("float");
}

//all sound get 
let win = document.getElementById("win");

let lose = document.getElementById("lose");

//alert panel
let alertPanel = document.getElementById('alertPanel');

//function for question 1 option1
function Question1Option1() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question1Option1").style.backgroundColor = "green";
 let border = question1.style.border = '3px solid #38a7f3';
 //set green bg and border 
 localStorage.setItem('correct','green');
 localStorage.setItem('border','3px solid #38a7f3');
 //smooth scrolling script 
 document.querySelector('.container').scrollTo(600,0);
 localStorage.setItem('scroll','600');
 
}

let getscroll = localStorage.getItem("scroll");
document.querySelector('.container').scrollTo(getscroll,0);


//get form local storage when answer is correct 
let getBorder = localStorage.getItem("border");
let getCorrect = localStorage.getItem("correct");
question1.style.border = getBorder;
document.getElementById("Question1Option1").style.backgroundColor = getCorrect;

//function for qustion 1 option 2
function Question1Option2() {
  document.getElementById("Question1Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question1 option 3
function Question1Option3() {
  document.getElementById("Question1Option3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question1 option 4 
  function Question1Option4(){
    document.getElementById("Question1Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  
  
//main scripted started form hare....

//question 2 
//main script started form hare .......
//function for question 1 option1
function Question2Option1() {
  document.getElementById("Question2Option1").style.backgroundColor = "green";
 let border = question2.style.border = '3px solid #38a7f3';
 //set border glow in localStorage
 localStorage.setItem("border2","3px solid #38a7f3");
 //set correct value in loacal stroage
 localStorage.setItem("correct2","green");
 
//set border glow in localStorage
 localStorage.setItem("border","3px solid #38a7f3");
 //set correct value in loacal stroage
 localStorage.setItem("correct","green");
alertPanel.innerHTML = "✅";
alertPanel.style.color = "red";

//scrolling accessability script 
document.querySelector('.container').scrollTo(900,0);
let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 let updateValue = getScrollData + 300;
localStorage.setItem('scroll',updateValue);

}

//get form local storage when answer is correct 
let getBorder2 = localStorage.getItem("border2");
let getCorrect2 = localStorage.getItem("correct2");
question2.style.border = getBorder2;
document.getElementById("Question2Option1").style.backgroundColor = getCorrect2;

//function for qustion 1 option 2
function Question2Option2() {
  document.getElementById("Question2Option2").style.backgroundColor= "red";
  alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";
}
//function for question1 option 3
function Question2Option3() {
  document.getElementById("Question2Option3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";}
//function for Question2 option 4 
  function Question2Option4(){
    document.getElementById("Question2Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";
  }

//start start ...
//function for question 3 option3
function Question3Option3() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question3Option3").style.backgroundColor = "green";
 let border = question3.style.border = '3px solid #38a7f3';
 //set green bg and border 
 localStorage.setItem('correct3','green');
 localStorage.setItem('border3','3px solid #38a7f3');
 
//scrolling accessability script 
document.querySelector('.container').scrollTo(1200,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','1200');
 
}

//get form local storage when answer is correct 
let getBorder3 = localStorage.getItem("border3");
let getCorrect3 = localStorage.getItem("correct3");
question3.style.border = getBorder3;
document.getElementById("Question3Option3").style.backgroundColor = getCorrect3;

//function for qustion 3 option 2
function Question3Option2() {
  document.getElementById("Question3Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question3 option 3
function Question3Option1() {
  document.getElementById("Question3Option1").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question3 option 4 
  function Question3Option4(){
    document.getElementById("Question3Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
//start start ...
//function for question 4 option4
function Question4Option4() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question4Option4").style.backgroundColor = "green";
 let border = question4.style.border = '3px solid #48a7f4';
 //set green bg and border 
 localStorage.setItem('correct4','green');
 localStorage.setItem('border4','3px solid #48a7f4');
 
//scrolling accessability script 
document.querySelector('.container').scrollTo(1500,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','1500');
}

//get form local storage when answer is correct 
let getBorder4 = localStorage.getItem("border4");
let getCorrect4 = localStorage.getItem("correct4");
question4.style.border = getBorder4;
document.getElementById("Question4Option4").style.backgroundColor = getCorrect4;

//function for qustion 4 option 2
function Question4Option2() {
  document.getElementById("Question4Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question4 option 4
function Question4Option1() {
  document.getElementById("Question4Option1").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question4 option 3 
  function Question4Option3(){
    document.getElementById("Question4Option3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
//start start ...
//function for question 5 option5
function Question5Option1() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question5Option1").style.backgroundColor = "green";
 let border = question5.style.border = '3px solid #58a7f5';
 //set green bg and border 
 localStorage.setItem('correct5','green');
 localStorage.setItem('border5','3px solid #58a7f5');
 
//scrolling accessability script 
document.querySelector('.container').scrollTo(1900,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','1900');
}

//get form local storage when answer is correct 
let getBorder5 = localStorage.getItem("border5");
let getCorrect5 = localStorage.getItem("correct5");

 question5.style.border = getBorder5;

document.getElementById("Question5Option1").style.backgroundColor = getCorrect5;

//function for qustion 5 option 2
function Question5Option2() {
  document.getElementById("Question5Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question5 option 5
function Question5Option3() {
  document.getElementById("Question5Option3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question5 option 1 
  function Question5Option4(){
    document.getElementById("Question5Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
  
//start start ...
//function for question 6 option6
function Question6Option1() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question6Option1").style.backgroundColor = "green";
 let border = question6.style.border = '3px solid #68a7f6';
 //set green bg and border 
 localStorage.setItem('correct6','green');
 localStorage.setItem('border6','3px solid #68a7f6');
//scrolling accessability script 
document.querySelector('.container').scrollTo(2500,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','2500');
}

//get form local storage when answer is correct 
let getBorder6 = localStorage.getItem("border6");
let getCorrect6 = localStorage.getItem("correct6");

 question6.style.border = getBorder6;

document.getElementById("Question6Option1").style.backgroundColor = getCorrect6;

//function for qustion 6 option 2
function Question6Option2() {
  document.getElementById("Question6Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question6 option 6
function Question6Option3() {
  document.getElementById("Question6Option3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question6 option 1 
  function Question6Option4(){
    document.getElementById("Question6Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
  
    //start start ...
//function for question 7 option7
function Question7Option2() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question7Option2").style.backgroundColor = "green";
 let border = question7.style.border = '3px solid #78a7f7';
 //set green bg and border 
 localStorage.setItem('correct7','green');
 localStorage.setItem('border7','3px solid #78a7f7');
 
//scrolling accessability script 
document.querySelector('.container').scrollTo(2800,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','2800');
}

//get form local storage when answer is correct 
let getBorder7 = localStorage.getItem("border7");
let getCorrect7 = localStorage.getItem("correct7");

 question7.style.border = getBorder7;

document.getElementById("Question7Option2").style.backgroundColor = getCorrect7;

//function for qustion 7 option 2
function Question7Option1() {
  document.getElementById("Question7Option1").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question7 option 7
function Question7Option3() {
  document.getElementById("Question7Option3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question7 option 1 
  function Question7Option4(){
    document.getElementById("Question7Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
     //start start ...
//function for question 8 option8
function Question8Option1() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question8Option1").style.backgroundColor = "green";
 let border = question8.style.border = '3px solid #88a8f8';
 //set green bg and border 
 localStorage.setItem('correct8','green');
 localStorage.setItem('border8','3px solid #88a8f8');
 
//scrolling accessability script 
document.querySelector('.container').scrollTo(3200,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','3200');

}

//get form local storage when answer is correct 
let getBorder8 = localStorage.getItem("border8");
let getCorrect8 = localStorage.getItem("correct8");

 question8.style.border = getBorder8;

document.getElementById("Question8Option1").style.backgroundColor = getCorrect8;

//function for qustion 8 option 2
function Question8Option2() {
  document.getElementById("Question8Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question8 option 8
function Question8Option3() {
  document.getElementById("Q8O3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question8 option 1 
  function Question8Option4(){
    document.getElementById("Question8Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
  
  
     //start start ...
//function for question 9 option9
function Question9Option4() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question9Option4").style.backgroundColor = "green";
 let border = question9.style.border = '3px solid #99a9f9';
 //set green bg and border 
 localStorage.setItem('correct9','green');
 localStorage.setItem('border9','3px solid #99a9f9');
 
//scrolling accessability script 
document.querySelector('.container').scrollTo(3600,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','3600');
}

//get form local storage when answer is correct 
let getBorder9 = localStorage.getItem("border9");
let getCorrect9 = localStorage.getItem("correct9");

 question9.style.border = getBorder9;

document.getElementById("Question9Option4").style.backgroundColor = getCorrect9;

//function for qustion 9 option 2
function Question9Option2() {
  document.getElementById("Question9Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question9 option 9
function Question9Option3() {
  document.getElementById("Question9Option3").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question9 option 1 
  function Question9Option1(){
    document.getElementById("Question9Option1").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
     //start start ...
//function for question 10 option10
function Question10Option3() {
alertPanel.innerHTML = "✅";
alertPanel.style.color = "green";
  document.getElementById("Question10Option3").style.backgroundColor = "green";
 let border = question10.style.border = '3px solid #99a9f9';
 //set green bg and border 
 localStorage.setItem('correct10','green');
 localStorage.setItem('border10','3px solid #99a9f9');
 
//scrolling accessability script 
document.querySelector('.container').scrollTo(4000,0);
//let getScrollData =JSON.parse(localStorage.getItem('scroll'));
 //let updateValue = getScrollData + 300;
localStorage.setItem('scroll','4000');
}

//get form local storage when answer is correct 
let getBorder10 = localStorage.getItem("border10");
let getCorrect10 = localStorage.getItem("correct10");

 question10.style.border = getBorder10;

document.getElementById("Question10Option3").style.backgroundColor = getCorrect10;

//function for qustion 10 option 2
function Question10Option2() {
  document.getElementById("Question10Option2").style.backgroundColor= "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}
//function for question10 option 10
function Question10Option1() {
  document.getElementById("Question10Option1").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

}

//function for Question10 option 1 
  function Question10Option4(){
    document.getElementById("Question10Option4").style.backgroundColor = "red";
alertPanel.innerHTML = "❌";
alertPanel.style.color = "red";

  }
  //end end end .....
  
 