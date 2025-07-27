---
title: "Julia: ¿Un mito hecho realidad?"
authors: [admin]
date: 2018-04-01T08:25:11-03:00
slug: "julia-un-mito-hecho-realidad"
aliases: [/blog/lnds/2018/4/1/julia-un-mito-hecho-realidad]
draft: false
tags: ['julia', 'lenguajes de programación', 'programación', 'villano invitado']
image:
  placement: 3
---

Julia es una de esas apariciones inesperadas en el panorama de los
lenguajes de programación que vale la pena explorar. Es por esto que
esta vez he recurrido a un "villano invitado" para que nos muestre de
qué se trata. Camilo Chacón
([\@cchaconsartori](https://twitter.com/cchaconsartori)) ha tenido la
gentileza de escribir este artículo en exclusiva para La Naturaleza del
Software sobre el lenguaje Julia, que lo disfruten.

# Julia: ¿Un mito hecho realidad?

por Camilo Chacón

![](https://d2dspjyoh5c79p.cloudfront.net/ae33fa07-35fd-11e8-a030-2b5831f8ecb5-aa9f18b7)


Para los que llevamos varios años desarrollando con diferentes lenguajes
de programación, sabemos que existe la creencia de que es muy poco
probable que exista un lenguaje dinámico y flexible como Python, y a la
vez rápido y eficiente como C++. ¿Pero sí quizás esto fuera solo un
mito?

Julia promete algo bastante desafiante **Looks like Python, feels like
Lisp, runs like Fortran** (Se ve como Python, se siente como Lisp, y
funciona como Fortran).


Y como soy algo incrédulo quise llevarlo a la práctica para comprobar si
esto es real. A continuación conoceremos las características principales
de Julia junto a benchmarks contra C++1x, que es unos de los principales
lenguajes para programación de alto rendimiento.


## Introducción a Julia

Julia es un lenguaje dinámico pero que fue diseñado con la eficiencia en
mente a diferencia de otros como Python. Su enfoque principal es la
computación científica, esto significa que fue diseñado para operaciones
matemáticas, típicamente se refiere a computar operaciones intensivas de
cálculo numérico(matrices, tensores, etc). Todo lo referente a trabajar
con operaciones de álgebra lineal en Julia viene integrado de manera
natural, un campo de principal interés seria Machine learning.


Y claro, si un lenguaje promete eficiencia debe ser probado en entornos
con paralelismo, Julia fue diseñado para trabajar sobre dichos entornos
donde por defecto se necesita de paralelismo, para sacar el mayor
provecho a todos los núcleos del cpu.

## Características básicas

Julia es un lenguaje JIT(just in time)\[6\] que le permite compilar en
tiempo de ejecución, utiliza LLVM\[7\] como plataforma de compilación.
Esto le permite a Julia ser dinámico sin tener **un consumo excesivo de
recursos** como los típicos lenguajes interpretados.

### Variables

Julia utiliza inferencia de tipos para declarar variables(también se
puede asignar el tipo de dato de manera explicita, en algunos casos esto
mejora la eficiencia), por ejemplo:

```julia
    julia> x = 10
    10
    julia> y::Int64 = 10
    10
```

Ahora veamos tipos de datos que son interesante para operaciones
matemáticas, números racionales(forma de fracción) y complejos(con su
parte real e imaginaria).

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

El `im` se le agrega al final de un número para indicar que se trata
de un número complejo.

En la siguiente imagen se aprecia el sistema de tipo numéricos de Julia,
con sus jerarquías correspondiente, esto lo veremos más adelante en la
sección **sistema de tipos**.

![](https://d2dspjyoh5c79p.cloudfront.net/ffb54d78-35fd-11e8-a030-2b5831f8ecb5-aa9f18b7)

### Arreglos de múltiples dimensiones

Una característica destacable de Julia es su manejo con estructuras de
múltiples dimensiones, inspirado en lenguajes como Matlab y R es muy
simple operar sobre dichas estructuras.

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

Algo interesante es que si se antepone un número antes de una variable,
se multiplica, según el ejemplo anterior seria lo mismo que escribir
5\*a. Esto permite realizar ecuaciones de manera muy fácil(como veremos
en la sección de funciones).

Al igual que con Matlab, en Julia se puede cambiar desde un vector
columna a vector fila de manera muy simple con el carácter \`\'\` al
final de la variable.

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

Para los programadores de Python la compresión de listas es algo que
entrega mucha simpleza y flexibilidad(sino se utiliza en exceso) en los
programas, igual está incorporado en Julia.

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

### Funciones

Las funciones son un gran tema en Julia. A diferencia de Python no es
necesario ni obligatorio la indentación, sino más bien todos los bloques
de código tienen una clausula de cierre **end**. Por ejemplo veamos una
simple función a continuación:

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

Como se puede ver en el código superior, la función creada
**max\_number** tiene los argumentos con los tipos de datos declarados
de manera explicita, lo cual es posible en Julia. Otro detalle es la
interpolación en los string, algo similar ocurre en php \[8\] para
incluir el valor de una variable dentro de un string anteponiendo el
símbolo \`\$\` antes del nombre de variable.


También es posible crear funciones en una sola linea de manera muy
limpia.

```julia
    julia> f(x) = x^2
    f (generic function with 1 method)
    julia> f(10)
    100
```

Otro ejemplo de flexibilidad en la declaración de funciones, es cuando
podemos declarar un retorno de múltiples elementos:

```julia
    julia> function multi_op(a, b)
                   a * b, a / b, a % b, a ^ b
           end
    multi_op (generic function with 1 method)
    julia> multi_op(2, 3)
    (6, 0.6666666666666666, 2, 8)
```

En la función **multi\_op** la última expresión \`a \* b, a / b, a % b,
a \^ b\` es una tupla con 4 elementos, y es valor inferido que retorna
la función(sin necesidad de escribir el return), algo similar a como
maneja **Scala** los valores de retorno.


Julia permite pasar funciones como argumento de otra función(funciones
de orden superior)\[9\] como en lenguajes como Python y Haskell, además
cada función en Julia es definida como genérica por defecto.

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

Algo típico en lenguajes funcionales son las operaciones **map **y
**filter**, estas son muy simple de utilizar en Julia:

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

Cabe señalar que las funciones que son parte de Julia y manipulan
estructuras de datos son ***inmutables***, entonces para el caso de
*filter* y *map* si se quiere modificar los elementos se debe agregar el
símbolo ! al final de cada función. Por ejemplo:

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

### Multiple Dispatch

Julia tiene una cualidad que lo diferencia de lenguaje como C, Python y
Java(que son single dispatch \[10\]), y es que tiene lo que se llama
**multiple dispatch **\[11\] algo similar a lo que conocemos como
**métodos sobrecargados** en lenguajes orientados a objetos, pero en
Julia tienen otro tipo de implementación y objetivo.


Esto permite definir una función con un mismo nombre pero con diferente
tipos de datos en los argumentos(o cantidad), hasta aquí nada nuevo,
pero Julia permite llamar una función desde múltiples lugares sin
necesidad de tener un **solicitante** que en otros lenguajes se refiere
a la instancia de un objeto, ejemplo *obj\_inst.method()* esto provoca
que una vez se llame y se ejecute el *method()* vuelve la referencia a
la instancia *obj\_inst*, esto en Julia no sucede, dado que posee lo que
se conoce como **vtable**, una tabla virtual que contiene una lista de
funciones con el mismo nombre, que se van añadiendo a medida se define
una nueva función, veamos un ejemplo:

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

La tabla virtual de \`f\` tiene dos valores con diferentes argumentos:


\`f(x)\` y \`f(x, y)\`


Cada función tiene una tabla asociada con las alternativas de argumentos
que tiene dicha función, que se van eligiendo en tiempo de ejecución,
sin necesidad de tener algo como un **tipo de instancia de clase** para
mantener los métodos asociados a ella. La función ***methods*** nos
permite conocer la lista de argumentos de una función.


Otro lenguaje que tiene **multiple dispatch** es Lisp\[2\].


## Meta-programación

### Expresiones

La capacidad de definir expresiones es una característica que le da un
gran poder a Julia. Por ejemplo si definimos una expresión *(1 + 3 \*
5)*, con Julia debemos anteponer el signo \`:\` para que se asigne como
expresión(tipo \`Expr\`) y no la ejecute:

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

Como se puede apreciar en el código superior se utiliza la función
\`eval\` para evaluar dicha expresión(algo similar a lo que tiene
javascript). Otra forma de definir una expresión es utilizando un string
como argumento de la función \`parse\`:

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

Esta característica podría permitir crear **lenguajes de dominio
especifico** dentro de Julia de una manera mucho más simple que con
otros lenguajes, dado el soporte a **meta-programación** y al tener los
tipo de datos \`Expr\` que permitiría crear nuevos tipos de expresiones
dentro de Julia.

### Macros

Las macros son algo muy poderoso que tiene Julia, y a diferencia de las
funciones que utilizan valores como datos de entrada, las macros usan
***expresiones***.

Las macros se define con una \`@\` previo al nombre, veamos algunas
macros que vienen por defecto en Julia, primero definiremos una función
\`factorial\`, y ocuparemos distintas macros para obtener información de
la misma.

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

Las macros \`\@code\_native\` y \`\@code\_llvm\` son muy útiles en caso
de querer optimizar el código y tener control sobre lo que Julia esta
generando\[1\]. La primera permite visualizar el código nativo que
genera el código de Julia, y la segunda el código que LLVM esta
generando.


Julia también permite crear nuevas macros personalizadas, supongamos que
queremos crear la macro \`\@special\_print\` que lo único que hace es
recibir una expresión y antes de ejecutarla imprime \`begin\` y en el
termino \`end\`, la expresión está definida dentro de un bloque
\`quote\`, este bloque permite definir expresiones en multiples lineas:

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

Una representación visual de esta macro:

![](https://d2dspjyoh5c79p.cloudfront.net/c40a3a59-35fe-11e8-a030-2b5831f8ecb5-aa9f18b7)

Esto al igual como mencionamos en el apartado anterior de expresiones,
da una gran flexibilidad de Julia, donde utiliza el concepto de
**Homoiconicidad** \[3\] para poder utilizar macros, trata básicamente
que un bloque de código también representa una estructura de datos con
tipos de datos primarios del lenguaje en si mismo, o sea la ***habilidad
de extender el propio lenguaje***.

## Características Avanzadas

### Paralelismo


Julia tiene como fortaleza manejar paralelismo en entornos distribuidos.
Al igual que lenguajes como Erlang, Dart, y Elixir, Julia usa un patrón
de mensajería entre procesos\[5\], los cuales puede ser locales o
remotos.


En Julia estos procesos son llamados **workers** y se pueden iniciar con
dicho entorno solo abriendo la REPL, \`julia -p n\` donde n es número de
workers a crear. Estos workers son procesos independientes(no thread),
por lo cual la memoria no es compartida. Generalmente este \`n\` hace
referencia a los números de núcleos del cpu que quieres utilizar.


Cada workers se comunica y se ejecuta a través del protocolo TCP a nivel
local. Para ejecutar Julia en un **cluster**, se debe hacer utilizar el
siguiente comando \`julia \--machinefile machines test.jl\` donde
\`\--machinefile machines\` es el archivo que contiene los nombres de
los computadores distribuidos(nodos), y \`test.jl\` es el script que
realiza el cálculo.

Para hacer ciclos paralelos en Julia se debe utilizar el macro
\`\@parallel\` antes del for, y \`(+)\` que hace referencia a una
reducción.


En el siguiente ejemplo se crea un vector columna de una dimensión, con
\`5x10\^10\` elementos donde existen dos funciones, las cuales
acumularan los datos en simples operaciones matemáticas, una en paralelo
y la otra no. Para esto ocuparemos un servidor con las siguientes
características:


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


Utilizaremos el package \`BenchmarkTools\`, que sirve para hacer
benchmark sobre una función utilizando la macro \`\@btime\`,
ejecutándola varias veces y sacando el promedio del tiempo de
ejecución(esto hace más preciso el benchmark).


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

Resultados del bechmark entre la función \`parallel(data)\` y
\`no\_parallel(data)\`, demuestra lo esperado que la versión paralela
sea más rápida, también cabe señalar que en el caso de la función
\`getdata(mode)\` la versión paralela es muy superior en tiempo de
ejecución, esto porque usa una estructura de dato \`SharedArray\`
diseñada para trabajar en entorno de múltiples procesos de memoria
compartida, como sucede en este caso. Los resultados:

```julia
    cc@vm-app3:~/test_julia$ julia -p 16 --optimize=3 --compile=yes --precompiled=yes test.jl parallel
     1.573 s (2398 allocations: 194.28 KiB)
    cc@vm-app3:~/test_julia$ julia --optimize=3 --compile=yes --precompiled=yes test.jl no-parallel
      2.454 s (0 allocations: 0 bytes)
```

### Sistema de Tipos


Después de ver algunas características de Julia, podemos apreciar que el
sistema de tipo es muy relevante, nos permite bastante flexibilidad al
momento de programar.

Para encapsular variables existen las \`struct\`, las cuales nos da la
posibilidad de agregar restricciones de tipos al momento de crear el
objeto:

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

Como se puede apreciar en el ejemplo anterior, el compilador reclama
cuando se intenta violar una restricción de tipo.


Otro dato interesante es que se pueda obtener la información de los
atributos de una \`struct\` con la función \`fieldnames\`:

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

También se puede definir una \`struct\` con **tipos compuestos
paramétrico**, algo probablemente similar a lo que se conoce como
**programación genérica**:

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

Una \`struct\` puede tener múltiples tipos paramétrico:

```julia
    julia> struct Pair2{T, T2}
                      p1::T
                      p2::T2
                  end
    julia> Pair2(1, "hi")
    Pair2{Int64,String}(1, "hi")
```

Ahora para crear una restricción desde un sub-tipo, se puede crear un
\`abstract type\` para definir un nuevo tipo \`abstract type
Point{T\<:Real, T2\<:Real} end\` donde el símbolo \`\<:\` significa \`T
es sub-tipo de Real\`, entonces cualquier estructura que implemente
\`Point\` podrá solo inicializarse con valores que sea sub-tipo de
\`Real\`, por ejemplo:

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

En el código superior ocurre un error al intentar crear un objeto
\`Pair\` con una variable del tipo \`String\`, dado que \`String \<:
Real\` es falso, porque \`String\` no es sub-tipo de \`Real\`.


## Benchmark - Julia vs C++1x

### Multiplicación de Matrices

El siguiente benchmark(prueba de rendimiento) multiplicaremos dos
matrices de \`2000x2000\` que contienen valores \`Ìnt64\`, este es un
ejemplo típico para comprobar la velocidad de computo entre diferentes
lenguajes, no utilizaremos bibliotecas externas.

### Un nucleo

-   En C++ usaremos \`gcc 4.6\` con optimización en la
    compilación(\`-O3\`).\
-   En Julia usaremos la versión 0.6.2 del lenguaje.\


### C++


Compilación:


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

Compilación:


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

Algunas cosas interesante del código de Julia es que utilizando la macro
\`\@inbounds\` le decíamos al compilador que no realice comprobaciones
en el indices de los arreglos, por ende el código assembly generado es
menor(esto lo puedes comprobar con la macro \`\@code\_native\`),
claramente se debe utilizar con cuidado. Por otra parte la función
\`zeros(:type, :row\_dim, :col\_dim)\`, nos permite crear una matriz con
un tipo de dato especifico y con el tamaño de la misma.


### Resultados

    | Lenguaje          |Tiempo(segundos)|
    | ----------------- |:--------------:|
    | C++/gcc 4.6         |33.252             | 
    | Julia 0.6.2       |16.059           | 

![](https://d2dspjyoh5c79p.cloudfront.net/8a56d88b-35ff-11e8-a030-2b5831f8ecb5-aa9f18b7)

### Multiples núcleos


Para esto, usaremos C++ con OpenMP(una biblioteca para paralelismo de
memoria compartida)\[4\] y al igual que la prueba anterior Julia 0.6.2,
el servidor de prueba es el mismo que mencionamos previamente en la
sección de ***paralelismo***, un servidor Intel(R) Xeon(R) de 16 núcleos
cpu.

### C++


Compilación:


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


Compilación:


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

Algo importante a mencionar del código superior de Julia, es que se
agrega la macro \`\@sync\` previo al \`\@parallel\` para obligar a
esperar que se termine todo el computo en paralelo para continuar al
siguiente bloque.

### Resultados

    | Lenguaje          |Tiempo(segundos)|
    | ----------------- |:--------------:|
    | C++/openmp/gcc 4.6|3.600        | 
    | Julia 0.6         |5.938           | 

![](https://d2dspjyoh5c79p.cloudfront.net/d1ed1bfc-35ff-11e8-a030-2b5831f8ecb5-aa9f18b7)

C++ y OpenMP superan a Julia en esta prueba, ahora, *no deja de ser
sorprendente que la diferencia no es tan grande*.

**Nota:** En el caso de C++/OpenMP probablemente exista una manera de
hacer más eficiente el código.


## Conclusión

Julia representa una interesante propuesta para todo lo referente a
ciencia de datos, y a pesar de que es nuevo(aún no esta en su versión
1.0), no deja de sorprender el rendimiento comparado a C++. A pesar de
eso, C++ es un lenguaje para el desarrollo de sistemas(bajo nivel y de
alto rendimiento), y Julia no esta enfocado en competir en esa área,
sino más bien en todo lo referente al análisis de datos.


Para terminar, dejo algunas ventajas y desventajas que encontré del
lenguaje:


### Ventajas

-   Posee las ventajas de un lenguaje dinámico con la velocidad de
    computo de un lenguaje compilado.
-   Interesante sistema de tipos y meta-programación.
-   Incorpora facilidades para manejar operaciones matemáticas, lo cual
    permite una fácil adopción para **científicos de datos**, sin
    sacrificar la velocidad de computo.


### Desventajas


-   Comparado a C++ ocupa más ram, casi el doble en algunos casos. Esto
    podría ser un problema si se quiere utilizar Julia en sistemas
    embebidos(empíricamente no lo comprobé).
-   La comunidad es aún pequeña si le compara a lenguajes ya
    establecidos como Python. Esto podria ser solo una desventaja
    temporal.
-   El sistema de instalación de paquetes aún no es robusto como otros,
    tales como \`pip\` y \`npm\`.


Referencias
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
