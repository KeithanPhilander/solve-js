
export const ToggleModule = () => {

    //Write solution to the Toggle task inside this ToggleModule function.
    console.log('checking toggle...');

    // select elements
    const toggleText = document.querySelector(".toggle-text");
    const toggleButton = document.querySelector(".toggle-button");

    // toggle function
    const toggle = () => {
        if(toggleText.textContent === "OFF") {
            toggleText.textContent = "ON";
            toggleText.classList.add("on");
        } else {
            toggleText.textContent = "OFF";
            toggleText.classList.remove("on");
        }
    }

    // events
    toggleButton.addEventListener("click", toggle);
    
}

