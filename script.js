const yellow1 = document.getElementById("yellow-1");

function highlight() {
  yellow1.style.display = "block";
}

const boulder = document.getElementById("boulder");

boulder.addEventListener('click', highlight);
