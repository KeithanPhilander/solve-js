
export const ToggleModule = () => {

    //Write solution to the Toggle task inside this ToggleModule function.
    console.log('checking toggle...');

    // select elements
    const toggleButton = document.querySelector(".toggle-button");
    const toggleText = document.querySelector(".toggle-text");

    // counter to alternate between toggle states
    let toggleCounter = 0;

    // events
    toggleButton.addEventListener("click", (e) => {
        // increment counter
        toggleCounter += 1;
        if(toggleCounter === 1) {
            toggleText.textContent = "ON"
            toggleText.classList.add("on");
        } else {
            toggleCounter = 0;
            toggleText.classList.remove("on");
            toggleText.textContent = "OFF";
        }
    });
    
}

