---
layout: project
title: Stock Analysis API
stack: [FastAPI, PostgreSQL, Uvicorn, NLTK/VADER, Docker]
featured: true
links:
  - { label: GitHub, url: "https://github.com/socovidiu/stock_api" }
---
Backend service that fetches real-time financial indicators like RSI, MACD, and Bollinger Bands from Alpha Vantage API, and performs news sentiment analysis using NLTK/VADER.  
Implements modular adapter-pattern architecture to easily extend providers, outputs BUY/SELL/HOLD recommendations, includes pytest tests, and deploys with Uvicorn.
