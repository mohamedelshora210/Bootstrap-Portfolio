let scrollArow = document.getElementById("arrow");
let navBackGround = document.getElementById("navbar-id")
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

const counter1 = setInterval(() => {
    if( count1 >= 450){
        clearInterval(counter1);

        return;
    } 
    count1 ++
    
    document.getElementById("count1").innerHTML = count1;
},30);

const counter2 = setInterval(() => {
    if( count2 >= 25){
        clearInterval(counter2);

        return;
    } 
    count2 ++
    
    document.getElementById("count2").innerHTML = count2;
},30);

const counter3 = setInterval(() => {
    if( count3 >= 550){
        clearInterval(counter3);

        return;
    } 
    count3 ++
    
    document.getElementById("count3").innerHTML = count3;
},30);

const counter4 = setInterval(() => {
    if( count4 >= 48){
        clearInterval(counter4);

        return;
    } 
    count4 ++
    
    document.getElementById("count4").innerHTML = count4;
},30);

window.addEventListener("scroll" , function() {
    if(window.scrollY > 200)
    {
        scrollArow.classList.add("show");
    }
    else
    {
         scrollArow.classList.remove("show");
    }
})

scrollArow.addEventListener("click" , function() {
    window.scrollTo({top : 0 , behavior : "smooth"})
})

window.addEventListener("scroll" , function() {
    if( window.scrollY > 50)
    {
        navBackGround.classList.add("scrolled")
    }
    else
    {
        navBackGround.classList.remove("scrolled")
    }
})
