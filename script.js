// DOM Elements
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeCountElem = document.getElementById('likeCount');
const dislikeCountElem = document.getElementById('dislikeCount');
const commentInput = document.getElementById('commentInput');
const commentSubmit = document.getElementById('commentSubmit');
const commentsList = document.getElementById('commentsList');
const resetBtn = document.getElementById('resetBtn');

// State variables
let likeCount = 0;
let dislikeCount = 0;
let comments = [];

// Update the UI
function updateUI() {
    likeCountElem.textContent = likeCount;
    dislikeCountElem.textContent = dislikeCount;
    commentsList.innerHTML = comments.map(comment => `<div class="comment">${comment}</div>`).join('');
}

// Increment Like/Dislike on click
likeBtn.addEventListener('click', () => {
    likeCount++;
    updateUI();
});

dislikeBtn.addEventListener('click', () => {
    dislikeCount++;
    updateUI();
});

// Handle comment submission
commentSubmit.addEventListener('click', () => {
    const comment = commentInput.value.trim();
    if (comment) {
        comments.push(comment);
        commentInput.value = '';
        updateUI();
    }
});

// Handle reset
resetBtn.addEventListener('click', () => {
    likeCount = 0;
    dislikeCount = 0;
    comments = [];
    updateUI();
});

// Initial UI setup
updateUI();
