from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib

app = FastAPI()

# load the trained model
model = joblib.load("loan_model.pkl")

FEATURES = [
    "Gender",
    "Married",
    "Dependents",
    "Education",
    "Self_Employed",
    "ApplicantIncome",
    "CoapplicantIncome",
    "LoanAmount",
    "Loan_Amount_Term",
    "Credit_History",
    "Property_Area",
]

class Applicant(BaseModel):
    Gender: int
    Married: int
    Dependents: int
    Education: int
    Self_Employed: int
    ApplicantIncome: float
    CoapplicantIncome: float
    LoanAmount: float
    Loan_Amount_Term: int
    Credit_History: int
    Property_Area: int

@app.get("/")
def home():
    return {"message": "Loan Prediction API is running"}

@app.post("/predict")
def predict(applicant: Applicant):
    df = pd.DataFrame([applicant.dict()])[FEATURES]
    prediction = model.predict(df)[0]

    result = "Loan Approved" if prediction == 1 else "Loan Not Approved"

    return {
        "prediction": int(prediction),
        "result": result
    }
