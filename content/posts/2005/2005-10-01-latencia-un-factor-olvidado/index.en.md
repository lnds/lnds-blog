---
comments: true
date: 2005-10-01 17:28:53
layout: post
slug: latency-a-forgotten-factor
title: Latency, a forgotten factor
authors: [admin]
wordpress_id: 162
categories:
- Internet
- technology
---

> "I don't know what I want, but I want it now!"  
-- Luca Prodan, Sumo  


When we measure the performance of a Web application, the technical aspect that most affects user perception is **latency**.

To paraphrase the epigraph, the user doesn't know what they want, but they want it delivered promptly.  
  
To understand the concepts of performance evaluation, let's define the following variables:

  * Bandwidth: amount of data that can be sent over the network in one second.
  * Throughput: amount of work the server can do in a period of time.
  * Contention: competition for resources; it happens when more than 1 client is accessing the server.
  * Latency: time to perform a simple operation assuming there is no contention [1]. The effective response time as measured by the client.

Latency is a function of bandwidth and throughput, leaving contention aside:

> Latency = F(Bandwidth, Throughput)

Bandwidth is measured in bits per second (bps). Channel efficiency is normally taken to be 80%.

> Example 1: If we have a bandwidth of 256 (Kbps), that is, 32 kilobytes per second (KB/s), then the theoretical limit at 80% efficiency is 25.6 KB/s (32*0.8). Therefore, a 40 KB page will download in 1.56 seconds.

If the server's throughput is 100 pages per second (p/s), then generating one page will take 1/100 seconds.

So the latency for the 40 Kbps page is 1.56 + 0.01, that is, 1.57 seconds per page.

A practical formula for latency

A practical function for measuring latency is given by the following equation:

> L = (1/T)+{P/W)

Where:  
*	T: throughput in pages per second  
*	P: page size in kilobytes/page  
*	W: effective bandwidth in kilobytes per second (it can be quickly calculated by dividing the bandwidth in Kbps by 10).

> Example 2: Contention has an effect on throughput: suppose we have 1,000 users wanting to access a page at the same time. The page must run a query against the database and deliver a result amounting to 40 kilobytes of data (including the html code). Assume we have a pool of 10 database connections, and that the query takes about 250ms to run. According to queueing theory, the average wait to use a connection is 12,375 ms, so the average time to generate the page is 12,625 ms, which means the throughput in this case is 0.08 p/s (1000/12,625). If the bandwidth is 256 Kbps, the theoretical latency is: L = 1/0.08 [sec/page] + 40/25.6 [kb/page]/[kb/sec] = 14.06 [sec/page]

**Ideal latency**: the latency without taking throughput into account, that is:  
  
> Li = P / W

Tips for reducing latency

> "Bandwidth problems can be cured with money. Latency problems are harder because the speed of light is fixed—you can't bribe God."  
Anonymous [1]

As the epigraph says, latency problems are the hardest. David A. Patterson's CACM article [1] suggests 3 typical techniques for tackling latency problems:

1. Caching: it originally came about because access to secondary storage is always slower. Here we have examples where caching applies: storing precomputed objects, storing parameter tables, and so on.

2. Replication: this is more expensive, but you could have replicas of the sites on several servers (a server farm), balancing the load among them.

3. Prediction: trying to
guess what is going to be needed. For example, if the cities table is always going to be used, instead of reading it once, I can have an application object that reads the cities table and keeps one copy shared by all sessions.

There are more techniques, like applying design patterns, introducing an intermediate business layer, and so on. These days using AJAX is a good alternative for reducing latency.

But these decisions must be made with care and with proper advice.

[1] Latency Lags BandWidth, David A. Patterson, Comunications of the ACM Magazine (CACM), Oct, 2004

