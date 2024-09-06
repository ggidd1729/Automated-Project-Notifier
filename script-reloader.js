// ==UserScript==
// @name        DAT Script Reloader
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Gen
// @description 09/08/2024, 12:24:46
// ==/UserScript==

// Store a message in localStorage to trigger reload
function sendMessage() {
  localStorage.setItem('reloadMessage', 'true');
}

// Send the message periodically
setInterval(sendMessage, 5 * 60 * 1000); // Adjust the interval as needed
