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



//smooth scroll hide to and bottom navigation
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("chapter1").style.top = "0px";

    document.getElementById("bottom__Nav").style.bottom = "0";
  } else {
    document.getElementById("chapter1").style.top = "-100px";

    document.getElementById("bottom__Nav").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
// wewelcome screen function
function welcome() {
  document.getElementById("welcome").style.transform = 'scale(0)';
}

setTimeout(function() {
 welcome();
}, 1000);

//dark mode script
function darkMode() {
  document.getElementById("darkModeContainer").style.display = "flex";
}

// on dark mode
function on() {
  let NavTop = document.getElementById("chapter1");
  let NavBottom = document.getElementById("bottom__Nav");
  let DarkModeCon = document.getElementById("darkModeContainer");
  let fullbody = document.getElementById("body");
  let footer = document.getElementById("footer");
  
  document.getElementById("ToDo").style.color="#b9b9b9";
  
  
  fullbody.style.backgroundColor = "#191919";
  fullbody.style.color = "#a5a5a5";
  NavTop.style.backgroundColor = "#191919";
  NavBottom.style.backgroundColor = "#191919";
  DarkModeCon.style.backgroundColor = "#191919";
  footer.style.backgroundColor = "#191919";
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
function off() {
  let NavTop = document.getElementById("chapter1");
  let NavBottom = document.getElementById("bottom__Nav");
  let DarkModeCon = document.getElementById("darkModeContainer");
  let fullbody = document.getElementById("body");
  let footer = document.getElementById("footer");
  document.getElementById("ToDo").style.color="black";
  fullbody.style.backgroundColor = "white";
  fullbody.style.color = ""
  NavTop.style.backgroundColor = "";
  NavBottom.style.backgroundColor = "white";
  DarkModeCon.style.backgroundColor = "white";
  footer.style.backgroundColor = "white";
  darkModeContainer.style.display = "none";
  document.getElementById("off").style.backgroundColor = "teal";
  document.getElementById("on").style.backgroundColor = "";
  
    //to do list dark mode
  document.getElementById("todolist").style.backgroundColor = "";

document.getElementById("").style.backgroundColor = "";

}
//main container
let ContentContainer = document.querySelector(".ContentContainer");

//sidebar opener
function sideOpener() {
  document.querySelector('.sideMenuCon').style.left = 0;
  document.querySelector('.title').style.position = "relative";
}

//sidebar closer
function closeSideNavigation() {
  document.querySelector('.sideMenuCon').style.left = "-100%";
  document.querySelector('.title').style.position = "sticky";
  document.getElementById("darkModeContainer").style.display = "none";

}
on();

//show default
chapter1();
//chapter 1
function chapter1() {
  document.querySelector('*').scrollTo(0, 0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = document.getElementById('chapter01').innerHTML;
  //notes making function
  //create new div

  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = "<h2>Matter</h2><p>Anything which occupy space and have a mass is called matter. <br> <br> Example : Air , water , test , smell ,etc.  <b> <br> <br>Physical nature of matter</b><br><br>1. Matter is made up of particle. <br> 2. The particles of matter are very small. <br><br><b>Characteristics Of Matter's  Particles.</b><br><br>1. Particles of matter have space between them.<br>  <br> 2. Particles of matter are continuously moving. <br> <br>  3.  Particles of matter attract each other. <br><br>  4. As the temperature rises particles move faster. <br> <br>  5. Increasing  in the temperature the kinetic energy of the particle also increase. <br> <br> </p>";
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = "<h2>Diffusion</h2>  <p>The intermixing of two types of Matter's particle is called diffusion.<br> <br> On heating  diffusion becomes faster.</p>";
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = ' <h2>State Of Matter.</h2>  <p>1. Liquid <br>2. Solid <br>3. Gases<br><br> <b>Liquid</b><br><br>Objects that does  have fixed volume but does not fixed shape is called Liquid. <br> <br> Example : Water , Milk , Oil ... <br><br><b>Solid</b><br><br>Objects that have fixed volume and fixed shape is called solid <br> <br> Example : Wood , Stone , Brick ... <br><br><b>Gases</b><br><br>Objects that does not have fixed vvolume and does not fixed shape  is called Gases. <br> <br>  Example : Air , Oxygen , Nitrogen ... </p>';
  ContentContainer.appendChild(divElement3);

  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = ' <h2>Properties of Liquid.</h2>  <p>1. Liquid have a fixed volume but they have no fixed shape.<br> <br>2.Liquid can be compressed. <br> <br> 3. Liquid have moderate to high densities. <br> <br> 4. Liquid generally flow easily.<br><br>5. Liquid take containers shape easily.</p>';
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = ' <h2>Properties of Solid.</h2> <p>1. Solid have fixed shape and fixed volume. <br> <br> 2   . solid cannot be compressed much. <br> <br>3. Solid have high densities. <br> <br> 4. Solid do not fill their container completely.  <br> <br>5.  Solid can not be flow.</p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = ' <h2>Properties of Gases.</h2>  <p>1. Gases have neither a fixed shape and no fixed volume. <br> <br>2. Gases can be compressed easily.  <br> <br>3. Gases have very low densities.  <br> <br> 4. Gases fill their container completely. <br> <br>5. Gases flow easily.</p>';
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = ' <h2>Melting point</h2><p>The temperature at which a solid melts to become a liquid at the atmospheric pressure is called its melting point. <br> <br> The melting point of ice is 273.16 K. <br> <br><b>Fusion</b><br><br> The process of melting that is change of solid state into liquid state is known as fusion.</p>';
  ContentContainer.appendChild(divElement7);

  //div element 8 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = ' <h2>Know also </h2>  <p>The amount of heat energy that is needed to convert 1 kg of solid into liquid at atmospheric pressure at its melting point is known as the latent heat of the fusion. <br><br> So particles in water at 0 degree Celsius and (273 K) have more energy as compared to particles in ice at same temperature. <br> <br> boiling point of water is 100• C.<br> <br> </p>';
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
  document.querySelector('*').scrollTo(0, 0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = document.getElementById('chapter2').innerHTML;

  //notes making function
  //create div element 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Compound</h2>  <p>The compound is a pure substance made up of two or more elements combined chemically in a definite ratio. <br> <br><b>Characteristics Of Compounds.</b><br><br>1. Compound has fixed melting point and boiling point. <br> <br>2. Compound is a homogeneous substance.  <br> <br>3. Constituent elements can be separated by chemical process.</p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Mixtures</h2><p>Mixture made up of two or more elements or compounds mixed in any ratio/proportion.</p>';
  ContentContainer.appendChild(divElement2);

 

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = ' <h2>Types of Mixtures.</h2><p>There are two categories of mixtures. <br> <br> 1. Homogeneous Mixtures <br> 2. Heterogeneous Mixtures <br> <br></p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = '<h2>Homogenous Mixtures </h2><p>When we add sugar, water and lemon juice together they all uniformly mix with each other. <br> <br> Now it is no possible to separate these substances from the mixture. <br> <br> Such mixtures in which the components mix with each other uniformly are called Homogenous Mixtures. <br> <br>The ratio of compositions of homogeneous mixtures can be different.<br> <br> For Example, one may add two spoons of sugar in lemonade while someone else may add only one spoon of sugar in their lemonade. Still, lemonade is a homogeneous mixture. <br> </p>';
  ContentContainer.appendChild(divElement6);

  //div element 9 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = '<h2>Heterogeneous Mixtures.</h2><p>The components in a heterogeneous mixture do not completely dissolve in each other and we can separate them by physical means. <br> <br>  In other words, the composition of such mixtures is not uniform.  <br> <br> For Example, If we mix sand in water the sand settles down in water after some time and we can separate it by filtration.</p>';
  ContentContainer.appendChild(divElement7);

  //div element 7 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = '<h2>Properties of Mixtures</h2><p>1.It may be homogeneous or heterogeneous. <br> <br> 2. The properties of constituent substances are retained. <br> <br> 3. New compound is formed.  <br> <br> 4.Elements can be separated by simple physical processes. <br><br>5. It does not have a fixed melting and boiling point.</p>';
  ContentContainer.appendChild(divElement8);

 //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>What is an alloy? </h2> <p> A alloy is a mixture of different metals or non-metals and metals that cannot be separated from each other using physical methods.<br> <br> Example : <br> <br> Brass – Mixture of Copper with up to 50% zinc. <br> <br> Bronze – Mixture of Copper with up to 12% tin.</p>';
  ContentContainer.appendChild(divElement3);

  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = "<h2>What is a substance?</h2><p>Anything that can not be broken into further particles by applying any physical processes is called a Substance. <br> <br> Matter can be classified into two types of substances <br> <br> 1. Pure substances <br> <br> 2. Mixtures <br> <br> <b>Pure Substance</b><br><br> A substance that consists of only one type of particle is called a Pure Substance. <br> <br> For Example : Diamond, Salt, Sulfur, Tin.</p>";
  ContentContainer.appendChild(divElement4);

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
  document.querySelector('*').scrollTo(0, 0);
  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = document.getElementById('chapter3').innerHTML;

  //notes making function
  //create div element 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Atom and Molecules Intro</h2>  <p>Before start this chapter you need to know about basic so <br> <br><b>What is an atom?</b><br><br>An atom is a smallest particles of any substances.<br> <br> <b>What is a Molecules?</b><br><br>Molecules is also a smallest particles of any substances but Molecules show the all properties of that substances. <br><br>Atom size is measured in unit of nm (nanometer). <b>1nm ? 10-9 m.</b><br><br> Hydrogen atom is the smallest of all. Its size is only 10-10 nm. <br> <br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = "<h2>Dalton's atomic theory</h2><p>According to Dalton's atomic theory,<br> All matter is made up of small particles called atoms. <br> <br> <b>Atom's  properties</b><br><br>1. Atom is invisible. <br><br> 2.Atom is indivisible.<br><br>3.Atoms of an element are alike in all aspects. <br><br>4.Atoms of different elements combine in fixed whole number ratios to form compounds. <br> <br>5.Atoms can neither be created nor destroyed. <br> <br> <b>Drawbacks of Dalton's Atomic Theory were as follows :</b><br><br>According to Dalton, an atom is indivisible but later on it was proved that atom can be subdivided into electrons, protons and neutrons. <br> <br> Atoms of an element can somehow differ from each other. <br> <br> So,these drawbacks led to the failure of Dalton's theory of an atom. <br> <br> We also know that a lot of chemical reactions take place in our day to day life like making of tea,changing milk to curd, making cheese from milk and lots more. <br> <br>  All the chemical reactions taking place obey certain set of laws. <br> <br>  Let us study these chemical reactions and the rules that they obey.</p>";
  ContentContainer.appendChild(divElement2);

 

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = ' <h2>Chemical reaction</h2><p>The process by which some substances react to form a new substance. <br> <br> The substances which react are called reactants and the new ones formed are called products. <br> <br> For example: <b>A + B = C + D </b><br><br> In this, A and B are <b> reactants</b> and C and D are called <b>products</b>. <br> <br> For example: when we make tea, we add sugar, tea, milk and water. We mix them and heat the mixture. <br> <br>  The result is that we get a new substance that is tea.</p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = "<h2>Laws of chemical combination.</h2><p>There are certain sets of laws that are obeyed by all chemical reactions. <br> <br> These laws are given by Lavoisier & Joseph. <br> <br> let's us study them in detail.</p>";
  ContentContainer.appendChild(divElement6);

  //div element 9 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = '<h2>Law of conservation of mass.</h2><p>According to this law, <br> <br> matter can not be created nor destroyed in a chemical reaction. That is, it always remains constant. <br> <br> Like, in all chemical reactions the total mass of products is equal to the total mass of reactants. <br> <br> For example:- 2H² + O² = 2H²O <br> <br> This example shows that the total mass of reactants is equal to the total mass of products formed which is in accordance with the law. <br> <br></p>';
  ContentContainer.appendChild(divElement7);

  //div element 7 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = '<h2>Law of constant proportions. or Law of definite proportion. </h2><p>According to it, <br> in a chemical substance, the same elements are always present in a definite proportion by mass and volume irrespective of the method of preparation involved. <br> <br> For example <br> <br> In Co2 molecule, the elements that form it remain the same that is carbon and oxygen and also, the ratio of C and O remains the same that is 3:8 by mass (i.e. 12.32) and 1 : 2 by volume. <br> <br></p>';
  ContentContainer.appendChild(divElement8);

 //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = "<h2>The atomic mass of the element</h2> <p>If we try to find the exact mass of an atom, we can't find it. <br> <br> The reason being that an atom is too small in size that it is difficult to measure its size and moreover, the size of an atom changes, depending upon its neighbouring atoms. <br> <br> Therefore, instead of finding its absolute mass, we try to find the relative mass of an atom. <br> <br>  The standard element chosen for finding relative mass is carbon-6. <br> <br> The relative atomic mass of an atom of an element is defined as the average relative mass of an atom as compared to an atom of 612c taken as 12u. <br> <br> <b>Atomic mass:</b><br><br> Atomic mass is the number of times an atom of an element is heavier than 1/12th of a Carbon atom. <br> <br> </p>";
  ContentContainer.appendChild(divElement3);

  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = "<h2>Help Us To Buy Our Premium Notes.</h2>";
  ContentContainer.appendChild(divElement4);

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
  divElement10.innerHTML = '<h2>     <button onclick="chapter2()">Previous</button> <button onclick="chapter4()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);

  //div element 12 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 4
function chapter4() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter4').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Materials</h2><p></p>';
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
//chapter 5
function chapter5() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter5').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Cell </h2><p>It is the structural and functional unit of life. <br> <br> Cell is termed as the structural unit of life as it provides structure to our body. <br> <br> Cell is considered as the functional unit of life as all the functions of the body takes place at cell levels. <br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Discovery of cell.</h2>  <p>Cell discovered by Robert Hooke in 1665. <br> <br> He is also discovered nucleus in the cell in 1831.</p> ';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>Cell theory</h2> <p>Cell theory states that: <br> <br> 1.All living organisms are composed of cells. <br> <br> 2.Cell is the fundamental unit of life. <br> <br>3.All new cells come from pre-existing cells. <br> <br><b>Types of Organisms on the Basis of Number of Cells </b><br><br> There are two kinds of organisms on the basis of cells: <br> <br> <b>1. Unicellular Organisms:</b><br><br> The organisms that are made up of single cell and may constitute a whole organism, are named as unicellular organisms. <br> <br> For example <br> <br> Amoeba, Paramecium, bacteria, etc. <br> <br> <b>2. Multicellular Organisms:</b> <br> <br> The organisms which are composed of a collection of cells that assume function in a coordinated manner, with different cells specialized to perform particular tasks in the body, are named as multicellular organisms. <br> <br> For example: <br> <br>  Plants, human beings, animals, etc. <br> <br> </p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Types of Cells.</h2><p>The cells can be categorized in two types: <br> <br> 1. Prokaryotic Cell <br><br>2. Eukaryotic Cell <b>1. Prokaryotic cell</b><br><br> Prokaryotic cells are cells in which true nucleus is absent. <br> <br> They are primitive and incomplete cells. <br> <br> Prokaryotes are always unicellular organisms. <br> <br> For example <br><br> archaebacteria, bacteria, blue green algae are all prokaryotes. <br>  <br> <b>2.Eukaryotic cell </b><br><br> These have advantage and complete cell these cells contain membrane bound nuclei and other cellular organisms and are called a eukaryotic cell. <br> <br>  such cells are found in unicellular and multicellular plant and animal are containe plasma membrane nucleus and cytoplasm with ribosomes and cellular organisms such as mitochondria.<br><br> </p>';
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Structure of Cell.</h2><p>Cell is generally composed of three basic components: <br> <br>1. Cell wall and cell membrane <br> <br> 2. Nucleus <br> <br> 3. Cytoplasm <br><br></p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = ' <h2>Cell Wall</h2> <p>cell wall is non-living, thick and freely permeable covering made up of cellulose. <br> <br> It is present in eukaryotic plant cells and in prokaryotic cells. <br> <br> <b>Functions</b><br><br> 1. It determines the shape and rigidity to the plant cell. <br> <br> 2. It protects the plasma membrane.<br> <br>3. It prevents desiccation or dryness in cell. <br> <br>4. It helps in the transport of varous substances in and out of the cell. <br> <br> <b>Cell membrane or Plasma membrane </b><br><br>  Plasma membrane is the covering of the cell that separates the contents of the cell from its external environment. <br> <br> It is a living part of the cell and is present in cells of plants, animals and microorganisms. <br> <br> It is very thin, delicate, elastic and selectively permeable membrane. <br> <br>It is composed of lipid and protein. <br> <br><b>Function</b><br><br>1. As it is selectively permeable membrane, it allows the flow of limited substances in and out of the cell. <br><br> </p>';
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = '<h2>Nucleus</h2><p>Nucleus is dense and spherical organelle. <br> <br>Nucleus is bounded by two membranes, both forming nuclear envelope. <br> <br> Nuclear envelope contains many pores known as nuclear pores. <br> <br>The fluid which present inside the nucleus is called nucleoplasm. <br> <br> Nucleus contains chromosomes and chromosomes contain genes which are the centres of genetic information. <b>Functions</b><br><br>1. Nucleus controls all the metabolic activities of the cell. <br> <br>3. It regulates the cell cycle. <br><br><br></p>';
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter4()">Previous</button> <button onclick="chapter6()">Next</button> </h2>';
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

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter6').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Tissues</h2><p>A group of cells that are specialized to perform a particular function forms a tissue. <br><br> Tissues are mainly classified into two types: <br> <br> 1.Plant Tissues <br> <br> 2. Animal Tissues <br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>1.Plant tissues</h2> <p>Plants do not move, they are stationary. <br> <br>  Most of the tissues they have are supportive, which provides them with structural strength. <br> <br> <b>Types of Plant Tissues:</b><br><br> Based on the dividing capacity of the tissues, <br> <br> various plant tissues can be classified as growing or meristematic tissue and permanent tissue which have further sub-divisions as explained <br> <br> 1.Meristematic Tissue <br> <br> 2. Permanent Tissue  <br> <br></p> ';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>1.Meristematic Tissue</h2> <p>Meristematic tissues are responsible for growth in plants. <br> <br> Cells in these tissues can divide and form new cells. <br> <br> <b>Meristematic tissues are of three types: </b><br> <br> <b>1. Apical Meristem: </b><br> <br> It is present at the growing tip of the stem and roots and increases the length. <br> <br><b>2. Lateral Meristem or cambium:</b><br> <br> It is present beneath the bark. It is responsible for growth in girth of trunk. <br> <br> <b>3.Intercalary Meristem:</b> <br> <br>It is present at internodes or base of the leaves and increases the length between the nodes.<br> <br></p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>2.Permanent Tissue</h2><p> Cells of meristematic tissues change their shape & size to get specialised in performing other functions in plants body.This process is called <b>Differentiation.</b><br><br><b>Permanent tissues are of two types:</b><br><br> <b>1. Simple tissues:</b><br><br>This type of tissue is composed of same type of cells. <br> <br> <b>These are again of four types:</b><br><br><b>1. Parenchyma simple tissues:</b><br><br>Cells of parenchyma tissues are live. They are oval, elongated and loosely packed with large inter-cellular space, forming basic packing of tissue and are found throughout the plant body. <br> <br> <b>Functions of parenchyma:</b><br><br>1.They provide mechanical support to the plant body. <br> <br> 2.They store food and nutrients in vacuoles. <br> <br> <b>Collenchyma simple Tissues: </b><br><br> Cells of collenchyma are live. They are oval and elongated and tighily packed with no inter-cellular spaces. They are found below epidermis in leaves and stem. <br> <br><b>Functions of collenchymas tissues:</b><br><br>1.They provides mechanical support to plant.<br> <br> <b>3. Sclerenchyma Simple Tissues:</b><br><br>Cells of sclerenchym are dead. They are narrow and elongated. The cell wall in sclerenchyma is composed of lignin which makes it hard. Sclerenchyma are found around vascular bundles, veins of leaves in hard covering of seeds and nuts. <br> <br>  For example: Scalerenchyma tissues are found in coconut husk. <br> <br> <b>Functions of sclerenchyma:</b><br><br> 1.They help to makes parts of plant hard and stiff. <br> <br> <b>Protective tissues:</b><br><br> They protect the plant body by forming an outer layer.<b>There are two types of protective tissues:</b><br><br><b>1.Epidermis Simple Tissues:</b>Epidermis tissue covers the entire body of plant. <br> <br> They protect plant from injury, germs and water loss. <br> <br> <b>2. Cork Simple Tissues:</b><br><br>These types of tissue consist dead cells with no intercellular spaces. <br> <br> They form the outer layer of old tree trunks<br><br> </p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Complex tissues:</h2><p>Group of different type of cells performing common task together are named as complex tissues. <br> <br><b>Complex tissues are of two types:</b><br><br><b>1.Xylem</b><br><br> <b>2.Phloem</b><br><br> <b>1. Xylem:</b><br><br>This is the tissue that transports water and nutrients from root to upper parts of plant. <br> <br> It is composed of four types of cells <br> <br> For example <br> <br>  tracheid, vessel, xylem parenchyma and xylem sclerenchyma (fibre).<br> <br> <b>Their four typea explain here :</b><br><br>1.Trachieds are long elongated cells with tapered ending. <br> <br> Trachied cells are dead. Trachied transports water throught root.</p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = '';
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = '';
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter5()">Previous</button> <button onclick="chapter7()">Next</button> </h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 7
function chapter7() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter7').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Biodiversity or Biological Diversity</h2><p>Biodiversity refers to the variety of living organisms present on a particular region. Eastern Ghats, Western Ghats, Tropical rain forests, Nilgiri mountain range and Himalayas are Biodiversity rich regions of India.<br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Taxonomy</h2> <p>It is a branch of biology which deals with identification, nomenclature, and classification of organisms. Carolus Linnaeus is called the father of taxonomy.<br> <br></p> ';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>Classification</h2> <p>The method of arranging organisms into groups or sets on the basis of similarities and differences is called classification. <br> <br> <b>Classification and Evolution:</b><br><br> It is a well established fact that all the life forms have evolved from a common ancestor. <br> <br> Scientists have proved that the life begun on the earth in the form of simple life forms. During the course of time, complex organism evolved from them. So, classification is also based on evolution.<br><br></p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Classification System</h2><p> <b>1. Two kingdom classifications:</b><br><br>  Carolus Linnaeus in 1758 classified the living organisms into two groups as plants and animals. <br> <br><b>2. Five kingdom classification:</b><br><br>  H. Whittaker in 1959 further classified the organisms into five kingdoms as Kingdom Monera, Kingdom Protista, Kingdom Fungi, Kingdom Plantae, and kingdom Animalia. <br> <br> The five kingdoms and their key characteristics are given below:<br> <br>   <b>1. Monera: </b><br><br> These are prokaryotes; which means nuclear materials are not membrane bound in them.They may or may not have cell wall.They can be autotrophic or heterotrophic.All organisms of this kingdom are unicellular. <br> <br>Examples: Bacteria, blue green algae (cyanobacteria) and mycoplasma.<br> <br> <b>2.Protista: </b><br><br> These are eukaryotes and unicellular.Some organisms use cilia or flagella for locomotion.They can be autotrophic or heterotrophic.<br><br> Exmples: Plants like unicellular algae, diatoms; animals like protozoans (Amoeba, Paramecium, Euglena)<br><br><b>3. Fungi:</b><br><br> These are eukaryotic organisms with cell wall, made up of Chitin. They do not perform Photosynthesis (Heterotrophs).They may be unicellular (yeast) or filamentous (most fungi).They feed on decaying organic materials. Such a mode of nutrition is called saprophytic. Some fungi live in symbiotic relationship with other organisms (Lichens), while some are parasites as well. <br> <br> Examples: Mushrooms(Agaricus), green mold(Penicillium), smut(Aspergilus).<br> <br> <b>4. Plantae:</b><br><br> These are multicellular and autotrophs.Presence of chlorophyll is a distinct characteristic of plants, because of which they are capable of taking out photosynthesis.Cell wall is present.<br> <br> <b>5. Animalia:</b><br><br>These are eukaryotic, multicellular and heterotrophic organisms.Cell wall is absent.<br><br> </p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>1. Thallophyta:</h2><p>Basic and elementary plants with undifferentiated body parts (thallus type). <br> <br> Reproduce through spores.Commonly known as algae. <br> <br>Examples: Spirogyra, Chara, Ulva, Ulothtrix, etc.<br> <br> <b>2. Bryophyta:</b><br><br> Plant body is differentiated into stem and leaf like structure. <br> <br> Vascular system is absent, which means there is no specialized tissue for transportation of water, minerals and food. <br> <br> Found on both land and water therefore known as‘Amphibians of Plantae kingdom’. <br><br> Examples: Moss, Liverwort, Hornwort, etc.<br> <br> <b>3. Pteridophyta:</b><br><br> Plant body is differentiated into root, stem and leaf.Vascular system is present.Plants do not bear seeds and hence are called cryptogams.Examples: Marsilea, Fern, horsetails, etc.Note: Plants of rest of the divisions bear seeds and hence are called phanerogams.<br> <br> <b>4. Gymnosperms:</b><br><br> Plants have naked seeds without fruits or flowersThe word ‘gymnos’ means naked and ‘sperma’ means seed.They are perennial, evergreen and woody plants. <br> <br> Examples: Pine, Cycas, Deodar, etc<br> <br> <b>5. Annelida: </b><br><br> These are bilaterally symmetrical and triploblastic.True body cavity is present.The body is divided into segments and hence the name annelida.Extensive Organ differentiation.</p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = '';
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = '';
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter6()">Previous</button> <button onclick="chapter8()">Next</button> </h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 8
function chapter8() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter8').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>What is motion?</h2><p>If the location of an object changes with time the object is said to be in motion.<br><br><b>Motion in a Straight Line</b><br><br>When an object moves along a straight line, the motion of the object is called rectilinear motion. <br><br> For example; motion of a car on highway. <br><br><b>Distance</b><br><br>  The distance covered by an object is described as the total path length covered by an object between two endpoints. <br> <br> Distance is a numerical quantity. <br> <br> We do not mention the direction in which an object is travelling while mentioning about the distance covered by that object.<br><br> </p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Distance and Displacement</h2> <p> <b>Displacement :</b><br><br> The shortest possible distance between the initial and final position of an object is called Displacement. <br> <br>Displacement depends upon the direction in which the object is travelling. <br><br>Displacement is denoted by Δx. <br><br> Δx = xf − x0 <br><br> Where, <br><br> xf = Final position on the object<br><br> x0 = Initial position of the object <br><br> <b>Zero Displacement </b><br><br>When the first and last positions of an object are same, the displacement is zero. <br><br> </p> ';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>Scalar and Vector Quantities</h2> <p><b>Scalar Quantities</b><br><br>Scalar is a quantity with which direction is not associated. For example, Mass, temperature, time, etc.<br><br> <b>Vector Quantities</b><br><br>Vector is a quantity which has both magnitude and direction. For example, Force, position, etc.<br><br><br><br></p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Average speed:</h2><p>The average speed of an object is obtained by dividing the total distance travelled by an object by the total time taken.<br><br> <b>Average Speed = Total distance/Total Time</b><br><br></p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Velocity(v)</h2><p>Speed of an object in a particular direction is named as velocity. <br><br> For Example  <br><br>It is the displacement of body in unit time.</p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = '<h2>Acceleration(a)</h2><p>The rate of change of velocity is termed as acceleration. <br><br>It is represented as:<br><br>Formulas for Acceleration <br><br> Its SI unit is metre/seccond2 (m/s2). <br><br> It is a vector quantity. <br><br> The acceleration is taken to be positive if it is in the direction of velocity and negative when it is opposite to the direction of velocity.<br><br> Negative acceleration is also named as retardation or deacceleration. <br><br> An object moving on a circular path though with uniform speed, is always said to be accelerated as it changes its direction every moment. <br><br> <b>Uniform acceleration</b><br><br> When velocity of body changes by equal amounts in equal time intervals, acceleration is said to be uniform. <br><br>  For example: <br><br>  Motion of a freely falling ball. <br><br> <b>Non- uniform acceleration</b><br><br>When velocity of body changes by unequal amounts in equal intervals if time, acceleration is said to be non - uniform. <br><br>  For example: <br><br>  Motion of car.</p>';
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = '<h2>Some Questions for best practice.</h2> <p>Q1.The phenomenon of motion was placed on a sound scientific footing by two scientists. Write their names. <br><br> <b>Answer : </b> Galileo Galilei and Isaac Newton. <br><br>Q2.Are rest and motion absolute or relative terms? <br><br><b>Answer :</b> They are relative terms.<br><br> Q3.Suppose a ball is thrown vertically upwards from a position P above the ground. It rises to the highest point Q and returns to the same point P. What is the net displacement and distance travelled by the ball?<br><br> <b>Answer : </b> Displacement is zero. Distance is twice the distance between position P and Q. <br><br>Q4.Which speed is greater: 30 m/s or 30 km/h? <br><br> <b>Answer: </b> 30 m/s<br><br>Q5.What do you mean by2 m/s after every second.<br><br>Q6.Can uniform linear motion be accelerated?<br><br> <b>Answer:</b>No<br><br>Q7.Define one radian. <br><br> <b>Answer:</b> It is the angle which is subtended at the centre by an arc having a length equal to the radius of the circle. <br><br> </p>';
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter7()">Previous</button> <button onclick="chapter9()">Next</button> </h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 9
function chapter9() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter9').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Characteristics Of force</h2><p>1.Force has both magnitude and direction,  making it a vector quantity. <br><br>2.It is measured in the SI unit of Newton. <br><br>3.It is represented by the symbol F.<br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Effects of Force</h2> <p>1.It can change the speed of a body. <br><br> 2.It can change the direction of Force and Laws of Motion of a body. <br><br>3.It can change the shape of a body. <br><br></p> ';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>Scalar and Vector Quantities</h2> <p><b>Scalar Quantities</b><br><br>Scalar is a quantity with which direction is not associated. For example, Mass, temperature, time, etc.<br><br> <b>Vector Quantities</b><br><br>Vector is a quantity which has both magnitude and direction. For example, Force, position, etc.<br><br></p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Balanced and Unbalanced Forces</h2><p> <b>Balanced Forces</b><br><br> If the resultant of applied forces is equal to zero, it is called balanced forces. <br><br> For example: <br><br> In the tug of war game when the force applied by both teams is equal in magnitude then the rope does not move in either side. <br><br> This is due to the balanced forces in which resultant of applied forces comes out to be zero.<br><br><b>Characteristics of Balanced force</b><br><br> 1.Balanced forces do not cause any change of state of an object. <br><br> 2.Balanced forces are equal in magnitude and opposite in direction. <br><br>3.Balanced forces can change the shape and size of an object. <br><br>  For example: <br><br>  When we press a balloon from opposite sides,  the size and shape of balloon is changed.<br><br><b>Unbalanced Force</b><br><br> If the resultant of applied forces are greater than zero, the forces are called unbalanced forces. <br><br>To move an object unbalanced forces are to be applied from the opposite directions. <br><br>  In case of unbalanced forces acting on a body, it moves a in the direction of the greater force.<br><br><b>Unbalanced forces can</b><br><br> Change the speed and position of an object. <br><br> Change the shape and size of an object. <br><br></p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Some Common Forces</h2><p><b>Muscular Force:</b><br><br> The force exerted by the human body muscles is called muscular force.<br><br><b>Gravitational Force:</b><br><br>The gravitational force applied by earth on an object in downward direction is called gravitational force.<br><br><b>Frictional Force:</b><br><br>The force which opposes the Force and Laws of Motion of an object while being in contact with the other object, is known as frictional force.<br><br><b>Air Resistance:</b><br><br> Force which is exerted on the objects while flying in air is named as air resistance. It acts in a direction opposite to the velocity of the object. <br><br> </p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = "<h2>Newton’s First Law of Force and Laws of Motion or Law of Inertia</h2><p>It states that any object will remain in the state of rest or in uniform Force and Laws of Motion along a straight line until it is compelled to change the state by applying external force. <br><br><b>Inertia</b><br><br>Inertia is a property or tendency of every object to resist any change in its state of rest or of uniform Force and Laws of Motion. <br><br> It is measured by the mass of an object. The heavier the object, the greater will be its inertia. <br><b></p>";
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = "<h2>Application of Newton's first law of Force and Laws of Motion:</h2><p>When a straight moving bus suddenly stops down, the passengers sitting inside fall in the forward direction. <br><br> This is because the body of the passenger initially moving in a straight line tends to move the same way even after the brakes are applied, making the passenger fall in the forward direction. <br><br> When we hit a carpet it loses inertia of rest and moves. But the dust in it retains inertia of rest and is left behind. Thus dust and carpet are separated. <br><br>When a tree is shaken, it moves to and fro. But fruit remains at rest due to its inertia of rest. Due to this fruit breaks off the tree. <br><br> </p>";
  ContentContainer.appendChild(divElement7);

  //div element 8 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = "<h2>Momentum</h2><p>The momentum of a body is defined as the product of its mass and velocity. <br><br><b>momentum = mass × velocity Or, p = m x v </b> <br><br> where, <br><br> p = momentum <br><br> m = mass of the body<br><br> v = velocity of the body <br><br> The Sl unit of momentum is kilograms meters per second (kg.m/s) <br><br><b>Change in momentum:</b><br><br> It is defined as the difference between final momentum and initial momentum. <br><br>  Let u be the initial momentum of a body and v be its final momentum, then <br><br> Change in momentum = mv - mu <br><br><b>Rate of change of momentum:</b><br><br>The rate at which the momentum of an object is changing is known as the rate of change of momentum. <br><br><b>Applications of Momentum:</b><br><br>A small bullet can penetrate into the body of a man. <br><br>  </p>";
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
//chapter 10
function chapter10() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter10').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Universal Law of Gravitation</h2><p>Every object in the universe attracts other object by a force of attraction, called gravitation. <br><br> which is directly proportional to the product of masses of the objects and inversely proportional to the square of distance between them. <br><br> This is called Law of Gravitation or Universal Law of Gravitation.<br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Importance of The Universal Law of Gravitation.</h2><p>1.It binds us to the earth. <br><br> 2.It is responsible for the motion of the moon around the earth. <br><br>3.It is responsible for the motion of planets around the Sun. <br><br>4.Gravitational force of moon causes tides in seas on earth. <br><br> 5.Free Fall <br><br>When an object falls from any height under the influence of gravitational force only, it is known as free fall. <br><br></p>';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>Acceleration Due to Gravity</h2><p>When an object falls towards the earth there is a change in its acceleration due to the gravitational force of the earth. <br><br> So this acceleration is called acceleration due to gravity. <br><br>The acceleration due to gravity is denoted by <b>g</b>. <br><br> The unit of g is same as the unit of acceleration, i.e., ms−2 <br><br></p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Mathematical Expression for g</h2><p>From the second law of motion, force is the product of mass and acceleration. <br><br><b>F = ma</b><br><br> For free fall, acceleration is replaced by acceleration due to gravity. Therefore, force becomes:  <br><br><b>F = mg  </b><br><br></p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Factors Affecting the Value of g</h2><p>As the radius of the earth increases from the poles to the equator, the value of g becomes greater at the poles than at the equator. <br><br>As we go at large heights, value of g decreases. <br><br> To Calculate the Value of g <br><br> Value of universal gravitational constant, <br><br><b>G = 6.7 × 10–11 N m2/ kg2,</b><br><br>Mass of the earth, M = 6 × 1024 kg <br><br> Radius of the earth, R = 6.4 × 106 <br><br> Motion of Objects Under the Influence of Gravitational Force of the Earth <br><br> Let an object is falling towards earth with initial velocity u. <br><br> Let its velocity, under the effect of gravitational acceleration g, changes to v after covering the height h in time t. <br><br>Then the three equations of motion can be represented as: <br><br> Velocity (v) after t seconds, v = u + ght <br><br> Height covered in t seconds, h = ut + ½gt2 <br><br> Relation between v and u excluding t, v2 = u2 + 2gh <br><br> The value of g is taken as positive in case of the object is moving towards earth and taken as negative in case of the object is thrown in opposite direction of the earth<br><br></p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = "<h2>Mass (m)</h2><p>The mass of a body is the quantity of matter contained in it. <br><br> Mass is a scalar quantity which has only magnitude but no direction. <br><br> Mass of a body always remains constant and does not change from place to place. <br><br> SI unit of mass is kilogram (kg). <br><br> Mass of a body can never be zero. <br><br></p>";
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = "<h2>Weight(W)</h2><p>The force with which an object is attracted towards the centre of the earth, is called the weight of the object. <br><br><b>Force = m × a</b><br><br>But in case of earth,  a = g <br><br>∴ F = m × g <br><br>But the force of attraction of earth on an object is called its weight (W). <br><br><b>W = mg</b><br><br> As weight always acts vertically downwards, therefore, weight has both magnitude and direction and thus it is a vector quantity. <br><br>The weight of a body changes from place to place, depending on mass of object. <br><br>The SI unit of weight is Newton. <br><br> Weight of the object becomes zero if g is zero. <br><br>Weight of an Object on the Surface of Moon <br><br>Mass of an object is same on earth as well as on moon. But weight is different.<br><br></p>";
  ContentContainer.appendChild(divElement7);

  //div element 8 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = "<h2>Buy our premium notes</h2>";
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter9()">Previous</button> <button onclick="chapter11()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 11 need to make 
function chapter11() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter11').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Universal Law of Gravitation</h2><p>Every object in the universe attracts other object by a force of attraction, called gravitation. <br><br> which is directly proportional to the product of masses of the objects and inversely proportional to the square of distance between them. <br><br> This is called Law of Gravitation or Universal Law of Gravitation.<br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Importance of The Universal Law of Gravitation.</h2><p>1.It binds us to the earth. <br><br> 2.It is responsible for the motion of the moon around the earth. <br><br>3.It is responsible for the motion of planets around the Sun. <br><br>4.Gravitational force of moon causes tides in seas on earth. <br><br> 5.Free Fall <br><br>When an object falls from any height under the influence of gravitational force only, it is known as free fall. <br><br></p>';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>Acceleration Due to Gravity</h2><p>When an object falls towards the earth there is a change in its acceleration due to the gravitational force of the earth. <br><br> So this acceleration is called acceleration due to gravity. <br><br>The acceleration due to gravity is denoted by <b>g</b>. <br><br> The unit of g is same as the unit of acceleration, i.e., ms−2 <br><br></p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Mathematical Expression for g</h2><p>From the second law of motion, force is the product of mass and acceleration. <br><br><b>F = ma</b><br><br> For free fall, acceleration is replaced by acceleration due to gravity. Therefore, force becomes:  <br><br><b>F = mg  </b><br><br></p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Factors Affecting the Value of g</h2><p>As the radius of the earth increases from the poles to the equator, the value of g becomes greater at the poles than at the equator. <br><br>As we go at large heights, value of g decreases. <br><br> To Calculate the Value of g <br><br> Value of universal gravitational constant, <br><br><b>G = 6.7 × 10–11 N m2/ kg2,</b><br><br>Mass of the earth, M = 6 × 1024 kg <br><br> Radius of the earth, R = 6.4 × 106 <br><br> Motion of Objects Under the Influence of Gravitational Force of the Earth <br><br> Let an object is falling towards earth with initial velocity u. <br><br> Let its velocity, under the effect of gravitational acceleration g, changes to v after covering the height h in time t. <br><br>Then the three equations of motion can be represented as: <br><br> Velocity (v) after t seconds, v = u + ght <br><br> Height covered in t seconds, h = ut + ½gt2 <br><br> Relation between v and u excluding t, v2 = u2 + 2gh <br><br> The value of g is taken as positive in case of the object is moving towards earth and taken as negative in case of the object is thrown in opposite direction of the earth<br><br></p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = "<h2>Mass (m)</h2><p>The mass of a body is the quantity of matter contained in it. <br><br> Mass is a scalar quantity which has only magnitude but no direction. <br><br> Mass of a body always remains constant and does not change from place to place. <br><br> SI unit of mass is kilogram (kg). <br><br> Mass of a body can never be zero. <br><br></p>";
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = "<h2>Weight(W)</h2><p>The force with which an object is attracted towards the centre of the earth, is called the weight of the object. <br><br><b>Force = m × a</b><br><br>But in case of earth,  a = g <br><br>∴ F = m × g <br><br>But the force of attraction of earth on an object is called its weight (W). <br><br><b>W = mg</b><br><br> As weight always acts vertically downwards, therefore, weight has both magnitude and direction and thus it is a vector quantity. <br><br>The weight of a body changes from place to place, depending on mass of object. <br><br>The SI unit of weight is Newton. <br><br> Weight of the object becomes zero if g is zero. <br><br>Weight of an Object on the Surface of Moon <br><br>Mass of an object is same on earth as well as on moon. But weight is different.<br><br></p>";
  ContentContainer.appendChild(divElement7);

  //div element 8 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = "<h2>Buy our premium notes</h2>";
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter10()">Previous</button> <button onclick="chapter12()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 12
function chapter12() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter12').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Sound</h2><p>Sound is a form of energy which produces a sensation of hearing in our ears. <br><br><b>Production of Sound</b><br><br>Sound is produced due to the vibration of objects. <br><br> Vibration is a periodic back-and-forth motion of the particles of an elastic body or medium about a central position. It is also named as oscillation<br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Propagation of Sound</h2><p>The travelling of sound is called propagation of sound.<br><br> Sound is propagated by the to and forth motion of particles of the medium. <br><br> When an object vibrates, the particles around the medium vibrate. <br><br> The particle in contact with the vibrating object is first displaced from its equilibrium position. <br><br> Each particle disturbs the other particle in contact. Thus, the disturbance is carried from the source to the listener.<br><br></p>';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Medium</h2><p>The matter or substance through which sound is transmitted is called a medium. <br><br> A medium is necessary for the propagation of sound waves. <br><br>The medium can be solid, liquid or gas. <br><br>Sound cannot travel in vacuum. <br><br> Wave that requires medium to propagate is called Mechanical wave.<br><br></p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Wave</h2><p>Wave is a phenomenon or disturbance in which energy is transferred from one point to another without any direct contact between them. <br><br> For example: <br><br> Heat, light and sound is considered as a wave. <br><br><b>Types of Waves</b><br><br> On the basis of direction of propagation, waves are categorized into two parts: <br><br><b>1. Longitudinal waves:</b><br><br>These are the waves in which the particles of the medium vibrate along the direction of propagation of the wave. <br><br>  For example: sound wave. <br><br><b>2.Transverse waves:</b><br><br>In this type of wave the particles of the medium vibrate in a direction perpendicular to the direction of propagation of the wave. <br><br>  For example: waves produced in a stretched string. <br><br><b>Electromagnetic waves.</b><br><br>Waves which do not require any medium for propagation are called electromagnetic waves. <br><br>These waves can travel through vacuum also. <br><br>  For example, light waves, X-rays.<br><br></p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = "<h2>Compressions and Rarefactions:</h2><p>Compression is the part of wave in which particles of the medium are closer to one another forming the region of high pressure and density. <br><br>           Compressions are represented by the upper portion of the curve called crest. <br><br> Rarefaction is a part of the wave where particles spread out to form a region of low pressure and density. <br><br>Rarefactions are represented by the lower portion of the curve called trough.<br><br></p>";
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = "<h2>Characteristics of a sound wave</h2><p>Sound waves have following characteristics: <br><br> 1. Amplitude <br><br>2. wavelength <br><br> 3. Frequency <br><br> 4. Time period <br><br>5. Velocity<br><br></p>";
  ContentContainer.appendChild(divElement7);

  //div element 8 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = "<h2>All characteristics explained</h2><p><b>Amplitude</b> <br><br> The maximum displacement of each particle from its mean position is called amplitude. <br><br> It is denoted by A. <br><br> Its SI unit is metre (m). <br><br> <b>Wavelength</b> <br><br> The distance between two nearest (adjacent) crests or troughs of a wave is called its wavelength. <br><br> It is denoted by the Greek letter lamda (λ). <br><br> Its SI unit is metre. <br><br> <b>Frequency</b> <br><br> The number of vibrations per second is called frequency.<br><br> The SI unit of frequency is hertz (Hz).<br><br>The symbol of frequency is ν (nu). <br><br> <b>Time period</b> <br><br>The time taken to complete one vibration is called time period. <br><br> It is denoted by T. <br><br> Its SI unit is second (s). <br><br> The frequency of a wave is the reciprocal of the time period. <br><br> i.e., v = 1/T <br><br> <b>Velocity</b> <br><br> The distance travelled by a wave in one second is called velocity of the wave or speed of the wave. <br><br> Its S.I. unit is metres per second (m/s). <br><br> <b>Velocity = Distance travelled/Time taken </b><br><br> v = λ/T <br><br> where λ = wavelength of the wave travelled in one time time period (T) <br><br> v = λv (As 1/T = v) <br><br> <b>Velocity = Wavelength × Frequency </b><br><br> v = λv is called the wave equation. <br><br> Pitch and loudness of Sound <br><br> <b>Pitch:</b> <br><br> It represents shrillness or flatness of sound. <br><br> It depends on the frequency of vibration. Higher the frequency of sound wave, the higher will be the pitch of sound and vice-versa. <br><br> <b>Loudness:</b><br><br> It is a measure of the sound energy reaching the ear per second. <br><br> It depends on the amplitude of the sound wave. <br><br> It is measured in decibel <br><br> </p>";
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter11()">Previous</button> <button onclick="chapter13()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 13
function chapter13() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter13').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Health</h2><p>Health is a state of complete physical, mental and social wellbeing.<br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Disease</h2><p>Any disturbance in the structure or function of any organ or part of body is called Disease. <br><br>It may be caused due to the attack of pathogens (virus, bacteria), lack of nutritious diet/balanced diet and lack of public health services.<br><br></p>';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Types of Disease</h2><p>Diseases are basically of two types. They are: <br><br> 1.Acute Disease <br><br>2.Chronic Disease<br><br><b>1.Acute Disease</b><br><br>The disease which lasts for only a short period of time is called Acute Disease. <br><br> For example: Influenza (Flu), Common cold, etc. <br><br><b>Chronic Disease</b><br><br>The disease which lasts for a long period of time is called Chronic Disease. <br><br> For example: TB, Cancer, etc. <br><br> </p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Immediate and Contributory Cause</h2><p><b>Immediate Cause</b><br><br>The organisms that enter our body and cause the disease are termed as an immediate cause. <br><br> For example, virus, bacteria, protozoa etc. <br><br><b>Contributory cause</b><br><br> The secondary factors which led these organisms enter our body are termed as a contributory cause. <br><br> For example, dirty water, contaminated food, improper nourishment, poor standard of living, etc.<br><br></p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = "<h2>Infectious and Non-infectious Cause</h2><p><b>Infectious causes</b><br><br> They include the agents like microbes or micro-organisms as the immediate causes which spread the disease from an infected person to a healthy person. <br><br><b>Non-infectious causes</b><br><br> The disease which does not spread by contact between infected and healthy person through air and water, is called non-infectious disease.<br><br><b>Infectious Diseases</b><br><br> The diseases which spread due to infection by micro-organisms are called infectious diseases. <br><br> When a disease causing organism enters our body it causes infection, it multiplies and grows in the body called host and micro-organisms multiplies in the host body. <br><br> For example: Tuberculosis, tetanus, Common cold, AIDS, etc. <br><br><b>Non-infectious Diseases</b><br><br>  The disease which does not spread by contact between infected and healthy person through air and water, is called non-infectious disease. <br><br> For example: Cancer, genetic abnormalities, high blood pressure, etc.<br><br></p>";
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = "<h2>Principles of treatment</h2><p>1. To reduce the effects of the diseases <br><br> By taking medicines to bring down the effects of the disease like fever, pain, etc. and by taking complete rest to conserve the body’s energy. <br><br> 2. To kill the cause of the disease <br><br> By taking suitable antibiotics and drugs which kill the disease causing microbes.<br><br></p>";
  ContentContainer.appendChild(divElement7);

  //div element 8 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = "<h2>Principles of Prevention</h2><p>1. General method: <br><br> They involve Preventing exposure against microbes By boosting the immune system <br><br> Preventing exposure against microbes can be done in the following ways: <br><br> For air-born microbes we can prevent exposure by avoiding overcrowded places. <br><br> For water-borne microbes we can prevent exposure by not using contaminated water. <br><br> For vector-borne infections we can prevent exposure by providing a clean environment. <br><br> By boosting the immune system: <br><br> Our immune system plays an important role in fighting against the microbes that enter our body. <br><br>  strengthening the immune system can help in preventing many diseases. <br><br>  So, proper nourishment or healthy diet that includes all the necessary nutrients as well as vitamins and minerals is necessary for better functioning of our immune system. <br><br> 2. Specific method <br><br> It involves the prevention method directed against a particular disease. <br><br> It is done by immunisation which is the process of introducing a weakened pathogen inside the body of the host to make his/her immune system to produce antibodies against that particular disease so that the next time even if the disease will strike the host’s body with full vigor, the body will be able to protect itself with the help of these antibodies.<br><br> </p>";
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter12()">Previous</button> <button onclick="chapter14()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
//chapter 14
function chapter14() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter14').innerHTML;

  //notes making function
  //create new div 1
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Rain</h2><p>Rain is formed by evaporation and condensation of water through water cycle.<br><br><b>Acid Rain</b><br><br> Acid rain is caused by the release of the gases like SO2 (sulphur dioxide) and NO2 (nitrogen dioxide) released from the emission of vehicles and combustion of fuels. <br><br> These gases dissolve in rain water to form nitric acid and sulphuric acid.<br><br></p>';
  ContentContainer.appendChild(divElement1);

  //div element 2 created
  divElement2.className = "box";
  divElement2.id = "box2";
  divElement2.innerHTML = '<h2>Water</h2><p>WaterWater is a renewable resource. <br><br> It is essential for all physiological activities of plants and animals. <br><br> Water is mainly present in two forms: <br><br>1.Surface water <br><br> 2. Ground water<br><br></p>';
  ContentContainer.appendChild(divElement2);

  //div element 3 created
  divElement3.className = "box";
  divElement3.id = "box3";
  divElement3.innerHTML = '<h2>Water Pollution</h2><p>An undesirable change in the physical, biological or chemical properties of water (due to addition for foreign organic, inorganic substances) that adversely affects the aquatic life, and makes water less fit or unfit for use, is called water pollution. <br><br> The main causes of water pollution are as follows: <br><br> 1.Addition of harmful substances like fertilisers and pesticides to water. <br><br>2.Removal of desirable substances like oxygen from water <br><br> 3. Change in water temperature <br><br> </p>';
  
  ContentContainer.appendChild(divElement3);


  //div element 4 created
  divElement4.className = "box";
  divElement4.id = "box4";
  divElement4.innerHTML = '<h2>Soil</h2><p>It is the uppermost layer of Earth’s crust, which supports terrestrial plants, animals and microorganisms. <br><br> It is formed from the weathering of rocks by physical, chemical and biological activities by the action of wind, water and sun. <br><br> It is made up mainly of mineral particles, organic materials, air, water and living organisms. <br><br><b>Humus</b><br><br>  The decayed living organisms present in soil is called humus. <br><br> Humus makes the soil porous and allows water and air to penetrate deep underground making the soil more fertile.<br><br> </p>';
  
  ContentContainer.appendChild(divElement4);

  //div element 5 created
  divElement5.className = "box";
  divElement5.id = "box5";
  divElement5.innerHTML = '<h2>Soil pollution</h2><p>Removal of useful components from the soil and addition of other substances, which adversely affect the fertility of the soil and kill micro-organisms living in it is called soil pollution. <br><br> Fertilizers and pesticides destroy the soil structure.<br><br> Mosses or Bryophytes are indicators of soil pollution.<br><br></p>';
  ContentContainer.appendChild(divElement5);

  //div element 6 created
  divElement6.className = "box";
  divElement6.id = "box6";
  divElement6.innerHTML = "<h2>Soil Erosion</h2><p>Removal of the topmost layer of soil by wind, water or other activities is called soil erosion. <br><br> Causes of soil erosion. <br><br> Main factors responsible for the soil erosion are: <br><br> 1.Over grazing of land. <br><br> 2. Removal of top soil by wind (storms) and water (floods). <br><br>3.Deforestation<br><br> 4. Leaving land uncultivated for long time. <br><br> Effects of Soil Erosion: <br><br> 1.Loss of fertility due to loss of topmost fertile soil which results in desertification. <br><br> 2.Landslides in hilly areas. <br><br> 3.Clogging of water drains and water reservoirs by the washed off soil.<br><br></p>";
  ContentContainer.appendChild(divElement6);

  //div element 7 created
  divElement7.className = "box";
  divElement7.id = "box7";
  divElement7.innerHTML = "";
  ContentContainer.appendChild(divElement7);

  //div element 8 created
  divElement8.className = "box";
  divElement8.id = "box8";
  divElement8.innerHTML = "";
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
  divElement10.innerHTML = '<h2>     <button onclick="chapter13()">Previous</button> <button onclick="chapter15()">Next</button></h2>';
  ContentContainer.appendChild(divElement10);

  //div element 11 created
  divElement11.className = "box";
  divElement11.id = "box11";
  divElement11.style.backgroundColor = 'teal';
  divElement11.innerHTML = '<h2> <a style="color:white;" href="#">🎯 Play Quiz Game</a> </h2>';
  ContentContainer.appendChild(divElement11);
}
