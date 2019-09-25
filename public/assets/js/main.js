'use strict';

addEventListener("click", function(event) {
    if(event.target === document.querySelector("#btn")) {
        event.preventDefault();
        console.log(event.target);
        console.log("YOYOYOOYOYO");
    }
})