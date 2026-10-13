---
title: "Beyond Hello World"
authors: [admin]
date: 2016-01-13T08:25:11-03:00
slug: "beyond-hello-world"
draft: false
tags: ['programming languages', 'challenges']
image:
  placement: 3
---

Ever since Kernighan & Ritchie published "The C Programming Language",
it has been almost mandatory for every introduction to a new programming
language to start with the famous ["Hello
World](//en.wikipedia.org/wiki/%22Hello,_World!%22_program)". A
very simple program that goes more or less like this:

>     main() {
>        printf("hello, world\n");
>     }

This tradition is fine for a beginner, but it is also useful for
checking that we have installed the compiler and/or the environment of
the language we want to learn.

But as professionals who want to learn and evaluate a new
programming language, we would like to have a test that lets us
answer the following questions:

> How do you control the flow of a program? That is, how do you express
> decision making, how do you write a loop, how do you define
> the start and the end of a loop. Does the language support recursion?
> How do you define a simple function or
> subroutine?

Of course, first you have to know the main paradigm
of that new language (functional, object oriented, logic,
imperative, etc.), but we have that more or less clear when we pick
the language in question. What we want is to be able to write a program
that lets us try out the basics, the minimal elements that make up every
program, its control structures and the way we can divide and
organize the
code.

{{<figure caption="Dijkstra" src="//d2dspjyoh5c79p.cloudfront.net/8e70a390-ba4e-11e5-8a08-83bbaa5c62fa-aa9f18b7">}}

To write any program on a Turing Machine, two instructions are
enough: if and goto. But we all hate gotos, so, in
the light of Dijkstra and the idea of "structured programming", our
ancestors handed us loops (while, for, repeat, etc.).

But another group, inspired by McCarthy, discovered that these
things can be done another way, and instead of thinking in conditions and
jumps we can see a program as a flow of data passing from
function to function, flows that transform input data into output
data.

{{<figure caption="McCarthy" src="//d2dspjyoh5c79p.cloudfront.net/a0031521-ba4e-11e5-8a08-83bbaa5c62fa-aa9f18b7">}}

So in broad strokes, and considering only the basic syntax, we have
languages that follow Dijkstra's line of structured
programming and languages that follow McCarthy's way and are built
through the composition of functions (and the manipulation of lists or
sequences).

To evaluate the core of the syntax, it occurred to me that the right
challenge for the project
["9 challenges in 9 programming languages"](/en/blog/lnds/2016/01/09/those-strange-new-languages/)
(which I described in my previous post) is an interactive game.

A simple game, of course, where the interaction happens through
the operating system's basic console (the shell, for example).

## Games over SMS

Several years ago I developed games that people
interacted with via SMS (text messaging on cell phones).

You surely know them: "text the word XXX to
9999 and you're in" or "Vote for your favorite artist X
by sending a message to 9999".

The idea was for the public to send an SMS and play, to kill time
in an era without smartphones. Besides passing the time, people emptied
their wallets, because every interaction with the game cost several
pesos (between CLP 80 and CLP 250 back then). But that was the idea of the
"business model" (and of all business models: squeeze your
wallet so that money can be handed over to the investors).

One of the games I implemented was Black Jack, another was called Toque y
Fama (Chile's version of Bulls and Cows).

![](//d2dspjyoh5c79p.cloudfront.net/3ae368a9-ba50-11e5-8a08-83bbaa5c62fa-aa9f18b7)

The *"beauty"* of Toque y Fama is that you can spend a long time playing and
therefore sending lots of messages (\$ \$ \$ \$) to the server, trying
to guess the number. (You may think we got rich off this,
but no, the truth is that in Chile most people back
then had prepaid plans and weren't going to spend their few *bucks*
on *nonsense*, although horoscopes and erotic stories (over SMS!)
were more successful, but that is a story for another time.

Toque y Fama is a very simple game:

> The server generates a sequence of 5 distinct digits, for example:
> 4,8,1,3 and 5.
>
> The user has to try to guess the numbers in the right order.
> If they send an SMS with "12345", the server will answer "You have 3
> Toques and 1 Fama", because the numbers 1, 3 and 4 are in the list, but
> in the wrong positions (*"toques"*, touches), while the 5 is in
> the list and in the right position ("fama", fame).
>
> Then the excited player decides to try the sequence "40321"
> (this is an obsessive player with no clear strategy, a naive soul
> who may end up spending a lot of money on SMS; the investors
> are happy).
>
> On receiving the SMS 40325 the server answers with the message "You have 1
> Toque and 2 Famas". And so the poor sucker keeps sending messages
> until he gets the 5 Famas and wins (or runs out of money on his plan,
> but that is his problem, not ours).

## Challenge number 1

The first goal of this challenge is to implement "Toque y Fama" in
Clojure, Erlang, F\#, Go, Haskell, Kotlin, Rust, Scala and Swift.

Of course we are not going to implement an
[ESME](//en.wikipedia.org/wiki/External_Short_Messaging_Entity) to
play using our cell phones; we will replace the input to the system
with the operating system's console (known in other
circles as [standard input or
STDIN](//es.wikipedia.org/wiki/Entrada_est%C3%A1ndar)).

A session of our game will look like this:

```
    Bienvenido a Toque y Fama.
    ==========================
    En este juego debes tratar de adivinar una secuencia de 5 dígitos generadas por el programa.
    Para esto ingresas 5 dígitos distintos con el fin de adivinar la secuencia.
    Si has adivinado correctamente la posición de un dígito se produce una Fama.
    Si has adivinado uno de los dígitos de la secuencia, pero en una posición distinta se trata de un Toque.
    Ejemplo: Si la secuencia es secuencia: [8, 0, 6, 1, 3] e ingresas 40863, entonces en pantalla aparecerá:
    tu ingresaste [4, 0, 8, 6, 3]
    resultado: 2 Toques 2 Famas

    Ingresa una secuencia de 5 dígitos distintos (o escribe salir):
    *12345
    tu ingresaste [1, 2, 3, 4, 5]
    resultado: 1 Toques 1 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    67890
    tu ingresaste [6, 7, 8, 9, 0]
    resultado: 3 Toques 0 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    67915
    tu ingresaste [6, 7, 9, 1, 5]
    resultado: 4 Toques 1 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    97615
    tu ingresaste [9, 7, 6, 1, 5]
    resultado: 3 Toques 2 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    91756
    tu ingresaste [9, 1, 7, 5, 6]
    resultado: 2 Toques 3 FamasIngresa una secuencia de 5 dígitos distintos (o escribe salir):
    91765
    tu ingresaste [9, 1, 7, 6, 5]
    resultado: 0 Toques 5 FamasGanaste! Acertaste al intento 6! La secuencia era [9, 1, 7, 6, 5].
```


The point of this project, and of these articles, is not to teach you to
program in each of these languages; there is plenty of material on the
internet for that, and a great many books. At the end of this series of
articles I will publish a list of references so you can learn
whichever language you find most interesting.

In this first challenge, another goal is to review how we express
control structures (loops, ifs, etc.) and how subroutines are
defined.

Of course there is more to do to solve this exercise:
reading from and writing to the console, manipulating strings, generating random
numbers, etc. But in each chapter of this project I am going to
focus on different aspects of programming in general and how
they are solved in each of the 9 languages. This time it is
control structures and the declaration of functions or subroutines.

The complete code is in my GitHub repository at the following
address: <https://github.com/lnds/9d9l/tree/master/desafio1>

I suggest getting and compiling the code for the language you are
interested in and then studying it. For each one I added a brief note in
the doc directory.

## **Types of languages**

I already told you there are languages we will call Dijkstrean, which
use ifs, loops and that sort of thing, and languages we will call McCarthean,
which prefer recursion and pattern matching. To keep things
simple we will call them type D and type M languages[^*].

This is a division I just came up with, simply because I'm that *cool*,
so don't look for it in any book, or on Wikipedia, because it didn't
exist until it occurred to me (maybe one day academia will adopt it
and hand me the PhD I deserve for this brilliant contribution to
computer science).

Type D languages are normally imperative (they are explicit about how
to execute operations), they allow mutable state, and they let you
organize code into modules, classes, objects, interfaces, prototypes,
traits, etc.

Type M languages are more declarative (they care about what needs
to be computed, not how), they favor immutability, they are
functional, they favor function composition, and they operate on
data structures such as lists, sequences, etc.

In this project we have:

Type D languages: Go, Kotlin, Rust and Swift.

Type M languages: Clojure, Haskell and Erlang.

However, all the type D languages in this project support recursion,
it's just that it is not always the most efficient way to implement some
things in these languages.

On the other hand, Scala has the peculiarity that we can write
entire programs following the style of the type M languages. So
we are going to create a third group of languages, which we will call type O, in
honor of Martin Odersky. F\# also has many of these
characteristics. These are languages that have elements of both type D
and type M languages.

Next we will briefly review the control structures of each
of these languages, and after that we will see how functions are
declared, to finish with some conclusions from the exercise.

## Evaluating the languages' syntax

### Control structures

Selection lets us decide which actions should be executed in a
program based on a condition. Like the IFs in many languages, or
the switch/case statements that allow selection among multiple cases.

Let's see what we discovered with this exercise.

## **Type D languages (Go, Rust, Swift, Kotlin)**

They all use an if derived from C's syntax. Go, Rust and Swift
drop the parentheses around the evaluated expression, although Kotlin keeps
them.

Examples:

In Go, a fragment of the function that validates the input.

{{<gist lnds 4b29aba11d61b18e88eb>}}
If in Go

Go is quite strict about how we place the braces of the code
block, { and }, which are mandatory (just as in Swift and Rust).

In Swift, the same fragment:

{{<gist lnds 25a5db4dc7b3a158bf53>}}
If in Swift

In Rust:

{{<gist lnds e7e9c746475baf88d65d>}}
If in Rust; note that we can write the body on the same line, something
you cannot do in Go.

In Rust, however, if is a kind of expression, as this fragment
of the validar\_entrada function makes clear:

```rust
    return if num.len() == tam { Jugar(num) } else { Error }
```

In Kotlin:

{{<gist lnds cb2519efd5fe43da3824>}}


Note that we don't put an else after the first if; we could have done
the same in Go and Rust.

In Kotlin, if is also an expression.

In Go and Swift, if is a statement, whereas in Rust, Scala,
Kotlin, Erlang, F\# and Haskell it is an expression.

The difference is the following:

```
    // This is pseudo language

    // When if is a statement

    var max : Int;
    if a > b then max = a else max = b;


    // when if is an expression

    max := if a > b then a else b;
```

For those who have developed in C or C++, if as an expression replaces
the ternary operator "?:".

## Type O

{{<gist lnds db41725f31dbb6c425eb>}}

The if in Scala is using operations on collections, as in
functional languages.

Here we take the chance to highlight a feature of
type O languages, which mix concepts from object oriented
programming with functional programming. The variable
***accion*** is a
string; in Scala a string is an object that corresponds to a sequence
of characters and is therefore a collection. All collections have
the exists method, which takes a function (functions can be
passed as arguments to other functions in Scala) and returns true if
any element of the collection meets the condition (in this case, that the
character is not a digit). We do something similar in the
*else* by applying
a map over the variable
***accion***.

We could have written the validar method this other way:

{{<gist lnds f6e4bc18a75530d5d358>}}

And there it becomes clearer that we are looking at the use of anonymous functions
over lists, something common in an M language, but applied to an
object, something typical of type D languages.

The if in F\# is very similar to Scala's.

{{<gist lnds fb0eee1489ffa46a6de4>}}

The validar function in F\#

##  Type M languages (Haskell, Erlang, Clojure)

In Haskell there is an if, which is also an expression. But there are
ways of doing selection at the level of the function declaration
through pattern matching.

Let's see this in the validar function.

{{<gist lnds af0a3425a0fa912f513b>}}


Here we define the validar function, which takes n, an integer
indicating the length the sequence of digits must have. The argument xs
is the sequence of characters entered by the player.

In this case we are in the presence of *guards*, which are expressions
that go between \| and =, for example this fragment:

```
    | length num /= n = []
```

It defines a condition that must hold in order to assign the value \[\]
(empty list) as the result of the validar function.

(In Haskell the "not equal to" operator is written /=; in C it is
!=).

The following fragment is a kind of "else":

```
    | otherwise = num
```

Which says that if the other expressions in the guards have not held,
then use the following value as the result of the function.

But we can also use if as an expression:

    where num = if not (all isDigit xs) then [] else remover_dups xs

The where clause declares num as a variable, which will have the value
\[\] (empty list) if the sequence of digits contains at least one
character that is not a digit, or otherwise will have all the
digits of the sequence (with duplicates removed).

Clojure's case is simpler: there is a function called if whose
form is:

```
    (if condicion valor_true valor_false)
```

For example, if we want to determine the maximum of two numbers

```
    (if (> a b) a b)
```

Clojure is a language based on LISP, so it uses prefix notation,
grouping with parentheses.

This scares many programmers (even Dijkstra himself hated
this notation[^1]). Let's look at the validar function in Clojure:

{{<gist lnds c7ba64b77b24be873742>}}

## Validar in Clojure

One way to avoid falling into parenthesis hell, and it's what
I try to do whenever I've had to use some dialect of Lisp, is
to split a function into small functions. This is what's called
bottom-up structuring: writing small pieces that solve one
part of the problem and then integrating them into the final solution.

If I hadn't done this, the validar function would look like this:

{{<gist lnds f47e8a136053f7b542cd>}}

Validar in Clojure without using helper functions

As you can see, it's already getting harder to
keep track of this function's code.

Imagine a function with more than 50 lines and an enormous number of
parentheses.

So it's better to follow the old adage of "divide and conquer" with
Clojure.

Erlang is the strangest of the languages in this respect.

In Erlang there is an if, but it is more like the switch or case of other
languages.

{{<gist lnds b7e46cf41ea6ee2eb7be>}}
Fragment of the validar function in Erlang

In Erlang there is no "else"; one way to express an else would be the
following:

```erlang
    if A > B -> A;
    true -> B end.
```

That phrase "true -\>" is the equivalent of an else in Erlang.

Which can get pretty confusing, for example:

```erlang
    es_mayor_que (X, Y) ->
        if X>Y ->     true;
        true -> false
    end.
```

That is why Erlang programmers tend to put the negated
condition as the final condition, which is what we do in the
fragment above.

Another way to express the conditional jump is using *guards*, as in
Haskell, for example with this function that determines whether a character is a
digit:

{{<gist lnds 150e5656d9adb12d38e9>}}

determining that a character is a digit.

Loops
-----

Another control structure is the loop.

Go, F\#, Rust, Kotlin, Scala and Swift have while and for as in C

In Haskell and Erlang the way to run loops is through
recursion.

This challenge requires a main loop, which lasts until the
user types "salir" (quit) or wins the game (that is, gets 5 famas).

But in Go, Rust, Swift and Kotlin we use an interesting feature
of the for statement.

Let's see what I mean with this fragment in Go:

{{<gist lnds b66007ebe19cc53a7e43>}}
For in Go using range

In this for we walk through the string *accion*, leaving in each iteration
the character in the variable c and, in the variable i, the position c occupies within
the string. The variable i will take the values 0,1,2,\... as
the string is traversed.

In C we would have had to do something like this:

```
    for (i = 0; i < strlen(accion); i++) {
        char c = accion[i];
    ....
    }
```

In Rust and in Swift the same thing is achieved using enumerate

{{<gist lnds dead88b3ecdfae8306a1>}}
for with enumerate in Swift

{{<gist lnds cdf388705574fefd57a7>}}

for with enumerate in Swift

Notice that in Swift and in Rust we have a ***for in***; in Go it is a
variable that takes values from a range().

In Kotlin it is similar, although we can get the variables in two
ways:

{{<gist lnds a001e68d186fb0082c2a>}}

In the first for we use it as an object with two attributes: .index and
.value; in the second and third for we use them as tuples, as in the
other languages

In Scala we can simulate the same thing with the zipWithIndex method available
on collections, but we can also create two nested *for*s in the
same statement:

{{<gist lnds e11fcdd50a2209567e11>}}
This for in Scala generates a collection of Ts (for the toques) and Fs (for
the famas)

In Clojure there is a construct that lets us write loops:

    (loop [x 10]
      (when (> x 1)
        (println x)
        (recur (dec x))))

In this case we print the numbers from 10 down to 1.

Actually, in Clojure recursion is used to implement loops,
but if we are not careful we can cause a "stack overflow"
(remember that Clojure runs on the JVM). To help the compiler, Clojure
implements the (recur) function, which makes it possible to implement "tail
recursion", something we will look at in detail later. In the same way,
the (loop) function helps the Clojure compiler implement loops
efficiently.

The interesting thing about the Clojure solution is that it doesn't use recursion in
any function and uses the (loop) function only for the program's main
loop.

The Erlang solution is implemented as a *"recursive
descent"*. It's not that I set out to write the code this
way, but it was how the solution to this
problem came to me.

In essence the Erlang solution descends through the different
functions starting from the jugar function:

    - main
    -- jugar
    --- continuar
    ---- "error" -> jugar
    ---- revisar_jugada
    ------ "Ganaste" -> <fin del programa>
    ------ -> jugar  

I think this way of solving the problem comes from the influence of
Prolog on the language; we will see whether that is confirmed in the
challenges to come.\

The question I have to settle is what happens with this solution. My
instinct tells me it should cause a "stack
overflow", but that's something I have to test. If any reader knows more about
Erlang I would appreciate comments on that solution; it is my first
program in this language and I'm not clear on whether there is some kind of
"tail recursion" optimization that applies to my solution (I suspect
not, but it's something that needs to be cleared up).

I'm not copying the Erlang code here because of its length; you can see it in
detail
[here](//github.com/lnds/9d9l/blob/master/desafio1/erlang/toque_y_fama.erl).

In Haskell's case the only alternative is recursion (there are
ways of simulating loops using "Monads", but I don't want to scare you with
that yet).

Unlike the Clojure solution, where I compute the toques and the
famas in 2 different functions, here I set out to compute both figures in
just 1 function. The solution isn't the most efficient but it shows how
you can do "loops" in Haskell:

{{<gist lnds f24ce824041c3127ef37>}}

A function that computes the toques and famas by comparing two sequences of
numbers

The toques\_y\_famas function takes 3 parameters: the sequence of numbers
entered by the user, while parameters 2 and 3 are
initially the sequence generated by the program (the number that
has to be guessed).

Line 1 of the code above shows the particular case where the
player's input is empty (first parameter = \[\]). In that case there are
zero toques and zero famas.

Then we do a recursive descent again. The notation (n:ns)
breaks a list down into its head (n) and its tail (ns). For example, if the
list is \[1,2,3,4,5\], the pattern (n:ns) matches n with 1 and ns with
\[2,3,4,5\].

The algorithm expressed in that Haskell code is the following:

1\. If the list entered by the player is empty, then there are 0
toques and 0 famas.

2\. Otherwise, take the list entered by the player and
break it down into head and tail (n and ns). Take the sequence generated by
the program and do the same (getting x and xs).

3\. If the heads of both lists are equal then we have 1 fama and
so the number of famas (f) is incremented by 1, returning the
pair (t, 1+f).

4\. Otherwise, if the head of the list entered by the player
(n) is in the sequence generated by the program (ys) then that
must be counted as a toque (t) and (t+1, f) is returned.

5\. If neither 3 nor 4 holds, the accumulated values of t and f are returned.

6\. Here comes the magic: t and f have been computed beforehand from
ns and xs.

Step 6 is what is expressed in the **where** clause at the end of
the function's definition.

This Haskell solution was the one that inspired the solutions in Erlang and
F\#:

{{<gist lnds 297bfd90aef441a0641c>}}


Counting Toques and Famas in Erlang

{{<gist lnds 84b556795321b21480c4>}}


Counting Toques and Famas in F\#

This code only works correctly if both sequences are the
same length (something we take care of in other stages of the
program, but which could be handled in the code).

This solution is not the most efficient, of course.

Can you think of a more efficient solution for comparing both sequences
in the type M languages? (Hint: look at the Scala solution).

## Declaring and calling subroutines

I use the term [subroutine](//es.wikipedia.org/wiki/Subrutina) to
cover the concepts of functions, methods, procedures, etc.

In Clojure the way to declare a function
is:

    (def funcion (fn [args] cuerpo))

For example:

    (def mutiplica (fn [a b] (* a b)))

There is a macro that simplifies the declaration

    (defn multiplica [a b] (* a b))

Clojure is a
[homoiconic](//es.wikipedia.org/wiki/Homoiconicidad) language, which means
that the way code is represented is the same as the way the basic
data structure is represented.

In Clojure and in the family of LISP-based languages, the elementary data
structure is the list, so strictly speaking Clojure has no
syntax as such. What there is are lists that get processed by the
Clojure interpreter.

So to call the (multiplica) function what we do is
create a list where the head is the name of the function:

    (multiplicar 2 500) ; returns 1000

Clojure handles another structure, the vector. A vector is expressed
by placing the elements between square brackets, for example: \[1 2 3\]. In
Clojure the comma is equivalent to a space, so we can write
\[1, 2, 3\].

So, following the principle of homoiconicity, the parameters of
a function are expressed as a vector and the function's definition is
a list. A list can have other lists or vectors as elements.

Let's see all this reflected in the (gano?) function, which evaluates whether the
player won the game:

{{<gist lnds 5174b8b444cdf1a40683>}}

A function in Clojure

The name of a function must start with a non-numeric character, and
can be made up of letters, numbers and the symbols \*, +, !, -,
\_, \', and ?.

In this case we call the function (gano?) using the question
mark. The parameters are written as a vector \[num sec
tam\], and vectors are used to create auxiliary variables with the
**let** form. All this shows homoiconicity, where the code is
expressed using the basic data structures (lists and vectors).

In Haskell the name of the function is followed by its parameters, which
are separated simply by whitespace:


```haskell
    multiplicar a b = a * b
```

[To call the function we write its name followed by the parameters,
again separated only by spaces (without parentheses or
commas):]{style="letter-spacing: 0.01rem; line-height: 1.5;"}\

```haskell
    multiplicar 2 500
```

In Haskell it is better to think that what we have is an equation or
identity; that way we can understand this
fragment

```haskell
    mil = multiplicar 2 500
```

There is more to functions in Haskell and we have seen some of it, such as
*guards* and the **where** clause:

{{<gist lnds af0a3425a0fa912f513b>}}

We will go over the details later on.

The declaration style in F\# is similar, but we use the reserved
word **let** to start a declaration:

```
    let multiplicar = a * b
```

And to run the function we call it the same way as in Haskell.

In Erlang things are quite different. In this language a
function is a sequence of clauses separated by semicolons (\';\'),
ended with a period (\'.\'):

```
    fact(N) when N>0 ->  % head of the first clause
        N * fact(N-1);   % body of the first clause
    fact(0) ->           % head of the second clause
        1.     
```

The body of a clause can contain a list of clauses
separated by commas (\',\'). For example, our main function is
made up of just one clause, with several sub-clauses in the body of
the function:

    main() -> Tam = 5, 
              mostrar_reglas(Tam), 
       Sec = lists:sublist(generar_secuencia(), Tam),  
        jugar(Tam,Sec,1).

In Erlang variables start with an uppercase letter, and function
names with lowercase (technically they are atoms, but we will get to that
later).

Go, Swift, Kotlin, Rust and Scala all declare their functions in a
very similar way:

Go:

    func validar(tam int, accion string) []int {
    ...
    }

Rust:

    fn validar_entrada(tam:usize, accion:&String) -> Accion {
    ...
    }

Swift:

    func validar(tam:Int, acc:String!) -> [Int]? {
    ...
    }

Kotlin:

    fun validar(tam:Int, accion:String?) : IntArray? {
    ..
    }

Scala:

    def validar(tam:Int, accion:String) : Option[Array[Int]] = ...

The common ancestor (C) shows here.
However, all these languages put the type of the parameters
after the parameter's identifier, as in Pascal. Only Go omits the
colon (\':\').

In another article we will talk about the types of functions and
variables.

## Conclusions

The following table summarizes the number of lines of code for each
implementation:


| Haskell | 45 |
|---------|----|
| Clojure | 49 |
| F#      | 53 |
| Scala   | 55 |
| Erlang  | 61 |
| Swift   | 66 |
| Kotlin  | 79 |
| Rust    | 82 |
| Go      | 86 |

I have sorted them from fewest to most. These numbers may change later
on if I revise the code. The up-to-date data will always
be in the repository's README.md file.

The order in which I solved these problems is the following:

order in which I solved the challenge
1. Rust
2. Go
3. Clojure
4. Haskell
5. F#
6. Scala
7. Swift
8. Kotlin
9. Erlang

Although I didn't measure development time (something I hope to do in
future challenges), I'll venture to rank the solutions
as follows by the time invested in developing each one (coding,
testing and debugging):

order by time invested in solving the problem (from least to most)
1. Scala
2. Kotlin
3. Swift
4. Go
5. Clojure
6. F#
7. Rust
8. Haskell
9. Erlang

The extra time invested in Erlang comes down to how different this
language is from the rest.

The Go solution guided the development of the solutions in almost
all the other type D languages. Although I wrote the Rust code
first, Go's use of *ranges* led me to rewrite the Rust
solution. The Haskell program went through several iterations.

If I had to implement this for an SMS game I would probably use
Erlang or Go, because they are languages suited to that kind of
application. But if the constraint is that it only runs on the command
line, the least complicated option might be to do it in Go.

However, the solution I find most elegant is the one I wrote in
Clojure: it has no loops (except for the program's main loop), there
is no recursion and everything is solved with list operations. There is another,
more efficient way to solve it in Clojure and I think I will
implement it some other time (same with Haskell).

That's it for challenge 1 for now. I look forward to your comments and
feedback.

Remember that the code for all the implementations of this challenge is
here: [https://github.com/lnds/9d9l/tree/master/desafio1](//github.com/lnds/9d9l/tree/master/desafio1)

**Notes**

[^*]: For Dijkstra and McCarthy. Apparently there was some controversy between
them, although McCarthy was more reserved in his comments than
Dijkstra.

[^1]: In his Turing Award lecture, Dijkstra
wrote: LISP has jokingly been described as "the most
intelligent way to misuse a computer". I think that description
a great compliment because it transmits the full flavour of liberation: it has
assisted a number of our most gifted fellow humans in thinking
previously impossible thoughts."
