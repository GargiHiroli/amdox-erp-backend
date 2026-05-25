from fastapi import FastAPI
from prophet import Prophet
import pandas as pd

app = FastAPI()

@app.post("/predict")
def predict():
    df = pd.DataFrame({
        "ds": ["2024-01-01", "2024-01-02"],
        "y": [10, 20]
    })

    model = Prophet()
    model.fit(df)

    future = model.make_future_dataframe(periods=5)
    forecast = model.predict(future)

    return forecast.tail().to_dict()