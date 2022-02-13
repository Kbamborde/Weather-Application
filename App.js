const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "cc5da87dfe89e22cd5cb1cb53da8786e";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputVal = input.value;


    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);

    if(listItemsArray.length > 0) {
        const filteredArray = listItemsArray
    }
    
});
