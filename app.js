let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
let input = document.querySelector("input");
let btn = document.querySelector("button");
let qr_box = document.querySelector(".qr");
let container = document.querySelector(".container");

input.addEventListener("input", () => {
    btn.addEventListener("click", ()=> {
        let value = input.value;
        console.log(value);
        qr_box.src = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${value}`;
    })
})

