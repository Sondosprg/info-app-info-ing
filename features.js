
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
const root = document.documentElement;
let shodowMoon = document.getElementById('shadowMoon');

sun.addEventListener('click', ()=>{
    root.classList.add("lightMode");
    localStorage.setItem('theme', 'light'); 
    shodowMoon.setAttribute("fill","#f1f1f8"); // لون خلفية الوضع الفاتح
});

moon.addEventListener('click', ()=>{
    root.classList.remove("lightMode");
    localStorage.setItem('theme', 'dark'); 
    shodowMoon.setAttribute("fill","#111");
});


if(localStorage.getItem("theme") === "light") {
    root.classList.add("lightMode");
    shodowMoon.setAttribute("fill","#f1f1f8");
}



/* Open Menu   */

let modeMenu = "openMenu";
let Menu = document.getElementById('Menu');
let ContentMenu = document.getElementById('ContentMenu');

console.log(Menu,ContentMenu);

Menu.addEventListener('click',()=>{
if(modeMenu == "openMenu" ){
    ContentMenu.style.display='block';
   modeMenu = "closeMenu";
}
else{
    ContentMenu.style.display='none';
modeMenu = "openMenu";
}

});




// Change to document html

let S1 = document.getElementById('S1');
let S2 = document.getElementById('S2');
let S3 = document.getElementById('S3');
let S4 = document.getElementById('S4');

let AI_S5 = document.getElementById('AI_S5');
let AI_S6 = document.getElementById('AI_S6');
let DS_S5 = document.getElementById('DS_S5');
let DS_S6 = document.getElementById('DS_S6');
let CS_S5 = document.getElementById('CS_S5');
let CS_S6 = document.getElementById('CS_S6');


let AI_S7 = document.getElementById('AI_S7');
let AI_S8 = document.getElementById('AI_S8');
let DS_S7 = document.getElementById('DS_S7');
let DS_S8 = document.getElementById('DS_S8');
let CS_S7 = document.getElementById('CS_S7');
let CS_S8 = document.getElementById('CS_S8');



let AI_S9 = document.getElementById('AI_S9');
let AI_S10 = document.getElementById('AI_S10');
let DS_S9 = document.getElementById('DS_S9');
let DS_S10 = document.getElementById('DS_S10');
let CS_S9 = document.getElementById('CS_S9');
let CS_S10 = document.getElementById('CS_S10');

let SemesterX =document.getElementById('SemesterX');
let ChangeSemester =document.getElementById('ChangeSemester');