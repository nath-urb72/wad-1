const loadButton = document.querySelector("#load-btn");
const postsContainer = document.querySelector("#posts-container");
const errorDisplay = document.querySelector("#error");
const loadingState = document.querySelector("#loading");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

loadButton.addEventListener('click', fetchPosts);

function fetchPosts() {
    console.log("Fetching posts...");
}