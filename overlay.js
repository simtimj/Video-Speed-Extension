let allExtensionDiv;
let optionDiv;
let buttonDiv; // keep reference


function addbuttonDivButtons(video) {
  if (buttonDiv) return; // don’t duplicate

  optionDiv = document.createElement("div");
  optionDiv.className = "optionDiv";

  // Create buttonDiv container
  buttonDiv = document.createElement("div");
  buttonDiv.className = "buttonDiv";

  // Example buttons

  // option button
  const optionsBtn = document.createElement("button");
  optionsBtn.innerText = "⚙";
  optionsBtn.onclick = () => { 
    alert("Options clicked!") 
  };
  // optionsBtn.addEventListener("mousedown", () => {
  //   holdTimer = setTimeout(() => {
  //     alert("Button held!");
  //   }, 1000); // hold for 1 second
  // });


  // skip back buttons
  const smallSkipBackBtn = document.createElement("button");
  smallSkipBackBtn.innerText = "-5";
  smallSkipBackBtn.onclick = (e) => { 
    video.currentTime -= 5; 
    e.stopPropagation(); // Prevent triggering parent click events
  };


  const bigSkipBackBtn = document.createElement("button");
  bigSkipBackBtn.innerText = "-30";
  bigSkipBackBtn.onclick = (e) => {
    video.currentTime -= 30;
    e.stopPropagation(); // Prevent triggering parent click events
  };

  // skip forward buttons

  const smallSkipForwardBtn = document.createElement("button");
  smallSkipForwardBtn.innerText = "+5";
  smallSkipForwardBtn.onclick = (e) => {
    video.currentTime += 5;
    e.stopPropagation(); // Prevent triggering parent click events
  };

  const bigSkipForwardBtn = document.createElement("button");
  bigSkipForwardBtn.innerText = "+30";
  bigSkipForwardBtn.onclick = (e) => {
    video.currentTime += 30;
    e.stopPropagation(); // Prevent triggering parent click events
  };

  // speed multiplier buttons
  const smallSpeedMultBtn = document.createElement("button");
  smallSpeedMultBtn.innerText = "x2";
  smallSpeedMultBtn.onclick = (e) => { 
    e.stopPropagation(); // Prevent triggering parent click events
  };
  smallSpeedMultBtn.addEventListener("mousedown", (e) => {
    video.playbackRate = 2;
    e.stopPropagation(); // Prevent triggering parent click events
  });
  smallSpeedMultBtn.addEventListener("mouseup", (e) => {
    video.playbackRate = 1;
    e.stopPropagation(); // Prevent triggering parent click events
  });

  const bigSpeedMultBtn = document.createElement("button");
  bigSpeedMultBtn.innerText = "x3";
  bigSpeedMultBtn.onclick = (e) => {
    e.stopPropagation(); // Prevent triggering parent click events
  };
  bigSpeedMultBtn.addEventListener("mousedown", (e) => {
    video.playbackRate = 3;
    e.stopPropagation(); // Prevent triggering parent click events
  });
  bigSpeedMultBtn.addEventListener("mouseup", (e) => {
    video.playbackRate = 1;
    e.stopPropagation(); // Prevent triggering parent click events
  });


  // setup inside of divs
  optionDiv.appendChild(optionsBtn);

  // buttonDiv.appendChild(optionsBtn);

  buttonDiv.appendChild(smallSkipBackBtn);
  buttonDiv.appendChild(  bigSkipBackBtn);

  buttonDiv.appendChild(smallSkipForwardBtn);
  buttonDiv.appendChild(  bigSkipForwardBtn);

  buttonDiv.appendChild(smallSpeedMultBtn);
  buttonDiv.appendChild(  bigSpeedMultBtn);

  allExtensionDiv = document.createElement("div");
  allExtensionDiv.className = "allExtensionDiv";
  allExtensionDiv.appendChild(optionDiv);
  allExtensionDiv.appendChild(buttonDiv);

  // Position buttonDiv over video
  video.parentElement.style.position = "relative";
  // video.parentElement.style.display = "flex"; 
  // video.parentElement.style.flexDirection = "column"; 
  video.parentElement.appendChild(allExtensionDiv);

  // Start hidden
  allExtensionDiv.style.display = "none";
}

// Find videos and add buttonDiv
function init() {
  const video = document.querySelector("video");
  if (video) addbuttonDivButtons(video);
  allExtensionDiv.style.display = allExtensionDiv.style.display === "none" ? "flex" : "none";
}

// Toggle buttonDiv with key press   //!Save for hide 
// document.addEventListener("keydown", (e) => {
//   if (e.key.toLowerCase() === "o" && buttonDiv) {
//     buttonDiv.style.display = buttonDiv.style.display === "none" ? "flex" : "none";
//   }
// });

init();
