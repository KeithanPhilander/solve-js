
export const FilterModule = () => {

    //Write solution to the Filter task inside this FilterModule function.

    // my solutions

    // solution 1

    // select elements
    // const option = document.querySelector(".options-group");
    // const items = document.querySelectorAll(".item");

    // // click events
    // option.onclick = (selectedOption) => {
    //     // if user clicks on an option 
    //     if(selectedOption.target.classList.contains("option")) {
    //         // remove the active class from the first option 
    //         option.querySelector(".active").classList.remove("active");
    //         // and add it to the selected option 
    //         selectedOption.target.classList.add("active");
    //         // get data-name of selected option
    //         let optionName = selectedOption.target.getAttribute("data-name");

    //         items.forEach(item => {
    //             // get data-name of selected item in gallery
    //             let filterItems = item.getAttribute("data-name");
    //             // if option data-name value is equal to gallery item data-name value or
    //             // option data-name value is equal to all
    //             if(filterItems == optionName || optionName == "all") {
    //                 // show item
    //                 item.classList.add("show")
    //             } else {
    //                 //hide item
    //                 item.classList.add("hide")
    //                 item.classList.remove("show")
    //             }

    //         })
    //     }
    // }





    // solution 2

    // // variables
    // let currentBtn;
    // let colors = [];

    // // app
    // document.querySelectorAll(".btn").forEach(item => {
    //     item.addEventListener("click", (event) => {
    //         currentBtn = event.target;
    //         getColors();
    //         filterColors(currentBtn);
    //     })
    // })

    // //functions
    // // populate colors array
    // const getColors = () => {
    //     document.querySelectorAll(".clr").forEach(item => {
    //         colors.push(item.id)
    //     })
    // }

    // // clear all colors
    // const clear = (query) => {
    //     document.querySelectorAll(query).forEach(item => {
    //         item.classList.remove("invisible")
    //     })
    // }

    // // filter one color
    // const filter = (query) => {
    //     document.querySelectorAll(query).forEach(item => {
    //         item.classList.add("invisible")
    //     });
    // }


    // // filter all colors
    // const filterColors = (currentBtn) => {
    //     if(currentBtn.id === "btn-all") {
    //         //clear
    //     clear(".clr")
    //     } else if(currentBtn.id === "btn-red") {
    //         //clear
    //         clear(".clr");
    //         filter("#yellow");
    //         filter("#green");
            
    //     } else if(currentBtn.id === "btn-yellow") {
    //         //clear
    //         clear(".clr");
    //         filter("#red");
    //         filter("#green")
    //     } else if(currentBtn.id === "btn-green") {
    //         //clear
    //         clear(".clr");
    //         filter("#yellow")           
    //         filter("#red")
    //     }
    // }


    // solution 3

    // Select all relevant elements
    const spans = document.querySelectorAll('.gallery span:nth-child(2)');
    const buttons = document.querySelectorAll('.options-group > button');

    // Filter function which takes in the color of the button which was clicked
    const filterColors = (color) => {
        // if the color is all, loop through all spans and remove the hide class / make everything visible
        if (color === 'all') {
            spans.forEach(span => { span.parentElement.classList.remove('hide');});
        } 
        // else loop through all spans and toggle the hide class for the spans that do not match the button color
        else {
            spans.forEach(span => { span.parentElement.classList.toggle('hide', span.innerHTML.toLowerCase() !== color) });  
        } 
    }
        
    // loop through buttons and add an event listener to each of them which runs the filterColors function
    buttons.forEach(button => {
        let btnSpan = button.querySelector('span:nth-child(1)');
        button.addEventListener('click', (e) => {
            filterColors(btnSpan.innerHTML.toLowerCase());
        });
    });

}
