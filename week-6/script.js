// const button = document.querySelector("#myButton");
// const message = document.querySelector("#message");

// button.addEventListener("click", (event) => {
//     console.log(event.target);
//     document.body.classList.toggle("dark");
// });

// document.addEventListener("keydown", (event) => {
//     console.log(event);
// })

const nameInput = document.querySelector("#nameInput");
const welcomeMessage = document.querySelector("#welcomeMessage");

const themeButton = document.querySelector("#themeButton");

const studentForm = document.querySelector("#studentForm");

// Live Name Preview
nameInput.addEventListener("input", () => {
    welcomeMessage.textContent = `Welcome to the Student Registration Website, ${nameInput.value}!`;
});

// Handle Form Submission
studentForm.addEventListener("submit", () => {
    studentForm.event.preventDefault();
    console.log("Form submitted!");
});

// Toggle the Theme
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

// Keyboard Challenge
document.addEventListener("keydown", (event) => {
    //console.log(event.key);
    if (event.key === "Escape") {
        welcomeMessage.textContent = `Welcome to the Student Registration Website, [user]!`;
    }
})