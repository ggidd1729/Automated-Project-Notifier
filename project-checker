// ==UserScript==
// @name         Project Checker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Check for projects paying over minPayRate/hour every checkInterval, send a system notification and reload the page
// @author       Gen
// @match        https://app.dataannotation.tech/workers/projects
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    const minPayRate = 25; // Minimum pay rate in $US per hour
    const minutes = 5
    const checkInterval = minutes * 60 * 1000; // Check every `minutes` minutes

    // Function to check for projects
    function checkForProjects() {
        const projects = document.querySelectorAll('#main > div > div > div:nth-child(2) > div.tw-relative > div > table > tbody > tr');
        let foundProject = false;

        projects.forEach(project => {
            const payRateText = project.querySelector("td:nth-child(2)").innerText;
            const payRate = parseFloat(payRateText.replace(/[^0-9.]/g, ''));

            if (payRate >= minPayRate) {
                foundProject = true;
            }
        });

        if (!foundProject) {
            console.log('No projects found with pay rate over $' + minPayRate + '/hour.');
        } else {
            console.log("Found projects!");

            GM_notification({
                text: "Click to open Data Annotation Tech",
                title: "New DAT Project Available",
                // image: "https://example.com/icon.png",
                timeout: 10000, // Notification will disappear after 10 seconds
                onclick: function() {
                    window.open("https://app.dataannotation.tech/workers/projects"); // Action on click
                }
            });
        }
    }

    function checkForMessage() {
      if (localStorage.getItem('reloadMessage') === 'true') {
        localStorage.removeItem('reloadMessage'); // Clear the message
        location.reload(); // Reload the page
      }
    }

    // Check for messages periodically
    setInterval(checkForMessage, 2.5 * 60 * 1000); // Adjust the interval as needed

    // Check for projects on page load
    checkForProjects();

    // Set interval to check for projects periodically
    setInterval(checkForProjects, checkInterval);
})();
