const loadButton = document.querySelector("#load-btn");
const postsContainer = document.querySelector("#posts-container");
const errorDisplay = document.querySelector("#error");
const loadingState = document.querySelector("#loading");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

loadButton.addEventListener('click', fetchPosts);

async function fetchPosts() {
    // Testing:
    console.log("Fetching posts...");

    // Reset the state everytime the button is clicked
    postsContainer.innerHTML = "";
    errorDisplay.textContent = "";
    errorDisplay.style.display = "none";
    // "block" is used to display the loading state, once the button is clicked
    loadingState.style.display = "block";
    // Disable load button during request to prevent duplicate clicks
    loadButton.disabled = true;

    try {
        // fetch the posts from the API then store as "response"
        const response = await fetch(API_URL);

        // Check if the response failed (e.g. 404 or 500 status code)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // convert the response to JSON and store as "posts"
        const posts = await response.json();

        // Take only the first five posts from the array
        const fivePosts = posts.slice(0, 5);

        // Render the posts into the page DOM
        displayPosts(fivePosts);

    } catch (error) {
        // Display error message if the fetch request fails
        errorDisplay.textContent = `Failed to load posts: ${error.message}. Please try again.`;
        errorDisplay.style.display = "block";

    } finally {
        // Hide the loading state once the process finishes
        loadingState.style.display = "none";
        // Re-enable load button so user can retry if needed
        loadButton.disabled = false;
    }
}

function displayPosts(posts) {
    // For each post:
    posts.forEach(post => {
        // Create a wrapper card for each post
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        // Create the title safely
        const title = document.createElement("h2");
        title.textContent = post.title;

        // Create and populate the body safely
        const body = document.createElement("p");
        body.textContent = post.body;

        // Append title and body into the card container
        postCard.appendChild(title);
        postCard.appendChild(body);

        // Append the post card into the main #posts-container
        postsContainer.appendChild(postCard);
    });
}