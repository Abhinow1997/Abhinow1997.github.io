+++
title = "RSS News Sentiment Analysis Dashboard"
date = "2024-11-12"
+++

This project creates a daily-updated dashboard analyzing sentiment in news articles from various broadcasters. It uses RSS feeds to collect news data, performs sentiment analysis, and visualizes the results using a Streamlit web application.

<!--more-->

# RSS News Sentiment Analysis Dashboard

![NewsSentimentFlow-Page-2](https://github.com/user-attachments/assets/6d8f6b25-4c24-4723-b942-83fd67fe035d)

## Overview

This project creates a daily-updated dashboard analyzing sentiment in news articles from various broadcasters. It uses RSS feeds to collect news data, performs sentiment analysis, and visualizes the results using a Streamlit web application.

## Pipeline

### Data Collection
   Script: `rss_datacollection_feed.py`
   Fetches news articles from RSS feeds of multiple broadcasters (BBC, NYC Times, CBS News, Aljazeera, The Guardian)
   Uses `requests` library to fetch RSS data
   Parses XML data using `xml.etree.ElementTree`

### Sentiment Analysis
   Utilizes VADER (Valence Aware Dictionary and sEntiment Reasoner) for sentiment scoring
   Calculates sentiment scores for both article titles and descriptions

### Data Processing
   Cleans HTML tags from descriptions
   Removes duplicates
   Saves processed data to a CSV file with a date stamp

### Automated Daily Updates
   Uses GitHub Actions for daily execution of the data collection script
   Workflow defined in `.github/workflows/daily_data_collection.yml`
   Automatically commits and pushes updated data to the repository

### Visualization
   Script: `app.py`
   Creates a Streamlit dashboard
   Visualizations include:
     Article count by broadcaster
     Average sentiment scores
     Publication time distribution
     Sentiment distribution pie charts

### Deployment
   Hosted on Streamlit Cloud
   Automatically updates with the latest data

### Key Features

Daily automated data collection and analysis
Sentiment analysis of news articles from multiple sources
Interactive web dashboard for data exploration
Version-controlled data storage using GitHub

### Technologies Used

Python
Pandas for data manipulation
VADER for sentiment analysis
Matplotlib for creating charts
Streamlit for web application
GitHub Actions for automation

### Setup and Running

1. Clone the repository
2. Install dependencies: _pip install -r requirements.txt_
3. Run data collection: _python rss_datacollection_feed.py_
4. Launch Streamlit app: _streamlit run app.py_

### Data Update Process

The data is automatically updated daily through a GitHub Actions workflow. This ensures that the dashboard always displays the most recent news sentiment analysis.

### Dashboard Access

The live dashboard can be accessed at : [Link](https://rssnewssentimentanalysisdaily.streamlit.app)
