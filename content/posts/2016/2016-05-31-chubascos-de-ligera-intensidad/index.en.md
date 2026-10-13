---
title: "Light intensity showers"
authors: [admin]
subtile: "9 challenges in 9 languages (2 of 9, part two)"
date: 2016-05-31T08:25:11-03:00
slug: "light-intensity-showers"
draft: false
tags: ['challenges', 'programming languages', 'programming', 'go', 'rust','erlang','haskell','scala','kotlin', 'clojure','fsharp','swift']
image:
  placement: 3
---
The original plan, well, the modified version of the original plan, was to implement
each of the 9 challenges in a month. But the truth is I've had a
pretty busy start to the year and the time I can devote to this
project has suffered. I published the first part of this challenge
on March 31, so it has taken me [two months to complete the
challenge!

The actual hours spent solving the
problem aren't that many; the difficulty lies in finding the dedication to sit down,
research and write the code. I hope to get back to my publishing
pace in the coming challenges.

But the important thing is to finish what you start, so here goes the second
part of the [Weather report](/blog/lnds/2016/3/31/reporte-del-clima).

![Lee Sklar](//d2dspjyoh5c79p.cloudfront.net/ba9ce4db-25ed-11e6-a13c-3371c0364c63-aa9f18b7)

Leland Bruce "Lee" Sklar must be the most famous of the least
famous bass players in the world of rock. You have surely seen him backing
great artists, such as Phil Collins or Toto. He has played on more than
2,000 albums!

Lee Sklar doesn't have the fame of Pastorius, Flea or Geddy Lee, but he is a
very good bass player; there's a reason he has been invited to play on more than 2,000
albums, and was chosen by Toto to back them a few years
ago.

Sklar is like the languages we are about to review: they have
less momentum, they are known by a few enthusiasts, they are niche,
but they have remarkable features that make them stand out, even if only
for being picturesque (like Sklar's famous beard).

In the first part, we solved the problem of querying the
weather using the API of the
[OpenWeatherMap.org](//openweathermap.org/) site. For that we used
Scala, Go, Clojure, Rust and Swift as implementation languages. The best
known and most used of our list of 9
languages.

In this second part we are going to review the solutions in F\#, Haskell,
Erlang and Kotlin. In a third part, which I will publish a week from now,
 I will review other aspects of this challenge (such as calling the API
over HTTP, and parsing
XML).

## Concurrency in F\#

If you remember, we have two ways of running the program,
sequentially and in parallel, as I described in these drawings

{{<figure caption="Sequential execution" src="//d2dspjyoh5c79p.cloudfront.net/12e7677d-25f1-11e6-a13c-3371c0364c63-aa9f18b7">}}

{{<figure caption="Parallel execution" src="//d2dspjyoh5c79p.cloudfront.net/eda1c73c-25f0-11e6-a13c-3371c0364c63-aa9f18b7">}}

We saw that languages like Clojure and Scala have a very elegant way
of doing this.

In Clojure:

```clojure
    ((print-weather (sort-reports (pmap weather-api r))))
```

In Scala:

```scala
    printReports (cities.par map (city => apiCall(city))).toList)
```

F\# uses the .Net infrastructure to parallelize tasks.

First let's look at the sequential way of solving our problem:

```fsharp
    let seq_fetch cities = cities |> List.map api_call
```

To parallelize this task we simply do:

```fsharp
    let par_fetch cities = cities |> List.map api_call_async  
                                  |> Async.Parallel |> Async.RunSynchronously  
                                  |> List.ofArray
```

Note that instead of calling the api\_call function, we call
api\_call\_async. The difference between the two functions is the following

```fsharp
    let api_call city = api_call_n city 10

    let api_call_async city = async { return api_call_n city 10 }
```

the api\_call\_n function invokes the API for the city it receives as a
parameter. The number 10 is the maximum number of retries
for calling the API. This function returns the weather report for the
city.

The difference is that api\_call\_async does not run the code right away;
it will run when it goes through Async.Parallel. The
Async.RunSynchronously function waits for the result of the parallel execution and
hands it to List.ofArray (because the Async.Parallel function gives us
an array with the results.

This is more complex than with Clojure or Scala, but it is simple and elegant.

## Concurrency in Haskell

The solutions in Haskell are very similar. The sequential version is
this:

```haskell
    process_seq api_key args =
        do lreps <- reps
           print_reports $  sortBy cmp_rep lreps 
        where reps = mapM (make_report . (api_call api_key)) args 
```

The parallel version is the following:

```
    import qualified Control.Monad.Parallel as P

    ....

    process_par api_key args =
        do lreps <- preps
           print_reports $ sortBy cmp_rep lreps 
        where preps = P.mapM (make_report . (api_call api_key)) args
```

The difference is highlighted in bold.

The sequential version maps the composed function (make\_report .
(api\_call api\_key) over args.

The parallel version does exactly the same thing, but does the mapping in
parallel using Control.Monad.Parallel.

To understand this problem in depth you have to master the concept of
monads, but I will try to simplify the explanation.

Let's start with the sequential version:

The function declaration is:

```haskell
     process_seq api_key args =
```

It defines a function that takes the API key and a list of
arguments, args (the list of cities).

Then we run the following using a do block[^1]:

```haskell
     do lreps <- preps
        print_reports $ sortBy cmp_rep lreps
```

The first thing is to pull the list of reports into lreps; it comes in the
variable preps, which will be defined by the where clause further down.
After pulling the list of reports into lreps, we sort them using the
sortBy function (which uses the cmp\_rep function, which compares reports). The
sorted list is the argument to the
print\_reports function.

The where clause maps the list of cities to a list of
reports:

```haskell
     where preps = mapM (make_report . (api_call api_key)) args
```

Let's break this down step by step. Remember that args is the list of
cities. What we have here is equivalent to
this:

```haskell
     map F cities
```

<div>

Here F is a composed function: F = make\_report . (api\_call
api\_key)

The . operator lets you compose functions in Haskell. In general, if
you have a function f and another function g, then (f . g) x  is
equivalent to doing (f (g
x).

Why do we use mapM instead of map?

Because api\_call returns a value of type IO String (this is a
monad), and the make\_report function takes an argument of type IO String and
returns a value of type IO WeatherReport
(another monad). The mapM function is like the map function, but it operates on
lists of monads.

Actually mapM takes something like \[m t\] and returns m \[t\], that
is, it takes a list of monads of T, and returns a monad of a
list of T.

The definition of mapM is:

```haskell
     mapM :: Monad m => (a -> m b) -> [a] -> m [b]
```

This explains why we do lreps \<- preps.\
The sortBy function requires a pure list; since preps is a monad that
contains a list, what we do with this assignment is take the list
out of the monad.

In general, if we have a monad *m v*, when we do *x* \<- *m v*,
we assign *v* to *x*.

What is a monad? It is the usual question from those who are starting to learn
Haskell.

Remember when we did the following in the Toque y Fama game?

```haskell
    acc <- getLine
```

What happens is that getLine is not a pure function, something we don't
like in Haskell. A pure function has no side effects, but
getLine is a function that interacts with the outside world; it is what
is called a destructive action
(see [revelations](/lnds/2015/10/1/revelaciones)).
Haskell protects us from the outside world through monads. In
particular, instead of returning a String, what the getLine function
does is return an IO String monad.

I like to think of monads as *boxes*. In Haskell, to
talk to the outside world we use these boxes. The getLine function
returns a *box* called IO whose content is a String.

Our program uses a lot of monads, since it has to interact with the
OpenWeatherMap website, read environment variables from the operating
system, write the weather report to the screen, measure the running
time of a function, etc.

If you don't understand much of this, don't worry. Don't try to grasp
the concept of a monad right away; just write several programs
in Haskell that use input/output functions, as in this exercise, and
everything will fall into place with time. In any case, I am going to write
a special post on Haskell later where I will explain this
concept.

## Erlang

Erlang implements the actor model for concurrency. What
we will do is create actors that perform only one action.
Traditionally an actor in Erlang sits in a loop receiving
messages; in this case we wait for just one message and finish.

Let's look at the synchronous version first

```erlang
    buscar_reportes_con_map(Ciudades) -> 
        lists:map(
          fun(Ciudad) ->
               Url = crear_url_api(Ciudad),
                {Xml,Error} = llamar_api(Url),
              extraer_reporte(Xml, Ciudad, Error)  
            end, Ciudades).
```

It is a simple mapping of cities to reports, using a function declared
inline. This function builds the URL, invokes the API and then extracts the
report (which is the result).

 the asynchronous version looks like this:

```erlang
    buscar_reportes_con_map_async(Ciudades) -> 
        ReqIds = lists:map(
         fun(Ciudad) ->
               Url = crear_url_api(Ciudad),
                {Ciudad,llamar_api_async(Url)}
           end, Ciudades),
     recolectar(ReqIds).
```

The asynchronous version makes an asynchronous call to the API. In this
case we map cities to the Ids of the
actors.

Let's see how the llamar\_api\_async() function works:

```erlang
    llamar_api_async(Url) -> spawn(?MODULE, async_api_call, [Url]).

    async_api_call(Url) ->  % io:format("llamando asincronamenete url: ~s\n", [Url]), % descomentar para convencerse que es asincrono
       {Xml,Error} = llamar_api(Url),
      receive 
            {From, get_result} -> From ! {xml, Xml, Error}
    end. 
```

The llamar\_api\_async function invokes the spawn primitive, which creates an
actor served by the
async\_api\_call(Url) function.

This actor sits waiting for the get\_result message. When it receives it,
it sends back the result by doing *From ! {xml, Xml,
Error}.*

To finish understanding this we need to look at the recolectar function:

```erlang
    recolectar([Llam|Llams]) -> 
      {Ciudad,ReqId} = Llam,
      ReqId ! {self(), get_result},
        receive
            {xml, Xml, Error} -> 
                [extraer_reporte(Xml, Ciudad, Error) | recolectar(Llams)]
        end;
    recolectar([]) -> [].
```

The recolectar function takes a list of actor handles. This
function sends a message to each
actor:

```erlang
     ReqId ! {self(), get_result}
```

The message has two parts, the identifier of the main process
(self()) and the atom
get\_result.

Remember that each actor answers with the message {xml, Xml, Error}.In
this drawing I tried to explain what happens. The left side initializes
the actors (small green circles). The right side explains
what happens afterwards. In this case it starts by sending the
get\_result message to each actor created. Each actor answers with the result of
invoking the API, {xml, Xml,
Error}.

![](//d2dspjyoh5c79p.cloudfront.net/666abcbe-2602-11e6-a13c-3371c0364c63-aa9f18b7)

## Kotlin

With this language I decided to use a mechanism similar to the Scala
solution.

The final code is basically this:

```kotlin
    // Sequential solution
    val reports = cities.map(::apiCall)
    printReports (reports)
```

The parallel solution ended up like this:

```kotlin
    // Parallel solution
    val reports = cities.par().map(::apiCall)
    printReports(reports.unpar().toList())
    reports.executorService.shutdown()
```

Kotlin doesn't actually have the par() primitive for lists. To
do it I used code published
by Holger Brandl [here](//github.com/holgerbrandl/kutils/blob/master/src/main/kotlin/kutils/ParCollections.kt).

This code extends collections with the
par() primitive.

```kotlin

    /** A delegated tagging interface to allow for parallized extension functions */
    class ParCol<T>(val it: Iterable<T>, val executorService: ExecutorService) 
       : Iterable<T> by it

    /** Convert a stream into a parallel collection. */
    fun <T> Iterable<T>.par(numThreads: Int = Runtime.getRuntime().availableProcessors(),
                            executorService: ExecutorService = Executors.newFixedThreadPool(numThreads))
    : ParCol<T> {
        return ParCol(this, executorService);
    }

```

The code uses the ExecutorService class from Java 8. This is a service
that lets you work with threads and concurrent
code.

So when we do lista.par(), what we do is create an
instance of the ParCol class that contains the list and adds an
ExecutorService to it.

Another extension we add is the map() function:

```kotlin
    fun <T, R> ParCol<T>.map(transform: (T) -> R): ParCol<R> {
        val destination = ArrayList<R>(if (this is Collection<*>) this.size else 10)
        val futures = this.asIterable().map { 
            executorService.submit { 
                destination.add(transform(it)) 
            } 
        }
        futures.map { it.get() } // this will block until all are done
        return ParCol(destination, executorService)
    }
```

Here we create a list of futures, which are the ones that apply the
transform() function to each element of the
collection.

Then we wait for each of the calls to
transform() to run.

Finally, the map() function creates a new instance of the
ParCol class, this time with the result of computing transform() over
all the elements of the initial
collection.

To retrieve the result we use the unpar() function, which returns the
list contained inside the ParCol instance.

```kotlin
    fun <T> ParCol<T>.unpar(): Iterable<T> {
        return this.it;
    }
```

This implementation gives us a hint of how to implement parmap in
Java 8. Would anyone be up for solving this challenge using Java 8? If
so, I invite you to add your proposal through a pull request to my
repository: <https://github.com/lnds/9d9l>](//github.com/lnds/9d9l)

Let's compare the results in Kotlin, to measure how efficient
this solution is:

    $ java -jar weather-1.0-SNAPSHOT-all.jar  Santiago Boston Londres Valdivia Antofagasta

    Boston              max: 32,0  min: 12,2   actual:  17,6 niebla
    Antofagasta         max: 17,0  min: 17,0   actual:  17,0 nubes rotas
    Valdivia            max: 12,0  min: 12,0   actual:  12,0 llovizna
    Santiago            max: 12,0  min: 12,0   actual:  12,0 chubasco de ligera intensidad
    Londres             max:  8,5  min:  8,5   actual:   8,5 nubes dispersas
    tiempo ocupado para generar el reporte:  0:00:1,372

In parallel:

    $ java -jar weather-1.0-SNAPSHOT-all.jar -p Santiago Boston Londres Valdivia Antofagasta
    Boston              max: 32,0  min: 12,2   actual:  17,6 niebla
    Antofagasta         max: 17,0  min: 17,0   actual:  17,0 nubes rotas
    Valdivia            max: 12,0  min: 12,0   actual:  12,0 llovizna
    Santiago            max: 12,0  min: 12,0   actual:  12,0 chubasco de ligera intensidad
    Londres             max:  8,5  min:  8,5   actual:   8,5 nubes dispersas
    tiempo ocupado para generar el reporte:  0:00:0,516

The sequential version takes 1.372 seconds on my machine; the parallel
version takes 0.516 seconds (less than half the time!).

With this we finish the implementation of this challenge in 9 languages.
Just to wrap everything up I will publish another article with the details I didn't
cover, namely how to download from a URL (using HTTP) and
parse an XML file.

## Four solutions

In this article I have shown 4 additional solutions to this problem.

F\#:
at [https://github.com/lnds/9d9l/tree/master/desafio2/fsharp](//github.com/lnds/9d9l/tree/master/desafio2/fsharp)

Haskell:
at [https://github.com/lnds/9d9l/tree/master/desafio2/haskell](//github.com/lnds/9d9l/tree/master/desafio2/haskell)

Erlang:
at [https://github.com/lnds/9d9l/tree/master/desafio2/erlang](//github.com/lnds/9d9l/tree/master/desafio2/erlang)

Kotlin:
at [https://github.com/lnds/9d9l/tree/master/desafio2/kotlin](//github.com/lnds/9d9l/tree/master/desafio2/kotlin)

**Notes**

[^1]: Do blocks let you run operations with monads. They are
very useful when we use the IO monad, but I will explain that later
on.]{style="letter-spacing: 0.01rem; line-height: 1.5;"}

(\*) Title image taken from Wikipedia, by John Kerstholt, taken
from [here](//commons.wikimedia.org/wiki/File:Rolling-thunder-cloud.jpg).
