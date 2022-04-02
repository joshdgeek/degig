/*api
https://wa.me/number/?text=urlencodedtext

*/

const form = document.querySelector("contact-form");
const usernameField =  document.querySelector("#cf-name")
const emailField = document.querySelector("#cf-email")
const subjectField = document.querySelector("#cf-subject")
const messageField = document.querySelector("#cf-message")
const sendButton = document.querySelector("#cf-submit")


sendButton.addEventListener("click",async ()=>{
    let name = usernameField.value
    let email = emailField.value
    let subject =  subjectField.value 
    let message = messageField.value
    //run a parallel fetch requests

    try {
      //use promises to run parallel requests
        const parallel = await Promise.all([
            fetch("https://wa.me/number/?text=urlencodedtext"),
            fetch("https://wa.me/number/?text=urlencodedtext"),
            fetch("https://wa.me/number/?text=urlencodedtext"),
            fetch("https://wa.me/number/?text=urlencodedtext")
        ])
    } catch (error) {
        paralel.json({error:error})
    }
})