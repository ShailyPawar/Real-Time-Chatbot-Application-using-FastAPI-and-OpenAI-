
# Real-Time Chatbot Project

This is a simple real-time chatbot application built using FastAPI, OpenAI's GPT-3 API, and WebSockets.

## Features

- Real-time communication between the user and chatbot using WebSockets.
- Integration with OpenAI API to generate responses based on user input.
- Clean and simple frontend for a chatbot interface.
- Supports continuous conversation.

## Requirements

- Python 3.7+
- FastAPI
- Uvicorn
- OpenAI API key

## Setup

1. Clone the repository or download the files.
2. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your-api-key-here
   ```
4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
5. Open your browser and go to `http://127.0.0.1:8000/` to interact with the chatbot.

## File Structure

```
/fastapi_chatbot
│
├── main.py              # FastAPI application with WebSocket & OpenAI integration
├── .env                 # Store your API key here
├── templates/
│   └── index.html       # Chatbot frontend template
├── static/
│   └── style.css        # CSS file for styling the frontend
└── requirements.txt     # List of required Python packages
```

## API Documentation

### `GET /`

- Renders the main chatbot page (HTML frontend).

### `WebSocket /ws`

- Establishes a WebSocket connection for real-time messaging between the user and chatbot.
- Sends user messages and receives chatbot responses in real-time.

## Troubleshooting

- **Invalid API Key Error**: Ensure that your API key is correct in the `.env` file.
- **Server Errors**: Check if all dependencies are correctly installed and the server is running on the expected port.

For any issues, feel free to open an issue on this repository.
