document.addEventListener('DOMContentLoaded', function() {
    const sendMessageButton = document.getElementById('sendMessage');
    const commentNameInput = document.getElementById('comment-name');
    const commentTextInput = document.getElementById('comment-text');
    const commentList = document.getElementById('comment-list');

    sendMessageButton.addEventListener('click', function() {
        const name = commentNameInput.value.trim();
        const text = commentTextInput.value.trim();

        if (name && text) {
            const commentContainer = document.createElement('div');
            commentContainer.classList.add('comment-item');

            const nameElement = document.createElement('strong');
            nameElement.textContent = name + ': ';

            const textElement = document.createElement('span');
            textElement.textContent = text;

            commentContainer.appendChild(nameElement);
            commentContainer.appendChild(textElement);

            commentList.appendChild(commentContainer);

            // Clear input fields
            commentNameInput.value = '';
            commentTextInput.value = '';
        } else {
            alert('Please enter both your name and message.');
        }
    });
});