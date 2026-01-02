const navElements = document.querySelectorAll('.nav-link')
const sectionElements= document.querySelectorAll('.sections')
let currentSection = 'section1';
window.addEventListener('scroll', ()=>{
    sectionElements.forEach(sectionElement=>{
        if (window.scrollY >= sectionElement.offsetTop - sectionElement.clientHeight/2){
            currentSection = sectionElement.id;
        }
    })
    navElements.forEach(navElement=> {
        if(navElement.href.includes(currentSection)){
            navElement.classList.add('active');
        }
        else{
            navElement.classList.remove('active');
        }
    })
})





//  * Begin Main Functions
// create scroll functionslity 
 
navElements.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      sectionElements.forEach((element)=>{
        if(link.href.includes(element.id)){
            const target = element;
            target.scrollIntoView({behavior:"smooth"});
            
          
        }
   
      })
    });
  });


  const fullNavElements = document.querySelectorAll('.nav-full-screen')
  const fullSectionElements= document.querySelectorAll('.sections')
fullNavElements.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      fullSectionElements.forEach((element)=>{
        if(link.href.includes(element.id)){
            const target = element;
            target.scrollIntoView({behavior:"smooth"});
         
        }
   
      })
    });
  });



// add current year
function setYearForCopyright(){
    const currentYearElem = document.getElementById("currentYear")

    const year = new Date().getFullYear()
    currentYearElem.innerText = year;
}
setYearForCopyright();


// nav full screen open btn
function openFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen")
    
    navFullScreen.classList.remove("nav-fullscreen-close")
    navFullScreen.classList.add("nav-fullscreen-open")
}
function closeFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen")
    navFullScreen.classList.add("nav-fullscreen-close")
    navFullScreen.classList.remove("nav-fullscreen-open")
    
}