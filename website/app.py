```python
from flask import Flask, render_template, request
from . import chatbot, config

app = Flask(__name__)
app.config.from_object(config)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

@app.route('/get')
def get_bot_response():
    user_text = request.args.get('msg')
    return str(chatbot.get_response(user_text))

if __name__ == "__main__":
    app.run()
```