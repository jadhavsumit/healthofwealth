

//----------- Scroll to the top-----------//

const scroll = document.querySelector('#scroll');

scroll.addEventListener("click", function(){
    // window.scrollTo({
    //     top:0,
    //     left:0,
    //     behavior: "smooth"
    // });

    $("html,body").animate({scrollTop:0}, "slow");
});

//----- planning Scroll-----//
function myFunction() {
    var elmnt = document.getElementById("financial");
    elmnt.scrollIntoView({behavior: "smooth"});
  }

// ------ modal ---- //

var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalbtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var investments = document.getElementById("investment");
var contacts = document.getElementById("contact");
var okbtns = document.getElementById("okbtn");

modalBtn.addEventListener("click", openmodal);

closeBtn.addEventListener("click", closemodal);

window.addEventListener("click", clickOutside); 

investments.addEventListener('click', openmodal);

contacts.addEventListener('click', openmodal);

okbtns.addEventListener("click", closemodal);





function openmodal(){
    modal.style.display = "block";
}

function closemodal(){
    modal.style.display = "none";
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

