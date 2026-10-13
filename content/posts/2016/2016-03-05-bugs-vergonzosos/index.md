---
title: "Bugs Vergonzosos"
authors: [admin]
date: 2016-03-05T08:25:11-03:00
slug: "bugs-vergonzosos"
draft: false
tags: ['errores', 'calidad', 'bugs']
image:
  placement: 3
---

La palabra Bug, literalmente "bicho", usada para denotar un error
informático, tiene su origen en el hallazgo de una polilla por parte de
los operadores del Mark II, el hecho fue reportado por la famosa 
[Grace Hopper](//es.wikipedia.org/wiki/Grace_Murray_Hopper). 

La fotografía de abajo corresponde a una página de la bitácora de
operaciones del Harvard Mark II. La nota de Hopper hace mención al
"primer caso real de bicho encontrado", denotando que el término bug
es mucho más antiguo, el mismo Tomas Alva Edison usa la palabra bug para
hablar de fallas mecánicas en sus
inventos.

{{<figure caption="El primer bug" src="//d2dspjyoh5c79p.cloudfront.net/8c9220fc-e2d0-11e5-a13c-3371c0364c63-aa9f18b7">}}

En programación nos encontramos con bugs todo el tiempo. Hay toda clase
de bugs, bugs que ocurren porque nos encontramos con una condición no
prevista, bugs por
un error en la implementación del algoritmo, bugs originados por una
mala definición, o por asumir condiciones que no se dan,
etc.

Los bugs vergonzosos son aquellos debidos a la mala programación. 

En 2014, para el 11º Simposio USENIX de Diseño e Implementación de
Sistemas Operativos, un grupo de investigadores de la Universidad de
Toronto presentaron 
[el resultado de su investigación](//www.eecg.toronto.edu/~yuan/papers/failure_analysis_osdi14.pdf)
sobre sistemas distribuidos en el mundo real. 

El Paper de este estudio se llama: "Simple Testing Can Prevent Most
Critical Failures" y lo pueden encontrar
[acá](//www.eecg.toronto.edu/~yuan/papers/failure_analysis_osdi14.pdf),
por si quieren profundizar en el tema.

Los investigadores eligieron los siguientes sistemas: 

> \- **Cassandra**, la base de datos NoSQL desarrollada originalmente
> por Facebook, mantenida por la Fundación Apache, y que es usada entre
> otros por Apple (con más de 100.000 nodos) y NetFlix.
>
> \- **HBase**, otra importante base de datos NoSQL, usada por Spotify y
> Facebook.
>
> \- **Hadoop**, en particular las componentes **MapReduce** y **HDFS**.
>
> \-**Redis**, el famoso ¨servidor de estructuras de datos", usado en
> multitud de servicios, como GitHub, Twitter, Pinterest o
> StackOverflow.
>

De los cinco sistemas analizados, cuatro están escrito en Java y uno en
C. Estamos hablando de un estudio del software que es parte de la
infraestructura crítica de importantes y masivos servicios de
internet.

Estos sistemas son "tolerantes a fallas", es decir, están diseñados
para ser resilientes a errores en el entorno, sobrecarga de trabajo,
etc. Durante su trabajo, los investigadores revisaron un total
de 17,216 reportes de fallas de estos sistemas y analizaron en detalle
198, de las cuales 48 fueron catastróficas, es decir,
dejaron inoperante el sistema. (En un caso la recuperación
implicó establecer sesiones SSH manuales a más de 4.000 nodos para
detener los procesos).

Lo interesante del estudio es que descubrieron que muchos de los errores
catastróficos eran del estilo:s

    try {
        ....
    } catch (Throwable t) {
       System.exit(-1);
    }

O peor:

    try {
        ....
    } catch (Throwable t) {
       // TODO
       LOG("se produjo un error...");
    }

El 92% de los errores corresponden a un manejo incorrecto de errores,
pero que eran conocidos por los programadores, por estar explícitamente
señalados en el código.

El 35% son errores triviales: 25% causados por ignorar el error, 8% por
abortar durante la excepción, 2% simplemente tienen un comentario TODO
(*por hacer*, o *pendiente*, en inglés) en el código.

El 57% de los errores son específicos del sistema, el 23% son
detectables fácilmente detectables y el 34% son complejos. La figura de
abajo, sacada del paper, resume la distribución de los errores
catastróficos:

{{<figure caption="División de errores" src="//d2dspjyoh5c79p.cloudfront.net/d6e105af-e2d9-11e5-a13c-3371c0364c63-aa9f18b7">}}

Quiero que reflexionemos sobre esto, estamos hablando de errores
triviales, que son manejados de manera descuidada. 

También estamos hablando de proyectos Opensource, y con esto tenemos
otro desmentido de esa falacia, convertida en mantra por algunos
fanáticos, llamada la Ley de Linus:

> «Dado un número suficientemente elevado de ojos, todos los errores se
> vuelven obvios.»

(La ley no fue formulada por Linus Torvalds, sino que por Eric Raymond
en su ensayo "La Catedral y el Bazar").

De seguro en su trabajo y en el código propio han visto cosas de este
estilo. Nuestros programas están llenos de cosas similares, no tiraré la
primera piedra, porque me confieso culpable, y muchas veces he dejado
"esto para después" y siempre me ha explotado en la cara. Traten de
evitarlo. 

Pero lo que no tiene perdón, ni excusas a "estas alturas del partido"
es el Bug, o mejor dicho, la "Vergüenza del Bisiesto".

El 29 de febrero de este año, más de 1.200 maletas no llegaron a sus
aviones por un error de año bisiesto en el sistema de control de la
transportadora de equipajes del Aeropuerto de Düsseldorf.

Hay una lista de los errores de este año en esta
dirección: [http://codeofmatt.com/2016/02/29/list-of-2016-leap-day-bugs/](//codeofmatt.com/2016/02/29/list-of-2016-leap-day-bugs/)

Hay varios "horrores" documentados asociados a este bug:

\- en 2012 el servicio de Cloud Computing Azure de Microsoft [estuvo con
problemas por 12 horas debido a un error al validar la expiración de un
certificado el 29 de febrero de ese
año](//azure.microsoft.com/en-us/blog/summary-of-windows-azure-service-disruption-on-feb-29th-2012/).

\- en 2010 [la Play Station Network de Sony
falló](//www.nbcnews.com/id/35646131/ns/technology_and_science-games/t/leap-year-glitch-fixed-sony-playstation)
porque el sistema identificó incorrectamente el año 2010 como bisiesto
(!).

\- en diciembre de 2008 [los dispositivos Zune de
Microsoft](//www.theguardian.com/technology/blog/2009/jan/01/zune-firmware-mistake) (que
pretendían competir con los iPod) se congelaron.

El Bug del año bisiesto se presenta de 2 formas, la más conocida se da
en febrero, pero el 31 de diciembre también ocurren problemas. Muchos
programa asumen que el último día del año corresponde al día 365, cosa
que no se da en un año bisiesto, que tiene 366 días.

[El error del Zune tiene que ver con este otro aspecto, este es el
infame código que congeló estos
dispositivos:]{style="letter-spacing: 0.01rem; line-height: 1.5;"}

    01 year = ORIGINYEAR; /* = 1980 */
    02 while (days > 365) {
    03  if (IsLeapYear(year)) {
    04    if (days > 366){
    05      days -= 366;
    06      year += 1;
    07    }
    08  }
    09  else {
    10    days -= 365;
    11    year += 1;
    12   }
    13 }

El 31 de diciembre de 2008 la variable days tenía el valor 366 y como
2008 es bisiesto, el programa entraba dentro de la condición de if de la
linea 03, pero acá no hay ninguna manera de alterar el valor de days,
que queda con el valor 366 para siempre, convirtiendo todo este código
en un loop infinito.

Pero este problema se da también en nuestro país, este año he escuchado
de 3 casos. De seguro ustedes conocen varios y sería interesante oir de
algunos en los comentarios.

¿Por qué pasa esto?

Dice en la Biblia:

> "Enséñanos a contar bien nuestros días, para que nuestra mente
> alcance sabiduría." -- Salmos 90:12

Aunque no comparto la fé del viejo Rey Salomón, sí estoy de acuerdo en
que es necesario que los programas aprendan a contar bien los días. 

Este salmo aparece citado como epígrafe en uno de los artículos más
importantes que he leído y que creo que debería leer todo aquel que
quiera llamarse a si mismo programador. 
Se trata de "CalendricalCalculations" un paper publicado en
Software Practice and Experience en septiembre de 1990.

Es un paper hermoso, con código expresado en Lisp, lo que le da más
estilo aún 😜. Posteriormente los autores expandieron el artículo en
forma de libro ([en Amazon](//amzn.to/1VYgCUc)). En este artículo
aparece todo lo que se debe saber sobre el manejo de fechas.

En Calendrical Calculation vemos esta pieza de código, para determinar
el último día de un mes:

    (defun last-day-of-gegorian-month (month year)
       (if (and (= month 2)
                    (= (month year 4) 0)
                    (not (member (mod year 400) (list 100 200 300))))
       29
       (nth (1- month) (list 31 28 31 30 31 30 31 31 30 31 30 31))))

Como no quiero provocarles urticaria, les voy a mostrar el código en C:

    int last_day_of_gregorian_month(int year, int month) {
         int leap = (year%4 == 0 && year%100 != 0) || year%400 == 0;
         int days[] = {31,28+leap,31,30,31,30,31,31,30,31,30,31};
         return days[month-1];
    }

Un año es bisiesto si es divisible por 4, pero se deben excluir las
centurias (divisibles por 100), con excepción de las centurias divisible
por 400. Es por esto que el año 1.900 no fue bisiesto, pero sí el 2.000.

De seguro el lenguaje que usas tiene funciones para poder calcular esto,
por ejemplo en Python:

    import calendar
    calendar.monthrange(year, month)[1]

Lo importante es que verifiquen que las bibliotecas del lenguaje tengan
esto bien implementado.

Así que esperemos que no tengamos que volver sobre este tema en cuatro
años más, porque significa que somos incapaces de aprender nada. 

Sólo piensen en el tiempo perdido, estrés, y dinero que sufrieron los
programadores, ingenieros de sistemas en cada uno de los casos que les
mencioné antes. 
