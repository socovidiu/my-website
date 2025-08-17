---
layout: project
title: Stock Analysis API
stack: [FastAPI, PostgreSQL, Uvicorn, NLTK/VADER, Docker]
featured: true
links:
  - { label: GitHub, url: "https://github.com/socovidiu/stock_api" }
---
Backend service that fetches real-time financial indicators like RSI, MACD, and Bollinger Bands from Alpha Vantage API, and performs news sentiment analysis using NLTK/VADER.  

It provides a RESTful API for stock data retrieval, including historical prices and technical indicators. The application is built with FastAPI and PostgreSQL, ensuring high performance and scalability.

Implements modular adapter-pattern architecture to easily extend providers, outputs BUY/SELL/HOLD recommendations, includes pytest tests, and deploys with Uvicorn.

It is designed for developers and analysts looking to integrate stock market data and sentiment analysis into their applications, providing a robust foundation for financial analysis and decision-making.
