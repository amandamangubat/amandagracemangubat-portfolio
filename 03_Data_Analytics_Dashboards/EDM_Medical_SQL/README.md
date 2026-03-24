# MediCare: Full-Stack Hospital BI Portal
**Project Type:** Enterprise Data Management (EMC001) Final Output
**Stack:** SQL (MySQL) | Metabase | HTML/CSS/JS | DBeaver

## Overview
MediCare is a centralized administrative solution designed to bridge the gap between complex healthcare databases and actionable business intelligence. The system integrates a 14-table relational schema with an embedded Metabase engine, allowing hospital staff to monitor patient lifecycles, pharmaceutical inventory, and financial sustainability from a single responsive interface.

## 📄 Technical Documentation & Visuals
Since this project involves a multi-tier architecture, the complete technical breakdown and system previews are centralized in the official documentation:

### **[View the Full MediCare Documentation Report](docs/MediCare_Documentation_Report.pdf)**

**Key insights available in the report:**
* **Dashboard Previews:** High-resolution captures of Patient Analytics, Doctor Insights, and Financial Overviews.
* **System Architecture:** Detailed mapping of the MySQL-to-Metabase data pipeline.
* **Normalization Logic:** Step-by-step breakdown of the 3rd Normal Form (3NF) database structure.
* **User Guide:** Full instructions for navigating the JavaScript-driven frontend.

---

## Database Architecture
The backbone of MediCare is a robust relational database consisting of 14 normalized tables and 500+ records, ensuring high data integrity and zero redundancy.

* **Clinical Management:** Orchestrates patient registration, doctor specializations, and appointment scheduling.
* **Medical Intelligence:** Links specific diagnoses and prescriptions to patient records through standardized coding.
* **Financial Operations:** Manages the revenue cycle (billing/payments) and reconciles it against hospital operational expenses.



## Technical Features
* **Relational SQL Backend:** 14 modular scripts designed with strict Primary/Foreign Key constraints and optimized for BI querying.
* **Business Intelligence Engine:** Dynamic Metabase dashboards providing real-time KPI tracking and automated reporting.
* **Responsive Frontend:** A custom UI featuring a persistent-session sidebar and a clean, administrative aesthetic.

## Repository Contents
* **/docs:** Includes the **[Final ERD](docs/ERD_Hospital_Schema.jpg)** and the **[Data Dictionary](docs/Data_Dictionary.pdf)**.
* **/sql_scripts:** Full collection of DDL/DML scripts for database deployment.
* **/frontend:** Source code for the web-based administrative portal.
* **/Media:** Feature-length **[System Demo Video](Media/Dashboard_Demo.mp4)** showcasing the live environment.

---
*Developed as the Final Output for EMC001 | CIIT College of Innovation and Integrated Technology.*