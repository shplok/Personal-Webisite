const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden,.logos');
  hiddenElements.forEach((el) => observer.observe(el));
  
  /* skill proficiency */
  
  document.querySelectorAll('.proficiency').forEach(function(skill) {
    var squares = skill.querySelectorAll('.square');
    squares.forEach(function(square) {
        if (square.getAttribute('data-filled') === 'true') {
            square.classList.add('filled');
        }
    });
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
    }
  });
  
  /* percentage loaded */
  
  document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
        var loading = document.querySelector('.loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var percentageDisplay = document.querySelector('.percentage');
  
    var totalResources = Array.from(document.images).length + document.querySelectorAll('link[rel="stylesheet"]').length + document.scripts.length;
    var loadedResources = 0;
  
    function updateProgress() {
        loadedResources++;
        var percentage = Math.round((loadedResources / totalResources) * 100);
        percentageDisplay.textContent = percentage + '%';
  
        if (loadedResources === totalResources) {
            var loading = document.querySelector('.loading');
            if (loading) {
                loading.style.display = 'none';
            }
        }
    }
  
    // Listen for load events on images, stylesheets, and scripts
    Array.from(document.images).forEach(function(image) {
        image.addEventListener('load', updateProgress);
    });
  
    document.querySelectorAll('link[rel="stylesheet"]').forEach(function(stylesheet) {
        stylesheet.addEventListener('load', updateProgress);
    });
  
    document.scripts.forEach(function(script) {
        script.addEventListener('load', updateProgress);
    });
  });
  
  /* wordle goes here */



  /* smiley face logic */ js

// function calculateTotalSkillPoints() {
//     let totalSkillPoints = 0;
//     document.querySelectorAll('.proficiency .square[data-filled="true"]').forEach(function(square) {
//         totalSkillPoints++;
//     });
//     return totalSkillPoints;
// }

// // Update smiley face based on total skill points
// function updateSmileyFace() {
//     const totalSkillPoints = calculateTotalSkillPoints();
//     let smileyFace = document.getElementById('smileyFace');
//     if (totalSkillPoints >= 20) {
//         smileyFace.textContent = '😁'; // Happy face
//     } else if (totalSkillPoints >= 15) {
//         smileyFace.textContent = '🙂'; // Neutral face
//     } else {
//         smileyFace.textContent = '😕'; // Sad face
//     }
// }

// // Update smiley face when the page loads
// window.addEventListener('load', function() {
//     updateSmileyFace();
// });
  
/* scroll past fix */

function scrollToTop() {
    const scrollDuration = 500; // Duration of the scroll animation in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate initial scroll step

    let currentTime = 0;

    // Define the easing function (ease-out)
    const easeOutQuad = function (t, b, c, d) {
        t /= d;
        return (-c * 0.3) * t*(t-2) + b;
    };

// Disable user input scrolling
function disableScroll() {
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

// Enable user input scrolling
function enableScroll() {
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

// Prevent default behavior for scroll events
function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Prevent default behavior for certain keys
function preventDefaultForScrollKeys(e) {
    const keys = {37: 1, 38: 1, 39: 1, 40: 1};
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// Start scrolling animation
const scrollInterval = setInterval(function(){
    currentTime += 15;
    disableScroll(); // Disable scrolling during animation
    const newPosition = easeOutQuad(currentTime, window.scrollY, -window.scrollY, scrollDuration);
    window.scrollTo(0, newPosition);
    if (currentTime >= scrollDuration) {
        clearInterval(scrollInterval);
        enableScroll(); // Enable scrolling after animation is complete
    }
},15);
}