# Analyzing Smartphone Specifications for Price Range Prediction and Market Segmentation

This project investigates how technical specifications influence the pricing and market segmentation of smartphones. By analyzing a dataset of 1,708 devices, the study aims to help users determine if a phone's price is fair based on its hardware and design features.

## Project Overview

* **Problem Statement**: Smartphone pricing often varies significantly despite similar hardware. This study addresses the difficulty users face in assessing whether a device is worth its asking price.
* **Target Audience**: Smartphone consumers and data-driven buyers looking to make informed purchasing decisions.
* **Dataset**: Contains 1,708 smartphones with 38 attributes, including technical specs (RAM, Storage, Battery), design features (Foldable, Weight), and OS/Performance indicators.

## Modeling Techniques

The project utilizes three distinct data mining techniques to analyze the data:

1.  **Decision Tree (Classification)**:
    * Used to predict the price level (Low, Medium, High) based on hardware attributes.
    * Identifies the primary factors that drive a phone into a specific price segment.
2.  **k-Means (Clustering)**:
    * Identifies natural groupings of phones based on their specifications.
    * **Segments Identified**: Budget, Lower-Mid, Older/Legacy, and Flagship.
3.  **Association Rule (Pattern Mining)**:
    * Identifies combinations of specifications that frequently appear together within specific price levels.

## Key Insights

* **Price Drivers**: High storage, RAM, and PPI density are strong indicators of flagship (High) pricing.
* **Market Distribution**: The majority of the dataset falls within the $170–$550 price range, with a median battery capacity of 5000 mAh.
* **Feature Trends**: NFC is present in 92% of the analyzed devices, while foldable phones represent only 5% of the market segment in this data.

## Tech Stack

* **Data Mining Tool**: RapidMiner (used for generating `.rmp` process files for Decision Trees, k-Means, and Association Rules).
* **Analysis**: Statistical modeling, Correlation Matrices, and Centroid-based cluster analysis.
* **Documentation**: Detailed research paper and final presentation deck.
