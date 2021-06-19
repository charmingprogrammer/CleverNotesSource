let container = document.getElementById('learning');

setInterval(function() {
  document.getElementById('logoPic').style.transform = 'scale(0.9)'}, 1000);

  // when click on button 
function ChangeKnowladge() {
document.getElementById('logoPic').style.transform = 'scale(0)';

  //sound for click 
   document.getElementById("clickSound").play();


  //all Knowladge function 
  function k1() {
container.innerHTML = "<h2>Food</h2> <p>The component that we consume, which provides nourishment to the body, is called food. E.g., Rice, chapati, curry, fruits, vegetables, cheese, bread, milk, curd, butter, etc.</p>"}
  function k2() {
container.innerHTML = "<h2>Ingredients</h2> <p>The components or materials required to prepare a food item are called as ingredients. E.g., different types of vegetables, spices are ingredients for sambar.</p>"}
  function k3() {
container.innerHTML = "<h2>Harbivores</h2> <p>Animals which feed on plants are called herbivores. E.g., cow, goat etc.</p>";
  }
  function k4() {
  container.innerHTML = "<h2>Physics</h2> <p>Physics is the study of nature.</p>"}
  function k5() {
  container.innerHTML = '<iframe width="100%" height="250px" src="https://www.youtube.com/embed/WacqhiI-g_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
  }
  


  
  //random show Knowladge 
  let random = Math.floor((Math.random() * 5)+1);
  
  if (random === 1) {
    k1();
  }
  if (random === 2) {
    k2();
  }
  if (random === 3) {
    k3();
  }
  if (random === 4) {
    k4();
  }
  if (random === 5) {
    k5();
  }
  
  
}


