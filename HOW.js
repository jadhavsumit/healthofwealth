

//----------- Scroll to the top-----------//

const scroll = document.querySelector('#scroll');

scroll.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });

    
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

//-----range slider------//
function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML= value;
    
}

function  rangeSliderExpec(value){
    document.getElementById('rangeValueExpec').innerHTML = value;
}

function  rangeSliderMonth(value){
    document.getElementById('motnhExpense').innerHTML = value;
}

function  rangeSliderInf(value){
    document.getElementById('inflation').innerHTML = value;
}

function  rangeSliderRet(value){
    document.getElementById('returns').innerHTML = value;
}

function  rangeSliderPostRet(value){
    document.getElementById('postReturns').innerHTML = value;
}

// Load google charts
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

