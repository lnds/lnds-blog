---
title: "Julia: a myth come true?"
authors: [admin]
date: 2018-04-01T08:25:11-03:00
slug: "julia-a-myth-come-true"
draft: false
tags: ['julia', 'programming languages', 'programming', 'guest villain']
image:
  placement: 3
---

Julia is one of those unexpected arrivals on the programming language
scene that is worth exploring. That's why this time I've called in a
"guest villain" to show us what it's all about. Camilo Chacón
([\@cchaconsartori](https://twitter.com/cchaconsartori)) has been kind
enough to write this article about the Julia language exclusively for La
Naturaleza del Software. Enjoy.

# Julia: a myth come true?

by Camilo Chacón

![](https://d2dspjyoh5c79p.cloudfront.net/ae33fa07-35fd-11e8-a030-2b5831f8ecb5-aa9f18b7)


Those of us who have spent years developing in different programming
languages know the common belief that a language as dynamic and flexible
as Python, and at the same time as fast and efficient as C++, is very
unlikely to exist. But what if that were just a myth?

Julia makes a pretty bold promise: **Looks like Python, feels like
Lisp, runs like Fortran**.


And since I'm a bit of a skeptic, I wanted to put it into practice to
see whether this is for real. Below we'll go over Julia's main features,
along with benchmarks against C++1x, one of the main languages for
high-performance programming.


## Introduction to Julia

Julia is a dynamic language, but unlike others such as Python it was
designed with efficiency in mind. Its main focus is scientific
computing, which means it was designed for mathematical operations;
typically that refers to computing intensive numerical
calculations (matrices, tensors, etc). Everything related to linear
algebra operations comes built into Julia in a natural way; one field of
major interest would be machine learning.


And of course, if a language promises efficiency it has to be tested in
parallel environments. Julia was designed to work in those environments,
where parallelism is needed by default to get the most out of every cpu
core.

## Basic features

Julia is a JIT (just in time)\[6\] language, which lets it compile at
run time, and it uses LLVM\[7\] as its compilation platform. This allows
Julia to be dynamic without **excessive resource consumption**, unlike
typical interpreted languages.

### Variables

Julia uses type inference to declare variables (you can also assign the
data type explicitly, which in some cases improves efficiency), for
example:

```julia
    julia> x = 10
    10
    julia> y::Int64 = 10
    10
```

Now let's look at data types that are interesting for mathematical
operations: rational numbers (in fraction form) and complex numbers (with
their real and imaginary parts).

```julia
    julia> a = -2//5
    -2//5
    julia> typeof(a)
    Rational{Int64}
    julia> b = 2.0 + 5im
    2.0 + 5.0im
    julia> typeof(b)
    Complex{Float64}
```

The `im` is added at the end of a number to indicate that it is a
complex number.

The following image shows Julia's numeric type system, with its
corresponding hierarchies; we'll come back to this later in the **type
system** section.

![](https://d2dspjyoh5c79p.cloudfront.net/ffb54d78-35fd-11e8-a030-2b5831f8ecb5-aa9f18b7)

### Multidimensional arrays

A notable feature of Julia is how it handles multidimensional
structures. Inspired by languages like Matlab and R, operating on those
structures is very simple.

```julia
    julia> a = ones(5, 5)
    5×5 Array{Float64,2}:
     1.0  1.0  1.0  1.0  1.0
     1.0  1.0  1.0  1.0  1.0
     1.0  1.0  1.0  1.0  1.0
     1.0  1.0  1.0  1.0  1.0
     1.0  1.0  1.0  1.0  1.0
    julia> 5a
    5×5 Array{Float64,2}:
     5.0  5.0  5.0  5.0  5.0
     5.0  5.0  5.0  5.0  5.0
     5.0  5.0  5.0  5.0  5.0
     5.0  5.0  5.0  5.0  5.0
     5.0  5.0  5.0  5.0  5.0
    julia> 5a + 1
    5×5 Array{Float64,2}:
     6.0  6.0  6.0  6.0  6.0
     6.0  6.0  6.0  6.0  6.0
     6.0  6.0  6.0  6.0  6.0
     6.0  6.0  6.0  6.0  6.0
     6.0  6.0  6.0  6.0  6.0
```

Something interesting is that if you put a number in front of a
variable, it gets multiplied; in the previous example it would be the
same as writing 5\*a. This makes it very easy to write equations (as
we'll see in the functions section).

Just like in Matlab, in Julia you can switch from a column vector to a
row vector very simply with the \`\'\` character at the end of the
variable.

```julia
    julia> v = [1,2,3,4,5]
    5-element Array{Int64,1}:
     1
     2
     3
     4
     5
    julia> v'
    1×5 RowVector{Int64,Array{Int64,1}}:
     1  2  3  4  5
```

For Python programmers, list comprehensions bring a lot of simplicity
and flexibility (if not overused) to programs, and they are built into
Julia as well.

```julia
    julia> a = [1,2,3,4]
    4-element Array{Int64,1}:
     1
     2
     3
     4
    julia> [e+1 for e in a if e % 2 == 0] * 4
    2-element Array{Int64,1}:
     12
     20
```

### Functions

Functions are a big topic in Julia. Unlike Python, indentation is
neither necessary nor mandatory; instead every code block has a closing
**end** clause. For example, let's look at a simple function:

```julia
    julia> function max_number(a::Int64, b::Int64)
               if(a > b)
                 println("a es $a, por lo tanto es mayor.")
               elseif(b > a)
                   println("b es $b, por lo tanto es mayor.")
               else
                   println("a y b son iguales")
               end
           end
    max_number (generic function with 1 method)
    julia> max_number(10, 5)
    a es 10, por lo tanto es mayor.
```

As you can see in the code above, the function we created,
**max\_number**, has its arguments with explicitly declared data types,
which is possible in Julia. Another detail is string interpolation,
similar to what happens in php \[8\], to include the value of a variable
inside a string by putting the \`\$\` symbol before the variable name.


It's also possible to create one-line functions in a very clean way.

```julia
    julia> f(x) = x^2
    f (generic function with 1 method)
    julia> f(10)
    100
```

Another example of flexibility in function declaration is that we can
declare a return of multiple elements:

```julia
    julia> function multi_op(a, b)
                   a * b, a / b, a % b, a ^ b
           end
    multi_op (generic function with 1 method)
    julia> multi_op(2, 3)
    (6, 0.6666666666666666, 2, 8)
```

In the **multi\_op** function the last expression \`a \* b, a / b, a % b,
a \^ b\` is a tuple with 4 elements, and it is the inferred value the
function returns (with no need to write return), similar to how
**Scala** handles return values.


Julia lets you pass functions as arguments to another
function (higher-order functions)\[9\] as in languages like Python and
Haskell, and every function in Julia is defined as generic by default.

```julia
    julia> sum_number(n) = n > 1 ? sum(n-1) + n : n
    sum_number (generic function with 1 method)
    julia> function test_sum(f, num)
              println(f(num))  
           end
    test_sum (generic function with 1 method)
    julia> test_sum(sum_number, 10)
    19
```

Something typical of functional languages is the **map** and
**filter** operations, and they are very simple to use in Julia:

```julia
    julia> a = [1,2,3,4,5]
    5-element Array{Int64,1}:
     1
     2
     3
     4
     5
    julia> map(x -> x * 1.0, a)
    5-element Array{Float64,1}:
     1.0
     2.0
     3.0
     4.0
     5.0
    julia> filter(x -> x % 2 == 0, a)
    2-element Array{Int64,1}:
     2
     4
```

It's worth pointing out that the functions that are part of Julia and
manipulate data structures are ***immutable***, so in the case of
*filter* and *map*, if you want to modify the elements you have to add
the ! symbol at the end of each function. For example:

```julia
    julia> filter!(x -> x % 2 == 0, a)
    2-element Array{Int64,1}:
     2
     4
     julia> a
    2-element Array{Int64,1}:
     2
     4
```

### Multiple dispatch

Julia has a quality that sets it apart from languages like C, Python
and Java (which are single dispatch \[10\]): it has what is called
**multiple dispatch** \[11\], something similar to what we know as
**overloaded methods** in object-oriented languages, but in Julia they
have a different kind of implementation and purpose.


This lets you define a function with the same name but with different
data types in the arguments (or a different number of them). Nothing new
so far, but Julia lets you call a function from multiple places without
needing a **receiver**, which in other languages refers to the instance
of an object, for example *obj\_inst.method()*, which means that once
*method()* is called and executed the reference goes back to the
instance *obj\_inst*. This doesn't happen in Julia, since it has what is
known as a **vtable**, a virtual table that contains a list of functions
with the same name, which get added as each new function is defined.
Let's look at an example:

```julia
    julia> f(x) = x * 2
    f (generic function with 1 method)
    julia> f(x, y) = x + y
    f (generic function with 2 methods)
    julia> methods(f)
    # 2 methods for generic function "f":
    f(x) in Main at REPL[7]:1
    f(x, y) in Main at REPL[2]:1
    julia> f(10)
    20
    julia> f(10, 5)
    15
```

The virtual table for \`f\` has two values with different arguments:


\`f(x)\` and \`f(x, y)\`


Every function has an associated table with the argument alternatives
that function has, which are chosen at run time, without needing
something like a **class instance type** to hold the methods associated
with it. The ***methods*** function lets us see the list of arguments of
a function.


Another language that has **multiple dispatch** is Lisp\[2\].


## Metaprogramming

### Expressions

The ability to define expressions is a feature that gives Julia a lot
of power. For example, if we define an expression *(1 + 3 \* 5)*, in
Julia we have to put the \`:\` sign in front so that it is assigned as an
expression (type \`Expr\`) and not executed:

```julia
    julia> a = :(1 + 3 * 5)
    :(1 + 3 * 5)
    julia> typeof(a)
    Expr
    julia> dump(a)
    Expr
      head: Symbol call
      args: Array{Any}((3,))
        1: Symbol +
        2: Int64 1
        3: Expr
          head: Symbol call
          args: Array{Any}((3,))
            1: Symbol *
            2: Int64 3
            3: Int64 5
          typ: Any
      typ: Any
    julia> eval(a)
    16
```

As you can see in the code above, the \`eval\` function is used to
evaluate that expression (similar to what javascript has). Another way to
define an expression is to use a string as the argument of the
\`parse\` function:

```julia
    julia> e = parse("if(10 > 0)
                       println(10)
                      else
                       println(0)
                      end")
    :(if 10 > 0 # none, line 2:
            println(10)
        else  # none, line 4:
            println(0)
        end)
    julia> eval(e)
    10
```

This feature could let you create **domain-specific languages** inside
Julia much more simply than in other languages, given the support for
**metaprogramming** and the \`Expr\` data type, which would allow
creating new kinds of expressions inside Julia.

### Macros

Macros are something very powerful in Julia, and unlike functions,
which take values as input, macros take ***expressions***.

Macros are defined with an \`@\` before the name. Let's look at some of
the macros that come with Julia by default; first we'll define a
\`factorial\` function, and then use different macros to get information
about it.

```julia
    julia> factorial(n::Int64) = n > 0 ? factorial(n-1) * n : 1
    factorial (generic function with 1 method)
    julia> @timev factorial(20) #Información del tiempo de ejecución.
      0.000007 seconds (5 allocations: 176 bytes)
    elapsed time (ns): 6653
    bytes allocated:   176
    pool allocs:       5
    2432902008176640000
    julia> @which factorial(20) #Estructura de la función.
    factorial(n::Int64) in Main at REPL[32]:1
    julia> @code_native factorial(20) #Código nativo generado.
        .section    __TEXT,__text,regular,pure_instructions
    Filename: REPL[32]
       pushq   %rbp
        movq    %rsp, %rbp
      pushq   %rbx
        pushq   %rax
        movq    %rdi, %rbx
    Source line: 1
        testq   %rbx, %rbx
      jle L41
     leaq    -1(%rbx), %rdi
      movabsq $factorial, %rax
        callq   *%rax
       imulq   %rbx, %rax
      addq    $8, %rsp
        popq    %rbx
        popq    %rbp
        retq
    L41:
        movl    $1, %eax
        addq    $8, %rsp
        popq    %rbx
        popq    %rbp
        retq
        nopw    %cs:(%rax,%rax)
    julia> @code_llvm 1+1 #Código LLVM generado.
    define i64 @"jlsys_+_60880"(i64, i64) #0 !dbg !5 {
    top:
      %2 = add i64 %1, %0
      ret i64 %2
    }
```

The \`\@code\_native\` and \`\@code\_llvm\` macros are very useful if
you want to optimize the code and have control over what Julia is
generating\[1\]. The first one lets you see the native code that the
Julia code generates, and the second one the code that LLVM is
generating.


Julia also lets you create new custom macros. Suppose we want to create
the \`\@special\_print\` macro, which does nothing more than take an
expression and print \`begin\` before executing it and \`end\` when it
finishes. The expression is defined inside a \`quote\` block, which lets
you define multi-line expressions:

```julia
    julia> macro special_print(ex)
             return quote
               println("begin")
               local val = $ex
               println("\nend")
               val
             end
           end
    @special_print (macro with 1 method)
    julia> @special_print(println("lnds"))
    begin
    lnds
    end
```

A visual representation of this macro:

![](https://d2dspjyoh5c79p.cloudfront.net/c40a3a59-35fe-11e8-a030-2b5831f8ecb5-aa9f18b7)

This, just as we mentioned in the previous section on expressions,
gives Julia great flexibility. It uses the concept of
**homoiconicity** \[3\] to make macros possible, which basically means
that a block of code also represents a data structure built from the
language's own primitive data types, that is, the ***ability to extend
the language itself***.

## Advanced features

### Parallelism


One of Julia's strengths is handling parallelism in distributed
environments. Like Erlang, Dart, and Elixir, Julia uses a
message-passing pattern between processes\[5\], which can be local or
remote.


In Julia these processes are called **workers**, and you can start
that environment just by opening the REPL, \`julia -p n\`, where n is
the number of workers to create. These workers are independent
processes (not threads), so memory is not shared. Usually this \`n\`
refers to the number of cpu cores you want to use.


Each worker communicates and runs over the TCP protocol locally. To run
Julia on a **cluster**, you use the following command, \`julia
\--machinefile machines test.jl\`, where \`\--machinefile machines\` is
the file that contains the names of the distributed computers (nodes),
and \`test.jl\` is the script that performs the calculation.

To write parallel loops in Julia you use the \`\@parallel\` macro
before the for, and \`(+)\`, which refers to a reduction.


In the following example we create a one-dimensional column vector
with \`5x10\^10\` elements and two functions that accumulate the data
with simple mathematical operations, one in parallel and the other not.
For this we'll use a server with the following specs:


    Architecture:          x86_64
    CPU op-mode(s):        32-bit, 64-bit
    Byte Order:            Little Endian
    CPU(s):                16
    On-line CPU(s) list:   0-15
    Thread(s) per core:    1
    Core(s) per socket:    16
    Socket(s):             1
    NUMA node(s):          1
    Vendor ID:             GenuineIntel
    CPU family:            6
    Model:                 79
    Model name:            Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz
    Stepping:              1
    CPU MHz:               2294.687
    BogoMIPS:              4589.37
    Hypervisor vendor:     Microsoft
    Virtualization type:   full
    L1d cache:             32K
    L1i cache:             32K
    L2 cache:              256K
    L3 cache:              51200K
    NUMA node0 CPU(s):     0-15


We'll use the \`BenchmarkTools\` package, which benchmarks a function
through the \`\@btime\` macro, running it several times and averaging
the execution time (which makes the benchmark more precise).


```julia
    using BenchmarkTools, Compat
    function getdata(mode)
       if mode == "parallel"
           data = SharedArray{Float64, 1}(5000000000)
          @parallel for i in 1:length(data)
                data[i] = i / 10.0
         end
        elseif mode == "no-parallel"
            data = Array{Float64, 1}(5000000000)
            for i in 1:length(data)
                data[i] = i / 10.0
            end
        end
        data
    end
    function parallel(data)
        acum =  @parallel (+) for i = 1:length(data)
            data[i] +  2 * sqrt(i) / 10.0
        end
    end
    function no_parallel(data)
        acum::Float64 = 0.0
        for i = 1:length(data)
           acum = acum + data[i] + 2 * sqrt(i) / 10.0
        end
    end
    data = getdata(ARGS[1])
    if ARGS[1] == "parallel"
        @btime parallel(data)
    elseif ARGS[1] == "no-parallel"
        @btime no_parallel(data)
    end
```

The results of the benchmark between the \`parallel(data)\` and
\`no\_parallel(data)\` functions show what you'd expect: the parallel
version is faster. It's also worth noting that in the case of the
\`getdata(mode)\` function the parallel version is far superior in
execution time, because it uses a \`SharedArray\` data structure
designed to work in an environment of multiple processes with shared
memory, as is the case here. The results:

```julia
    cc@vm-app3:~/test_julia$ julia -p 16 --optimize=3 --compile=yes --precompiled=yes test.jl parallel
     1.573 s (2398 allocations: 194.28 KiB)
    cc@vm-app3:~/test_julia$ julia --optimize=3 --compile=yes --precompiled=yes test.jl no-parallel
      2.454 s (0 allocations: 0 bytes)
```

### Type system


After seeing some of Julia's features, we can appreciate that the type
system is very important; it gives us quite a bit of flexibility when
programming.

To encapsulate variables there are \`struct\`s, which let us add type
constraints at the moment the object is created:

```julia
    julia> struct Test
                      x::Int
                      y::Int
                      z::Int
                  end
    julia> t = Test(1, 2, 3)
    Test(1, 2, 3)
    julia> t = Test(1, 2, 3.5) #Se intenta ingresar un valor Float.
    ERROR: InexactError()
    Stacktrace:
     [1] convert(::Type{Int64}, ::Float64) at ./float.jl:679
     [2] Test(::Int64, ::Int64, ::Float64) at ./REPL[134]:2
    julia> t = Test(1, 2, "hi") #Se intenta ingresar un valor String.
    ERROR: MethodError: Cannot `convert` an object of type String to an object of type Int64
    This may have arisen from a call to the constructor Int64(...),
    since type constructors fall back to convert methods.
    Stacktrace:
     [1] Test(::Int64, ::Int64, ::String) at ./REPL[134]:2
```

As you can see in the previous example, the compiler complains when you
try to violate a type constraint.


Another interesting detail is that you can get the information about
the attributes of a \`struct\` with the \`fieldnames\` function:

```julia
    julia> t = Test(1, 2, 3)
    Test(1, 2, 3)
    julia> fieldnames(t)
    3-element Array{Symbol,1}:
     :x
     :y
     :z
    julia> t.x
    1
    julia> t.y
    2
    julia> t.z
    3
```

You can also define a \`struct\` with **parametric composite types**,
something probably similar to what is known as **generic
programming**:

```julia
    julia> struct Pair{T}
                      p1::T
                      p2::T
                  end
    julia> Pair(1,2)
    Pair{Int64}(1, 2)
    julia> Pair(1,2.0)
    ERROR: MethodError: no method matching Pair(::Int64, ::Float64)
    Closest candidates are:
      Pair(::T, ::T) where T at REPL[154]:2
```

A \`struct\` can have multiple parametric types:

```julia
    julia> struct Pair2{T, T2}
                      p1::T
                      p2::T2
                  end
    julia> Pair2(1, "hi")
    Pair2{Int64,String}(1, "hi")
```

Now, to create a constraint from a subtype, you can create an
\`abstract type\` to define a new type, \`abstract type
Point{T\<:Real, T2\<:Real} end\`, where the \`\<:\` symbol means \`T
is a subtype of Real\`, so any structure that implements \`Point\` can
only be initialized with values that are a subtype of \`Real\`, for
example:

```julia
    julia> abstract type Point{T<:Real, T2<:Real} end
    julia> struct Pair{T, T2} <: Point{T, T2}
                   x::T
                   y::T2
           end
    julia> Int <: Real
    true
    julia> Pair(1, 2)
    Pair{Int64,Int64}(1, 2)
    julia> Pair("hi", 2)
    ERROR: TypeError: Point: in T, expected T<:Real, got Type{String}
    Stacktrace:
     [1] Pair(::String, ::Int64) at ./REPL[4]:2
```

In the code above an error occurs when trying to create a \`Pair\`
object with a variable of type \`String\`, since \`String \<: Real\` is
false, because \`String\` is not a subtype of \`Real\`.


## Benchmark - Julia vs C++1x

### Matrix multiplication

In the following benchmark (performance test) we'll multiply two
\`2000x2000\` matrices containing \`Int64\` values. This is a typical
example for checking computing speed across different languages; we
won't use external libraries.

### Single core

-   In C++ we'll use \`gcc 4.6\` with compile-time
    optimization (\`-O3\`).\
-   In Julia we'll use version 0.6.2 of the language.\


### C++


Compilation:


    - `g++  -std=c++11 -O3 -o mult_matrix mult_matrix.cpp`
    - `time ./mult_matrix`


```c++
    //Archivo: mult_matrix.cpp
    #include <iostream>
    #include <vector>
    using namespace std;
    int main(){
        int const size = 2000;
        vector<vector<int>> matrix1(size, vector<int>(size));
        vector<vector<int>> matrix2(size, vector<int>(size));
        vector<vector<int>> matrix3(size, vector<int>(size));
        for (int i = 0; i < size; i++)
        {
           for (int j = 0; j < size; j++)
           {
                matrix1[i][j] = i+j;
                matrix2[i][j] = i-j;
           }
        }
        for (int i = 0; i < size; i++)
        {
           for (int j = 0; j < size; j++)
           {
              matrix3[i][j] = 0;
              for (int k = 0; k < size; k++)
               matrix3[i][j] += matrix1[i][k] * matrix2[k][j];
           }
        }
    }
```

### Julia

Compilation:


    - `time julia mult_matrix.jl`

```julia
    #Archivo mult_matrix.jl
    function calculation(size::Int64)
        matrix1 = zeros(Int, size, size)
        matrix2 = zeros(Int, size, size)
        matrix3 = zeros(Int, size, size)
        for i in 1:size
         @inbounds for j in 1:size
                matrix1[i,j] = i+j
                matrix2[i,j] = i-j
           end
        end
        for i in 1:size
            for j in 1:size
                matrix3[i,j] = 0
                @inbounds for k in 1:size
                    matrix3[i,j] += matrix1[i,k] * matrix2[k,j]
                end
            end
        end
    end
    calculation(2000)
```

One interesting thing about the Julia code is that by using the
\`\@inbounds\` macro we're telling the compiler not to perform bounds
checks on the array indices, so the generated assembly code is
smaller (you can check this with the \`\@code\_native\` macro); clearly
it has to be used with care. On the other hand, the \`zeros(:type,
:row\_dim, :col\_dim)\` function lets us create a matrix with a specific
data type and size.


### Results

    | Language          |Time (seconds)  |
    | ----------------- |:--------------:|
    | C++/gcc 4.6         |33.252             | 
    | Julia 0.6.2       |16.059           | 

![](https://d2dspjyoh5c79p.cloudfront.net/8a56d88b-35ff-11e8-a030-2b5831f8ecb5-aa9f18b7)

### Multiple cores


For this we'll use C++ with OpenMP (a library for shared-memory
parallelism)\[4\] and, as in the previous test, Julia 0.6.2. The test
server is the same one we mentioned earlier in the ***parallelism***
section, an Intel(R) Xeon(R) server with 16 cpu cores.

### C++


Compilation:


    - `g++ -fopenmp -std=c++11 -O3 -o mult_matrix_parallel mult_matrix_parallel.cpp`


```c++
    //Archivo: mult_matrix_parallel.cpp
    #include <iostream>
    #include <vector>
    using namespace std;
    int main(){
       int const size = 2000;
      vector<vector<long>> Mat1(size, vector<long>(size));
      vector<vector<long>> Mat2(size, vector<long>(size));
      vector<vector<long>> Mat3(size, vector<long>(size));
      #pragma omp parallel
        {
           #pragma omp for
         for (int i = 0; i < size; i++)
           {
               for (int j = 0; j < size; j++)
              {
                    Mat1[i][j] = (i+j)+2;
                   Mat2[i][j] = (i-j)+2;
              }
            }
           #pragma omp for
         for (int i = 0; i < size; i++)
           {
              for (int j = 0; j < size; j++)
               {
                  Mat3[i][j] = 0;
                 for (int k = 0; k < size; k++)
                     Mat3[i][j] += Mat1[i][k] * Mat2[k][j];
             }
            }
       }
    }
```

### Julia


Compilation:


    - `julia -p 16 -O3 mult_matrix_parallel.jl`

```julia
    #//Archivo: mult_matrix_parallel.jl
    using BenchmarkTools, Compat
    function calculation(size::Int64)
        matrix1 = SharedArray{Int, 2}(size, size)
       matrix2 = SharedArray{Int, 2}(size, size)
       matrix3 = SharedArray{Int, 2}(size, size)
       @sync @parallel for i in 1:size
         @inbounds for j in 1:size
               matrix1[i,j] = i+j
              matrix2[i,j] = i-j
          end
     end
     @sync @parallel for i in 1:size
        for j in 1:size
              matrix3[i,j] = 0
                @inbounds for k in 1:size
                   matrix3[i,j] += matrix1[i,k] * matrix2[k,j]
             end
         end
     end
    end
    size = 2000
    @btime calculation(size)
```

Something important to mention about the Julia code above is that the
\`\@sync\` macro is added before \`\@parallel\` to force it to wait
until all the parallel computation finishes before moving on to the
next block.

### Results

    | Language          |Time (seconds)  |
    | ----------------- |:--------------:|
    | C++/openmp/gcc 4.6|3.600        | 
    | Julia 0.6         |5.938           | 

![](https://d2dspjyoh5c79p.cloudfront.net/d1ed1bfc-35ff-11e8-a030-2b5831f8ecb5-aa9f18b7)

C++ and OpenMP beat Julia in this test; still, *it's surprising that
the difference isn't that big*.

**Note:** In the C++/OpenMP case there is probably a way to make the
code more efficient.


## Conclusion

Julia is an interesting proposition for everything related to data
science, and even though it's new (it hasn't reached version 1.0 yet),
its performance compared to C++ is still surprising. That said, C++ is a
language for systems development (low level and high performance), and
Julia isn't aiming to compete in that area, but rather in everything
related to data analysis.


To wrap up, here are some advantages and disadvantages I found in the
language:


### Advantages

-   It has the advantages of a dynamic language with the computing speed
    of a compiled language.
-   An interesting type system and metaprogramming.
-   It includes facilities for handling mathematical operations, which
    makes for easy adoption by **data scientists**, without
    sacrificing computing speed.


### Disadvantages


-   Compared to C++ it uses more ram, almost double in some cases. This
    could be a problem if you want to use Julia in embedded
    systems (I didn't verify this empirically).
-   The community is still small compared to established languages like
    Python. This may be only a temporary disadvantage.
-   The package installation system is not yet as robust as others,
    such as \`pip\` and \`npm\`.


References
-----------


\[1\]: [Julia: High Performance Programming. Ivo Balbaert, Avik Sengupta, Malcolm Sherrington](https://www.amazon.com/Julia-Performance-Programming-Ivo-Balbaert-ebook/dp/B01MXS4IPT)

\[2\]: [Mastering Julia](https://www.amazon.com/Mastering-Julia-Contemporary-Challenges-Programming-ebook/dp/B010T266RY/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1521246511&sr=1-1&keywords=mastering+julia).
Malcolm Sherrington.


\[3\]: [https://es.wikipedia.org/wiki/Homoiconicidad](https://es.wikipedia.org/wiki/Homoiconicidad)


\[4\]: [What is OpenMP?](https://www.dartmouth.edu/~rc/classes/intro_openmp)


\[5\]: [https://docs.julialang.org/en/stable/manual/parallel-computing](https://docs.julialang.org/en/stable/manual/parallel-computing)


\[6\]: [https://es.wikipedia.org/wiki/M%C3%A9todo\_justo\_a\_tiempo](https://es.wikipedia.org/wiki/M%C3%A9todo_justo_a_tiempo) 


\[7\]: [https://es.wikipedia.org/wiki/LLVM](https://es.wikipedia.org/wiki/LLVM) 

\[8\]: [http://php.net/manual/es/language.types.string.php](http://php.net/manual/es/language.types.string.php)


\[9\]: [https://es.wikipedia.org/wiki/Funci%C3%B3n\_de\_orden\_superior](https://es.wikipedia.org/wiki/Funci%C3%B3n_de_orden_superior)


\[10\]: [https://en.wikipedia.org/wiki/Dynamic\_dispatch\#Single\_and\_multiple\_dispatch](https://en.wikipedia.org/wiki/Dynamic_dispatch#Single_and_multiple_dispatch) 

\[11\]: [https://en.wikipedia.org/wiki/Multiple\_dispatch](https://en.wikipedia.org/wiki/Multiple_dispatch) 
