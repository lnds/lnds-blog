---
title: "Latency (still recycling)"
authors: [admin]
date: 2009-03-06T08:25:11-03:00
slug: "latency-still-recycling"
tags: ["latency"]
draft: false
image:
  placement: 3
---

> "I don't know what I want, but I want it now!"\
> -- [Luca Prodan](http://es.wikipedia.org/wiki/Luca_Prodan), late singer
> and leader of Sumo


> "Bandwidth problems can be cured with money. Latency problems are
> harder because the speed of light is fixed.
> (You can't bribe God)" \-- Anonymous [^1]

When we measure the performance of a web application, the technical
factor that most affects what the user perceives is **latency**.

To apply the words of the great Luca Prodan: the user doesn't know what
he wants, but he wants it delivered promptly.

To understand the concepts behind performance evaluation, let's define
the following variables in simple terms:

-   Bandwidth: the amount of data that can be sent over the network in
    one second.
-   Throughput: the amount of work the server can do in a given period
    of time.
-   Contention: competition for resources; it happens when more than 1
    client is accessing the server.
-   Latency: the time to perform a simple operation assuming there is no
    contention \[1\]. The effective response time as measured by the
    client.

Latency is a function of bandwidth and throughput, leaving contention
aside:

        Latency = F (Bandwidth, Throughput)

Bandwidth is measured in bits per second (bps).

Normally you assume 80% utilization of the channel.

> Example 1: If we have a bandwidth of 256 (Kbps), that is, 32
> kilobytes per second (KB/s), then the theoretical limit at 80%
> efficiency is 25.6 KB/s (32\*0.8). So a 40 KB page will be
> downloaded in 1.56 seconds.


If the server's throughput is 100 pages per second (p/s), then
generating one page takes 1/100 of a second. So the latency for the
40 Kbps page is 1.56 + 0.01, that is, 1.57 seconds per page.

## A practical formula for latency

A practical function for measuring latency is given by the following
equation:

> L = (1/T)+{P/W)

Where:

-   T: throughput, expressed in pages per second
-   P: page size in kilobytes per page
-   W: effective bandwidth in kilobytes per second (you can estimate it
    quickly by dividing the bandwidth in Kbps by 10).

> Example 2: Contention has an effect on throughput: suppose we have
> 1,000 users trying to access a page at the same time. The page has to
> run a database query and return a result that amounts to 40 kilobytes
> of data (including the HTML). Let's assume we have a pool of 10
> database connections and that the query takes about 250 ms to run.
> According to queueing theory, the average wait to get a connection is
> 12,375 ms, so the average time to generate the page is 12,625 ms,
> which means the throughput in this case is 0.08 p/s (1000/12,625). If
> the bandwidth is 256 Kbps, the theoretical latency is: L = 1/0.08
> \[sec/page\] + 40/25.6 \[kb/page\]/\[kb/sec\] = 14.06 \[sec/page\]


Ideal latency\*\*: the latency without taking throughput into account,
that is:

        Li = P / W

## Tips for reducing latency

Latency problems are the hardest ones to tackle. David A. Patterson's
article in CACM \[1\] suggests 3 typical techniques for dealing with
them:

1.  Caching: it was born because access to secondary storage is always
    slower. In our case there are plenty of places where caching
    applies: storing precomputed objects, storing parameter tables, and
    so on.
2.  Replication: this is more expensive, but you could have replicas of
    your sites on several servers (a server farm), balancing the load
    among them.
3.  Prediction: trying to guess what will be needed. For example, if the
    table of cities is always going to be used, instead of reading it 1
    time per session I can have an application object that reads the
    table of cities and keeps one copy shared by all sessions.

There are more techniques, like applying design patterns, introducing an
intermediate business layer, and so on.

All of these decisions should be made carefully and with proper advice.

[^1]: Latency Lags Bandwidth, David A. Patterson, Communications of the
ACM Magazine (CACM), Oct, 2004
