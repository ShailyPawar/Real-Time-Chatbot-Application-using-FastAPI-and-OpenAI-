// static/script.js
document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    const messageInput = document.getElementById("messageInput");
    const messagesDiv = document.getElementById("messages");

    sendButton.addEventListener("click", function() {
        const userMessage = messageInput.value;
        if (userMessage) {
            const userMessageElement = document.createElement("p");
            userMessageElement.textContent = `You: ${userMessage}`;
            messagesDiv.appendChild(userMessageElement);
            messageInput.value = '';

            // Call your FastAPI endpoint for chatbot response here
            fetch("/chat", {
                method: "POST",
                body: JSON.stringify({ message: userMessage }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                const botMessageElement = document.createElement("p");
                botMessageElement.textContent = `Bot: ${data.response}`;
                messagesDiv.appendChild(botMessageElement);
            });
        }
    });
});
