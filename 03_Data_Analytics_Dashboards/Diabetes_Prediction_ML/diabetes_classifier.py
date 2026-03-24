import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score
import joblib

# 1. Load the dataset
df = pd.read_csv('data/fo_diabetes.csv')

# 2. Data Cleaning: Drop duplicates as performed in the notebook
df_clean = df.drop_duplicates(keep="first")

# 3. Feature Selection
# Selected features based on the final notebook iteration
features = ['GenHlth', 'HighBP', 'HighChol', 'DiffWalk', 'BMI', 'Age', 'Smoker', 'PhysActivity']
X = df_clean[features]
y = df_clean['Diabetes_binary']

# 4. Train/Test Split (70/30 split with random_state 10)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=10, shuffle=True)

# 5. Model Training (Logistic Regression with 'sag' solver)
model = LogisticRegression(solver='sag', max_iter=1000)
model.fit(X_train, y_train)

# 6. Evaluation
predictions = model.predict(X_test)
print(f"Model Accuracy: {accuracy_score(y_test, predictions):.2%}")
print("\nClassification Report:")
print(classification_report(y_test, predictions))

# 7. Save the model for production use
joblib.dump(model, 'models/diabetes_model.pkl')
print("\nModel saved to models/diabetes_model.pkl")