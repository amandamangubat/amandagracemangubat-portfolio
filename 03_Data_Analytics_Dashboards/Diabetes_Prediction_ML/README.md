# Diabetes Risk Prediction (Binary Classification)
**Domain:** Health Informatics / Predictive Analytics  
**Tech Stack:** Python (Scikit-Learn, Pandas), Logistic Regression

## Project Objective
This project developed a machine learning model to predict the likelihood of an individual being diabetic or pre-diabetic based on lifestyle and health survey data. This tool is designed to assist healthcare providers in identifying high-risk patients for early intervention.

## Dataset & Source Reference
* **Source:** **Behavioral Risk Factor Surveillance System (BRFSS)** via the **Centers for Disease Control and Prevention (CDC)**.
* **Dataset Type:** Annual health survey data from the United States.
* **Initial Size:** 253,680 records.
* **Cleaning:** Removed **35,575 duplicate records** to ensure data integrity and prevent model overfitting.
* **Final Feature Set:** * `GenHlth` (General Health Rating)
    * `HighBP` (High Blood Pressure)
    * `HighChol` (High Cholesterol)
    * `BMI` (Body Mass Index)
    * `Age`, `Smoker` status, `PhysActivity`, and `DiffWalk` (Difficulty Walking).

## 🛠 Machine Learning Pipeline
* **Model:** Logistic Regression using the `sag` (Stochastic Average Gradient) solver for efficient processing of the large dataset.
* **Preprocessing:** Feature engineering included creating a custom data dictionary and handling categorical-to-numeric mapping.
* **Split:** 70% Training / 30% Testing (Random State: 10).
* **Data Persistence:** The final model is serialized using `joblib` for integration into web or mobile applications.

## Performance Metrics
* **Overall Accuracy:** **84.9%**
* **Non-Diabetic (Class 0) Recall:** **98%** — Extremely effective at filtering out low-risk individuals.
* **Diabetic/Pre-diabetic (Class 1) Precision:** **52%** * **Key Insight:** The model serves as a strong first-level screening tool, identifying nearly all healthy individuals while flagging potential risk cases for further clinical testing.

## How to Run
1. Ensure `fo_diabetes.csv` is in the `data/` folder.
2. Install dependencies: `pip install -r requirements.txt`
3. Execute the training script: `python diabetes_classifier.py`