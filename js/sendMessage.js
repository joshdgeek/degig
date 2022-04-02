/*api
https://wa.me/number/?text=urlencodedtext

*/

const form = document.querySelector("#contact-form");
const usernameField =  document.querySelector("#cf-name")
const messageField = document.querySelector("#cf-message")
const sendButton = document.querySelector("#cf-submit")


form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let names = usernameField.value
    let message = messageField.value

   // alert(names)
    const messageConstruct = `My name is ${names}.
     ${message}`

    let url = `https://wa.me/2348183585436/?text=${messageConstruct}`
    
    try {
        location.assign(url)
    } catch (error) {
        res.json({error:error})
    }
})

//used location.assign method to hit the whatsapp api