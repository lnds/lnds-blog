---
title: "Simplexifying"
authors: [admin]
date: 2011-12-20T08:25:11-03:00
slug: "simplexifying"
tags: ['compilers', 'ogú', 'languages']
draft: false
---

One of the advantages of publishing Ogu at this stage is that it lets me
test my design against readers and potential users. I've
received comments on the blog and in private that have allowed me to
enrich it and pin down some problems in the syntax.

The main problem lies in the ambiguity of declarations: until now
the grammar allowed the optional use of the reserved
words \'def\', \'var\' and \'val\'.

So the following declaration

> x := 1

was equivalent to this one:

> val x := 1

and forced the use of var for mutable variables:

> var x:= 1

Function declarations, on the other hand, looked like this

> factorial : Int -\> Int

factorial 0 = 1

factorial n = n \* factorial (n-1)

The problem is that one of Ogu's features is that
functions are *first class*, so the following declaration

> f : Int -\> Int

is ambiguous: it can be the immutable variable f of function type Int-\>Int,
or the function f. The current grammar requires that this
declaration be immediately followed by an expression that is the
definition of the function's body, which forces the use of var or val if
we want f to be a variable that will hold a function.

Given this, I've decided to make the following changes:

-   var, val and def are mandatory when declaring variables or functions.

-   when inferring types the colon is optional.

-   The words class and trait, which were optional, are now also
    mandatory, and a class definition must be preceded by the
    reserved word def

-   The consequence of this is that classes can now start with a
    lowercase letter (which simplifies a problem I had with the java runtime
    and packages)

With these considerations, the examples from the first article in this series
look like this:

> **val** blog = "La naturaleza del software" // blog is of type String

**val** ogú = Cavernícola(nombre: "ogú") // ogú is of type Cavernícola

**val** x, y := 1, 2 // x and y are of type Int, note that the \':\' is
optional

Functions are defined this way:

> **def** factorial : Int --\> Int

**def** factorial 0 = 1

**def** factorial n = n \* factorial (n-1)

The abbreviated form is:

> **def** factorial : (n:Int)--\> Int  =*\*if  \**(n == 0) 1 *\*else \**
> n \* factorial(n-1)

The interesting thing is that with this change it can also be written
as follows:

> **def** factorial 0 = 1

**def** factorial n = n \* factorial (n-1)

Pushing type inference even further.

This change makes it possible to disambiguate the following declaration

> **val** f : Int -\> Int

Allowing the following:

> f = factorial

Classes are now declared like this:

> **def** Persona : **class** (nombre: String, edadInicial: Int) ={

*\*       var*\* \_edad = edadInicial

*\*      def*\* saludar : () = println "hola " + nombre

*\*       def*\* celebrarCumpleaños : () = { \_edad = \_edad + 1\
println "¡¡ feliz cumpleaños " + nombre + "!!"\
} }

The examples from the previous article also need to be rewritten:

> **def** Stack{T}  : **class** () = {

*\*      var*\* \_data : \[T\] = \[\]

*\*     def*\* push : (x:T) = \_data = x :: \_data

*\*     def*\* pop : ()-\>(r:T) = { r = head \_data\
\_data = tail \_data\
} }

Interfaces in Ogu are called traits, following the Scala
tradition:

> **def** Figura : **trait** = {

*\*      def*\* area : ()-\>Int *\*       def*\* perimetro : () --\> Int
}

**def** Circulo : **class** (radio:Int) \~ Figura = {

*\*         def*\* area = pi \* radio \^ 2

*\*         def*\* perimetro = 2 \* pi \* radio

}

**def** Cuadrado : **class** (lado:Int) \~ Figura ={

*\*         def*\* area = lado\*lado

*\*         def*\* perimetro = lado\*4

}

This also makes it clearer that area and perimetro are functions and not
variables.

This exercise made me realize I was falling into the very vice
I meant to avoid, the vice of *simplexification*.  In my eagerness
to save a few reserved words I was turning Ogu into a language
with a syntax that would end up obscure and intimidating, one that
would force you to think hard to parse an expression. These changes are
in the direction of simplicity, without losing the syntactic minimalism
I hope Ogu will have.
