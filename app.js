if (navigator.serviceWorker) {
    navigator.serviceWorker.register("serviceworker.js");
}

navigator.serviceWorker.ready.then((res) => {
    if (res.sync) {
        const form = document.querySelector(".send-msg");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let message = document.querySelector(".message").value;
        });
        //https://www.twilio.com/blog/2017/02/send-messages-when-youre-back-online-with-service-workers-and-background-sync.html
    }
})

