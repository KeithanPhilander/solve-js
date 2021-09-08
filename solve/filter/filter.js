
export const FilterModule = () => {

    //Write solution to the Filter task inside this FilterModule function.

    // variables
    let currentBtn;
    let colors = [];

    // app
    document.querySelectorAll(".btn").forEach(item => {
        item.addEventListener("click", (event) => {
            currentBtn = event.target;
            getColors();
            filterColors(currentBtn);
        })
    })

    //functions
    // populate colors array
    const getColors = () => {
        document.querySelectorAll(".clr").forEach(item => {
            colors.push(item.id)
        })
    }

    // clear all colors
    const clear = (query) => {
        document.querySelectorAll(query).forEach(item => {
            item.classList.remove("invisible")
        })
    }

    // filter one color
    const filter = (query) => {
        document.querySelectorAll(query).forEach(item => {
            item.classList.add("invisible")
        });
    }


    // filter all colors
    const filterColors = (currentBtn) => {
        if(currentBtn.id === "btn-all") {
            //clear
        clear(".clr")
        } else if(currentBtn.id === "btn-red") {
            //clear
            clear(".clr");
            filter("#yellow");
            filter("#green");
            
        } else if(currentBtn.id === "btn-yellow") {
            //clear
            clear(".clr");
            filter("#red");
            filter("#green")
        } else if(currentBtn.id === "btn-green") {
            //clear
            clear(".clr");
            filter("#yellow")           
            filter("#red")
        }
    }


}