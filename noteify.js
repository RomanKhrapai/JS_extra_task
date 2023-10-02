export const noteify = (str, type = "success") => {
    const ref = document.querySelector("#noteify");
    ref.innerHTML = `
   ${str}
    `;
    switch (type) {
        case "error":
            ref.classList.add("noteify-error");
            window.setTimeout(() => {
                ref.classList.remove("noteify-error");
            }, 2000);
            break;
        case "message":
            ref.classList.add("noteify-message");
            window.setTimeout(() => {
                ref.classList.remove("noteify-message");
            }, 2000);
            break;
        case "success":
            ref.classList.add("noteify-success");
            window.setTimeout(() => {
                ref.classList.remove("noteify-success");
            }, 2000);
            break;

        default:
            break;
    }
    ref.classList.add("noteify-active");
    window.setTimeout(() => {
        ref.classList.remove("noteify-active");
    }, 2000);
};
