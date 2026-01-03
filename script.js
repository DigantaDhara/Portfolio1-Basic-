/* --- script.js --- */

// Select the <span> inside the .typing-text element
const typed = new Typed(".typing-text span", {
    // These are the strings that will be typed out one by one
    strings: [
        "Web Developer",
        "Data Structures Enthusiast",
        "Open-Source Contributor",
        "Amateur eFootball Player"
    ],
    
    typeSpeed: 100,      // Speed of typing in milliseconds
    backSpeed: 60,       // Speed of deleting in milliseconds
    backDelay: 2000,     // Time to wait before deleting (2 seconds)
    loop: true,          // Repeat the animation infinitely
    cursorChar: "|",     // Character for the blinking cursor
    smartBackspace: true // Only delete what is necessary
});