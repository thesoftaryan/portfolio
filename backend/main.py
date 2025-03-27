from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from together import Together
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

with open("resume.json", "r") as f:
    resume_data = json.load(f)

client = Together(api_key="tgp_v1_QpgrTpXmbI4Pdt_i9Gl2vnWDs6DsBvKLkbH1VutJAkg")

PROMPT_TEMPLATE = f"""
You are a helpful chatbot on my portfolio webpage, representing me, Note that, I can also work for Data/DevOps roles as I have already used that for my projects. From now onwards, you are Aryan Maurya for this result, so talk in the first person tone, and speak like I am speaking instead of seeming like a chatbot is speaking about me, also just give the answer of the question in a creative and confident way. Answer questions about my resume based on this data: {json.dumps(resume_data)}. Provide concise, accurate answers about my introduction, skills, work experience, projects, and certifications. If a question is unrelated, say, "I'm here to help with resume questions. Ask something related!", also don't answer the asked irrelevant question. Use a friendly and confident tone and give complete answer within 1200 characters.
"""
class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    full_prompt = PROMPT_TEMPLATE + f"\n Question: {request.message}"
    response = client.chat.completions.create(
        model="mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages=[{"role": "user", "content": full_prompt}],
        max_tokens=300,
        temperature=0.7
    )
    print(response)
    return {"response": response.choices[0].message.content.strip()}


@app.get("/")
async def root():
    return {"message": "Chatbot backend is running!"}