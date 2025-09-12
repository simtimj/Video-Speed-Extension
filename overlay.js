let overlay; // keep reference


// collapse 
function collapseOverlay() {
  if (overlay) {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "flex";
  }
}

// also stop hold prop
const stopPropagation = (e) => {
  e.stopPropagation();
}

function addOverlayButtons(video) {
  if (overlay) return; // don’t duplicate

  // Create overlay container
  overlay = document.createElement("div");
  overlay.className = "overlay";

  // Example buttons

  // option button
  const optionsBtn = document.createElement("button");
  optionsBtn.onclick = (e) => { alert("Options clicked!"); stopPropagation(e); };
  optionsBtn.innerText = "⚙️";
  optionsBtn.onclick = (e) => { 
    collapseOverlay(); 
    stopPropagation(e); 
  };
  


  // skip back buttons
  const smallSkipBackBtn = document.createElement("button");
  smallSkipBackBtn.innerText = "<5";
  smallSkipBackBtn.onclick = (e) => { 
    video.currentTime -= 5; 
    stopPropagation(e); 
  };

  const bigSkipBackBtn = document.createElement("button");
  bigSkipBackBtn.innerText = "<30";
  bigSkipBackBtn.onclick = (e) => {
    video.currentTime -= 30; 
    stopPropagation(e); 
  };

  // skip forward buttons
  const smallSkipForwardBtn = document.createElement("button");
  smallSkipForwardBtn.innerText = "5>";
  smallSkipForwardBtn.onclick = (e) => {
    video.currentTime += 5; 
    stopPropagation(e); 
  };

  const bigSkipForwardBtn = document.createElement("button");
  bigSkipForwardBtn.innerText = "30>";
  bigSkipForwardBtn.onclick = (e) => {
    video.currentTime += 30; 
    stopPropagation(e); 
  };

  // speed multiplier buttons
  const smallSpeedMultBtn = document.createElement("button");
  smallSpeedMultBtn.innerText = "x2";
  smallSpeedMultBtn.addEventListener("mousedown", (e) => {
    video.playbackRate = 2; 
    stopPropagation(e); 
  });

  smallSpeedMultBtn.addEventListener("mouseup", (e) => {
    video.playbackRate = 1;
    stopPropagation(e);
  });

  const bigSpeedMultBtn = document.createElement("button");
  bigSpeedMultBtn.innerText = "x3";
  bigSpeedMultBtn.addEventListener("mousedown", (e) => {
    video.playbackRate = 3;
    stopPropagation(e);
  });

  bigSpeedMultBtn.addEventListener("mouseup", (e) => {
    video.playbackRate = 1;
    stopPropagation(e);
  });


  overlay.appendChild(optionsBtn);

  overlay.appendChild(smallSkipBackBtn);
  overlay.appendChild(  bigSkipBackBtn);

  overlay.appendChild(smallSkipForwardBtn);
  overlay.appendChild(  bigSkipForwardBtn);

  overlay.appendChild(smallSpeedMultBtn);
  overlay.appendChild(  bigSpeedMultBtn);

  // Position overlay over video
  video.parentElement.style.position = "relative";
  video.parentElement.appendChild(overlay);

  // Start hidden
  overlay.style.display = "none";
}



// Find videos and add overlay
function init() {
  const video = document.querySelector("video");
  if (video) {
    addOverlayButtons(video);
    overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
    console.log("Overlay added to video.");``
  } else {
    console.log("No video found on this page.");
  }
}

// Toggle overlay with key press
// document.addEventListener("keydown", (e) => {
//   if (e.key.toLowerCase() === "o" && overlay) {
//     overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
//   }
// });


// apply to all buttons e.stopPropagation
// document.querySelectorAll("button").forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation();
//   });
// });






init();










// // Options 

// document.getElementById("optionsBtn").addEventListener("click", () => {
//   console.log("Button clicked! 1");
// });

// // Skips back

// document.getElementById("smallSkipBackBtn").addEventListener("click", () => {
//   console.log("Button clicked! 2");
// });

// document.getElementById("bigSkipBackBtn").addEventListener("click", () => {
//   console.log("Button clicked! 3 ");
// });


// // Skips forward 

// document.getElementById("smallSkipForwardBtn").addEventListener("click", () => {
//   console.log("Button clicked! 4");
// });

// document.getElementById("bigSkipForwardBtn").addEventListener("click", () => {
//   console.log("Button clicked! 5");
// });


//   // Speed multipliers

//   document.getElementById("smallSpeedMultBtn").addEventListener("click", () => {
//     console.log("Button clicked! 6");
//   });

//   document.getElementById("bigSpeedMultBtn").addEventListener("click", () => {
//     console.log("Button clicked! 7");
//   });




