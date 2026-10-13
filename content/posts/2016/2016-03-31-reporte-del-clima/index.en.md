---
title: "Weather report"
authors: [admin]
subtile: "9 challenges in 9 languages (2 of 9, part one)"
date: 2016-03-31T08:25:11-03:00
slug: "weather-report"
draft: false
tags: ['challenges', 'programming languages', 'programming', 'go', 'rust','erlang','haskell','scala','kotlin', 'clojure','fsharp','swift']
image:
  placement: 3
---


[Jaco Pastorius](//es.wikipedia.org/wiki/Jaco_Pastorius) is one of those
musicians who leaves a deep impression on you when you hear him. In
particular, you will never perceive the sound of the bass the same way
after listening to him. [His style has influenced greats of rock and
jazz, such as the great [Flea](//es.wikipedia.org/wiki/Flea)[
of Red Hot Chili Peppers, or [Geddy Lee](//es.wikipedia.org/wiki/Geddy_Lee)
 of Rush, who puts Jaco at the very top of the mountain.

> *"Sometimes a little bit of his fairy dust might rub off on you when
> you pretend to play like he
> does."

![](//d2dspjyoh5c79p.cloudfront.net/2438e961-f6d3-11e5-a13c-3371c0364c63-aa9f18b7)

What does this have to do with those strange new languages?

Nothing, really. Or very little, but I like Jaco Pastorius and his
music was the main soundtrack while I solved the second
challenge of this task I have set myself of visiting nine programming
languages in nine exercises.

This second challenge is called Weather Report, as a
tribute to the famous jazz fusion band where Jaco played at the
start of his career.

## It's a concurrent world

I think one of the most important features of a modern
language has to do with the way it approaches parallel
programming.

Parallel programming is a form of concurrent programming in
which we take advantage of the capabilities of multiprocessor systems.

I am going to borrow the definitions given by Ricardo Galli in his book
["Principios y Algoritmos de Concurrencia"](/en/blog/lnds/2015/11/15/principles-and-algorithms-of-concurrency/) (Principles and Algorithms of Concurrency):

> **Concurrent programming:** the composition of modules that
> run independently, asynchronously and non-deterministically.\
> **Parallel programming:** parallelism is one way of running
> concurrent programs. Concurrent programming is a way of
> structuring programs, not the number of processors used to
> run them.

> "The problems of concurrent processes are not exclusive to
> parallel processing; they also occur with a single processor. The
> studies of concurrency and parallelism are different. The first
> deals with the correct composition of non-deterministic components, the
> second with the asymptotic efficiency of programs with deterministic
> behavior."

As I told you before, we are going to solve a parallel programming
problem. The more characteristic aspects of concurrent programming
we will study later, in other challenges.

## Querying the weather report

Challenge 2 consists of building an application that gets the weather
for different cities, using the
[OpenWeatherMap.org](//openweathermap.org/) API.

You have to create a program that receives a list of cities through the
command line. This program must query the
OpenWeatherMap.org site to get the weather report for each
of the cities. The result must be sorted in descending order,
from the highest to the lowest temperature. The result must contain the
city, the maximum temperature and the weather conditions. In addition, the
program must report the wall-clock time spent downloading the
information. If the -p parameter is passed, the program runs the query
"in parallel" for each city.

For example, this is the result of running the program at the
time of writing these lines:

     $ weather Berlin Santiago Boston Madrid Concepcion Mexico
     Mexico 26.00 nubes rotas
     Santiago 15.00 cielo claro
     Concepcion 15.00 nubes rotas
     Madrid 10.70 nubes dispersas
     Boston 10.00 cielo claro
     Berlin 03.00 cielo claro
     tiempo ocupado para generar el reporte: 00:00:02.105

If I run it with the -p parameter:

     $ weather -p Berlin Santiago Boston Madrid Concepcion Mexico
     Mexico 26.00 nubes rotas
     Santiago 15.00 cielo claro
     Concepcion 15.00 nubes rotas
     Madrid 10.80 nubes dispersas
     Boston 10.00 cielo claro
     Berlin 03.00 cielo claro
     tiempo ocupado para generar el reporte: 00:00:01.546

You will notice that in this case the parallel version of the program takes
less time (1.546 seconds versus 2.105 seconds).

The following table shows the running times of the Go version of the
program, run sequentially and in parallel (with the
-p parameter). Times are in seconds, starting with 1 city and going up
to 10 cities. They were measured on a MacBook Pro with a 4-core Intel
i7 processor.

    Ciudades sec         par     s
    1        1,180     1,633     0,72
    2        0,829     0,807     1,03
    3        1,246     1,043     1,19
    4        1,670     0,716     2,33
    5        1,974     1,276     1,55
    6        2,388     1,725     1,38
    7        2,546     1,303     1,95
    8        2,761     1,470     1,88
    9        3,244     1,803     1,80
    10       3,754     1,207     3,11

The s column shows the speedup, or improvement factor, which measures how much
the parallel running time improves over sequential
execution.

These values should not be taken as a precise measurement; you would need
many more runs to arrive at a proper speedup value. But it gives us
an idea of the effect of parallelizing the query.

If we have 4 cores, and we assume that 90% of the process can run
in parallel, we have a theoretical speedup limit of 3.07, according to
[Amdahl's Law](//es.wikipedia.org/wiki/Ley_de_Amdahl).

With the values from the table above I calculated the theoretical speedup
according to the laws of Amdahl and
[Gustafson](//es.wikipedia.org/wiki/Ley_de_Gustafson), which I include only
as a curiosity. In this case I used the value p = 0.90 for
calculating this parameter:

    # Gustafson Amhdal
     (p = 0,9) (p=0,9)
    1  0,7503 0,7432
    2  1,0245 1,0244
    3  1,1752 1,1718
    4  2,1992 2,0581
    5  1,4923 1,4667
    6  1,3459 1,3331
    7  1,8586 1,7837
    8  1,7904 1,7265
    9  1,7193 1,6660
    10 2,8992 2,5682

If you don't understand what all this is about, I suggest reading my posts
on Amdahl's Law
([here](/blog/2009/09/el-problema-de-paralelizar.html),
[here](/blog/2009/09/el-problema-de-paralelizar-2.html) and
[here](/blog/2009/09/el-problema-de-paralelizar-3.html)), or
better yet, the corresponding chapter in [my
book](//amzn.to/17bKPdO) 😜

The p parameter in Amdahl's law is the proportion of the program that
runs in parallel. To understand why I used a value of p =
0.90, I am going to describe the general shape of my solution to this challenge.

# Parallel queries

If we solve the problem of querying the weather for a list of
cities sequentially, one possible solution can be expressed with
the following algorithm (written in pseudocode):

     Let N be the number of cities.

     Let Cities[0..N-1] be an array with the names of the cities.

     Let Reporte[0..N-1] be an array with the weather reports for each city.

     Let ArgV[] be an array with the program arguments received on the command line.
     
     for i = 0; i < N; i++ {
        Cities[i] = ArgV[i]
     }
     for i = 0; i < N; i++ {
       Reports[i] = CallApiOpenWeatherMap(Cities[i])
     }

     SortInPlaceByTemp(Reports)
     
     for i = 0; i < N; i++{
        PrintReport(Reports[i])
     }

Graphically, this program runs as follows:

{{<figure caption="sequential execution of the program" src="//d2dspjyoh5c79p.cloudfront.net/6623c943-f74a-11e5-a13c-3371c0364c63-aa9f18b7">}}

Each circle represents a subroutine; in this case, the light blue
circle represents the calls to the OpenWeatherMap API. We
store the result of this call in an element of our array
of reports, which we represent with gray boxes. Then we sort that
array of reports, which is represented by the orange
circle with the word sort.

We can improve the time if we run the API calls in
parallel, like this:

![](//d2dspjyoh5c79p.cloudfront.net/ddc628d4-f74a-11e5-a13c-3371c0364c63-aa9f18b7)

In theory, we will have a fraction of the time spent on the parallel
operation and a sequential fraction that corresponds to sorting
the data (sort). What proportion of the time is spent on the
parallel calls? That is the p parameter. I gave it a value of
0.9, because I assume that 90% of the time is spent querying the API and
sorting takes up the other 10%. This is an arbitrary value; determining it
precisely is beyond the goals of this exercise, but you
can try to pin it down more accurately.

How do we reflect this parallelization in our algorithm?

Like this:

     Let N be the number of cities.
     Let Cities[0..N-1] be an array with the names of the cities.
     Let Reporte[0..N-1] be an array with the weather reports for each city.
     Let ArgV[] be an array with the program arguments received on the command line.
     for i = 0; i < N; i++ {
        Cities[i] = ArgV[i]
     }
     par for i = 0; i < N; i++ {
       Reports[i] = CallApiOpenWeatherMap(Cities[i])
     }
     SortInPlaceByTemp(Reports)
     for i = 0; i < N; i++{
        PrintReport(Reports[i])
     }

The trick was to change the middle for into a **par for.**

{{<figure caption="yeah, riiight?!!" src="//d2dspjyoh5c79p.cloudfront.net/93cea765-f74b-11e5-a13c-3371c0364c63-aa9f18b7">}}

I know you find this suspicious. Don't worry, I'm going to
explain it.

Some languages have constructs similar to what I have
called **par for.**

This par for is a control structure that runs the
instructions in the body of the loop in parallel. There are Fortran and C compilers for
supercomputers that have constructs similar to this one.

On a supercomputer with many processors, what a control structure
like this does is run the body of the loop on a different
processor. The control structure takes care of synchronizing the
completion of each of the sequential executions.

But this is available in one of the languages we are reviewing.
The Swift solution to challenge 2 (which you can see
[here](//github.com/lnds/9d9l/tree/master/desafio2/swift)) uses something very
similar to the pseudocode.

```swift
    var reports = [ApiResult?]()
    for i in 1...cities.count {
       reports.append(nil)
    }
    let globalQueue = dispatch_get_global_queue(QOS_CLASS_USER_INITIATED, 0)
    dispatch_apply(cities.count, globalQueue) {
       i in 
      let index = Int(i)+2 // cities start from 2
      let city = cities[index]
     let rep = callApi(city, apiKey:apiKey)
       reports[Int(i)] = rep
    }
    // sort...
```

In Swift we use [Grand Central Dispatch](//en.wikipedia.org/wiki/Grand_Central_Dispatch), which is a
concurrency model developed by
Apple.

What we do is create a global task queue (globalQueue). We
will dispatch tasks onto this queue.

The dispatch\_apply() function is similar to the par
for control structure: it will run a closure (the code between { }) concurrently.
This function takes care of waiting for all the tasks to finish.

The advantage of this problem is that it is very easy to parallelize. We only
have to be careful to wait for the downloads to
finish before sorting and printing the result. That is why
we can safely access the reports array in our for.

But things are not so simple if we use other traditional
languages; we would have to do something like this (in pseudocode):

    for city  in cities {
       task { city =>
         val report = callApi(city)
         lock(reports)
         reports[city] = report
          unlock(reports)
       }
    }
    wait_for_tasks()
    sortInPlace(reports)

Here task is a sort of thread or task that runs
concurrently. Note that we have to ensure exclusive access to the
reports array in order to update it, and we have to invoke some kind of primitive
that makes sure the tasks have finished (wait\_for\_tasks()).

## The advantages of concurrent functional programming

But let's look at the problem through the eyes of functional programming. This
problem has a classic shape, known as map-reduce.

Functionally, what we have to do is map each city to its
report and then sort (reduce).

In functional pseudocode, this problem can be written like this:

    print $ sort $ (map apiCall cities)

This is really a pseudo Haskell, which says we must print the
result of sorting the mapping of cities to their reports (the report
is obtained with the apiCall function).

And to parallelize this we simply do:

    print $ sort $ (pmap apiCall cities)

The pmap function is a map, but run in parallel.

{{<figure caption="Yeah, riiight. Again????" src="//d2dspjyoh5c79p.cloudfront.net/b11f21f7-f750-11e5-a13c-3371c0364c63-aa9f18b7">}}

Yes, it looks like magic, but the solutions to this problem in
[Clojure](//github.com/lnds/9d9l/tree/master/desafio2/clojure) and
[Scala](//github.com/lnds/9d9l/tree/master/desafio2/scala) are
that simple:

Scala:

```scala
    def parFetch(cities:List[String]) : Unit = {
      val reports = (cities.par map (city => apiCall(city))).toList
      printReports(reports)
    }
```

Clojure

```clojure
    ((print-weather (sort-reports (pmap weather-api r))))
```

Besides being concise, this solution lets us abstract away
synchronization and all the complications of concurrent
programming. Immutability lets us see this problem as a flow of
information passing from function to function. The pmap abstraction is
the equivalent of the par for in the functional world.

But there is another way to solve this problem, and that is with channels,
following the
[CSP](//en.wikipedia.org/wiki/Communicating_sequential_processes) style, Communicating
Sequential Processes (originally proposed by Hoare in 1978).

Here what we do is the following:


    ch := new_channel(type: Report)
    for _ := 0 to N-1 {
       city := cities[i]
       task { chan_put (ch, apiCall(city)) }
    }
    for _ := 0 to N-1 {
        report.append(chan_get(ch))
    }
    sort_in_place(report)
    print(report)

Think of the channel as a message queue. In this case task { }
runs a task concurrently. Inside this task we put
on the channel ch the result of invoking the OpenWeatherMap API, using
the chan\_put() primitive. This is an operation that runs in a
synchronized way.

Afterwards we drain this message queue (the channel) using the
chan\_get() primitive, placing each message (which is the
weather report) in a list, report.

Note that the order in which we take the reports off the channel does
not have to match the order in which we launched the tasks. That
is, if the array of cities contains the values {Boston, Santiago,
Madrid, London}, in the second loop we could get the reports for
{Santiago, London, Boston, Madrid} or any other order.

This is how we solve this problem in
[Go](//github.com/lnds/9d9l/blob/master/desafio2/go/weather.go) and
[Rust](//github.com/lnds/9d9l/tree/master/desafio2/rust).

Go:

```go
    ch := make(chan WeatherReport)
    for _, city := range cities {
        go fetch(city, ch) // fetch call api and put response in ch
    }
    for range cities {
        rep := <- ch
        reports = append(reports, rep)
    }
```

Rust:

```rust
    let (tx, rx) = mpsc::channel();
    for city in cities {
        let tx = tx.clone();
        let city = city.clone();
        thread::spawn(move || {
          let report = api_call(&city, &api_key);
          tx.send(report).unwrap();
        });
    }
    let mut reports : Vec<ApiResult> = Vec::with_capacity(cities.len());
    for _ in cities {
      let rep = rx.recv().unwrap();
      reports.push(rep);
    }
```

The Rust solution has more "noise" than the Go version because of
this language's "borrowing" rules, something we will look at in
detail in an article devoted to this language.

## Five solutions

In this article I have shown you 5 solutions to this problem:

Swift: at
[https://github.com/lnds/9d9l/blob/master/desafio2/swift](//github.com/lnds/9d9l/blob/master/desafio2/swift) 

Scala:
at [https://github.com/lnds/9d9l/blob/master/desafio2/scala](//github.com/lnds/9d9l/blob/master/desafio2/scala)

Clojure:
at [https://github.com/lnds/9d9l/blob/master/desafio2/clojure](//github.com/lnds/9d9l/blob/master/desafio2/clojure)

Go:
at [https://github.com/lnds/9d9l/blob/master/desafio2/go](//github.com/lnds/9d9l/blob/master/desafio2/go)

Rust:
at [https://github.com/lnds/9d9l/blob/master/desafio2/rust](//github.com/lnds/9d9l/blob/master/desafio2/rust)\

In the second part of this article we will cover the remaining languages.

I look forward to your comments and contributions.

And to liven up this post I leave you with Birdland by Weather Report, where
you can appreciate Jaco Pastorius running two tasks in parallel ;) 

{{<youtube pqashW66D7o>}}
