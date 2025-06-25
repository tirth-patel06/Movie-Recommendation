import uvicorn
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from ml_model import recommend  # Assuming you have a module named ml_model with a recommend function


class Item(BaseModel):
    name: str

app = FastAPI()

origins = [
    "http://localhost:5173",  # React app
]

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)



@app.post("/suggestions")
async def get_suggestions(item: Item):
    name = item.name
    suggestions = recommend(name)
    return suggestions

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)