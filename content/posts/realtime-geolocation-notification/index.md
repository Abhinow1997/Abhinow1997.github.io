+++
title = "Jio - IKEA Notifications PoC"
date = "2024-04-01"
+++

During my tenure as a data engineer at Jio Platforms, I was responsible for developing a proof of concept (PoC) pipeline and workflow tailored for two specific companies. This project involved collaborating closely with various stakeholders to understand their data requirements and business objectives. I designed and implemented a robust data pipeline that efficiently processed and transformed raw data into actionable insights.
<!--more-->

# Jio - IKEA Notifications PoC
The workflow I worked on demonstrates the integration of Jio's telecom infrastructure with IKEA's retail operations to create targeted marketing opportunities. By utilizing Label Switch Router (LSR) data for efficient network routing and geohash location determination, the system enables time-sensitive, location-based notifications to Jio subscribers near IKEA stores. This innovative approach aims to increase in-store sales, provide targeted incentives, and potentially boost revenue for both Jio and IKEA, showcasing the power of combining telecom data with location-based services to enhance customer experiences and drive business growth.

## LSR (Label Switch Router) Data

- Directs data traffic to make data move faster in a network
- Uses short labels instead of lengthy addresses for efficient routing
- Speeds up data transfer process and improves network efficiency
- Crucial for large companies like telecom providers to deliver services faster and more reliably

## Efficient Data Routing for Internet and Call Services

- Internet Access: Routes data requests from Jio SIM cards quickly
- Voice and Video Calls: Ensures low-latency routing for VoLTE and video calling services

LSR data provides valuable metrics:
- Source and destination of data packets
- Service type (4G/5G)
- Packet routing information
- Performance and monitoring data
- Packet loss information
- Traffic type and bandwidth requirements

## Partitioning Strategies

Data is partitioned based on:
- Hour
- Date
- 22 Clusters (generally corresponding to states)
  - Example: Mumbai cluster includes Maharashtra and Goa due to high routing data
  - UP divided into UP West and East

Partitioning and bucketing strategies are applied to manage and process data efficiently.

## Geo-hash Location Determination for Jio Users

- LSR data for each IMSI includes longitude and latitude
- Geohash is generated from address or coordinates
- Geohash system is used for efficient location encoding

## Incentives for the Use Case

- Time-sensitive deals and offers for telecom subscribers
- Monitor in-store sales increases
- Provide additional incentives to nearby users
- Potential revenue generation increase for partnering companies