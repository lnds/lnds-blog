---
title: "We work the black seam together"
authors: [admin]
subtitle: "(The Chain parte final)"
date: 2018-03-17T08:25:11-03:00
slug: "we-work-the-black-seam-together"
aliases: [/blog/lnds/2018/3/17/we-work-the-black-seam-together]
draft: false
tags: ['blockchain', 'proof of work']
image:
  placement: 3
---

> This place has changed for good\
> Your economic theory said it would

Escribo esto con algo de lata. Porque tengo que explicar la parte que
para mi representa lo más decepcionante del blockchain, o al menos en la
implementación original que viene con el BitCoin, la famosa prueba de
trabajo.

Además sucede que ya me aburre el tema, pues veo que más que un análisis
serio de las restricciones y ventajas de una tecnología interesante, lo
que hay es un fanatismo que trata de usar blockchain en todo y de las
formas más ridículas posibles, Así que terminemos este trago amargo de
una vez y dejemos de hablar de blockchain en este blog por un buen
tiempo.

Primero repasemos lo escrito hasta ahora. En mi primer post: 
[The Chain](/http://www.lnds.net/blog/lnds/2018/01/6/the-chain), hablé de
cadenas, y de su uso en distintos aspectos del desarrollo de software,
en particular sobre su uso para arquitecturar soluciones de software,
pero el foco de ese artículo era la idea de trabajo colectivo y
distribuido, versus trabajo centralizado. Es un bonito post, donde hablo
más de arquitectura de software que de otras cosas, pero donde muestro
las ventajas y desventajas de contar con un intermediario central para
garantizar la consistencia de las operaciones. Todo amenizado con la
música de Fleetwood Mac, por supuesto.

El segundo post, [To The Bone](/blog/lnds/2018/1/28/to-the-bone), habla sobre
computación distribuida, e introduce el famoso problema de los generales
bizantinos, algo que supuestamente resuelve el blockchain. El nombre
hace referencia a una canción de Steven Wilson que dice en una de sus
frases: "Truth is individual calculation", y que es aplicable en este
contexto, donde la "verdad", definida como el consenso, surge del
cálculo individual de los individuos que participan de la red. 

En ese artículo explico lo que son las fallas bizantinas, y los
protocolos que ayudan a resolver este problema, como Gossip y los
árboles de Merkle, que son una solución elegante que se usa en muchas
tecnologías.

Hay que destacar que estas son soluciones anteriores al Blockchain, los
Merkle Tree fueron patentados por Ralph Merkle en 1979.

Ahora bien, uno de los aspectos que intrigan al iniciado en estas
tecnologías, y que se usa como elemento de marketing al habla de BitCoin
por ejemplo, es el concepto de minado. Se dice que durante el minado los
nodos de la red, conocido como mineros, realizan "resuelven complicados
problemas matemáticos", y que cuando uno de estos mineros resuelve este
complicado problema obtiene como recompensa un bitcoin.

Cuando leí esa descripción hace un tiempo pensé lo asombroso de esa
afirmación, imaginé una red de computadores distribuidos resolviendo
complicados problemas matemáticos. ¿Qué será lo que resuelven estos
computadores? pensé. ¿Acaso tratan de demostrar alguna famosa conjetura
matemática? ¿O tratan de calcular el número primo más alto? ¿O resolver
la conjetura de Goldbach por fuerza bruta? ¿O analizan la información
que ha capturado el programa SETI? o ¿estarán simulando el plegamiento
de proteinas para combatir el cancer? ¿Analizando el genóma de las
especies en peligro?

No, la respuesta es más prosaica y un algo decepcionante.

En términos bien simples y rudimentarios, los minero reciben un número,
deben generar otro número aleatorio, aplicar una función relativamente
fácil de calcular (llamada hash), ver si el resultado termina en una
serie de n ceros, si eso no se cumple, probar con otro número hasta
obtener una cifra que termine en n ceros.

Ejemplo: 

> Supongamos que mi función de "hash" consisten en sumar dos números:
>
>                                 f(x, y) = x+y
>
> Entonces el proceso de minado consiste en que recibo un número x,
> genero un número y, tantas veces como sea necesario hasta que f(x,y)
> se divisible exactamente por 10.000 (es decir, termine en 4 ceros).
>
> Supongamos que recibo el número x=345.987. 
>
> Entonces, genero un número al azar, supongamos que es y=2.452.
>
> Calculo f(x,y) = 348.439. No he tenido éxito, incremento y en 1 y
> repito.
>
> f(x, y) = 348.440, he conseguido 1 cero, necesito 3 más!
>
> Itero, 4.012 veces más y llego al número 350.000 y he logrado la meta,
> un número que termina en cuatro ceros.

A este proceso se le conoce como prueba de trabajo (proof of work), que
es muy ingenioso, porque indica que el computador que entrega un trabajo
ha tenido que invertir tiempo en llegar a un resultado. Por supuesto en
el caso de Bitcoin la función f es mucho más complicada, se usa un doble
hash usando la función SHA-256, lo que garantiza que el proceso no es
tan fácil de adivinar como en el caso de mi ejemplo.

Esto de la prueba de trabajo, proof of work (PoW) es muy interesante, y
fue creado en 1993. Lo interesante del PoW es que es una operación
asimétrica, es muy difícil generar el resultado, pero muy fácil
verificarlo.

Un algoritmo de PoW es HashCash[^1], que se usa para combatir el SPAM,
por ejemplo, al recibir un email un sistema de correo recibe el
siguiente encabezado:

    X-Hashcash: 1:52:380119:calvin@comics.net:::9B760005E92F0DAE

Para verificar que fue emitido por un emisor reconocido, el sistema de
correos calcula la función SHA-1 sobre este header (omitiendo la palabra
'X-Hashcash:', si lo hacen obtendrán lo siguiente

    0000000000000756af69e2ffbdb930261873cd71

Un número que tiene 13 dígitos en cero al inicio. Para poder generar ese
hash, el emisor debió calcular 2 elevado a 52 veces el hash, usando un
proceso muy parecido al que describí arriba.

> "They build machines that they can't control\
> And bury the waste in a great big hole\
> Power was to become cheap and clean"

Para el bitcoin se usa un algoritmo de hash más complejo, y en la
actualidad la dificultad es tal que se requiere hardware especializado
para hacer estos cálculos, los mineros se han convertido en sofisticadas
instalaciones que consumen enormes cantidades de energía.

Eso es lo decepcionante, en mi opinión de esta tecnología, porque la
codicia ha llevado a cosas tan bizarras como este datacenter en
Islandia, dedicado sólo a minar bitcoins

![](https://d2dspjyoh5c79p.cloudfront.net/1a3d0d3c-29dd-11e8-a030-2b5831f8ecb5-aa9f18b7)

O ciudades que son tomadas por mineros de bitcoins[^2]

Yo considero que esto es una locura, independiente de que el blockchain
tiene aplicaciones de diversas tecnologías interesantes, hay que tener
cuidado con cómo se ocupa, porque el caso del bitcoin es una alerta de
lo cara que puede resultar la operación de estos procesos. 

Hoy hay alternativas más eficientes en tiempo y recursos, como la red
Ethereum, que se basa en otro principio, como la Proof of
Stake[^3],pero hay críticas sobre estos algoritmo, puesto que podrían
no ser capaces de alcanzar el consenso, o pueden ser manipulados para
alcanzar un consenso. Pero eso es seguir entrando en honduras y no tengo
mucho ánimo de seguir hablando de blockchain.

Hay gente que lo ha explicado mejor que yo, de todas maneras y les
recomiendo leerlos a ellos. Una buena introducción es
[esta](https://medium.com/coders-pen/qu%C3%A9-es-el-bitcoin-y-c%C3%B3mo-funciona-8b36adf5f80b)[^4]. 

Con esto termino mi serie sobre el blockchain.


[^1]: Wikipedia: [<https://en.wikipedia.org/wiki/Proof-of-work_system>](https://en.wikipedia.org/wiki/Proof-of-work_system")

[^2]: <https://www.politico.eu/article/this-is-what-happens-when-bitcoin-miners-take-over-your-town/>

[^3]: <https://en.wikipedia.org/wiki/Proof-of-stake>]

[^4]: <https://medium.com/coders-pen/qu%C3%A9-es-el-bitcoin-y-c%C3%B3mo-funciona-8b36adf5f80b>
