
# Skin Lesion Analysis Dashboard & Classification Report

## Overview
This project explores the distribution of various skin lesion types across demographics (age, gender) and their localization on the body. Additionally, the project includes the implementation of machine learning techniques to classify skin lesions using both traditional and deep learning approaches.

## Objectives
1. Analyze the distribution of skin lesions by age, gender, and anatomical localization.
2. Build a machine learning model for accurate lesion classification to aid in diagnostic decision-making.

## Methodology
### 1. Data Preprocessing
- **Dataset**: HAM10000 dermatoscopic images with metadata (age, gender, lesion type, localization).
- **Age Segmentation**: Data binned into groups (0-20, 21-40, 41-60, 61-80, 81-100 years).
- **Libraries**: Visualizations created using Seaborn and Matplotlib.

### 2. Visualizations
- **Donut Chart**: Displays the distribution of lesion types (e.g., melanoma, melanocytic nevi, benign keratosis-like lesions, etc.).
- **Bubble Chart**: Represents lesion types across different age groups, with bubble size reflecting lesion prevalence.
- **Bar Charts**: Shows lesion distribution by age, precise recall by gender, and lesion localization on the body.
- **Localization Chart**: Highlights where lesions commonly appear (e.g., back, lower extremity, trunk).

### 3. Machine Learning Approaches
#### Unsupervised Learning
- **K-Means Clustering**: Attempted to group lesions, but showed poor classification accuracy (ARI of 0.055).

#### Supervised Learning
- **Traditional Models**: 
  - Logistic Regression: 68% accuracy.
  - Random Forest: 72% accuracy, but poor F1 score for some groups.
- **CNN with InceptionV3**: 
  - Achieved 76% accuracy for image metadata and 74% accuracy for lesion images.
  - Pretrained on ImageNet, with additional dense and dropout layers for optimization.

### 4. Dashboard Implementation
- Built using HTML, CSS, and JavaScript (Chart.js).
- Interactive charts for dynamic exploration of lesion data.

## Key Findings
- **Lesion Distribution**: Melanocytic nevi is the most common lesion type (30% of cases), while dermatofibroma is the least common (5%).
- **Demographics**: Significant variation in lesion types across different age groups and genders.
- **Machine Learning**: Supervised deep learning (CNN) outperformed unsupervised learning (K-Means) in classifying skin lesions.

## Running the Dashboard Locally
To view the Skin Lesion Analysis Dashboard:
1. Navigate to the project folder:
   - `cd path/to/your/project/folder`
2. Run a local server:
   - `python -m http.server 8000`
3. Access the dashboard at:
   - `http://localhost:8000`

## Conclusion
This project provides a comprehensive analysis of skin lesion data and applies machine learning techniques to classify lesion types. While unsupervised learning showed limited success, supervised models, particularly CNNs, significantly improved classification accuracy. The interactive dashboard offers insights into lesion distribution and localization, aiding in the development of diagnostic and treatment strategies.

