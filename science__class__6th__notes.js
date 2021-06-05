//all variables 
let divElement1 = document.createElement('div');
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

//dark mode script 
function darkMode(){
document.getElementById("darkModeContainer").style.display = "flex";
}
// on dark mode
function on(){
  let NavTop = document.getElementById("chapter1");
  let NavBottom = document.getElementById("bottom__Nav");
  let DarkModeCon = document.getElementById("darkModeContainer");
  let fullbody  = document.getElementById("body"); 
  let footer = document.getElementById("footer");
  fullbody.style.backgroundColor = "#262626";
  fullbody.style.color = "#d8d8d8"
    NavTop.style.backgroundColor = "#262626";
  NavBottom.style.backgroundColor = "#262626";
  DarkModeCon.style.backgroundColor = "#262626";
    footer.style.backgroundColor = "#262626";
  darkModeContainer.style.display = "none";
  document.getElementById("on").style.backgroundColor = "teal";
document.getElementById("off").style.backgroundColor = "";
  
}
function randomMode() {
var random = Math.floor((Math.random() * 16) + 1);

if (random === 1) {
  chapter1();
}
if (random === 2) {
  chapter2();
}
if (random === 3) {
  chapter3();
}
if (random === 4) {
  chapter4();
}
if (random === 5) {
  chapter5();
}
if (random === 6) {
  chapter6();
}
if (random === 7) {
  chapter7();
}
if (random === 8) {
  chapter8();
}
if (random === 9) {
  chapter9();
}
if (random === 10) {
  chapter10();
}
if (random === 11) {
  chapter11();
}
if (random === 12) {
  chapter12();
}
if (random === 13) {
  chapter13();
}
if (random === 14) {
  chapter14();
}
if (random === 15) {
  chapter15();
}
if (random === 16) {
  chapter16();
}

}

// off dark mode  
function off(){
  let NavTop = document.getElementById("chapter1");
  let NavBottom = document.getElementById("bottom__Nav");
  let DarkModeCon = document.getElementById("darkModeContainer");
  let fullbody  = document.getElementById("body"); 
  let footer = document.getElementById("footer");
  fullbody.style.backgroundColor = "white";
  fullbody.style.color = ""
    NavTop.style.backgroundColor = "white";
  NavBottom.style.backgroundColor = "white";
  DarkModeCon.style.backgroundColor = "white";
    footer.style.backgroundColor = "white";
  darkModeContainer.style.display = "none";
  document.getElementById("off").style.backgroundColor = "teal";
  document.getElementById("on").style.backgroundColor = "";
  
}
//main container 
let ContentContainer = document.querySelector(".ContentContainer");

//sidebar opener
function sideOpener(){
  document.querySelector('.SideNavigation').style.left=0;
document.querySelector('.title').style.position= "relative";
}

//sidebar closer 
function closeSideNavigation(){
  document.querySelector('.SideNavigation').style.left="-100%";
document.querySelector('.title').style.position= "sticky";
document.getElementById("darkModeContainer").style.display = "none";
  
}

//show default
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 1.Food: Where Does it Come From?";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = '<h2>Food</h2>  <p>The component that we consume, which provides nourishment to the body, is called food. E.g., Rice, chapati, curry, fruits, vegetables, cheese, bread, milk, curd, butter, etc.</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Ingredients</h2>  <p>The components or materials required to prepare a food item are called as ingredients. E.g., different types of vegetables, spices are ingredients for sambar.</p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Food source</h2>  <p>The ingredients of a food item can be obtained from either plants or animals. So there are plant products and animal products. E.g., We get rice grains from rice plants. Chicken is an animal source of food. Items like salt and water make a third category.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <h2>Plants Products</h2>  <p>The food products that we get from plants are called as the plant products. E.g., ginger is the root of a plant that we use in cooking</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = ' <h2>Animal Products</h2>  <p>The food products that we get from animals are called animal products. E.g. Milk, butter, chicken, meat, honey etc.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = ' <h2>Herbivores</h2>  <p>Animals which feed on plants are called herbivores. E.g., cow, goat etc.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = ' <h2>Carnivores</h2>  <p>Animals which feed on other animals are called carnivores. E.g., lion, tiger etc</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>omnivores</h2>  <p>Animals which feed on both plants and other animals are called omnivores. E.g., bears. They feed on flesh as well as honey</p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>      <button onclick="chapter2()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
//chapter 1
function chapter1() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 1.Food: Where Does it Come From?";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = '<h2>Food</h2>  <p>The component that we consume, which provides nourishment to the body, is called food. E.g., Rice, chapati, curry, fruits, vegetables, cheese, bread, milk, curd, butter, etc.</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Ingredients</h2>  <p>The components or materials required to prepare a food item are called as ingredients. E.g., different types of vegetables, spices are ingredients for sambar.</p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Food source</h2>  <p>The ingredients of a food item can be obtained from either plants or animals. So there are plant products and animal products. E.g., We get rice grains from rice plants. Chicken is an animal source of food. Items like salt and water make a third category.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <h2>Plants Products</h2>  <p>The food products that we get from plants are called as the plant products. E.g., ginger is the root of a plant that we use in cooking</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = ' <h2>Animal Products</h2>  <p>The food products that we get from animals are called animal products. E.g. Milk, butter, chicken, meat, honey etc.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = ' <h2>Herbivores</h2>  <p>Animals which feed on plants are called herbivores. E.g., cow, goat etc.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = ' <h2>Carnivores</h2>  <p>Animals which feed on other animals are called carnivores. E.g., lion, tiger etc</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>omnivores</h2>  <p>Animals which feed on both plants and other animals are called omnivores. E.g., bears. They feed on flesh as well as honey</p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>      <button onclick="chapter2()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}
//chapter 2
function chapter2() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "2.Components of Food.";
  
  //notes making function 
  //create div element 1
 divElement1.className = "box";
 divElement1.id = "box1";
   divElement1.innerHTML = '<h2>Nutrients</h2>  <p>food made with ingredients and ingredient contain some compontent like carbohydrates ,proteins ,fats ,vitamins and minerals .these component are called nutrients .</p>';
  ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
 divElement2.id = "box2";
   divElement2.innerHTML = '<h2>Carbohydrates</h2><p>carbohydrates mainlly  produce energy in our body.<h2>Sources</h2><p>1.rice<br> 2.potato<br> 3.wheat <br>4.papaya<br> 5.mangoes</p></p>';
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
  
  //div element 6 created 
divElement6.className = "box";
 divElement6.id = "box6";
   divElement6.innerHTML = '<p>Besides of these nutrients our body needs dietary fibres and waters.<br><br><b><br>Dietary Fibres</b><br><br>Well in other words dierty fibres known as rougnage.<br><br>Rougnage in mainly provded by plants product in our food.<br><br><b>sources of rougnang</b><br><br>1.grains <br>2.pulses<br>3.potatoes<br>4.Fresh Fruits<br>5.Vegetables <br><br>rougnage does not provides any nutrients to our body but is an essential component of our food and adds to its bulk.<br><br>rougnage helps our body to observe nutrients form food.<br><br>And also helps in trowing out some wastes form body as urine and sweat.</p>';
  ContentContainer.appendChild(divElement6);
  
  //div element 9 created 
divElement7.className = "box";
 divElement7.id = "box7";
   divElement7.innerHTML = ' <h2>Blanced Diet</h2>  <p>blanced dite provides all the nutruents that our body needs in right quantities along with aurate amount of rougnage and water</p>';
  ContentContainer.appendChild(divElement7);
  
  //div element 7 created 
divElement8.className = "box";
 divElement8.id = "box8";
   divElement8.innerHTML = '<h2>Diseases and their symptoms from deficiency of vitamins.</h2><p><table><tr> <th>Vitamins</th> <th>Diseases</th> <th>Symptoms</th></tr><tr> <td>Vitamins A</td> <td>Loss of Vision</td> <td>Poor vision,loss vision</td></tr><tr><td>Vitamins B</td><td>Beriberi</td><td>weak musals,very little energ</td></tr> <tr> <td>Vitamins C</td>  <td>Scurvy</td> <td>Bleading gums,wounds take longer time to heal </td></tr><tr><td>Vitamins D</td> <td>Rickets</td><td>bone become soft and bent </td></tr><tr><td>Calcium</td><td>bone and tooth decay </td><td>weak bone ,teeth decay  </td></tr><tr><td>Iodine</td><td>Goiter </td>  <td>gland in the neak appears swollen, mental disability in mostly children. </td> </tr> <tr>   <td>Iron</td> <td> Anaemia</td>   <td>Weakness</td> </tr></table></p>';
  ContentContainer.appendChild(divElement8);
  
  
  //div element 10 created 
divElement9.className = "box";
 divElement9.id = "box9";
 divElement10.style.backgroundColor = 'teal';
   divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement9);
  
//div element 11 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
   divElement10.innerHTML = '<h2>     <button onclick="chapter1()">Previous</button> <button onclick="chapter3()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 12 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 3 
function chapter3() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "3.Fibre to Fabric";
  
  //notes making function 
  //create new div 1 created 
 divElement1.className = "box";
 divElement1.id = "box1";
   divElement1.innerHTML = '<h2>Fibres</h2>  <p>There are two types of fibres. <br><br> 1.Natural fibres <br> 2.Synthetic fibres. <br></p>';
  ContentContainer.appendChild(divElement1);
  
  //div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
 divElement2.innerHTML = ' <h2>Natural Fibres</h2><p>the fibres which are obtained from plant and animals are called natural fibre. <br> <br> <b>Examples</b><br>cotton jute, Silk, wool etc.</p>';
ContentContainer.appendChild(divElement2);
  
  //div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Synthetic Fibres</h2><p>Man made fibres which are not obtained from plants and animals sources are called synthetic fibres for. <br> <br> <b>example</b> <br> nulon, polyester etc </p>';
ContentContainer.appendChild(divElement3);
  
  //div element 4 created 
divElement4.className = "box";
 divElement4.id = "box4";
   divElement4.innerHTML = '<h2>Cotton</h2><p>cotton is grown in black soil and warm climate.</p>';
  ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
 divElement5.id = "box5";
 divElement5.innerHTML = '<h2>Jute</h2><p>Jute is obtained from stem of jute plant.</p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created 
divElement6.className = "box";
 divElement6.id = "box6";
   divElement6.innerHTML = ' <h2>Wool</h2> <p>Wool clothes is spun from yarn make from the fibres of the thick fleece of sheep.</p>';
ContentContainer.appendChild(divElement6);
  
  //div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Silk</h2><p>Thread is obtained from The Saliva of an insect called silkworm.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<h2>Processing of whole : 4 steps</h2><p><b>1.Shearing</b><br> The process of removal of wool from the Sheep skin. <br><br><b>2.Grading</b><br>The process of separating pleece from damage wool.<br><br><b>3.carding</b><br> The process after the wool has been washed and droid. it is passed through the rollers. <br><br><b>4.spinning</b><br>  The process by which fibres are gathered together and drawn into a long rope and then twested to make yarn. <br> <br> <br><h2>Fabrics</h2><p>Fabrics are made from yarns. which is turn are made form fibres. <br> <br> <b>Making fabrics from yarn : 2 steps </b> <br><br><b>1.Weaving</b><br> process by two sets of yarns arranged together to form fabric.it is done on looms.<br><br><b>2.Kinitting</b> <br>  The process by which single yarn is used to make fabric it is done by hand or machine.</p> </p>';
ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 divElement9.style.backgroundColor = 'teal';
   divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
   divElement10.innerHTML = '<h2>     <button onclick="chapter2()">Previous</button> <button onclick="chapter4()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 4
function chapter4() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "4. Sorting Materials into Groups";
  
  //notes making function 
  //create new div 1
divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = '<h2>Materials</h2><p>The matter of which an object is made is called materials.</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = '<h2>Object</h2>  <p>A thing that can be seen and touched is called an object.</p> ';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Classification of objects</h2><p>The sorting of objects into groups with each group having its own characteristic properties , is called <b>classification of objects</b>.<br><br> All the objects having similar characteristics properties are placed in one group  and the objects having different properties are placed in different groups. <br><br> <b>Examples</b> <br>Same types of sope stor in one place.</p>';
ContentContainer.appendChild(divElement3);
  
 
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = '<h2>Why classify the objects.</h2><p>1.easier to locate them and work with them. <br> <br> 2. we can get an idea of the properties of the other members of this group.</p>';
ContentContainer.appendChild(divElement4);
  
  //div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>The various objects can be classified or grouped as follows:</h2><p>1.Living objects <br> 2.non-living objects. <br><br> <b>Living objects can be classified further into two groups plants and animals.</b> <br><br> <b>Non-living objects can be classified into many groups on the basis of their nature of material, use, appearance, shape, size, colour, hardness , texture etc.</b><br> <br> The classification of objects into groups can be done only when the objects have some similarities and some dissimilarities.</p>';
  ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = ' <h2>Living Object</h2> <p>All the living objects need food ,water and air for their survival where as non-living objects do not require these things. <br><br><b>Examples</b><br>Dog , rose, grasshopper ,cactus, tree, fish , hen etc. <br><br> <b>Plants</b><br>All the plants can make their food by using carbon dioxide, water and sunlight. <br><br> <b>Plants Examples</b> <br>rose, jasmine, hydrilla, cactus ,tree etc. <br> <br> <b>Animals</b> <br> animals cannot make their food <br> <br> <b> Animal Examples</b> <br> Dog ,fish, cat ,earthworm ,grasshopper etc.  </p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>None Living objects</h2><p>Non-living objects can be classified on the basis of the material ( of which they are made), their uses, colour ,shape ,size appearance, hardness and texture. <br><br> <b>We classify all objects into 4 groups</b> <br><br>1.Objects made of wood => table ,chair ,bed ,door.etc <br><br> 2.Objects made of metals => nails ,magnet, coin, utensils.etc <br> <br>3.Objects made of glass: funnel, mirror, beaker, test tube etc.<br> <br> 4.Object made of plastic => toy, ruler, mug, Polythene bags, boxes</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<h2>Help us to buy our premium Notes.</h2>';
ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
divElement10.id = "box10";
divElement10.style.backgroundColor = 'teal';
divElement10.innerHTML = '<h2>     <button onclick="chapter3()">Previous</button> <button onclick="chapter5()">Next</button> </h2>';
ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
divElement11.id = "box11";
divElement11.style.backgroundColor = 'teal';
divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
ContentContainer.appendChild(divElement11);
}
// chapter 5 
function chapter5() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "5.Separation of Substances.";
  
  //notes making function 
  //create new div 1
divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = '<h2>Pure Substances</h2>  <p>Substances which contain particles of only one kind is called a pure substance.</p>';
ContentContainer.appendChild(divElement1);

  //div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Mixture</h2><p>Substances which contain particles of different kinds is called an impure substance or mixture. <br>A mixture is made up of two or more pure substances. <br><br><b>Examples</b> air ,water, salt, milk, tea ,coffee ,sugar cane juice, petroleum ,soil etc. <br><br> <b>The mixtures are separated into their components for various purposes such as:</b>  <br>1.To remove an undesirable component <br> 2.To remove a harmful component. <br> 3.To obtain the pure sample of a substance. <br> 4.To obtain a useful component  </p>';
ContentContainer.appendChild(divElement2);
 
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Methods of Separating of Mixtures</h2><p> 1.Threshing <br>2.Winnowing <br> 3.Hand-Picking <br> </p>';
ContentContainer.appendChild(divElement3);
  
 //div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = '<h2>1.Threshing</h2><p>When a food grain crop like wheat or paddy matures, it is harvested from the field. The harvested crop is then dried in the sun. We get bundles of stems or stalks of dried crop plants which have grains attached at their top.</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>Winnowing</h2><p>When a farmer threshes wheat crop in his field ,he gets a mixture of wheat grains and husk. Before wheat grain can be used, husk has to be removed from them. The husk is separated from wheat grains by method of winnowing.</p>';
ContentContainer.appendChild(divElement5);
  
  //div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = ' <h2>Hand-Picking</h2> <p>The method of hand picking is used to separate those mixtures where one of the component is in small quantity.</p>';
  ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Silk</h2><p>Thread is obtained from The Saliva of an insect called silkworm.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<h2>Processing of whole : 5 steps</h2><p><b>1.Shearing</b><br> The process of removal of wool from the Sheep skin. <br><br><b>2.Grading</b><br>The process of separating pleece from damage wool.<br><br><b>5.carding</b><br> The process after the wool has been washed and droid. it is passed through the rollers. <br><br><b>5.spinning</b><br>  The process by which fibres are gathered together and drawn into a long rope and then twested to make yarn. <br> <br> <br><h2>Fabrics</h2><p>Fabrics are made from yarns. which is turn are made form fibres. <br> <br> <b>Making fabrics from yarn : 2 steps </b> <br><br><b>1.Weaving</b><br> process by two sets of yarns arranged together to form fabric.it is done on looms.<br><br><b>2.Kinitting</b> <br>  The process by which single yarn is used to make fabric it is done by hand or machine.</p> </p>';
ContentContainer.appendChild(divElement8);
  
//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
divElement10.id = "box10";
divElement10.style.backgroundColor = 'teal';
divElement10.innerHTML = '<h2>   <button onclick="chapter4()">Previous</button> <button onclick="chapter6()">Next</button></h2>';
ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
divElement11.id = "box11";
divElement11.style.backgroundColor = 'teal';
divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
ContentContainer.appendChild(divElement11);
}
//chapter 6
function chapter6() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "6.Changes Around Us";
  
  //notes making function 
  //create new div 1 
divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = '<h2>Classification of Changes</h2>  <p>A substance undergoes a change to form a ‘new substance’ only when certain agents like heat, light, electricity or force etc are applied on it. <br> <br> Some of the changes can be reversed whereas other changes can not be reversed. <br> <br> So, all the changes around us can be classified into two groups:<br> <br> 1.Reversible changes <br>2.Irreversible changes</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Reversible Changes</h2><p>A change which can be reversed to form the ‘original substance’ is called a reversible change. <br><br> <b>Examples</b><br><br>Melting of ice. <br> Boiling of water. <br> Melting of wax. <br> Stretching of a rubber band. <br> Stretching of a spring. <br> Inflation of a ballon. <br> Ironing of clothes. <br> Folding of paper. <br> Rolling a chapati(roti) from dough.<br> Dissolving salt in water. <br> Dissolving sugar in water. <br> Knitting of sweater (woollen yarn to knitted sweater). <br>Melting of ice candy.<br>Melting of ice cream (solid ice cream to molten ice cream). <br> Drying of clothes (wet clothes to dry clothes). <br> Heating of milk (cold milk to hot milk). <br> Expansion of metals on heating.Straight wire to coiled wire. <br> Melting of coal tar. <br>Folding of dress (shirts etc).<br> Moulding of wet clay into pot on potter’s wheel andSoftening of iron on heating to red hot stage.</p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Irreversible changes</h2><p>A change is called irreversible if it cannot be changed back again. <br> <br> In an irreversible change, new materials are always formed. <br> <br> Sometimes these new materials are useful to us. <br><br> <b>Examples</b> <br><br> Burning: When we burn a piece of paper or wood, it turns to ash and smoke. We cannot obtain paper and wood from the ash again.<br>  <br> Cooking: We use heat for cooking, right? Once we cook our eggs, we cannot uncook them. .<br><br>  Rusting of iron: You must have seen rusting of iron.</p>';
ContentContainer.appendChild(divElement3);
  
 
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = '<h2>Examples of important changes in everyday life </h2><p>Formation of curd from milk, <br> <br> burning of fuels , <br> <br> drying of clothes , <br> <br> rusting of iron , <br>  <br> Melting of ice, Boiling of water (or Evaporation of water);<br> <br> making of chapatis from flour; <br> <br> burning of fire works,<br> <br> germination of seeds, flowering of plants,<br> <br>  ripening of fruits, <br> <br>  shedding of leaves by trees, <br> <br> growth of human beings and animals, <br> <br> formation of day and night, <br> <br>  position of sun in the sky, <br> <br>  changes in seasons, <br> <br>  changes in weather and rainfall etc. <br> <br> </p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>Some changes are beneficial to us whereas some are harmful to us.</h2><p>The beneficial changes take place faster but the harmful changes are either stopped or made to go slow. <br> <br> instance, the ripening of fruits is beneficial change. So, we try to make the ripening of fruits faster by using artificial methods. <br> <br> so on  the other hand the spoiling of cooked food is a harmful change, so we try to slow down this change by keeping the cooked food in refrigerator. <br> <br> The change in a material (or object) does not occur on its own. There is always a ’cause’ which brings about a change in material. <br> <br> Heat is the cause of the change of state of ice from solid to liquid .<br> <br> Some of the ways of bringing about changes in materials are by applying heat, light, electricity, or force.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = ' <h2>change of state is reversible change</h2>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Expansion (on heating) is a Reversible Change</h2>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<p>When an object is heated, it increases in size. The increase in size on heating, is called expansion. The decrease in size of an object on cooling, is called contraction. Expansion occurs on heating whereas contraction occurs on cooling. The reversible change of expansion is used : <br><br> 1.in fixing an iron rim on the wooden wheel of a cart and <br>2.in fixing the iron blade of digging tool (like a spade) to wooden handle.</p>';
ContentContainer.appendChild(divElement8);
  
//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
divElement10.id = "box10";
divElement10.style.backgroundColor = 'teal';
divElement10.innerHTML = '<h2>   <button onclick="chapter5()">Previous</button> <button onclick="chapter7()">Next</button></h2>';
ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
divElement11.id = "box11";
divElement11.style.backgroundColor = 'teal';
divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter7
function chapter7() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "7.Getting to know Plants";
  
  //notes making function 
//create new div 1
divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = '<h2>Plants Intoduction</h2>  <p>Plants are multicellular organisms in the Plantae kingdom. <br> <br> Plants use photosynthesis to make their own food. <br> <br> There are over 300,000 species of plants; <br> <br> <b>examples of plants</b><br><br>Grasses, trees, and shrubs. <br> <br> The study of plants is called botany. </p>';
ContentContainer.appendChild(divElement1);
  
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Most plants can be classified into 3 category </h2><p>1.Herbs <br> 2.Shrubs <br> 3.Trees <br><br> <b>1.Herbs</b> <br> <br> Plants with green and tender stem are called herbs. <br><br> 👉Herbs usually short and may not have many branches. <br> <br> <b>2.Shrubs</b><br><br>Plants with developed branches near the base of stem these types of plants called Shrubs. <br><br>👉Shrubs stem is hard but not thick stem <br> <br> <b>3.Trees</b> <br> <br> Trees are very tall and trees have hard and thick  stem. <br> <br> 👉Tree branches exist in the upper parts of Trees.<br> <br> <b>Creepers</b> <br> <br> Plants with weak  stem that cannot stand upright but spread on the ground.these types of plants called Creepers. <br> <br> <b>Climbers </b> <br> <br>Plants with hard stem that climb  up. these types of plants called Climbers. <br> <br> <bCreepers and Climbers  are different from the herbs , sherb and trees .</b>  <p>';
ContentContainer.appendChild(divElement2);
  
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2> Leaf</h2><p>The leaf is a thin, broad, flat and green part of a plant which is attached to the stem or branch.<br><br> <b>How are leaves attached to the stem?</b><br><br>The part of leaf by which it is attached to the stem is called <b>petiole.</b>and broad green parts of the leaf is called <b>lamina</b> <br><br><img src="leaf.png" alt="leaf"/> <br> <br> <b>Transpiration</b><br> <br> Water comes out or lives in the form of vapour by a process called Transpiration. <br> <br>  <b>Plants release  lot of water into the air through this process.</b> <br> <br> <b>Structure  of leaves</b> <br> <br>  (1) A leaf consists mainly of two parts lamina and petiole.<br><br> Lamina is commonly as leaf blade and petiole is commonly known as leaf stalk. <br> <br> The broad green part of the leaf is called lamina.<br><br> The thin stalk with which leaf is attached to the stem is called “petiole”.<br><br> (2) There is a mid-rib or main vein in the centre of lamina. A large number of veins spread out from the mid-rib to all the parts of the leaf. The mid-rib and veins consist of bundles of tiny tubes some of which carry water into the leaf, and other carry away the food from the leaf.<br><br> (3) There are minute pores on the surface of a leaf which are called stomata  which<br><br> (i) allows the gases to move in and out of the leaf.<br> <br> (ii) also allow excess water vapours to go out of the leaf. <br><br> The leaves of plants contain a green coloured pigment called chlorophyll. <br><br> </p>'
ContentContainer.appendChild(divElement3);
  
 
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = '<h2>What does the leaf contain? </h2><p>Leaves contain chlorophyll and are the sites of photosynthesis in plants. <br><br> broad, flattened surfaces gather energy from sunlight while apertures on the their undersides bring in carbon dioxide and release oxygen. <br> <br><b>What Does the leaf doe?</b><br><br>The main function of a leaf is to produce food for the plant by photosynthesis.</p>';
ContentContainer.appendChild(divElement4);


//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = ' <h2>Photosynthesis</h2> <p>The process by which green plants use sunlight to make food from carbon dioxide and water is called photosynthesis. <br> <br><img src="https://i.gifer.com/9Yaj.gif" alt="photosynthesis"/><br><br> <b>Oxygen is given out in photosynthesis process .</b> <br> <br> <b>The food prepared by leaves and stored in different  parts </b> <br> <br> <b>Process of photosynthesis</b> <br> <br> (1) Carbon dioxide gas needed for making food is taken by the leaves from air and water is carried into leaves from the soil through the stem. <br> <br> (2) Sunlight provides the energy for making food.<br><br> (3) Chlorophyll present in the green leaves helps in tracking energy from sunlight. <br><br> (4) Oxygen gas is produced in the leaves during photosynthesis.This oxygen goes into air. <br> <br> (5) The simplest food prepared by the leaves by photosynthesis is glucose. Some of the glucose is converted into starch. This starch is stored as food in various parts of the plant. <br> <br></p>';
ContentContainer.appendChild(divElement5);
  
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<h2>Root</h2><p>The roots are the organs of a plant that are modified to provide anchorage for the plant and take in water and nutrients into the plant body. <br><br><img src="https://i.gifer.com/32bb.gif" alt="Root" /> <br><br> <b>Roots allows plants to grow taller and faster.</b> <br><br><b> The main functions of root are</b> <br><br> (1) Roots anchor the plant to the soil. It means that root fix the plant firmly to the soil or ground. This prevents the plant from being pulled out easily or blown away by the wind.<br> <br> (2) Roots absorb water and mineral from the soil. These are needed for the manufacture of food by plant leaves.<br><br> (3) Roots that help in holding the soil together. In this way, roots prevent the soil from being blown away by wind or washed away by water and help in the conversation of soil. <br> <br> <b>Types of Root</b><br> <br> ots are primarily of two types => <br> <br>(1) Tap roots <br><br> (2) Fibrous roots . <br><br> <b>Tap roots</b><br> <br>  Tap root is a straight tapering root which grows vertically down into soil and gives out branches on all the sides. <br> <br> Tap root is the main root and and the smaller, side roots are called lateral roots.<br><br>Tap root itself is a quite thick but its branches are much thinner.<br> <br> examples are Pea Plant, Neem tree, mango tree, Marigold, Tulsi, Gram, Carrot, Radish, Beet and Turnip.<br> <br> <b>Fibrous roots</b> <br> <br> The fibrous root consist of many thin, fibre-like roots of a similar size.<br> <br> The fibrous roots spread out in the soil and give a firm support to the plant.<br> <br> Some of the plants which have fibrous roots are Sweet potato, Paddy (rice), Grass, Maize, Millet (Bajra), Sugarcane and Bamboo. <br> <br> </p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Stem</h2><p>The part of a plant which rises vertically up from the ground is called stem. <br> <br><img src="stem.png" alt="Stem"/> <br> <br> The Stems of the plants are, however, weak and cannot stand erect. <br> <br> The stem of the tree is the strongest part of the tree and is know as trunk. <br> <br> Most of the tree trunks are covered with a tough layer called “bark“. <br> <br> <b>The main functions of the stem of a plant are as follows</b> <br> <br>(1) The stem holds the plant upright (or erect). <br> <br> (2) The stem of a plant carries water and minerals from the roots to the leaves and other parts of the plant. <br><br> (3) The stem carries the prepared food from leaves to other parts of the plant . <br><br> (4) The stem hold the leaves in such a way that the leaves are able to get plenty of sunlight for preparing food by photosynthesis. <br> <br> <b>Tubes in stem</b> <br><br> The stem of a plant has a large number of narrow tubes inside it.<br> <br> (1) One type of tubes in the stem carry water and dissolved minerals from the roots to the leaves and other parts. The leaves of the plant make food by photosynthesis. <br> <br> (2) Another types of tubes present in the stem carry food from the leaves to all other parts of the plants, including roots. <br> <br> </p>';
ContentContainer.appendChild(divElement7);

//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<h2>Flower</h2> <p>Different plants have different types of flowers. Flowers are of many sizes, shapes and colours. The flowers have different smells. <br> <br> For examples :Rose ,Jasmine, Lily ,sunflower, Marigold. <br> <br><b>The main function of flower is to produce fruits and seeds. <br><br><img src="https://i.gifer.com/TGve.gif" alt=flower" /></b><br><br> The main parts of flower are:  sepals, petals, stamen and pistil . <br> <br> (1) The green, leaf like parts in the outermost circle of a flower are called sepals. The sepals protect the flower when it is in the form of a bud in the initial stage .sepals may either be separate from one another or joint together. <br> <br> (2) Inside the sepals are the petals of a flower. Petals of flower can be of different shape, size and colour.The petals of flowers have natural cents due to which they smell very nice. Petals also attract insects. The ring of colourful petals in a flower protects the reproductive organs of the flower.<br> <br> (3) Just inside the petals of a flower ,there are many little stalks with swollen tops. These stalks with swollen tops are called stamens. The stamen is the male part of a flower. The stamen is made up of two parts : filament and an anther.<br><br> Structure of stamen The stalk of stamen is called filament and the swollen top of stamen is called anther.<br><br> The anther contains a yellow powder like substance called Pollen. If we cut the anther of a flower horizontally ,we can see the pollen grains in it.<br><br> The pollen grains contain male sex cells of a plant. There are many stamens in a flower. They form</p>';
ContentContainer.appendChild(divElement8);
  
//div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 divElement9.style.backgroundColor = 'teal';
   divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
   divElement10.innerHTML = '<h2>     <button onclick="chapter6()">Previous</button> <button onclick="chapter8()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 12 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 8 
function chapter8() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "8.Body Movements ";
  //notes making function 
  //create new div1
divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = '<h2>Movements</h2><p>The ability of organisms to change position, by using their body parts, is called movement.</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Skeleton </h2><p> 👉Skeleton is the internal structure in organisms, which helps in bringing about movement. <br> <br> 👉It forms a framework that gives the shape of the body and provides support to organisms. <br> <br> 👉The skeleton is made up of bones. <br> <br> 👉Different kinds of bones are joined to each other in a particular manner.<br> <br> 👉These joints facilitate various types of movements. <br> <br> In higher animals, bones, muscles and cartilage together make the movement possible.<p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2> Muscles</h2><p>👉Muscles are parts of the body that help in bringing about movement. <br> <br> 👉Muscles may be attached to bones, (humans) or may work alone (earthworm).<br> </p>'
ContentContainer.appendChild(divElement3);
  
 //div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = '<h2>Cartilage </h2><p>👉Part of the skeleton that is not hard as bones and can be bent, is cartilage. <br> <br> 👉They are found in the upper part of the ear, the tip of the nose and at the tips of long bones.</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>Joints</h2><p>👉Joints are the points where two parts of the skeleton are fitted together to make movement possible. <br> <br>👉Examples are hip joint, elbow joint, knee joint, etc. <br> <br> <b>Ball and Socket Joint</b> <br> <br>👉Ball and socket joint, where the rounded end of one bone fits into the cavity of the other bone. <br> <br> 👉It brings in movement in all directions. <br> <br> 👉It is seen in the hips and shoulders of the human body. <br><br><img src="https://i.gifer.com/3ott.gif" alt="socket Joint"><br> <br> <b>Pivot Joint</b> <br> <br>👉A pivotal joint is where a cylindrical bone rotates in a ring.<br> <br> 👉It joins the neck to the head.<br> <br> 👉It allows to bend the head forward and backwards and turn the head to our left or right. <br><br><img src="https://image.freepik.com/free-photo/3d-medical-male-figure-with-neck-bones-highlighted_1048-9254.jpg" alt="pivotal bone"><br> <br> <b>Hinge Joints</b><br> <br> 👉Hinge joints bring about movement in only back and forth direction. <br> <br> 👉The knees and elbows have hinge joints. <br> <br> 👉The following image is a hinge joint in the elbow.<br><br><img src="https://i.gifer.com/ISOx.gif" alt="hinge bone"><br> <br><b>Fixed Joints</b><br> <br> 👉Fixed joints are immovable joints because the bones are joined together. <br> <br> 👉Such joints are found in the skull.<br><br><img src="https://i.gifer.com/5eqb.gif" alt="skull"><br> <br></p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement9.innerHTML = ' <h2>Gaits of Animals</h2> <p>The different patterns of movement of animals due to the differences in their skeletal structure are called gaits of animals.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Earthworm</h2><p>👉The earthworm does not have any internal skeleton. <br> <br> 👉The body is made up of many rings joined end to end and muscles attached to these rings help to extend and shorten the body. <br> <br> 👉The skin of earthworm also has a large number of tiny bristles that help it get a good grip on the ground. <br> <br>👉Repeated extension and contraction of the body muscles, enable the earthworm to move through the soil.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<h2>Know More</h2><p> <b>Snail</b> <br> <br>👉Snails move with the help of their muscular, flat foot. <br> <br> 👉They glide along a solid surface which is lubricated with mucus. <br> <br> 👉This motion is powered by succeeding waves of muscular contractions of the foot. <br> <br> <b>Cockroach</b> <br> <br> 👉The body of a cockroach is covered with a hard outer skeleton that is made of different units joined together. <br> <br> 👉It has three pairs of legs for walking and two pairs of wings attached to the breast for flying. <br> <br> 👉It has distinct muscles that are used for movement. <br> <br> 👉The muscles attached to the legs help in walking.<br><br> 👉The breast muscles attached to the wings help in flying, although they are not good flyers. <br> <br> <b>Birds</b> <br> <br> 👉Birds have a special skeletal and muscular structures that help them to fly. <br> <br> 👉The forelimbs are modified to become wings and the bones inside are hollow to suit flying. <br> <br> 👉The bones of the hind limbs are used for perching and walking. <br> <br> 👉The shoulder bones and breastbones are strong and support muscles of flight, which move the wings up and down. <br> <br> <b>Fish</b>  <br> <br> 👉Fishes have a streamlined body that helps them swim with least resistance. <br> <br> 👉They use tail fin for small jerks through water and other fins assist swimming. <br> <br> 👉The tail fin is also used for changing directions. <br> <br><b>Snakes</b> <br> <br> 👉Snakes do not have legs for movement but use their long backbone along with muscles for movement.<br><br> 👉Their body curves into many loops, which gives it a forward push by pressing against the ground. <br> <br></p>';
ContentContainer.appendChild(divElement8);
  
//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
divElement10.id = "box11";
divElement10.style.backgroundColor = 'teal';
divElement10.innerHTML = '<h2>    <button onclick="chapter7()">Previous</button> <button onclick="chapter9()">Next</button></h2>';
ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box12";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//function 9
function chapter9() {
  
document.querySelector('*').scrollTo(0,0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = "<p>9. The Living Organisms-Characteristics and Habitats.</p>";
  //notes making function 
  //create new div 1
divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <h2>Organism</h2><p>An organism is simply defined as any living thing, ranging from microscopic bacteria to large elephants and everything in between.<br> <br>Different types of plants and animals are found in different areas. <br> <br> <b>Examples</b> <br> <br> Deserts have camel and cacti as plants. <br><br>Beaches show coconut trees and crabs. <br> <br> Fishes and other marine animals inhabit the sea.<p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2> Characteristics of Living Organisms</h2><p>Plants are living things, but they do not appear to move like a dog or a pigeon. <br> <br> On the other hand, a car or a bus can move, yet we consider them as non-living. <br> <br>So there are certain characteristics that differentiate living from nonliving- <br> <br> Living beings are made of cells. <br> <br> Living beings obtain and use energy. <br> <br> Living beings grow and develop. <br> <br>Living beings reproduce. <br><br>Living beings adapt to their environment <br> <br> Living beings respond to their environment or stimuli. <br><br> </p>'
ContentContainer.appendChild(divElement2);
  
 
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = '<h2>Characteristics of Living Organisms.</h2><p><b>Nutrition</b> <br> <br> The process by which animals obtain food and utilize it for all the activities is called as nutrition. <br> <br> Every organism requires nutrition for obtaining energy. <br> <br><b>Growth</b><br> <br> living organisms grow and exhibit growth in different ways. <br> <br> Their body cells divide and grow and thus overall growth is attained. <br> <br> <b>Respiration</b> <br> <br> Respiration is necessary for all living organisms. <br> <br> It is through respiration that the body finally obtains energy from the food it takes. <br> <br> Some animals may have different mechanisms for the exchange of gases, which is a part of the respiration process. <br><br><b>Examples</b> <br><br> earthworms breathe through their skin and fish have gills for using oxygen dissolved in water. <br> <br> In humans, we respire by breathing in oxygen breathing out the carbon dioxide. <br><br> <b>Response to Stimulus</b><br><br>  Changes in our surroundings that makes us respond to them are called stimuli. <br> <br> All living beings react to changes in their surroundings.<br><br> <b>Examples</b> <br> <br>   In response to increased temperature in summer, we use fans to cool our homes. <br> <br> <b>Excretion</b> <br><br> All living things take food. <br> <br> Not all the food that is eaten is really used, only a part of it is utilised by the body. <br> <br> Unused/remaining food becomes waste and needs to be excreted. <br><br> Our body also produces some wastes, like urea, in other life processes. <br><br> Living organisms get rid of all this waste material and the process is known as excretion. <br> <br> <b>Reproduction</b><br> <br> All living organisms give rise to a new organism of their own kind, by a process called reproduction. <br> <br> The mode of reproduction may be different, in different animals and plants. <br><br> Some animals produce their young ones through eggs. <br> <br> Some animals give birth to the young ones. <br><br> Plants produce seeds which germinate into new plants.<br><br> Some plants also reproduce through parts other than seeds.<br><br> <b>Example</b> part of a potato with a bud, grows into a new plant. <br> <br> <b>Movement</b> <br><br> Animals move from one place to another and also show other body movements.<br> <br> Plants are generally anchored in the soil so they do not move from one place to another.<br><br> However, various substances like water, minerals and the food synthesised by the plants move from one part to other.<br><br> Plants also show other kinds of movement like the opening and closing of flower buds. <br> <br> To know more about Characteristic of Organisms, visit the link below; <br> <br> </p>';
ContentContainer.appendChild(divElement3);
  
  //div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = '<h2>Animal Adaptation</h2><p><b>Adaptation</b> <br> <br> The presence of specific features or certain habits, which enable a plant or an animal to live in its surroundings, is called adaptation. <br> <br> Different animals are adapted to their surroundings in different ways. <br> <br> <b>Examples</b><br> <br> Fish have slippery scales on their bodies. <br> <br> These scales protect the fish and also help in easy movement through water. <br> <br> </p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = ' <h2>Habitats</h2><p><b>Surroundings</b> <br> <br> The different surroundings or areas have different organisms that live in. <br> <br> <b>Examples</b> <br> <br> The deserts have camels, the mountains have goats and yak. <br><br><b>Habitat</b> <br> <br> The surrounding where living organisms survive is known as habitat. <br> <br> The organisms depend on their habitat for their food, water, air, shelter and other needs.Habitat means a dwelling place (a home). <br> <br> Several kinds of plants and animals may share the same habitat.</p>';
ContentContainer.appendChild(divElement5);

//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<h2>Biotic Components</h2><p>The living components of a habitat are called biotic components.<b>Examples</b> <br> <br> plants, animals</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Abiotic components</h2><p>The non-living components of a habitat are called as abiotic components. <br> <br> <b>Examples</b><br> <br> rocks, soil, air, water etc</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<h2>Know More</h2><p><b>Terrestrial Habitats</b><br> <br> The plants and animals that live on land are said to live in terrestrial habitats.<br><br> <b>Examples</b> <br> <br> forests, grasslands, deserts, coastal and mountain regions. <br> <br><img src="https://i.gifer.com/ESX.gif" alt="terrestrial Habitats"><br> <br> <b>Aquatic Habitats</b><br> <br> The habitats of plants and animals that live in water are called aquatic habitats. <br> <br> <b>Example s</b> ponds, swamps, lakes, rivers and oceans. <br> <br> <img src="https://i.gifer.com/NO77.gif" alt="Aquatic habitats"> <br> <br>Aquatic habitats could be fresh water (river, pond) or marine (sea) or even estuarine (delta of river meeting with the sea)</p>';
ContentContainer.appendChild(divElement8);
  
  //div element 9 created 
divElement9.className = "box";
 divElement9.id = "box9";
 divElement9.style.backgroundColor = 'teal';
   divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
  ContentContainer.appendChild(divElement9);
  
//div element 10 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
   divElement10.innerHTML = '<h2>     <button onclick="chapter8()">Previous</button> <button onclick="chapter10()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter10 
function chapter10() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 10.Motion and Measurement of Distances";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="https://image.freepik.com/free-vector/people-eating-healthy-exercising-regularly_53876-64671.jpg" alt="Measurement"><h2>Measurement</h2>  <p>Measurement, the process of associating numbers with physical quantities and phenomena. <br> <br> Measurement is fundamental to the sciences,engineering, construction, and other technical fields, <br> <br> And almost uses in  all everyday activities.</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Length</h2> <p>Length is a measure of distance. <br> <br> According  to International System of Quantities, length is a quantity with dimension distance. <br><br>The base unit for  Length is the <b>Metre.</b></p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Unit</h2>  <p>units are standards for measurement of physical quantities that need clear definitions to be useful. <br><br> <b>SI Unit</b><br><br>The International System of Units is the modern form of the metric system. <br> <br> It is the only system of measurement with an official status in nearly every country in the world.<br><br></p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <img src="https://image.freepik.com/free-vector/campaign-social-distancing-covid-19-with-children-using-face-mask-illustration-design_24877-63584.jpg" alt="Distance"> <h2>Distance</h2>  <p>Distance is a numerical measurement of how far apart objects are. <br> <br><b>The SI unit for distance is the meter (m).<br> <br> </b> Short distances may be measured in centimeters (cm) <br> <br>Long distances may be measured in kilometers (km).<br><br></p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<img src="https://img.freepik.com/free-vector/hand-drawn-doodle-sketch-arrow-set_1035-19408.jpg?size=338&ext=jpg" alt="Curved Line"><h2>Curved Line</h2>  <p>curve is an object similar to a line, but that does not have to be straight. <br><br></p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<img src="https://image.flaticon.com/icons/png/512/157/157229.png" alt="Straight Line"> <br><br><h2>Straight Line</h2><p>A straight line is just a line with no curves. So, a line that extends to both sides till infinity and has no curve. <br><br></p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = ' <img src="https://image.freepik.com/free-vector/sportsman-retro-cartoon-set_1284-18647.jpg" alt="Motion"><br><br><h2>Motion</h2>  <p>motion is the phenomenon in which an object changes its position over time.<br><br><b>Types of Motion </b><br><br>1.Circular Motion <br> <br>2. Periodic Motion <br><br>3.Rectlinear Motion <br><br> <img src="https://i.gifer.com/69QH.gif" alt="Circular Motion"><br> <br><b>1.Circular Motion</b> <br><br>circular motion is a movement of an object along the circular path. <br> <br> <b>Example</b> <br> <br> Motion of a wheel. <br> <br> A stone tied to a string.<br> <br> Artificial satellite orbiting earth. <br> <br>Turning of a car around a curve.<br><br><img src="https://img.freepik.com/free-vector/happy-kids-swinging-swings-little-friends-enjoying-activities-playground-vector-illustration-childhood-leisure-time-outdoors-friendship-concept_74855-13114.jpg?size=338&ext=jpg" alt="Periodic Motion"><br> <br>  <b>2. Periodic  Motion</b> <br> <br>  Periodic motion repeated in equal time of intervals. <br> <br> <b>Examples</b> <br> <br> by a rocking chair, <br> <br>  a bouncing ball,<br> <br>  a vibrating tuning fork,<br> <br>  a swing in motion, <br> <br> the Earth in its orbit around the Sun,<br> <br>  and a water wave. <br> <br>  <img src="https://i.gifer.com/2HUu.gif" alt="Rectlinear Motion"><br> <br> <b>3.Rectlinear Motion</b> <br> <br> If the motion of a body is along a straight line, it is said to be the rectilinear or linear motion. <br> <br>  <b>Example </b> <br> <br>The motion of an arrow from a bow. <br> <br> Kids sliding down from a slide <br> <br> </p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>Unit of measurement</h2>  <p>The SI system, also called the metric system, is used around the world. <br> <br> <b>There are seven basic units in the SI system:</b>  <br> <br>1. The meter (m), <br> <br> 2. The kilogram (kg), <br> <br>3.The second (s), <br> <br>4.The kelvin (K), <br> <br> 5.The ampere (A),<br><br>6.The mole (mol), <br><br>7. The candela (cd). <br><br></p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 100 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter9()">Previous</button>      <button onclick="chapter11()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 1010 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}
//chapter 11
function chapter11() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 11.Light, Shadows and Reflections";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="https://cdn.pixabay.com/photo/2016/02/01/09/29/light-bulb-1173249_1280.jpg" alt="Light"><h2>Light</h2>  <p>Light is the energy that help us to see objects.<br><br><b>Sources of Light</b> <br><br> 1.Sun <br> 2.Torch <br> 3.Bulb etc <br> <br> <b>Light travels in straight line </b></p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Luminous objects</h2> <p>Object that gives out light called Luminous Objects <br> <br> <b> Examples </b> <br><br>Sun,Bulb,Torch etc.</p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <img src="Transparent.png" alt="Transparent Objects"><h2>Transparent Objects </h2>  <p>Objects that allow us to see clearly through it and pass light clearly that types of object called Transparent Objects<br><br><b>Example</b><br><br>Glass,air,water,etc.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <img src="translucent.png" alt="Translucent"><h2>Translucent Objects</h2><p>Objects that allow us to see but not clearly that types of object called Translucent Objects <br><br> <b>Example</b><br><br> Clothes, wax paper etc.</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<img src = "Opaque.png" alt = "Opaque object"/><h2>Opaque Objects</h2><p>Objects that do not allow us to see that types of Object called Opaque Objects. <br><br> <b>Example</b><br><br>Wood,Book etc.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = ' <img src="https://cdn.pixabay.com/photo/2020/04/20/08/27/palm-tree-silhouette-5067142_1280.png" alt="Shadows"><h2>Shadows</h2><p>The dark figure cast upon a surface by a body intercepting the ray from a source of light, that called Shadows. <br><br>Two Things to need to make a shadow. <br><br>1.Opaque Objects <br>2.Light source <br><br><p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = ' <img src="pinhole.png" alt="Pinhole Camera"><h2>Pinhole Camera </h2><p>Pinhole Camera is easy to build and it used to image the sun and brightly Light Objects.<br> </p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <img src="reflection.png" alt="Reflections"> <h2>Reflections</h2>  <p>Return of light from any object is called Reflections.<br><br> <b>Mirror reflection  gives us clear image.</b></p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 110 created 
divElement10.className = "box";
 divElement10.id = "box10";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter10()">Previous</button>      <button onclick="chapter12()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 11 created 
divElement11.className = "box";
 divElement11.id = "box11";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}
function chapter12() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 12.Electricity and circuits";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="electricity.png" alt="electricity"><h2>Electricity</h2><p>Electricity is the flow of electrical power that help us to work at night with awesome devices.</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Electric cell</h2><p>An electric cell is a device,which covert chemical energy into electric energy. <br><br><b>Cell has two terminals</b><br><br>1.Positive terminal(+) <br><br>2.Negative terminal (-)<br><br><b>How electric bulb glow?</b> <br><br> When electric cell terminals connected to each other then electric bulb glow. </p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Bulb</h2><p>What is inside of electric bulb? <br><br>1.Filament <br>2.Terminals(+,-)<br><br><b>What is Filament?<br><br></b><br<br>Filament is a thin wire that gives light when heat.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <img src="circuits.png" alt="circuits"> <h2>Circuits</h2><p>Electric circuits provides a compleate path between two therminals.</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<img src="switch.png" alt="switch"><h2>Switch</h2>  <p>Switch is a electric device that connected or disconnected two terminals.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<img src="conductor.png" alt="conductor"><h2>Conductor</h2><p>object that flow electricity is called Conductor. <br><br><b>Example</b><br><br>Silver,gold,copper,sea,water,etc.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = ' <img src="insulator.png" alt="Insulator"><h2>Insulator</h2>  <p>Object that do not flow electricity is called insulator.<br><br><b>Example</b><br><br>Rubber,glass,oil,diamond,dry wood etc.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>Help</h2>  <p>Help us to buy our premium notes. just Rs 25. Download Now! </p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 120 created 
divElement10.className = "box";
 divElement10.id = "box12";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter11()">Previous</button>      <button onclick="chapter13()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 1212 created 
divElement11.className = "box";
 divElement11.id = "box12";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}


function chapter13() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 13.Fun with magnets ";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="magnet.png" alt="magnet"><h2>Magnet</h2><p>magnet is a material that produce a magnetic field. <br> <br> Magnetic field is invisible but attract some materials like iron, steel,Nicole, cobalt etc. </p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>How magnet discovered ? </h2><p>The ancient Greeks were the discoverers of magnetite. There is a story about a shepherd named Magnes whose shoe nails stuck to a rock containing magnetite.</p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = '<h2>Magnetic materials </h2><p>Materials that attract by magnet is called magnetic materials. <br> <br> <b>Example</b><br> <br> Iron, cobalt,Nicole, steel etc.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <h2>Nonmagnetic materials</h2><p>Materials that do not attracted by magnet is called nonmagnetic materials.<br><br> <b>Example</b><br><br>Rubber, plastic,leather etc.</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>Types of magnet</h2><p>1. Natural magnets <br> <br> 2.Artificial magnets. <br> <br></p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<h2>Poles of magnets</h2><p> 1. North Pole <br><br>2. South pole. <br> <br> A freely align magnet always align in N-S direction.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Attraction of magnets</h2>  <p>Magnet attract to each other when it has opposite poles.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>Repulsion of magnets</h2><p>Magnets repel to each other when it has similar poles. <br><br>Magnets lose property if they are <br> <br> 1.heated <br> 2.hammered <br> 3.dropped <br> <br> Keep magnet away form this devices. <br> <br> 1. Computer, <br>2. Mobile, <br> 3. Cd etc.</p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 130 created 
divElement10.className = "box";
 divElement10.id = "box13";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter12()">Previous</button>      <button onclick="chapter14()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 1313 created 
divElement11.className = "box";
 divElement11.id = "box13";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}
function chapter14() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 14.Water";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg" alt="water"><h2>Water</h2><p>Water is a transparent,testless,colorless chemical substance.<br><br><a href = "https://en.m.wikipedia.org/wiki/Water#:~:text=Water%20is%20an%20inorganic%2C%20transparent,it%20acts%20as%20a%20solvent)." style = "color:teal;" >Know More</a></p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = '<img src="Clouds.png" alt="Clouds"> <h2>Clouds</h2><p>A cloud is made of water drops or ice crystals floting in the sky. <br><br>Cloud are an important part of weather of Earth.</p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = '<img src="Hail.png" alt="hail"> <h2>Hail</h2><p>Hail is look like ice that made with freeze of water drops.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = '<img src="Condensation.png" alt="Condensation"><h2>Condensation</h2><p>When water vapour convert into liquid water in the sky then called Condensation. <br><br>Condensation Make Cloud Droplets.</p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<img src="Drought.png" alt="Drought"><h2>Drought</h2>  <p>A drought is a period of time when lack of water, lack of rain, lack of underground water comes.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<img src="Evaporation.png" alt="evaporation"><h2>Evaporation</h2><p>When liquid water convert into gas or vapour is called evaporation</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<img src="https://cdn.pixabay.com/photo/2019/07/03/13/32/emergency-4314582_1280.png" alt="Flood"><h2>Flood </h2>  <p>When overflow water around us  which comes because of more rain and dame break that period called flood. <br><br><b>Ground Water</b><br><br>Water which exist into benith earth surface in rock and soil is called ground water. <br><br><b>Ocean</b><br><br>Ocean is a sea of salt water which covers approximately 71% surface of the Earth.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = '<h2>Rain Water Harvesting </h2>  <p>Rain water harvesting is a process of save water and reuse it. means saving of rain water is called rain water harvesting <br><br><b>Water vapour</b><br><br> Water vapour is the gasses phase of water. <br><br>Water vapour cand be produce from the evaporation of liquid water. <br><br><b>Water Cycle</b> <br> <br> water Cycle is is a process of continue work water within earth and atmosphere. <br><br>See Pic to know  More. <br> <br> <img src="watercycle.png" alt="Water Cycle"> <br> <br> </p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 140 created 
divElement10.className = "box";
 divElement10.id = "box14";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter13()">Previous</button>      <button onclick="chapter14()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 1414 created 
divElement11.className = "box";
 divElement11.id = "box14";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}
function chapter15() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 15.Air around us ";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="air.png" alt="air"><h2>Air</h2><p>Air is a micture of Nitrogen,Oxygen,Carbon dioxide,water vapour,dust particles and few other gasses.<br><br>Air is around us we can not see but we can feel air it. <br><br>If air is motion then we called <b>wind</b> <br><br> Air occupies space. <br><br>Air is also present in water and soil. </p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Atmosphere</h2><p>The envelope of air that around the earth is called atmosphere.<br><br> Atmosphere is necessary for life on the Earth. <br><br> Earth atmosphere is made with approx 78% of Nitrogen and 21% Oxygen and other gasses. </p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Carbon dioxide</h2><p>Carbon dioxide is present in the atmosphere of the earth at a low concentration and act as a greenhouse gas. <br><br> If Carbon dioxide is solid state then called dry ice. <br><br>Carbon dioxide known as symbole CO2.<br><br>Plants and Animals produce Carbon dioxide.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <h2>Oxygen</h2><p>Oxygen is a gas which exist in the earth atmosphere which is also known as symbole O. <br><br> Oxygen is used by Animals and Plants in the respiration process. <br><br> Respiration process is breathing  process.<br><br>Produce Oxygen by plants with the process of photosynthesis. <br><br> oxygen suppot burning </p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>Nitrogen</h2><p>Nitrogen is a gas which does not suppot burning.<br><br>Nitrogen is also known as symbole N.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<h2>Smoke</h2><p>When burn anything smoke produced . <br><br> Smoke contains a few gasses and dust particles.<br><br>somke is harmful.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Windmill</h2>  <p>A windmill is a structure of converting wind into energy that energy used to gathering electricity ,grinding grain,water pump.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>Help</h2>  <p>Help us to buy our premium notes. just Rs 25. Download Now! </p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 150 created 
divElement10.className = "box";
 divElement10.id = "box15";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter14()">Previous</button>      <button onclick="chapter16()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 1515 created 
divElement11.className = "box";
 divElement11.id = "box15";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}
function chapter15() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 15.Air around us ";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="https://cdn.pixabay.com/photo/2016/03/12/19/34/city-1252643_1280.png" alt="air"><h2>Air</h2><p>Air is a miture of Nitrogen,Oxygen,Carbon dioxide,water vapour,dust particles and few other gasses.<br><br>Air is around us we can not see but we can feel air it. <br><br>If air is motion then we called <b>wind</b> <br><br> Air occupies space. <br><br>Air is also present in water and soil. </p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = ' <h2>Atmosphere</h2><p>The envelope of air that around the earth is called atmosphere.<br><br> Atmosphere is necessary for life on the Earth. <br><br> Earth atmosphere is made with approx 78% of Nitrogen and 21% Oxygen and other gasses. </p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Carbon dioxide</h2><p>Carbon dioxide is present in the atmosphere of the earth at a low concentration and act as a greenhouse gas. <br><br> If Carbon dioxide is solid state then called dry ice. <br><br>Carbon dioxide known as symbole CO2.<br><br>Plants and Animals produce Carbon dioxide.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <h2>Oxygen</h2><p>Oxygen is a gas which exist in the earth atmosphere which is also known as symbole O. <br><br> Oxygen is used by Animals and Plants in the respiration process. <br><br> Respiration process is breathing  process.<br><br>Produce Oxygen by plants with the process of photosynthesis. <br><br> oxygen suppot burning </p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>Nitrogen</h2><p>Nitrogen is a gas which does not suppot burning.<br><br>Nitrogen is also known as symbole N.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<h2>Smoke</h2><p>When burn anything smoke produced . <br><br> Smoke contains a few gasses and dust particles.<br><br>somke is harmful.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Windmill</h2>  <p>A windmill is a structure of converting wind into energy that energy used to gathering electricity ,grinding grain,water pump.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>Help</h2>  <p>Help us to buy our premium notes. just Rs 25. Download Now! </p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 150 created 
divElement10.className = "box";
 divElement10.id = "box15";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter14()">Previous</button>      <button onclick="chapter16()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 1515 created 
divElement11.className = "box";
 divElement11.id = "box15";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}

function chapter16() {
  document.querySelector('*').scrollTo(0,0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = " 16.Garbage In garbage Out. ";
  //notes making function 
  //create new div

divElement1.className = "box";
divElement1.id = "box1";
divElement1.innerHTML = ' <img src="https://cdn.pixabay.com/photo/2017/09/08/18/20/garbage-2729608_1280.jpg" alt="garbage"><h2>Garbage</h2><p>Garbage is a unwanted materials that people throw away. <br><br> Garbage also known as waste,trash, rubbish, junk. <br><br> we produce garbage everyday like unwated food,paper,broken,furniture etc.</p>';
ContentContainer.appendChild(divElement1);
  
//div element 2 created 
divElement2.className = "box";
divElement2.id = "box2";
divElement2.innerHTML = '<h2>Landfill</h2><p>Place where waste is kept known as landfill.</p>';
ContentContainer.appendChild(divElement2);
  
//div element 3 created 
divElement3.className = "box";
divElement3.id = "box3";
divElement3.innerHTML = ' <h2>Compost</h2><p>We can make compost using waste. <br><br> compost used to fertilise and improve the soil.</p>';
ContentContainer.appendChild(divElement3);
  
//div element 4 created 
divElement4.className = "box";
divElement4.id = "box4";
divElement4.innerHTML = ' <h2>Vermicompositing</h2><p>Process of making compost from garbage using redworm is called Vermicompositing. </p>';
ContentContainer.appendChild(divElement4);
  
//div element 5 created 
divElement5.className = "box";
divElement5.id = "box5";
divElement5.innerHTML = '<h2>Recycling</h2><p>Recovery of waste materials  and use it to make new product is called recycling  <br><br> Recycling is very necessary to  our earth so find more idea for recycle.</p>';
ContentContainer.appendChild(divElement5);
  
//div element 6 created 
divElement6.className = "box";
divElement6.id = "box6";
divElement6.innerHTML = '<h2>Smoke</h2><p>When burn anything smoke produced . <br><br> Smoke contains a few gasses and dust particles.<br><br>somke is harmful.</p>';
ContentContainer.appendChild(divElement6);
  
//div element 7 created 
divElement7.className = "box";
divElement7.id = "box7";
divElement7.innerHTML = '<h2>Windmill</h2>  <p>A windmill is a structure of converting wind into energy that energy used to gathering electricity ,grinding grain,water pump.</p>';
ContentContainer.appendChild(divElement7);
  
//div element 8 created 
divElement8.className = "box";
divElement8.id = "box8";
divElement8.innerHTML = ' <h2>Help</h2>  <p>Help us to buy our premium notes. just Rs 25. Download Now! </p>';
ContentContainer.appendChild(divElement8);


//div element 9 created 
divElement9.className = "box";
divElement9.id = "box9";
divElement9.style.backgroundColor = 'teal';
divElement9.innerHTML = '<h2><a style="color:white;" href="Notes.html">Downloads Notes</a></h2>';
ContentContainer.appendChild(divElement9);
  
//div element 160 created 
divElement10.className = "box";
 divElement10.id = "box16";
 divElement10.style.backgroundColor = 'teal';
     divElement10.innerHTML = '<h2>   <button onclick="chapter15()">Previous</button></h2>';
  ContentContainer.appendChild(divElement10);
  
//div element 1616 created 
divElement11.className = "box";
 divElement11.id = "box16";
 divElement11.style.backgroundColor = 'teal';
   divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);

}
