---
title: "Fake it till you make it"
authors: [admin]
subtitle: "(O como construir un lenguaje en 60 horas)"
date: 2017-03-01T08:25:11-03:00
slug: "fake-it-till-you-make-it"
aliases: [/blog/lnds/2017/3/1/fake-it-till-you-make-it]
draft: false
tags: ['programación', 'ogú', 'compiladores', 'programación funcional', 'clojure']
image:
  placement: 3
---


Aunque la frase en inglés, 
["fake it \'til you make it",](//en.wikipedia.org/wiki/Fake_it_'til_you_make_it) se usa como un
término asociado con la autoayuda, voy a hacer una interpretación más
literal de para explicar lo que acabo de hacer.

Hace unos 5 año atrás declaré en este blog mis intenciones de construir
un nuevo lenguaje de programación. De hecho el repositorio Github del
mismo tiene más tiempo. 

Llamé a este lenguaje Ogú, como referencia al personaje creado por
[Themo Lobos](//es.wikipedia.org/wiki/Themo_Lobos), el simpático
cavernícola amigo de Mampato. También les
[conté](/blog/lnds/2012/07/25/gracias-themo) cómo conocí a la
hija del ilustrador para conseguir permiso para usar una imagen de Ogú
como mascota del proyecto. 

Pasaron los meses, los años, algunos amigos me echaban bromas, y el
proyecto parecía no avanzar. Diseñar un lenguaje de programación es
complejo, pero además este en particular es bastante ambicioso y para
serles franco, no tenía idea de lo que estaba haciendo.

El diseño sufrió varios cambios, entre medio aprendí mucho más de
programación funcional y fui aumentando mi visión crítica hacia la
programación orientada al objeto. Por años probé diversas herramientas
para poder construir el lenguaje, simplifiqué el diseño, fue perdiendo
su sabor orientado al objeto y volviéndose más  un lenguaje funcional,
porque es el paradigma que me parece más poderoso para este
tiempo.

A fines del año pasado que decidí que durante los meses de noviembre a
marzo intentaría un nuevo asalto para lograr sacar una primera versión
de Ogú.

Pero no lograba avanzar. Llegaba enero y apenas tenía un compilador que
timidamente podía generar código para algunas expresiones simples y
escribir un simple "hello world" en la consola.

Hay varias razones por la que este proyecto no puede pasar de marzo,
simplemente después no tendré el tiempo suficiente ni la dedicación para
sacarlo adelante y no quiro que pase otro año sin avanzar. Además le
prometí a Themo que Ogú, el lenguaje de programación, sería una
herramiente de enseñanza, y es una promesa que quiero cumplir. Así que
para mi es importante tener una primera versión de Ogú que pueda ser
usable, y espero que con ayuda de más personas el lenguaje pueda
evolucionar para poder ser una herramienta de enseñanza y de
programación útil.

Así que en enero estaba empezando a desesperarme hasta que tuve una
epifanía.

Un día estaba tratando de depurar la gramática y la generación del
código y decidí escribir código para visualizar el
[AST](//en.wikipedia.org/wiki/Abstract_syntax_tree) generado por el
compilador para poder entender cómo operaban las expresiones en Ogú y
resolver algunas ambiguedades. La forma de representar el AST más común
es como listas. Por ejemplo, la expresión:

>      funcion a + 5

Se representa así en el AST:

>      (funcion (+ a 5))

Esto es parece mucho a
[LISP](//en.wikipedia.org/wiki/Lisp_(programming_language)). La razón es
porque LISP tiene la sintaxis que tiene debido a que los desarrolladores
de ese lenguaje eran tan vagos que se dieron cuenta que podían pedirle a
los programadores que escribieran el AST por ellos y así no tenían que
desarrollar un front-en para su compilador, y simplemente construyeron
el backend del AST (para que nadie sospechara del ardid le cambiaron el
nombre al AST y le pusieron
[S-Expression](//en.wikipedia.org/wiki/S-expression)).

Luego pensé, "si puedo convertir mi gramática a S-Expressions, entonces
voy hacer lo mismo que hicieron los creadores de LISP, pero al revés!".
Constuiré un front-end que convierta un programe en Ogú en un programa
en LISP y dejaré que el backend de LISP ejecute los programas.

Por otro lado, un requerimiento inicial de Ogú es que corra en la JVM,
esto porque pienso usar su ecosistema y además puedo de este modo llegar
a dominar el mundo del desarrollo enterprise desplazando a Java y Scala.

Una vez que tracé mi plan maestro, al que llamé *"fake it \'til you
make it"*, usé el mejor interprete de LISP que existe para la JVM (y el
único que conozco), [Clojure](//clojure.org/), para contruir mi
compilador e interprete más una biblioteca runtime inicial (la de
Clojure, por supuesto).

En menos de 60 horas de trabajo distribuidas en unos 2 meses pude
construir la primera versión de Ogú: Plunke, en honor al científico loco
creador de Ferrilo el Autómata, otro personaje de Themo Lobos.

{{<figure caption="El Profesor Plunke y Ferrilo (creaciones de Themo Lobos" src="https://d2dspjyoh5c79p.cloudfront.net/112a6430-fee7-11e6-9412-c975315961a6-aa9f18b7">}}

Así que ahí tienen, en este nuevo mundo de *fake news*, tengo mi propio
*fake programming language*, pero uno  bastante entretenido y que me
permite experimentar con varias ideas que tengo.

Esta es la versión 0.1 de Ogú, hay mucho que recorrer, esta versión
sacrifica algunas cosas. Por ejemplo, es un lenguaje dinámico, la
propuesta inicial era contar con verificación estática de tipos, pero
creo que es algo que hay que validar, quizás la solución es algo
intermedio y puede que por ahí existan algunos aportes de Ogú a los
lenguajes de programación. Hay conceptos que llevan en mi mente varios
años, que también espero plasmar en
Ogú.

Pero la construcción de lenguaje de programación, con la ambición de Ogú
no es tarea para afrontarla sólo. Esta etapa "fake" del lenguaje debe
ser superada. El compilador tiene que vivir por si mismo, hay que
construir bibliotecas de funciones, crear compiladores para otros
runtime (.Net por ejemplo, o Javascript), quizás crear un compilador
para código nativo. Construir frameworks para que el lenguaje sea útil y
usado por muchos programadores.

Para eso necesito ayuda. Por ahora necesito que bajen el compilador, lo
prueben, escriban programas en Ogú y me reporten errores en
[GitHub](//github.com/lnds/Ogu). Y me ayuden a crear documentación en
español e inglés. Soy ambicioso con este proyecto, me gustaría que
saliera en Hacker News, y que GitHub indexara programas escritos en Ogú.
Pero para eso, insisto, necesito ayuda. Si les entusiasma, contáctense
conmigo, clonen el proyecto y hagan Pull Request en GitHub.

Ogú se encuentra en GitHub en esta dirección
[https://github.com/lnds/Ogu](//github.com/lnds/Ogu), hay un sitio web
que también requiere trabajo en:
[http://www.ogu-lang.org/](//github.com/lnds/Ogu)

¿Y cómo es programar en Ogú?

Acá van algunos ejemplos:

**Hola mundo:**

     println! "hola mundo"

Resolver [el problema 1 del proyecto
Euler](//projecteuler.net/problem=1):

     union [3, 6..999] [5, 10..<1000] |> sum |> println!

Calcular el factorial:

     fact 0 = 1
     fact 1 = 1
     fact n = n * fact (n - 1)

Quicksort

     quicksort [x & xs] = smallerSorted ++ [x] ++ biggerSorted
      where
        smallerSorted = quicksort [a | a <- xs & a <= x]
        biggerSorted = quicksort [a | a <- xs & a > x]

El juego de Toque y Fama

    def ingresar tam = prompt! #"Ingresa una secuencia de ${tam} dígitos distintos (o escribe salir):"def famas num xs = zip num xs |> filter \x -> first x == second x |> countdef toques num xs = num |> filter \x -> (elem x xs)  |> countdef validar n xs = if (length num) == n then num else []
        where num = xs |> filter is-digit?  |> map to-digit  |> uniqlet tam = 5let sec = shuffle [0..9] |> take tamprintln! $ fmt "Bienvenido a Toque y Fama.
    ==========================\n\n
    En este juego debes tratar de adivinar una secuencia de ${tam} dígitos generadas por el programa.\n
    Para esto ingresas ${tam} dígitos distintos con el fin de adivinar la secuencia.\n
    Si has adivinado correctamente la posición de un dígito se produce una Fama.\n
    Si has adivinado uno de los dígitos de la secuencia, pero en una posición distinta se trata de un Toque.\n\nEjemplo: Si la secuencia es : [8, 0, 6, 1, 3] e ingresas  40863, entonces en pantalla aparecerá:\n
    tu ingresaste [4, 0, 8, 6, 3]\n
    resultado: 2 Toques 2 Famas\n\n\n"loop intentos = 1, accion = ingresar tam in
         if accion == "salir" || empty? accion then
            println! "\ngracias por jugar, adios."
         else
            let num = validar tam accion in 
                if empty? num then 
                begin
                   println! "error!\n"
                   repeat inc intentos, ingresar tam
                end
                else 
                begin
                   println! "tu ingresaste " num
                   let (toques, famas) = (toques num sec, famas num sec) in 
                   begin         
                      println! "resultado: "  (toques - famas)  " Toques "  famas  "Famas"
                      if famas == tam then
                         println! "Ganaste! Acertaste al intento "   intentos  "! La secuencia era "  sec
                      else
                         repeat inc intentos, ingresar tam
                   end
                end


Ogú tiene mucha influencia de Haskell, Clojure por supuesto, F\#, Elixir
y Pascal (por los begin end ;).

Voy a estar escribiendo sobre Ogú en las próximas semanas y por supuesto
resolveré los desafíos en Ogú también. Así que estén atentos y espero
sus comentarios y aportes.
