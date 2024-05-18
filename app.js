document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        addMessageToBoard(messageText);
        messageInput.value = '';
    }
});

function addMessageToBoard(messageText) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.textContent = messageText;
    messagesContainer.appendChild(messageElement);
}
