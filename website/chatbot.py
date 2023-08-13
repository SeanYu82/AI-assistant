```python
import openai
from website.config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def generate_response(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        temperature=0.5,
        max_tokens=100
    )
    return response.choices[0].text.strip()
```