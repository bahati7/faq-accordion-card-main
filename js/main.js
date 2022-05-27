var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {  

    // var arrow = this.nextElementSibling;
     var panel=this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
        
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var y;

for (y = 0; y < acc.length; y++) {
  acc[y].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var accord = document.getElementsByClassName("accordion");
var z;

for (z = 0; z < accord.length; z++) {
    accord[z].addEventListener("mouseout", function() {  

    
     var panel=this.nextElementSibling;
    
        panel.style.display = "none";
        
    
  });
}