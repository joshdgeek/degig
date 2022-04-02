/*api
https://wa.me/number/?text=urlencodedtext

*/

const form = document.querySelector("contact-form");
const usernameField =  document.querySelector("#cf-name")
const messageField = document.querySelector("#cf-message")
const sendButton = document.querySelector("#cf-submit")


sendButton.addEventListener("click",async ()=>{
    let names = usernameField.value
    let message = messageField.value

   // alert(names)
    const messageConstruct = `My name is ${name}.
     ${message}`

    let url = `https://wa.me/234903741801/?text=${messageConstruct}`
    
    try {
        //hit the whatsapp api endpoint
        const res = await fetch(url)
    } catch (error) {
        res.json({error:error})
    }
})