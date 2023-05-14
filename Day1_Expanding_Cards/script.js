// This code selects all elements with the class 'panel' and stores them in the variable 'panels'.
const panels = document.querySelectorAll('.panel')

// Loop through each panel element
panels.forEach(panel => {
    // Add a click event listener to each panel
    panel.addEventListener('click', () => {
        // Remove the active class from all panels
        removeActiveClasses()
        // Add the active class to the clicked panel
        panel.classList.add('active')
    })
})

//This function removes the active class from all panels
function removeActiveClasses() {
    //Loop through all panels
    panels.forEach(panel => {
        //Remove the active class from each panel
        panel.classList.remove('active')
    })
}