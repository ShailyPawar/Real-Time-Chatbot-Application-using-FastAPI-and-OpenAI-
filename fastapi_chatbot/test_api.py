import requests
import os

# Load API key from .env
api_key = os.getenv("OPENAI_API_KEY")

# Test the API request
url = "https://api.openai.com/v1/engines/text-davinci-003/completions"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}
data = {
    "prompt": "Hello, world!",
    "max_tokens": 50
}

response = requests.post(url, json=data, headers=headers)
print(response.status_code)
print(response.text)
