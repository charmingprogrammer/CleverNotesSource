//side bar function 
let sidebar__container = document.getElementById('sidebar__container');
let menu__options = document.getElementById("menu__options");

function open__sidebar() {
     sidebar__container.style.width = "100%";
menu__options.style.display = "flex";

}
function close__sidebar() {
     sidebar__container.style.width = "";
menu__options.style.display = "";
}
//get data form student 
function saveData() {
let studentName = document.getElementById("studentName").value;

     document.getElementById("student__name").innerHTML = studentName;
     
document.getElementById("sdc").style.display = "none";
     
     localStorage.setItem("studentName", studentName);
     
localStorage.setItem("sdc", "none");

}
// show student Name form localStorage.
document.getElementById("student__name").innerHTML = localStorage.getItem('studentName');

document.getElementById("sdc").style.display = localStorage.getItem("sdc");
     