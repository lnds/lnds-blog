---
title: "Esos Raros Lenguajes Nuevos"
authors: [admin]
date: 2016-01-09T08:25:11-03:00
slug: "esos-raros-lenguajes-nuevos"
draft: false
tags: ['programación', 'lenguajes de programación', 'desafíos']
image:
  placement: 3
---

> Si me gustan las canciones de amor\
> y me gustan esos raros peinados nuevos,\
> ya no quiero criticar,\
> sólo quiero ser un enfermero.\
> -- Charly García

Siempre me pregunté qué quería decir Charly con eso de "sólo quiero
ser un enfermero" (una frase de la canción ["Esos raros peinados nuevos](//www.youtube.com/watch?v=qYo8e8AIW10)"). 
Resulta que hay una anécdota interesante al respecto.

> Cuenta la historia que una vez Charly vio como un tipo estaba
> aspirando cocaína de forma exagerada. Le advierte que pare, que va a
> terminar del otro lado, y el tipo siguió como si nada. Era cantado que
> estaba a punto de caer en la Sobredosis. Pues no, le agarró un ataque
> de epilepsia, que junto a la dureza de la mandíbula por los saques que
> se había dado, hacía imposible enderezársela. Charly le dio unas
> buenas trompadas hasta que le rompió la mandíbula, le enderezó la
> lengua y le salvó la vida. Ese es el origen del Enfermero. Tiempo
> después, Charly sería el actor secundario de la Película "Lo Que
> Vendrá", por la cual fue premiado por la crítica de Nueva York al
> mejor actor secundario. Su papel, era el del enfermero

(Fuente: [Raros Peinados Nuevos](//charlygarciaelautor.blogspot.cl/2008/05/raros-peinados-nuevos.html),
tomado del blog [Charly, Autor](//charlygarciaelautor.blogspot.cl/))

Si algo tiene Charly García es que en su momento supo muy bien re
inventarse y adoptar nuevos estilos de música. En los ochenta superó la
etapa esa en que se "fue con los hippies, tuvo un amor y también mucho
más", con gran éxito.

Es lo que hay que hacer, creo yo, seguir haciendo algo nuevo.

> Y si trabajás al pedo\
> y estás haciendo algo nuevo, adelante.\
> -- Charly García

Pero no les quiero hablar de Charly, aunque sería muy interesante,
dadas las muchas anécdotas de este personaje. No, de lo que quiero
hablar es de esos "raros lenguajes nuevos".

Estos son los mejores tiempos para ser desarrollador, pero también son
los peores tiempos para ser desarrollador. Como dice Jano González,
parece que tenemos un nuevo paradigma: "Hacker News Driven
Development".

Todas las semanas, o quizás todos los días aparecen nuevos Frameworks,
Lenguajes de Programación, Tecnologías en Hacker News y las nuevas
generaciones de desarrolladores, afectadas por el síndrome de déficit
atencional corren a re implementar su último proyecto con la herramienta
que tenga más likes.

Pero, como dice Charly:

> ya no quiero criticar,\
> sólo quiero ser un enfermero

Así que me propongo aliviar un poco esa angustia de algunos
desarrolladores que nos saben si vale la pena aprender alguno de esos
nuevos lenguajes que están apareciendo o re apareciendo por todos
lados.

Voy a asumir el siguiente desafío, voy a resolver 9 desafíos de
programación en 9 lenguajes de
programación.s

La idea es explorar nuevos lenguajes y lenguajes que no son tan nuevos,
pero que han reaparecido en el paisaje tecnológico.

La lista de lenguajes que voy a explorar son:

- Clojure
- Erlang
- F\#
- Go
- Haskell
- Kotlin
- Rust
- Scala
- Swift

Voy a escribir 9 artículos, en cada uno haré una reseña de uno de los
lenguajes  y luego voy a describir el desafío con mis observaciones
sobre la experiencia de implementarlo en cada
lenguaje. 

Este es un proyecto largo, puede que tome varios meses, porque depende
del tiempo que tenga disponible y no pretendo resolver desafíos
sencillos.

La idea es crear desafíos que permitan destacar las bondades de algunos
lenguajes y que sean prácticos, que muestren situaciones similares a
problemas que uno enfrenta en el "mundo sreal". 

> Si lo que te gusta es gritar,\
> desenchufa el cable del parlante.\
> El silencio tiene acción,\
> el mas cuerdo es el más delirante.

Existe un libro llamado [7 languages in 7 weeks](//pragprog.com/book/btlang/seven-languages-in-seven-weeks), que me pareció insatisfactorio. Mi idea es más ambiciosa en alcance.

Si todo sale bien, puede que recopile todo en un libro (sería genial
publicarlo en inglés, pero ahí necesito apoyo de algún amable lector). 

El primer desafío ya fue completado y estoy trabajando en el segundo.
Así que atentos al siguiente post, porque ahí empezará esta
serie.

Para los curiosos, este proyecto ya está en Github en este
repositorio: <https://github.com/lnds/9d9l/> donde
pueden revisar el código.

## Nota para cerrar

¿Por qué estos lenguajes en particular? ¿Consideré otros lenguajes?

Inicialmente tenía ganas sólo de revisar Go y Rust, dos interesantes
lenguajes nuevos que han ganado bastante popularidad. Fue entonces que
topé con el libro mencionado arriba (7 languages in 7 weeks) y decidí
ampliar el desafío.

Tengo un especial interés por los lenguajes basados en la JVM, puesto
que investigarlos puede ser útil para mi trabajo, eso me llevó a incluir
Scala, Clojure y Kotlin (consideré Ceylon, pero en mi opinión tiene muy
poca aceptación entre los desarrolladores).

La programación funcional es un paradigma que capta mucho mi interés,
Clojure es un buen lenguaje funcional, pero es bueno considerar otros,
así fue cuando incluí F\#, un lenguaje desarrollador por Microsoft, pero
que por fortuna es OpenSource y puede correr en Linux y Mac usando Mono.
Y si vamos a estudiar programación funcional es importante que les
muestre Haskell.

Trabajo principalmente en un Mac, así que debía incluir a Swift. Con eso
son 8 lenguajes. Pero la curiosidad, el hecho de que al ser usado por
Whatsapp se haya popularizado en el último tiempo y que haya inspirado a
Scala para el modelo de actores y a lenguajes como Go y Rust en el uso
de canales, me llevó a incluir al venerable Erlang en la lista.

Ahí están los nueve: Go, Rust, Scala, Clojure, Kotlin, F\#, Haskell,
Swift y Erlang.

Otros lenguajes que consideré:

- **Elixir**, construido sobre la VM de Erlang es un lenguaje que busca
aprovechar esta VM con una sintaxis más sencilla que la de Erlang.

- **D**, es un lenguaje que conozco hace años, pero que nunca he tenido
la oportunidad de explorar en profundidad, pero creo que Rust llegará a
ocupar una mejor posición en el nicho de la programación de sistemas.

- **Ceylon**, un lenguaje de VM que al igual que Scala y Kotlin
pretende superar a Java en términos de simplicidad de programación y
escalabilidad. Sospecho que fuera de Redhat no mucha gente lo usa. No lo
vemos aparecer en rankings como
[TIOBE](//www.tiobe.com/index.php/content/paperinfo/tpci/index.html) o
[RedMonks](//redmonk.com/sogrady/2015/07/01/language-rankings-6-15/).
Creo que la popularidad de las herramientas de
[Jetbrains](//www.jetbrains.com/) va a dar más impulso  a Kotlin
(sobretodo entre los programadores de Android).

- **ES6**, Javascript es quizás el lenguaje más importante en la
actualidad, junto con Java. Puedes hacer de todo con JavaScript y sería
interesante estudiar las nuevas características que trae Ecma Script 6,
otra cosa que no tiene mi lista de lenguajes es soporte para Prototipos,
que es la característica más interesante de Javascript desde el punto de
vista de la programación orientrada a objetos. Sin embargo, sospecho que
algunos de los problemas que pretendo resolver pueden ser bastante
complicados de configurar en un ambiente basado en Javascript (quizás
estoy equivocado, así que si algún lector se alienta a seguir mis
desafíos e implementarlos en ES6 sería interesante)

- **Python (3.5)**, es uno de mis lenguajes favoritos, pero la idea es
privilegiar lenguajes emergentes o poco conocidos

- **Objective C**, creo que con Swift
basta.]{style="letter-spacing: 0.01rem; line-height: 1.5;"}.

- **Ruby**, jamás.

- **PHP**, menos.

¿Qué lenguajes considerarían ustedes? Si quieren pueden sumarse a este
proyecto aportando soluciones en otros lenguajes.
