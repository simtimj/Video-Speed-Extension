// ==UserScript==
// @name         Video Playback Controller Beta
// @namespace    http://tampermonkey.net/
// @version      2025-09-17
// @description  Overlay of buttons to skip back and forward through videos, and control playback speed.
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

     GM_addStyle(`
        .allExtensionDiv {
            position: absolute !important;
            top: 5px !important;
            left: 0% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            z-index: 9999 !important;
            width: 35px !important;
        }

        .optionDiv {
            top: 10% !important;
            left: 0% !important;
            gap: 8px !important;
            z-index: 9999 !important;
        }

        .buttonDiv {
            top: 10% !important;
            left: 0% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            z-index: 99999 !important;
        }


        .allExtensionDiv button {
            pointer-events: auto !important;
            padding: 5px !important;
            width: 27px !important;
            font-size: 12px !important;
            border: none !important;
            border-radius: 4px !important;
            background: grey !important;
            color: rgb(255, 255, 255) !important;
            cursor: pointer !important;
            opacity: 0.5 !important;
        }
    `)


    let allExtensionDiv;
    let optionDiv;
    let buttonDiv;

    function waitForVideo() {
        return new Promise(resolve => {
            const interval = setInterval(() => {
                const video = document.querySelector("video");
                if (video) {
                    clearInterval(interval);
                    resolve(video);
                }
            }, 100);
        });
    }

    (async function() {

        // wait for video load
        const video = await waitForVideo();
        if (!video) return;

        console.log("Stable video element:", video);
        

        // create divs
        if (allExtensionDiv) return; // don’t duplicate
      
        allExtensionDiv = document.createElement("div")
        allExtensionDiv.className = "allExtensionDiv"

        optionDiv = document.createElement("div");
        optionDiv.className = "optionDiv";

        buttonDiv = document.createElement("div");
        buttonDiv.className = "buttonDiv";
      
      
        // buttons, start with 1 and keep simple for testing
        const smallSkipForwardBtn = document.createElement("button");
        smallSkipForwardBtn.innerText = "+5";

      
        smallSkipForwardBtn.addEventListener("touchstart", e => {
            video.currentTime += 5;
            e.stopPropagation(); // Prevent triggering parent click events
            e.preventDefault();
        });


      

        //how to make message equivalent






      
    })();
  
})();









