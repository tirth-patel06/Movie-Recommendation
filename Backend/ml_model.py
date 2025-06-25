import joblib
import pandas
import numpy as np

model = joblib.load("./similarity.pkl") 
movies =  joblib.load("./movies.pkl")

def recommend(movie):
    results = []
    index = movies[movies['title'] == movie].index[0]
    distances = sorted(list(enumerate(model[index])),reverse=True,key = lambda x: x[1])
    for i in distances[1:6]:
        results.append({"name": movies.iloc[i[0]].title, "overview": movies.iloc[i[0]].overview, "rate": movies.iloc[i[0]].vote_average, "id": int(movies.iloc[i[0]].id)})
    return results