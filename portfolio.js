
  
document.getElementById("about-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".about").scrollIntoView({ 
      behavior: "smooth" 
    });
});

document.getElementById("services-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".services").scrollIntoView({ 
      behavior: "smooth" 
    });
});

document.getElementById("projects-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".projects").scrollIntoView({ 
      behavior: "smooth" 
    });
});

document.getElementById("contact-button").addEventListener("click", function(e) {
    e.preventDefault(); 
    document.querySelector(".footer").scrollIntoView({ 
      behavior: "smooth" 
    });
});