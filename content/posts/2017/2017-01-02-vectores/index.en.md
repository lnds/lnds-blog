---
title: "Vectors"
authors: [admin]
subtitle: "9 challenges in 9 languages (3 of 9)"
date: 2017-01-02T08:25:11-03:00
slug: "vectors"
draft: false
tags: ['programming', 'programming languages', 'challenges']
image:
  placement: 3
---

# Steely Dan and the perfection of sound

During the 1970s and part of the 1980s, Donald Fagen and
Walter Becker, the founders of Steely Dan, besides being recognized
as great musicians and songwriters, became famous for their excessive
perfectionism.

It is said, though I have found no evidence, that on one of their albums
they apologized for the quality of the recording, which did not meet
their high standards. This obsession showed, for example, in
the production of the album Gaucho, for which they ended up working with
42 different musicians to produce the band's seventh album.

At one point they hired none other than Mark Knopfler, leader of
"Dire Straits", to contribute a guitar solo. Fagen and
Becker were impressed by the guitarist after hearing the
album "Sultans of Swing", and they spent money they didn't have to
get Knopfler on the record. After several hours of recording,
what was left was barely a few seconds that can be heard at the start of the
song "Time Out of Mind".

![](//d2dspjyoh5c79p.cloudfront.net/016fa77c-d142-11e6-9412-c975315961a6-aa9f18b7)

Perfection is unattainable, of course, but even so we sometimes
get obsessed with trying to reach it. For Dijkstra, for example,
perfection in code lay in its beauty and elegance.
But what about software performance? The most elegant program
may not be the most efficient at run time.

During the recording of "Katy Lied"[^1], Fagen and Becker
went through one of the biggest frustrations of their history. The
technology they chose to record with, cutting-edge as it was, failed,
causing a series of technical problems, to the point that they abandoned
the editing process and refused to listen to the final product. It was
guitarist Denny Dias who took charge of finishing the editing
process, in a heroic effort (documented
here: [http://steelydan.com/dennys3.html](//steelydan.com/dennys3.html)).

One of the problems they faced, after fixing the sound on
the tapes, was that when they transferred the recording to vinyl they noticed the
quality degraded. Another problem was that the sound was not the same and
depended on the record player. So they had to go back and work on the
mix to get a sound that could be reproduced on an "average
phonograph".  A task that proved impossible, so they ended up
settling for making the record acceptable on the largest
number of players.

In software development we run into similar problems:
our program has to be compatible with different environments, operating
systems, devices, CPU types, and so on. Getting adequate
performance in each of those environments is a challenge analogous to the one
those sound engineers had to face.

# Optimize until it stops hurting

*"Premature optimization is the root of all evil"* is the
Donald Knuth quote that comes up most when we talk about optimizing code. Actually,
the full quote says this:

> *"There is no doubt that the grail of efficiency leads to abuse.
> Programmers waste enormous amounts of time thinking about, or
> worrying about, the speed of noncritical parts of their
> programs, and these attempts at efficiency actually have a strong
> negative impact when debugging and maintenance are considered.
> We should forget about small efficiencies, say about 97% of the time:
> premature optimization is the root of all evil.*

> *Yet we should not pass up our opportunities in that critical
> 3%. A good programmer will not be lulled into
> complacency by such reasoning, he will be wise to look
> carefully at the critical code; but only after that code has
> been identified. It is often a mistake to make a priori judgments about
> what parts of a program are really critical, since the
> universal experience of programmers who have been using measurement
> tools has been that their intuitive guesses fail."* [^2]

This article is the third stage of my challenge to learn 9
programming languages through nine problems.

If you want to know more about this project, read here:
[https://www.lnds.net/blog/lnds/2016/01/09/esos-raros-lenguajes-nuevos](/en/blog/lnds/2016/01/09/those-strange-new-languages/)

This time I used the problem to explore certain
features of the languages a bit further, trying to optimize the solutions
to squeeze out maximum execution speed.

## A real-life problem

This particular problem is based on a real situation that came up
at my job. A group of analysts had developed a set of
Excel macros (backed by some VBA code) to process a
batch of files. The problem is that this solution took several
hours for a file of a few thousand lines, and in real operation the
files would have several million records, which made processing them
unworkable. At the time we had no capacity to take on this
requirement, so I decided to write a small utility in C to
replace the Excel macros as a temporary fix (over time,
applications were developed that replaced these "manual" processes).

This exercise reproduces more or less the same problem, and it is stated as
follows:

> You must build a filter that takes a file of vectors and
> consolidates them into an output file.
>
> The program is invoked like this:
>
>          $ ordenar_vector archivo_entrada archivo_salida
>
> If the program is given no arguments it must exit with an
> error message.
>
> When it finishes it must display the time, in minutes and seconds, spent
> processing the whole input file.
>
> The input is a file in which each line is divided into:
>
> -   Header: 9 digits
> -   Detail: consisting of 6 vectors
> -   Vector: containing 23 elements that correspond to calendar
>     periods (a month of some year)
> -   Period: a 6-digit number, which can be 000000 or a number of
>     the form YYYYMM where YYYY is a year and MM a month.
>
> The operation to perform is the following:

> All the periods from the 6 vectors must be consolidated into one vector
> of at most 23 elements.
>
> If periods are repeated, only 1 must be kept.
>
> The periods must be sorted from highest to lowest.
>
> The output must be the following:
>
> 1.  Header: 9 digits copied from the input
> 2.  Mark: a letter that can take the values S, N or D.
> 3.  Vector: a vector of at most 23 periods.
>
> The following must be taken into account:
>
> 1.   If the consolidated vector has more than 23 elements, the
>     mark S must be set and the vector must be filled with blank
>     spaces.
> 2.  If the consolidated vector has zero elements (because the periods
>     contain only 0s), the mark N must be set.
>
> If the vector has fewer than 24 elements, the mark D must be set.
>
> The following must also be considered:
>
> 1.   If a line has a length other than the expected one, the error
>     must be reported with the line number (numbered from 0).
> 2.  If a file cannot be opened, the error must be reported.

For reference, I included a solution in C that is very similar
to the program I originally implemented.

The code is on GitHub: <https://github.com/lnds/9d9l>

## Looking for the fastest solution

For testing, I ran every solution against a file
of one million lines. There is a Perl script for generating
test files, included in this project's GitHub
repository.

The "fun" of this challenge was in cutting the run time
of each solution and trying to beat the C solution.

If you compile my C solution with no optimization at all, the run
time for a million lines is 8.8 seconds on my
laptop[^3]. With the -O3 option the run time drops to
3.54 seconds.

The surprise was finding a faster solution in Go that
runs in just 2.92 seconds!

This is the ranking measured on my machine, for a million lines:

| #  | Language | Time   |
|----|----------|--------|
| 1  | Go       |   2.92 |
| 2  | C Opt.   |   3.54 |
| 3  | Kotlin   |   3.81 |
| 4  | Rust     |   3.99 |
| 5  | Swift    |   4.66 |
| 6  | Scala    |   6.02 |
| 7  | Clojure  |   7.79 |
| 8  | Haskell  |   8.05 |
| 9  | F#       |   8.64 |
| 10 | Erlang   |  49.25 |

This kind of operation is not what Erlang (and its
standard libraries) is designed for (though I suspect it is possible
to build a faster solution using binaries instead of strings,
but I don't know enough Erlang to prove it).

## How to solve this problem

The general way to solve this problem can be expressed in the
following algorithm:

     - for each line in the input file:
       - if the line length is not the right one
            => print an error giving the line number
       - if the line length is the expected one =>
          - split the line into 6*23 periods (23 strings of size 6)
          - discard the periods that contain only zeros ("000000")
          - discard duplicate periods
          - sort the periods from highest to lowest
          - Finally write the following to the output:
             - if the number of periods left is 0, put an N and
               pad the output with blanks
             - if the number of periods left is greater than 23,
               put an S and pad the output with blanks
             - in any other case put a D, then concatenate the
               periods and pad with blanks

## The shortest solution

In terms of lines of code, this is the ranking:

| # | Language | Lines  |
|---|----------|--------|
| 1 | F#       |    52  |
| 2 | Haskell  |    62  |
| 3 | Kotlin   |    64  |
|4  | Clojure  |    70  |
|5  | Erlang   |    75  |
|6  | Scala    |    82  |
|7  | C        |    90  |
|8  | Rust     |    90  |
|9  | Go       |    94  |
|10 | Swift    |   129  |

Note that Kotlin is in third place again.

## **Sorting the vectors in C, Rust, Go and Swift**

In C, Rust, Go and Swift the solution was built in a similar way.

### C

In C we create a work area that we sort "in place" using an
insertion sort algorithm.

The work area is an array of periods (of width 6, defined in the
macro VECTOR\_ELEM\_SIZE).

The code to sort the vector looks like this:

```c
    int ordena_vector(char* vector)
    {
       char vector_trabajo[VECTOR_SIZE*CANTIDAD_INSTITUCIONES][VECTOR_ELEM_SIZE];
       int i, j;
       int n = 0;
       char* p = vector;
       char* vend = vector+(VECTOR_SIZE*VECTOR_ELEM_SIZE);
       memset((char*)vector_trabajo, '0', VECTOR_SIZE*CANTIDAD_INSTITUCIONES*VECTOR_ELEM_SIZE);   // por cada elemento del vector
       for (p = vector; p < vend && *p != ' '; p+= VECTOR_ELEM_SIZE) 
       {
           // sort por insercion
          for (i = 0; i < n && strncmp(p, vector_trabajo[i], VECTOR_ELEM_SIZE) < 0; i++)
              ;
          if (i == n) {
             if (strncmp(p, vector_trabajo[n], VECTOR_ELEM_SIZE) != 0)
                memmove(vector_trabajo[n++], p, VECTOR_ELEM_SIZE);
          } else {  
            if (strncmp(p, vector_trabajo[i], VECTOR_ELEM_SIZE) != 0) {
               for (j = VECTOR_SIZE-1; j > i; j--)
                  memmove((char*)vector_trabajo[j], vector_trabajo[j-1], VECTOR_ELEM_SIZE);
               memmove(vector_trabajo[i], p, VECTOR_ELEM_SIZE);
               n++;   
            }
          }
       } // for   memset(vector, ' ', VECTOR_ELEM_SIZE*VECTOR_SIZE+1);
       for (i = 0, p = vector+1; i < n; i++, p+= VECTOR_ELEM_SIZE)
          memmove(p, (char*)vector_trabajo[i], VECTOR_ELEM_SIZE);
       return n;
    }
```

This function returns the number of elements left in the vector.
Here vector is the string read from the input file.

An obvious optimization would be to use the input buffer itself as the work
area and sort it. That is a nice challenge in its own right, left
as an exercise.

One more thing: this code, at the time of writing, has a few bugs.
I challenge you to point out which ones.

### Rust

For the Rust solution I imitated what the C solution does.

```rust
     fn ordenar_vector(vector:&[u8], result:&mut [u8]) {
       let mut n = 0;
       let mut trabajo = ['0' as u8; TAM_VECTOR_ENTRADA];
       for p in vector.chunks(TAM_PERIODO) {
          if p == CERO { continue; }
          let mut i = 0;
          let mut q = 0;
          while i < n && p < &trabajo[q..q+TAM_PERIODO] { i += 1; q += TAM_PERIODO; } // busca si p está en el arreglo
          if i < n && p == &trabajo[q..q+TAM_PERIODO] { continue; } // si ya existe lo ignora
          // inserta p en el arreglo
          if i == n {
             let q = n * TAM_PERIODO;
             &trabajo[q..q+TAM_PERIODO].clone_from_slice(p);
         } else {
             for j in (i+1..ELEMENTOS_VECTOR).rev() {
                 let q = j*TAM_PERIODO;
                 unsafe {
                     ptr::copy_nonoverlapping(&mut trabajo[q-TAM_PERIODO], &mut trabajo[q], TAM_PERIODO)
                 }
             }
             let q = i*TAM_PERIODO;
             trabajo[q..q+TAM_PERIODO].clone_from_slice(p);
         }
         n += 1;
      }
      // retorna el resultado
      if n == 0 {
         result[0] = 'N' as u8;
      } else if n > ELEMENTOS_VECTOR {
         result[0] = 'S' as u8;
      } else {
         result[0] = 'D' as u8;
         for i in 0..n {
             let p = i*TAM_PERIODO;
             result[p+1..p+1+TAM_PERIODO].clone_from_slice(&trabajo[p..p+TAM_PERIODO])
         }
      }
    }
```

The u8 data type is an unsigned byte. In Rust,
vectors have a rather convenient method called chunks(n), which
splits the vector into subvectors of size n. In this loop the
variable p is each period of the vector (one of the chunks).

The equivalent of memove() in C is achieved in Rust using ranges.

For example, the expression:

```rust
         &trabajo[q..q+TAM_PERIODO].clone_from_slice(p);
```

Is what copies from p into that segment of the work array.

Remember that Rust has strict rules for copying data
from one memory area to another, and the ownership rules force you to
"clone" bytes from one array to another\[4\].

That is why, to move data within an array, we have to use
unsafe code:

     unsafe {
     ptr::copy_nonoverlapping(&mut trabajo[q-TAM_PERIODO], &mut trabajo[q], TAM_PERIODO)
     }

The code could also be optimized further by doing an in-place sort
in a single buffer, which is left as an exercise.

### Go

In Go the solution is just as simple, and similar to the Rust
and C versions

```go
     func ordenar_vector(buf []byte, result []byte) {
         n := 0 
         trabajo := make([]byte, TAM_VECTOR_ENTRADA, TAM_VECTOR_ENTRADA)
         for i := 0; i < TAM_PERIODO; i++ { cero[i] = '0' }
         for i := 0; i < TAM_VECTOR_ENTRADA; i ++ { trabajo[i] = '0' }
         for p := 0; p < TAM_VECTOR_ENTRADA; p += TAM_PERIODO {
             periodo := buf[p:p+TAM_PERIODO]
             if bytes.Equal(periodo, cero) { continue }
             i := 0
             q := 0
             for i < n && bytes.Compare(periodo, trabajo[q:q+TAM_PERIODO]) < 0 {
                 i++
                 q += TAM_PERIODO 
             }
             if i < n && bytes.Equal(periodo, trabajo[q:q+TAM_PERIODO]) { continue }
             if i == n {
                 q := n*TAM_PERIODO
                 copy(trabajo[q:q+TAM_PERIODO], periodo)
             } else {
                 for j := ELEMENTOS_VECTOR-1; j > i; j-- { 
                     q := j*TAM_PERIODO
                     copy(trabajo[q:q+TAM_PERIODO], trabajo[q-TAM_PERIODO:q])
                 }
                 q := i*TAM_PERIODO
                 copy(trabajo[q:q+TAM_PERIODO], periodo)
             }
             n++
         }
         if n == 0 {
             result[0] = 'N'
         } else if n > ELEMENTOS_VECTOR {
             result[0] = 'S'
         } else {
             result[0] = 'D'
             copy(result[1:n*TAM_PERIODO+1], trabajo[0:n*TAM_PERIODO])
         }
     }
```

We use ranges to operate on sections of the input array. Copying
segments of the vector to the work area is pretty simple:

```go
     copy(trabajo[q:q+TAM_PERIODO], periodo)
```

Ranges, in both Rust and Go, run from the start index up to
the value before the end index; for example, vector\[0..6\] returns
6 elements, from 0 through 5 inclusive.

### Swift

The Swift code receives the two vectors, which are declared
externally:

```swift
     func ordenarVector(_ buf: [Int8], _ trabajo : inout [Int8]) -> Int {
         var p = posVector
         var n = 0
         let tope = largoLinea-1
         while p < tope {
             if buf[p..<p+tamPeriodo] == ceroData {
                 p += tamPeriodo
                 continue
             }
             var i = 0
             var q = 0
             while i < n && buf[p..<p+tamPeriodo].lexicographicallyPrecedes(trabajo[q..<q+tamPeriodo]) {
                 i += 1
                 q += tamPeriodo
             }
             if i < n && buf[p..<p+tamPeriodo] == trabajo[q..<q+tamPeriodo] {
                 p += tamPeriodo
                 continue
             }
             if i == n {
                 q = n * tamPeriodo
                 for k in 0..<tamPeriodo {
                     trabajo[q+k] = buf[p+k]
                 }
             } else {
                 var j = tamVector-1
                 while j > i {
                     q = j * tamPeriodo
                     for k in 0..<tamPeriodo {
                         trabajo[q+k] = trabajo[q-tamPeriodo+k]
                     }
                     j -= 1
                 }
                 q = i * tamPeriodo
                 for j in 0..<tamPeriodo {
                     trabajo[q+j] = buf[p+j]
                 }
             }
             n += 1
             p += tamPeriodo
         }
         return n
     }
```

Swift has operations for copying segments (slices) of an array;
you can write the following:

```swift
     trabajo[q..<q+tamPeriodo] = bug[p..<p+tamPeriodo]
```

But I noticed that the compiler generates very inefficient code for these
operations, because it builds an object for each segment that is then
released. That is why I chose to write these loops to copy the
elements of a vector:

```swift
     for j in 0..<tamPeriodo {
         trabajo[q+j] = buf[p+j]
     }
```

Let's hope future versions of the Swift compiler fix this
problem and generate more efficient code.

## Solving it on the JVM

There are three JVM-based languages in this challenge: Clojure, Scala and
Kotlin.

### Clojure

My first solution was in Clojure, which is a dynamic functional
language. The code to sort the periods is pretty simple:

```clojure
     (defn agregar-periodo [^String linea ini fin lista]
        (if (.regionMatches linea ini ceros 0 tam-periodo)
           lista 
           (conj! lista (subs linea ini fin))))

     ; lista debe ser un set
     (defn extraer-periodos [^String linea]
         (loop [ini pos-vector fin pos-segundo-periodo lista (transient #{})]
             (if (= ini tope-linea) (persistent! (agregar-periodo linea ini fin lista))
             (recur (+ ini tam-periodo) (+ fin tam-periodo) (agregar-periodo linea ini fin lista)))))
     
     (defn ordenar-periodos [^String linea]
         (let [periodos (extraer-periodos linea) n (count periodos)]
             (cond 
                 (zero? n) (str "N" relleno-vector)
                 (> n elementos) (str "S" relleno-vector)
                 :else (str "D" (s/join (take elementos 
                        (concat (sort #(compare ^String %2 ^String %1) periodos) 
                                (repeat relleno))))))))
```

The first thing to notice is that we sort the vector only at the end,
after we have determined that the number of periods is greater
than zero and less than or equal to 23.

The function that extracts periods inserts each period into a set, which
gets rid of duplicates. Of course, we only add the period if
it is different from zero.

Note that we use a set created with the (transient) function, which
gives us better performance.

But the real optimization came when I used the function
(**.regionMatches**), a method of Java's String class.
Using it avoids creating substrings, which
affects the final performance of this solution.

The regionMatches() function compares a region of the string, which
lets us find out whether the subsection of the string is zero
quite fast.

This function was later used in Kotlin and Scala.

### Scala

The Scala sort uses a sorted set, so the program
keeps an array with no duplicates and sorted from the start.

```scala
     def ordenarPeriodos(linea: String) : String = {
         val encabezado = linea.slice(0, posVector)
         val myOrdering = Ordering.fromLessThan[String](_ > _)
         var periodos = SortedSet.empty[String](myOrdering)
         var pos = posVector
         while (pos < largoLinea) {
             if (!linea.regionMatches(pos, ceros, 0, tamPeriodo)) 
             periodos += linea.slice(pos, pos+tamPeriodo)
             pos += tamPeriodo
         }
         val len = periodos.size
         encabezado + (
             if (len == 0) 
                 "N" + (" " * tamRelleno)
             else if (len > tamVector)
                 "S" + " " * tamRelleno
             else 
                 "D" + periodos.mkString + " "*(tamRelleno-len*tamPeriodo)
         )
     }
```

Note how we use regionMatches() to avoid inserting the zeros.

### Kotlin

The Kotlin solution is the fastest on the JVM, and perhaps the reason is
that we do the sorting at the end. That is faster than the
Scala solution, which is inserting into a structure that is kept
sorted. The optimization in Scala is obvious, and is left as an
exercise.

```kotlin
     fun ordenarVector(linea:String) : String {
         val encabezado = linea.substring(0, posVector)
         val periodos = HashSet<String>()
         for (i in posVector until largoLinea step tamPeriodo) {
             if (!linea.regionMatches(i, ceros, 0, tamPeriodo, true))
                 periodos.add(linea.substring(i, i+tamPeriodo))
         }
         if (periodos.size == 0)
             return encabezado+"N"+ relleno
         else if (periodos.size > tamVector)
             return encabezado+"S"+relleno
         else {
             return encabezado+"D"+(periodos.sortedDescending().joinToString("")).padEnd(tamVector* tamPeriodo)
         }
     }
```

## Three more functional languages

The remaining solutions are in functional languages: Haskell, F\# and
Erlang.

## Haskell

The Haskell solution has to be read from the bottom up to be understood:

```haskell
     chunksOf :: Int64 -> LB.ByteString -> [LB.ByteString]
     chunksOf x xs = unfoldr (justWhen not_null (L.splitAt x)) xs 

     periodo_valido :: LB.ByteString -> Bool
     periodo_valido xs = LB.any (/= '0') xs

     clasificar_resultado :: [LB.ByteString] -> [LB.ByteString]
     clasificar_resultado xs 
         | null xs = ["N"]
         | (length xs) > elementos' = ["S"]
         | otherwise = "D" : take elementos' xs
     
     ordenar_periodos :: [LB.ByteString] -> [LB.ByteString] 
     ordenar_periodos xs = sortDesc $ nub $ (filter periodo_valido xs)
```

These functions are called like this:

```haskell
     clasificar_resultado $ ordenar_periodos $ chunksOf tam_periodo resto
```

What we do is split the periods into segments of size 6
(tam\_periodo):

```haskell
     chunksOf tam_periodo resto
```

Then ordenar\_periodos sorts in descending order, removing
duplicates (nub) and filtering only the valid periods.

An obvious optimization would be to sort only in the "D" case, which
is also an exercise you can try yourselves.

### F\#

Sorting the periods is pretty simple:

```fsharp
     let ordenar_periodos (linea:string) = 
         let periodos = separar_periodos linea |> Seq.distinct |> Seq.toList 
         let len = Seq.length periodos
         if len = 0 then "N".PadRight(PAD_SIZE)
         else if len > ELEMENTOS_VECTOR then "S".PadRight(PAD_SIZE)
         else ("D" + (periodos |> Seq.sortDescending |> String.Concat)).PadRight(PAD_SIZE)
```

The separar\_periodos function was written imperatively in
order to get better performance, which cut the time by
several seconds:

```fsharp
     let separar_periodos (linea:string) = seq {
         let mutable p = POS_VECTOR
         while p < LARGO_LINEA do
             if no_es_cero linea p then
                 yield linea.Substring(p, TAM_PERIODO)
             p <- p + TAM_PERIODO
     }
```

This F\# implementation could have been written more
compactly, but I had to resort to several optimizations using more
imperative code. The first F\# solution ran in more than 20
seconds. With these optimizations we got it under 9 seconds.

### Erlang

The Erlang solution is recursive, and uses a sorted-array
structure. This was the fastest I could manage, with times under
50 seconds.

The initial version took more than three minutes for a file of a
million lines. One of the biggest wins was opening files in
raw mode, since Erlang uses another process to perform all IO
unless files are opened in raw mode. After that the
improvements were marginal.

Maybe with an equivalent of the JVM's regionMatches function this version
could get under 20 seconds. I suspect using binaries would do it too,
but that requires more advanced knowledge of Erlang.

```erlang
     ordenar_vector(Vector) ->
         Encabezado = substr(Vector, 1, ?POS_VECTOR),
         Periodos = separar_periodos(substr(Vector, ?INI_VECTOR, ?LARGO_VECTOR), new(), ?LARGO_VECTOR),
         Largo = size(Periodos),
         if Largo =:= 0 -> [Encabezado|?N_RELLENO];
            Largo > ?ELEMENTOS_VECTOR -> [Encabezado|?S_RELLENO];
            true -> P = reverse(to_list(Periodos)),
            L = (?TAM_RELLENO-len(P)*?TAM_PERIODO) - 1, 
            [Encabezado, "D", P, chars(32, L)]
         end.

     separar_periodos(Linea, Periodos, ?TAM_PERIODO) -> 
         if Linea =:= ?CEROS -> Periodos;
            true -> add_element(Linea, Periodos)
         end;
     separar_periodos(Linea, Periodos, Largo) ->
         Periodo = substr(Linea, 1, ?TAM_PERIODO),
         Resto = substr(Linea, ?TAM_PERIODO_MAS_1),
         if Periodo =:= ?CEROS -> separar_periodos(Resto, Periodos, Largo-?TAM_PERIODO);
            true -> separar_periodos(Resto, add_element(Periodo, Periodos), Largo-?TAM_PERIODO)
         end.
```

## Conclusion

This was quite a long exercise, taking me some 48 hours of work
over four months. The reason is that I was determined to get the
fastest solution in each language. The bar I measured myself against was
getting run times under 10 seconds. In hindsight
I can see that several of the solutions can be improved even further. I'm
ready to move on to other things, so that challenge is left to
you. You can always send a pull request with better solutions or
propose solutions in other languages.

The GitHub repository is at:
[https://github.com/lnds/9d9l](//github.com/lnds/9d9l)


[^1]: Katy Lied is Steely Dan's fourth studio album. Among
other things it stands out for featuring, for the first time,
Michael McDonald on backing vocals and the great drummer, and founder of
Toto, Jeff Porcaro, who at the time was barely 20 years old.

[^2]: Structured Programming with Goto Statements, there is a copy of the
paper here:
http://web.archive.org/web/20130731202547/http://pplab.snu.ac.kr/courses/adv\_pl05/papers/p261-knuth.pdf

[^3]: Macbook pro 2016, Intel i7, 2.6 Ghz, 16 Gb RAM, MacOS Sierra,
SSD disk. The tests were run with no other process
active, disconnected from the internet and with antivirus disabled

[^4]: See <https://doc.rust-lang.org/book/ownership.html>
