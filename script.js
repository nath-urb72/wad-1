const nameInput = document.querySelector("#nameInput");
const welcomeMessage = document.querySelector("#welcomeMessage");

const themeButton = document.querySelector("#themeButton");

const studentForm = document.querySelector("#studentForm");
const registerDisplay = document.querySelector("#registerDisplay");

// Live Name Preview
nameInput.addEventListener("input", () => {
    welcomeMessage.textContent = `Welcome to the Student Registration Website, ${nameInput.value}!`;
});

// Handle Form Submission
studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    registerDisplay.textContent = `Congrats! ${nameInput.value} is officially registered!`;
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

// Reflection Answers
// 1. Event Prevention
//      - By using event.preventDefault(), I was able to display my register message after clicking the submit button without the whole site refreshing.
// 2. State Toggling
//      - Using classList.toggle() allowed me to simplify the changing of themes in the site. Instead of a complicated conditional code, the user can just turn it ON and OFF easily.
// 3. Input vs. Keydown
//      - In my understanding, the input event tracks real-time changes IN an input area, while keydown tracks the keys you press and it is not limited to just an input area, but for the whole document.
