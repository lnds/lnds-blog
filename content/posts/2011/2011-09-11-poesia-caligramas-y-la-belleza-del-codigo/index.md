---
title: "Poesía, Caligramas y la Belleza del Código"
authors: [admin]
date: 2011-09-11T08:25:11-03:00
slug: "poesia-caligramas-y-la-belleza-del-codigo"
aliases: [/blog/2011/09/poesia-caligrama-y-la-belleza-del-codigo.html]
tags: ["poesía", "arte", "programación", "programar", "estética"]
draft: false
image:
  placement: 3
---

La lectura de un párrafo de texto  requiere un recorrido lineal de
izquierda a derecha. Esto debido a la conformación de nuestro sistema de
escritura, si estuvieramos en el oriente medio el sentido sería el
contrario, de derecha a izquierda. La lectura es lineal, en una
dimensión. A diferencia de la comunicación oral, por ejemplo, que tiene
2 ó quizás más dimensiones. Al conversar no sólo usamos el habla, está
el lenguaje corporal, los gestos que acompañan nuestra expresión, la
respuesta límbica, etc.

¿Cuantas dimensiones tiene el código de un programa?

Escribir un programa no es lo mismo que escribir prosa, se parece más  a
la poesía, sobretodo esa poesía experimental que hace uso de recursos
visuales para añadir más expresión, como este
[caligrama](https://es.wikipedia.org/wiki/Caligrama) de
[Apollinaire](https://es.wikipedia.org/wiki/Guillaume_Apollinaire):

{{<figure caption="Caligrama de Apollinare" src="Guillaume_Apollinaire_Calligramme.jpg">}}

Nuestro gran poeta [Vicente Huidobro](https://es.wikipedia.org/wiki/Vicente_Huidobro) incursionó
también en esto de los caligramas, este es el primero que elaboró,
el [triángulo armónico](https://upload.wikimedia.org/wikipedia/commons/6/6d/Triangulo_armonico.svg):

{{<figure caption="Triángulo armónico de Vicente Huidobro" src="triangulo_armonico.png">}}

Aparte de la poesía visual, Apollinaire proclamaba las virtudes de la
escritura automática, y si hay algo que aspiran muchos ingenieros de
software es lograr la programación automática, pero ahí está el límite,
porque lo que puede funcionar para la poesía, parece un imposible en el
desarrollo de software.

## Estilo y Claridad

El estilo del código está dictado por el lenguaje de programación, pero
está en el programador la habilidad de expresarse adecuadamente.

Consideren este fragmento en Haskell:

```haskell
qsort (p:xs) = qsort [x | x<-xs, x<p] ++ [p] ++ qsort [x | x<-xs, x>=p]
```

Comparado con este:

```haskell
quicksort (p:xs) = (quicksort lesser) ++ [p] ++ (quicksort greater)
    where
        lesser  = filter (< p) xs
        greater = filter (>= p) xs
```

El mismo algoritmo, expresado de formas distintas, la primera forma es
totalmente lineal. La segunda está más en el espíritu de los caligramas,
y por cierto es más claro.

Lamentablemente muchos programadores con un ego enorme, y con ganas de
demostrar su profundo conocimiento de los intrincados trucos y técnicas
de su código prefieren escribir cosas como el primer fragmento (esto es
un pecado de juventud que también he cometido, y después lamentado).

[Kernighan y Pike](https://cm.bell-labs.com/cm/cs/tpop/index.html) explican que la
práctica de la programación requiere **Simplicidad, Claridad y
Generalidad**.

El estilo tiene que ver con la claridad. Eso significa que nuestro
código debe expresar con la mayor nitidez posible nuestra intención. El
código no sólo debe ser claro, yo creo que también debe tener estilo, o
como algunos dicen, **belleza**.

La belleza en el código es analizada en profundidad en el
libro [Beautiful Code: Leading Programmers Explain How They Think](https://www.amazon.com/gp/product/0596510047/ref=as_li_tf_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=217145&creative=399377&creativeASIN=0596510047)![](https://www.assoc-amazon.com/e/ir?t=lanaturaledel-20&l=as2&o=1&a=0596510047&camp=217145&creative=399377),
de Andy Oram y Greg Wilson.

No puedo dejar de mencionar a Dijkstra:

> "Programming should be like mathematics, and that beauty is the
> business of mathematics."

"La programación debería ser como las matemáticas, y la belleza es el
negocio de las matemáticas."

El sentido estético está integrado dentro de la circuitería de nuestro
cerebro, por eso que el llamado a escribir código bello  no es una
solicitud irracional, al contrario. Muchos de los hallazgos científicos
han sido guiados por un sentido estético.

Hay gente que se opone a esto, un argumento  famoso  es  
[Code Isn\'t Beautiful](https://www.codinghorror.com/blog/2008/02/code-isnt-beautiful.html),
de Jeff Atwood, el blogger creador de StackOverflow. Atwood critica el
libro  de Oram y Wilson. La esencia de  su argumento es la siguiente:

> *"Las ideas son bellas. Los algoritmos son bellos. Las ideas y
> algoritmos bien ejecutados son aún más bellos. Pero el código en si
> mismo no es bello.  La belleza del código reside en la arquitectura,
> las ideas, los grandes algoritmos y estrategias que representa el
> código. Los ejemplos de código presentados son, en efecto, claros,
> legibles y bien escritos. Pero son una débil evidencia de belleza, no
> es el lenguaje el que es inherentemente bello.*
>
> *Las coplas de bar expresadas en Frances o Ruso nunca son elevadas
automáticamente al nivel de la poesía. Así que cuando los autores de
"Beautiful Code"  ofrecen páginas de código, código real en producción
y nos piden ver su belleza no ayuda. Es un obstáculo.
_Ha pasado largo tiempo desde que encontré que_
>
>     *dst++ = *src++*
>
> *era algo hermoso.*\
> _Enfocarse en el código es exactamente la aproximación incorrecta.
> Es como una detallada descripción técnica de las pinturas, pinceles, y
> técnicas usadas para pintar la Mona Lisa, sin nada del contexto
> histórico o artístico que la hace un cuadro importante."  _

No deja de causarme gracia la cita al ejemplo de la Mona Lisa,
considerando [lo que hemos discutido sobre ese tema](/blog/2011/07/razonamiento-circular.html).

Para defender el argumento de que la belleza es importante los invito a
reflexionar sobre todo lo que he escrito en el último tiempo, con
respecto a los [problemas de la razón](/blog/2011/08/el-problema-con-la-razon.html) y
el pensamiento racional y de sentido común. Atwood presenta un argumento
de sentido común, y principalmente racional e idealista, platónico, el
código no es hermoso, las ideas sí lo son. Es el resultado de su
formación técnica seguramente, y muchos ingenieros caen en este tipo de
razonamiento.

Voy a tomar prestado parte  del [argumento Maarten Van Emden](https://vanemden.wordpress.com/2010/10/05/in-defense-of-beautiful-code-2/),
autor de [A Programmer\'s Place](https://vanemden.wordpress.com/), uno de
mis blogs favoritos, para defender la necesidad de la belleza en el
código.

Atwood compara el código con la pintura (los tintes) de un cuadro. Si
sólo miras los tintes de Los Lirios de Van Gogh y no el cuadro, entonces
no experimentarás su belleza. Similarmente si sólo vez el código, y no
lo que está detrás, entonces no verás su belleza.

{{<figure  caption="Los Lirios  de Van Gogh, pintados en 1889, cuando se internó voluntariamente  el hospital mental de Saint-Rémy" src="VanGoghIrises.jpg">}}

Pero hay una diferencia, porque mucha  gente tienen la capacidad innata
para apreciar la belleza de Los Lirios de Van Gogh, pero no tiene la
capacidad para apreciar un texto. El texto requiere trabajo, el texto se
debe trabajar en mayor o menor medida. Si Van Gogh hubiera hablado o
escrito sobre la idea de Los Lirios es muy improbable que hubieramos
apreciado su belleza.

La belleza tiene que estar encarnada, y en el caso de la pintura la
belleza se encarna en las pinturas y el lienzo. La pintura (los tintes)
se interponen si los miras de la forma incorrecta. Es lo que pasa con
los autores de Beautiful Code, si sólo hablaran de la idea, del
algoritmo no sería suficiente. Se necesita el código, de la misma manera
que se requiere del lienzo y la pintura.

Se dice que cuando fue consultado por el significado de su pintura,
Picasso respondió *"Señora, si pudiera contárselo sería escritor, pero
resulta que soy pintor."* La pintura se nos presenta como algo que
debemos apreciar, o no. Ves un cuadro y decides si te gusta o no, tómalo
o déjalo.

En el  texto escrito la cosa es distinta. Para el caso del código el
autor es un escritor, así que debe trabajar para que su código sea
apreciado, y para lograr esa apreciación es importante la claridad, y
por tanto el estilo, este es el fenómeno de la belleza en el código.

A continuación voy a citar uno de los ejemplos de Van Endem, donde se
muestra este efecto de la importancia en la belleza del código.

Consideren el problema de invertir el segmento de un arreglo a\[p..q\].
El trabajo consiste en escribir la función:

```c
    void rev(int a[], int p, int q);
```

Vamos a asumir que existe la función swap definida así:

```c
    void swap(int a[], int i, int j) {
      int temp = a[i]; a[i] = a[j]; a[j] = temp;
    }
```

Para invertir un segmento de arreglo, se intercambia cada elemento de la
mitad izquierda del segmento con la imagen espejo de la mitad derecha,
por ejemplo así:

```c
    void rev(int a[], int p, int q) {
      for(int i = (p+q)/2; i >= p; i--)
         swap(a, i, q-(i-p));
    }
```

Ante este código no podemos dejar de preguntarnos si es correcto
inicializar la variable i con el valor (p+q)/2, ¿que pasa con segmentos
de largo par, o impar? ¿no debería introducir otra variable para ahorrar
ese cálculo en la llamada a la función swap?

Comparemos esa versión con esta:

```c
    void rev(int a[], int p, int q) {
      for(; p<q; p++,q--)
         swap(a, p, q);
    }
```

¡Ah! es innegable la elegancia de esta solución, pero, ¿qué me dicen de
esta?:

```c
    void rev(int a[], int p, int q) {
      while(p<q)
          swap(a, p++, q--);
    }
```

¿No es acaso mejor?, incluso más que eso, ¿no aprecian la belleza de
esta última versión? ¿Su elegancia y claridad?

Las definiciones de estas funciones encarnan la misma idea y el mismo
algoritmo. Si Atwood tuviera razón ninguna podría ser más bella que la
otra. Pero fíjense, el código puede hacer una gran diferencia.

"La Belleza es Nuestro Negocio" es el libro tributo (\*)  a Dijsktra
cuando cumplió 60 años, viene  de una frase del gran maestro:

> "\... when we **recognize the battle against chaos, mess, and
> unmastered \_complexity as one of computing sci**ence\'s major
> callings, *\_we must admit that \'Beauty Is Our Business\'"
>  \[[EWD697](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD06xx/EWD697.html)\]*

Deberíamos considerar la pregunta planteada por Dijkstra, ¿deberíamos
permitir programas feos?

Yo espero que los ejemplos planteados los hagan considerar esta
propuesta, después de todo una de las virtudes de un programador es 
[la soberbia](/blog/2011/03/soberbia.html), y ¿cómo
puedes enorgullecerte de un código escrito de forma descuidada y poco
elegante?

(\*) [Beauty Is Our Business: A Birthday Salute to Edsger W. Dijkstra
(Monographs in Computer
Science)](https://www.amazon.com/gp/product/0387972994/ref=as_li_tf_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0387972994)![](https://www.assoc-amazon.com/e/ir?t=lanaturaledel-20&l=as2&o=1&a=0387972994&camp=217145&creative=399373). Está
en mi [wishlist](http://amzn.com/w/2U5ABR4HWQ7ZY) querido lector :wink: