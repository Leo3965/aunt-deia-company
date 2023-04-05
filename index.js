console.log("Leonardo <3")

const name = document.querySelector('#name');
const need = document.querySelector('#need');
const htmlMessage = document.querySelector('#message');
const form = document.getElementById('contact-form');



function submitForm(event) {
    //Preventing page refresh
    event.preventDefault();
    // const phoneNumber = "+1(240)656-5133";
    const phoneNumber = "12406565133";

    const message = `
        Hi, my name is ${name?.value} and I came from your website, I need help on: ${need?.value} - ${htmlMessage?.value}`
        .trim().replaceAll(" ", "%20");

    const url = `https://wa.me/1${phoneNumber}?text=${message}`;

    window.open(url, "_blank")
}

form.addEventListener("submit", submitForm);
