const loadButton = document.querySelector("#load-btn");
const postsContainer = document.querySelector("#posts-container");
const errorDisplay = document.querySelector("#error");
const loadingState = document.querySelector("#loading");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

loadButton.addEventListener('click', fetchPosts);

async function fetchPosts() {
    postsContainer.innerHTML = "";
    errorDisplay.textContent = "";
    errorDisplay.style.display = "none";
    loadingState.style.display = "block";
    loadButton.disabled = true;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();
        const fivePosts = posts.slice(0, 5);
        displayPosts(fivePosts);

    } catch (error) {
        errorDisplay.innerHTML = `Failed to load posts: ${error.message}. <button id="retry-btn">Retry</button>`;
        errorDisplay.style.display = "block";

        const retryBtn = document.querySelector('#retry-btn');
        retryBtn.addEventListener('click', fetchPosts);

    } finally {
        loadingState.style.display = "none";
        loadButton.disabled = false;
    }
}

function displayPosts(posts) {
    posts.forEach((post, index) => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.setAttribute("data-index", index + 1);

        const title = document.createElement("h2");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        postCard.appendChild(title);
        postCard.appendChild(body);
        postsContainer.appendChild(postCard);
    });
}