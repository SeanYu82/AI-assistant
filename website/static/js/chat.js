var chatInput = document.getElementById('chat-input');
var chatOutput = document.getElementById('chat-output');

chatInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (this.value) {
            sendMessage(this.value);
            this.value = '';
        }
    }
});

function sendMessage(message) {
    var data = {
        'message': message
    };

    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        displayMessage(data['message'], 'bot');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    displayMessage(message, 'user');
}

function displayMessage(message, sender) {
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}