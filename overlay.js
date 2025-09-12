let overlay; // keep reference

function addOverlayButtons(video) {
  if (overlay) return; // don’t duplicate

  // Create overlay container
  overlay = document.createElement("div");
  overlay.className = "my-overlay";

  // Example buttons

  // option button
  const optionsBtn = document.createElement("button");
  optionsBtn.onclick = () => { alert("Options clicked!") };
  // optionsBtn.addEventListener("mousedown", () => {
  //   holdTimer = setTimeout(() => {
  //     alert("Button held!");
  //   }, 1000); // hold for 1 second
  // });


  // skip back buttons
  const smallSkipBackBtn = document.createElement("button");
  smallSkipBackBtn.innerText = "<5";
  smallSkipBackBtn.onclick = () => { video.currentTime -= 5; };

  const bigSkipBackBtn = document.createElement("button");
  bigSkipBackBtn.innerText = "<30";
  bigSkipBackBtn.onclick = () => { video.currentTime -= 30; };

  // skip forward buttons

  const smallSkipForwardBtn = document.createElement("button");
  smallSkipForwardBtn.innerText = "5>";
  smallSkipForwardBtn.onclick = () => { video.currentTime += 5; };

  const bigSkipForwardBtn = document.createElement("button");
  bigSkipForwardBtn.innerText = "30>";
  bigSkipForwardBtn.onclick = () => { video.currentTime += 30; };

  // speed multiplier buttons
  const smallSpeedMultBtn = document.createElement("button");
  smallSpeedMultBtn.innerText = "x2";
  smallSpeedMultBtn.onclick = () => { video.playbackRate = 2; };

  const bigSpeedMultBtn = document.createElement("button");
  bigSpeedMultBtn.innerText = "x3";
  bigSpeedMultBtn.onclick = () => { video.playbackRate = 3; };

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
  if (video) addOverlayButtons(video);
}

// Toggle overlay with key press
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "o" && overlay) {
    overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
  }
});

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




