
export const FilterModule = () => {

    //Write solution to the Filter task inside this FilterModule function.


    let currentBtn;
    let colors = [];

    document.querySelectorAll(".btn").forEach(item => {
        item.addEventListener("click", (event) => {
            currentBtn = event.target;
            getColors();
            filterColors(currentBtn);
        })
    })

    const getColors = () => {
        document.querySelectorAll(".clr").forEach(item => {
            colors.push(item.id)
        })
    }

    const filterColors = (currentBtn) => {
        if(currentBtn.id === "btn-all") {
            //clear
            document.querySelectorAll(".clr").forEach(item => {
                item.classList.remove("invisible")
            })
        } else if(currentBtn.id === "btn-red") {
            //clear
            document.querySelectorAll(".clr").forEach(item => {
                item.classList.remove("invisible")
            })
            document.querySelectorAll("#yellow").forEach(item => {
                item.classList.add("invisible")
            });
            document.querySelectorAll("#green").forEach(item => {
                item.classList.add("invisible")
            });
            
        } else if(currentBtn.id === "btn-yellow") {
            //clear
            document.querySelectorAll(".clr").forEach(item => {
                item.classList.remove("invisible")
            })
            document.querySelectorAll("#red").forEach(item => {
                item.classList.add("invisible")
            });
            document.querySelectorAll("#green").forEach(item => {
                item.classList.add("invisible")
            });
        } else if(currentBtn.id === "btn-green") {
            //clear
            document.querySelectorAll(".clr").forEach(item => {
                item.classList.remove("invisible")
            })
            document.querySelectorAll("#yellow").forEach(item => {
                item.classList.add("invisible")
            });            
            document.querySelectorAll("#red").forEach(item => {
                item.classList.add("invisible")
            });
        }
    }


}