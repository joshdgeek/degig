/*api
https://wa.me/number/?text=urlencodedtext

*/

const form = document.querySelector("contact-form");
const name = form.cf-name.value
const email = form.cf-email.value
const subject = form.subject.value
const message = form.cf-message.value  
const sendButton = documnt.querySelector("#cf-submit")

sendButton.addEventLisener("submit",(e)=>{
    //run a parallel fetch requests
})