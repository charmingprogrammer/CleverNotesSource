//all variables 
let divElement = document.createElement('div');
let divElement2 = document.createElement('div');
let divElement3 = document.createElement('div');
let divElement4 = document.createElement('div');
let divElement5 = document.createElement('div');
let divElement6 = document.createElement('div');
let divElement7 = document.createElement('div');
let divElement8 = document.createElement('div');
let divElement9 = document.createElement('div');
let divElement10 = document.createElement('div');
let divElement11 = document.createElement('div');
let divElement12 = document.createElement('div');
let divElement13 = document.createElement('div');
//dark mode script 
function  darkMode() {
  let darkMode = document.getElementById('darkMode');
  let darkBody  = document.querySelector('*');
darkBody.classList.toggle('darkMode');

  }

let ContentContainer = document.querySelector(".ContentContainer");
function sideOpener(){
  document.querySelector('.SideNavigation').style.left=0;
document.querySelector('.title').style.position= "relative";
}
function closeSideNavigation(){
  document.querySelector('.SideNavigation').style.left="-100%";
document.querySelector('.title').style.position= "sticky";
  
}
//show default 
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 1.MATTER  IN OUR SURROUNDING";
  //notes making function 
  //create new div
 divElement.className = "box";
 divElement.id = "box1";
   divElement.innerHTML = '<h2>MATTER</h2>  <p>anything which occupy space and have a mass is called matter.<br><br><b>Examples=></b>  air ,water, test, smell ,etc.</p>';
  ContentContainer.appendChild(divElement);
  //div element 2 created 
divElement2.className = "box";
 divElement2.id = "box2";
   divElement2.innerHTML = ' <h2>Physical nature of matter</h2>  <p>(1)Matter is made up of particle <br>(2) The particles of matter are very small. </p>';
  
  ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
  
divElement3.className = "box";
 divElement3.id = "box3";
 
 
   divElement3.innerHTML = ' <h2>Charecterstics of  Particles of matter.</h2>  <p>(1)Particles of matter have space between them.<br><br>(2)  particles of matter are continuously moving. <br><br>(3) particles of matter attract each other. <br><br>(4)As the temperature rises particles move faster. <br><br>(5)increase in the temperature the kinetic energy of the particle also increase.</p>';
  
  ContentContainer.appendChild(divElement3);
  
 
  
 //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
 
 
   divElement4.innerHTML = '  <h2>Diffusion</h2>  <p>The intermixing of particles of two different types of matter on their own is called diffusion.<br><br><b> On heating diffusion becomes faster.</b> </p>';
  
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 
 
   divElement5.innerHTML = ' <h2>State of Matter.</h2>  <p> On the basis of physical state  all the matter can be classified into three group.<br><br>(1)  Liquid . <br>(2) Solid . <br>(3)  Gases.</p>';
  
  ContentContainer.appendChild(divElement5);
  
  //div element 7 created 
divElement7.className = "box";
 divElement7.id = "box7";
 
 
   divElement7.innerHTML = ' <h2>Properties of Liquid</h2>  <p>(1) liquid have a fixed volume but they no fixed shape. <br><br>(2)  The liquid and solid cannot be Compressed much.  <br><br>(3)  liquid have moderate to high  densities.  <br><br>(4)  liquid do not fill their container completely.  <br><br>(5)  liquid generally flow easily. <br><br> </p>';
  
  ContentContainer.appendChild(divElement7);
  
  //div element 8 created 
divElement8.className = "box";
 divElement8.id = "box8";
 
 
   divElement8.innerHTML = '<h2>Properties of Solid</h2>  <p>(1) Solid have fixed shape and fixed volume. <br><br>(2)  solid cannot be compressed much. <br><br>(3) solid have high densities. <br><br>(4)  solid do not fill their container completely.<br><br> (5)  solid can not be flow.<br><br></p>';
  
  ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 
 
   divElement9.innerHTML = ' <h2>Properties of Gases</h2>  <p>(1)  Gases have neither a fixed shape and nor fixed volume. <br><br>(2)  Gases can be compressed easily. <br><br>(3)  Gases have very low densities. <br><br>(4)  Gases fill their container completely. <br><br>(5) Gases flow easily. <br><br>The gases show the property of diffusion very fast into other gases because of their high speed of particles and large space present in theme.<br><br><b>Effect on change of temperature.</b><br><br>when the temperature of a solid is increased the kinetic energy of the particles increase due to increase of kinetic energy.</p>';
  
  ContentContainer.appendChild(divElement9);
  
//div element 13 created 
divElement13.className = "box";
 divElement13.id = "box13";
   divElement13.innerHTML = '<h2>Learn More</h2><p><b>what is the melting point </b><br><br>The temperature. at which a solid melts to become a liquid at the atmospheric pressure is called its melting point.<br><br><b> the melting point of ice is (273.16 K. ) </b><br><br>The case of solid the space between the the constituent particles and kinetic energy of the particles are minimum in liquid it is intermediate and in gases it is maximum. <br><br><b>what is the fusion </b><br><br>The process of melting that is change of solid state into liquid state is known as fusion. <br><br>The amount of heat energy that is needed to convert 1 kg of solid into liquid at atmospheric pressure at its melting point is known as the <br>latent heat of the fusion </b>so particles in water at 0 degree Celsius and (273 K) have more energy as compared to particles in ice at same temperature. <br><br><b>The boiling point of water is (100• C) </b></p>';
  ContentContainer.appendChild(divElement13);
  
  
  //div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor="#00800084";
   divElement10.innerHTML = '<h2><a style="color:white;" to href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement10);
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = '#00800084';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#" onclick = "chapter2();">👉</a> </h2>';
  ContentContainer.appendChild(divElement11);
  
//div element 12 created 
divElement12.className = "box";
 divElement12.id = "box12";
 divElement12.style.backgroundColor = '#00800084';
   divElement12.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement12);
  

//chapter1 
function chapter1() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
   document.getElementById('chapter1').innerHTML = " 1.MATTER  IN OUR SURROUNDING";
  //notes making function 
  //create new div
 divElement.className = "box";
 divElement.id = "box1";
   divElement.innerHTML = '<h2>MATTER</h2>  <p>anything which occupy space and have a mass is called matter.<br><br><b>Examples=></b>  air ,water, test, smell ,etc.</p>';
  ContentContainer.appendChild(divElement);
  //div element 2 created 
divElement2.className = "box";
 divElement2.id = "box2";
   divElement2.innerHTML = ' <h2>Physical nature of matter</h2>  <p>(1)Matter is made up of particle <br>(2) The particles of matter are very small. </p>';
  
  ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
  
divElement3.className = "box";
 divElement3.id = "box3";
 
 
   divElement3.innerHTML = ' <h2>Charecterstics of  Particles of matter.</h2>  <p>(1)Particles of matter have space between them.<br><br>(2)  particles of matter are continuously moving. <br><br>(3) particles of matter attract each other. <br><br>(4)As the temperature rises particles move faster. <br><br>(5)increase in the temperature the kinetic energy of the particle also increase.</p>';
  
  ContentContainer.appendChild(divElement3);
  
 
  
 //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
 
 
   divElement4.innerHTML = '  <h2>Diffusion</h2>  <p>The intermixing of particles of two different types of matter on their own is called diffusion.<br><br><b> On heating diffusion becomes faster.</b> </p>';
  
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 
 
   divElement5.innerHTML = ' <h2>State of Matter.</h2>  <p> On the basis of physical state  all the matter can be classified into three group.<br><br>(1)  Liquid . <br>(2) Solid . <br>(3)  Gases.</p>';
  
  ContentContainer.appendChild(divElement5);
  
  //div element 7 created 
divElement7.className = "box";
 divElement7.id = "box7";
 
 
   divElement7.innerHTML = ' <h2>Properties of Liquid</h2>  <p>(1) liquid have a fixed volume but they no fixed shape. <br><br>(2)  The liquid and solid cannot be Compressed much.  <br><br>(3)  liquid have moderate to high  densities.  <br><br>(4)  liquid do not fill their container completely.  <br><br>(5)  liquid generally flow easily. <br><br> </p>';
  
  ContentContainer.appendChild(divElement7);
  
  //div element 8 created 
divElement8.className = "box";
 divElement8.id = "box8";
 
 
   divElement8.innerHTML = '<h2>Properties of Solid</h2>  <p>(1) Solid have fixed shape and fixed volume. <br><br>(2)  solid cannot be compressed much. <br><br>(3) solid have high densities. <br><br>(4)  solid do not fill their container completely.<br><br> (5)  solid can not be flow.<br><br></p>';
  
  ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 
 
   divElement9.innerHTML = ' <h2>Properties of Gases</h2>  <p>(1)  Gases have neither a fixed shape and nor fixed volume. <br><br>(2)  Gases can be compressed easily. <br><br>(3)  Gases have very low densities. <br><br>(4)  Gases fill their container completely. <br><br>(5) Gases flow easily. <br><br>The gases show the property of diffusion very fast into other gases because of their high speed of particles and large space present in theme.<br><br><b>Effect on change of temperature.</b><br><br>when the temperature of a solid is increased the kinetic energy of the particles increase due to increase of kinetic energy.</p>';
  
  ContentContainer.appendChild(divElement9);
  
//div element 13 created 
divElement13.className = "box";
 divElement13.id = "box13";
   divElement13.innerHTML = '<h2>Learn More</h2><p><b>what is the melting point </b><br><br>The temperature. at which a solid melts to become a liquid at the atmospheric pressure is called its melting point.<br><br><b> the melting point of ice is (273.16 K. ) </b><br><br>The case of solid the space between the the constituent particles and kinetic energy of the particles are minimum in liquid it is intermediate and in gases it is maximum. <br><br><b>what is the fusion </b><br><br>The process of melting that is change of solid state into liquid state is known as fusion. <br><br>The amount of heat energy that is needed to convert 1 kg of solid into liquid at atmospheric pressure at its melting point is known as the <br>latent heat of the fusion </b>so particles in water at 0 degree Celsius and (273 K) have more energy as compared to particles in ice at same temperature. <br><br><b>The boiling point of water is (100• C) </b></p>';
  ContentContainer.appendChild(divElement13);
  
  
  //div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor="#00800084";
   divElement10.innerHTML = '<h2><a style="color:white;" to href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement10);
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = '#00800084';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#" onclick = "chapter2();">👉</a> </h2>';
  ContentContainer.appendChild(divElement11);
  
//div element 12 created 
divElement12.className = "box";
 divElement12.id = "box12";
 divElement12.style.backgroundColor = '#00800084';
   divElement12.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement12);
  

}
//chapter 2
function chapter2() {
document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "2.Components of Food.";
  //notes making function 
  //create new div

 divElement.className = "box";
 divElement.id = "box1";
 
   divElement.innerHTML = '<h2>Nutrients</h2>  <p>food made with ingredients and ingredient contain some compontent like carbohydrates ,proteins ,fats ,vitamins and minerals .these component are called nutrients .</p>';
  
  ContentContainer.appendChild(divElement);
  
  
  //div element 2 created 
  
divElement2.className = "box";
 divElement2.id = "box2";
 
 
   divElement2.innerHTML = ' <h2>Carbohydrates</h2><p>carbohydrates mainlly  produce energy in our body.<h2>Sources</h2><p>1.rice<br> 2.potato<br> 3.wheat <br>4.papaya<br> 5.mangoes</p></p>';
  
  ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
  
divElement3.className = "box";
 divElement3.id = "box3";
 
 
   divElement3.innerHTML = ' <h2>Fat</h2><p>Fat also give us energy ,in fact more energy  as compaire to some amount of carbohydrates.<h2>Sources</h2><p>1.meat.<br>2.fish.<br>3.eggs <br>4.nuts<br>5.til<br></p></p>';
  
  ContentContainer.appendChild(divElement3);
  
 //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
 
 
   divElement4.innerHTML = ' <h2>Proteins</h2><p>protiens are often called body bulding foods<h2>Sources</h2><p>1.gram <br>2.money <br>3.tur dal<br>4.beans <br>5.peas <br>6.soyabens <br>7.fish <br>8.paneer<br>9.eggs <br>10.milk <br></p></p>';
  
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 
 
   divElement5.innerHTML = '<h2>Vitamins</h2><p>vitamins help in protecting our body againest disease also vitamins help us in keeping eyes bones teeth gums healthy.<h2>Sources</h2><p><b>vitamin A<br> </b><br> 1.papaya <br>2.carrot <br>3.oil<br>4.milk <br>5.mangoes<br><br><b>vitamin B <br></b><br>1.weat<br>2.rice<br>3.liver<br><br><b>vitamin C<br> </b><br>1.orange <br>2.guava<br>3.lemon <br>4.Amla <br>5.Tamoto<br> <br><b>vitamin D</b><br><br>1.milk <br>2.butter <br>3.Eggs<br>4.Fish <br>5.Liver <br><br></p></p>';
  
  ContentContainer.appendChild(divElement5);
  
  //div element 8 created 
divElement8.className = "box";
 divElement8.id = "box8";
 
 
   divElement8.innerHTML = '<p>Besides of these nutrients our body needs dietary fibres and waters.<br><br><b><br>Dietary Fibres</b><br><br>Well in other words dierty fibres known as rougnage.<br><br>Rougnage in mainly provded by plants product in our food.<br><br><b>sources of rougnang</b><br><br>1.grains <br>2.pulses<br>3.potatoes<br>4.Fresh Fruits<br>5.Vegetables <br><br>rougnage does not provides any nutrients to our body but is an essential component of our food and adds to its bulk.<br><br>rougnage helps our body to observe nutrients form food.<br><br>And also helps in trowing out some wastes form body as urine and sweat.</p>';
  
  ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 
 
   divElement9.innerHTML = ' <h2>Blanced Diet</h2>  <p>blanced dite provides all the nutruents that our body needs in right quantities along with aurate amount of rougnage and water</p>';
  
  ContentContainer.appendChild(divElement9);
  
  
  //div element 7 created 
divElement7.className = "box";
 divElement7.id = "box7";
   divElement7.innerHTML = '<h2>Diseases and their symptoms from deficiency of vitamins.</h2><p><table><tr> <th>Vitamins</th> <th>Diseases</th> <th>Symptoms</th></tr><tr> <td>Vitamins A</td> <td>Loss of Vision</td> <td>Poor vision,loss vision</td></tr><tr><td>Vitamins B</td><td>Beriberi</td><td>weak musals,very little energ</td></tr> <tr> <td>Vitamins C</td>  <td>Scurvy</td> <td>Bleading gums,wounds take longer time to heal </td></tr><tr><td>Vitamins D</td> <td>Rickets</td><td>bone become soft and bent </td></tr><tr><td>Calcium</td><td>bone and tooth decay </td><td>weak bone ,teeth decay  </td></tr><tr><td>Iodine</td><td>Goiter </td>  <td>gland in the neak appears swollen, mental disability in mostly children. </td> </tr> <tr>   <td>Iron</td> <td> Anaemia</td>   <td>Weakness</td> </tr></table></p>';
  
  ContentContainer.appendChild(divElement7);
  
  
  //div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = '#00800084';
   divElement10.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = '#00800084';
   divElement11.innerHTML = '<h2><a style="color:white;" href="#" onclick = "chapter1();">👈</a> <a style="color:white;" href="#" onclick = "chapter3();">👉</a> </h2>';
  ContentContainer.appendChild(divElement11);
  
//div element 12 created 
divElement12.className = "box";
 divElement12.id = "box12";
 divElement12.style.backgroundColor = '#00800084';
   divElement12.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement12);
}
