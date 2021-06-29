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
/*function chapter3() {

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML = document.getElementById('chapter3').innerHTML;

  //notes making function
  //create new div 1 created
  divElement1.className = "box";
  divElement1.id = "box1";
  divElement1.innerHTML = '<h2>Atom</h2><p>It is the smallest particle of an element which may as may not have an independent.</p>';
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

  document.querySelector('*').scrollTo(0, 0);

  //Title upgrade form hare
  document.getElementById('chapter1').innerHTML =document.getElementById('chapter4').innerHTML;

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
*/

function chapter3() {
  alert("chapter is under construction please wait");
}
function chapter4() {
  alert("chapter is under construction please wait");
}
