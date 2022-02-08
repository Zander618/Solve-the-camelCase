//fun function
const psyduck = document.getElementById("psyduck")

function psyduckTalk (){
  alert("Psyduck is no longer your firend :(",
  yellow1.style.display = "none",
  yellow2.style.display = "none",
  yellow3.style.display = "none",
  yellow4.style.display = "none",
  yellow5.style.display = "none",
  yellow6.style.display = "none",
  yellow7.style.display = "none",
  yellow8.style.display = "none")
};

psyduck.addEventListener('click', psyduckTalk);

//function 1
const yellow1 = document.getElementById("yellow-1");

function highlight() {
  yellow1.style.display = "block";
}

const boulder = document.getElementById("boulder");

boulder.addEventListener('click', highlight);

//function 2
const yellow2 = document.getElementById("yellow-2");


const cascade = document.getElementById("cascade");

cascade.addEventListener('click', highlight2);

function highlight2() {
  if (yellow1.style.display === "block"){
  return yellow2.style.display = "block";
    } else { 
      return yellow2.style.display = "none"
    }
};

//function3
const yellow3 = document.getElementById("yellow-3");

const thunder = document.getElementById("thunder");

thunder.addEventListener('click', highlight3);

function highlight3() {
  if (yellow2.style.display === "block"){
    return yellow3.style.display = "block";
    } else { 
        return yellow3.style.display = "none"
  }
};


//function4
const yellow4 = document.getElementById("yellow-4");

const rainbow = document.getElementById("rainbow");

rainbow.addEventListener('click', highlight4);

function highlight4() {
    if (yellow3.style.display === "block"){
      return yellow4.style.display = "block";
      } else { 
          return yellow4.style.display = "none"
  }
};

//function5
const yellow5 = document.getElementById("yellow-5");

const soul = document.getElementById("soul");

soul.addEventListener('click', highlight5);

function highlight5() {
    if (yellow4.style.display === "block"){
      return yellow5.style.display = "block";
      } else { 
          return yellow5.style.display = "none"
  }
};

//function6
const yellow6 = document.getElementById("yellow-6");

const marsh = document.getElementById("marsh");

marsh.addEventListener('click', highlight6);

function highlight6() {
  if (yellow5.style.display === "block"){
    return yellow6.style.display = "block";
    } else { 
        return yellow6.style.display = "none"
  }
};

//function7
const yellow7 = document.getElementById("yellow-7");

const volcano = document.getElementById("volcano");

volcano.addEventListener('click', highlight7);

function highlight7() {
  if (yellow6.style.display === "block"){
    return yellow7.style.display = "block";
    } else { 
        return yellow7.style.display = "none"
  }
};

//function8
const yellow8 = document.getElementById("yellow-8");

const earth = document.getElementById("earth");

earth.addEventListener('click', highlight8);

function highlight8() {  
  if (yellow7.style.display === "block"){
  return yellow8.style.display = "block";
  } else { 
      return yellow8.style.display = "none"
  }
};

//function9
const elite4 = document.getElementById("elite4");

earth.addEventListener('click', displayElite4);

function displayElite4() {  
  if (yellow8.style.display === "block"){
  return elite4.style.display = "block";
  } else { 
      return elite4.style.display = "none"
  }
};

elite4.addEventListener("click", youAreTheChampion);

function youAreTheChampion() {
  
}