---
title: "Fraude con tarjetas de crédito"
authors: [admin]
date: 2018-07-29T08:25:11-03:00
slug: "fraude-con-tarjetas-de-credito"
aliases: [/blog/lnds/2018/7/29/fraude-con-tarjetas-de-credito]
draft: false
tags: ['seguridad']
image:
  placement: 3
---
Las tarjetas de crédito nacieron en una época análoga, prácticamente
desconectada, y por lo tanto son hoy en día mucho más vulnerables.

Pero siempre han sido vulnerables.

Antiguamente tu comprabas con tarjeta de crédito de manera física,
llegabas a la tienda y el vendedor examinaba tu tarjeta, veía que no
estuviera en una lista de tarjetas vencidas, y la colocaba sobre una
curiosa máquina como esta[^1]:

![](https://d2dspjyoh5c79p.cloudfront.net/20f20c4e-933a-11e8-a030-2b5831f8ecb5-aa9f18b7)

Luego escribía en un formulario de papel especial auto copiativo el
monto de la venta y lo colocaba encima de la tarjeta, de este modo:

![](https://d2dspjyoh5c79p.cloudfront.net/3f4f071f-933a-11e8-a030-2b5831f8ecb5-aa9f18b7)

Luego corría el rodillo sobre el papel y la tarjeta, y quedaba impreso
el número de la misma en el recibo. Tu firmabas el papel y la compra
quedaba realizada.

Esto duró muchos años, incluso este mecanismo convivió con los primeros
días de internet. Recuerdo haber escuchado de un caso, durante los
primeros años de internet en Chile, en que el administrador de un
restaurante usaba estos recibos en papel para obtener números de tarjeta
que usaba para pagar acceso a sitios porno en la web.

Ingeniería Social
-----------------

La forma más fácil de obtener datos de las tarjetas de crédito es
simplemente preguntando. La ingeniería social[^2], en el contexto de la
seguridad informática, es el conjunto de técnicas de manipulación de las
personas que se usa para obtener información sensible, como claves,
números de identificación y por supuesto datos financieros, como las
tarjetas de crédito.

Muchas veces no es necesario manipular, porque gracias a las redes
sociales, ahora es posible obtener esto porque las mismas personas
entregan su datos:

![](https://d2dspjyoh5c79p.cloudfront.net/3b401920-933b-11e8-a030-2b5831f8ecb5-aa9f18b7)

![](https://d2dspjyoh5c79p.cloudfront.net/44b47281-933b-11e8-a030-2b5831f8ecb5-aa9f18b7)

Es posible encontrar muchos datos sensibles, como los de las tarjetas en
redes sociales.

Carding
-------

El Carding es el fraude asociado a la obtención de datos de tarjetas de
crédito, se vale de diversas técnicas, cómo el robo de bases de datos,
el phishing, la ingenierías social y la recolección de información en
redes sociales[^3].

"Hackeos" Nacionales
----------------------

Esta semana se ha hablado de diversos "hackeos" a bancos nacionales
donde supuestamente se robaron datos de tarjetas. En realidad estamos
hablando de filtraciones de listas de tarjetas, eso corresponde a datos
obtenidos por bandas dedicadas al carding. 

Es importante usar los términos precisos, primero porque la palabra
hacker no tiene que ver con delicuencia [^4] y porque es importante
educar a la población.

Todas las tarjetas están expuestas
----------------------------------

Hoy en día el carding alcanza niveles sofisticados, que hacen que las
pobres medidas de seguridad de las tarjetas sean más evidentes.

Tal como explican en un notable post[^5s] en el blog BlackPloit,
existen manuales para hacer carding, los que califican a las tarjetas de
crédito niveles según la dificultad con la que se pueden obtener datos y
gastar dinero:

**Level 1 (*Easy carding*)**: Se puede gastar un máximo de 50 dólares.
Se necesita:

-   Tarjeta de crédito.
-   Fecha de expiración.

**Level 2 (Intermediate carding)**: Se puede gastar un máximo de 2000
dólares. Se necesita:

-   Tarjeta de crédito
-   Fecha de expiración
-   Código CVV,
-   Nombre del cliente
-   Número de la cuenta bancaria.

**Level 3 (Hard carding)**: No hay limites establecidos de gasto. Se
necesita:

-   Tarjeta de crédito
-   Fecha de expiración
-   Código CVV,
-   Nombre del propietario.
-   Número de la cuenta bancaria.
-   Cantidad de dinero en la cuenta.
-   Número de teléfono.
-   SSN.
-   DOB.

Los números de tarjeta pueden ser generados, y en realidad dadas las
capacidades computacionales de hoy no es un gran problema esa parte.

La seguridad de las tarjetas está dada por: la fecha de vencimiento y el
código CVV, un número de 3 dígitos. Tampoco es complicado generar las
combinaciones necesarias.

Los emisores de tarjetas saben estas vulnerabilidades, pero prefieren
ignorarlas en función de la facilidad de uso, difusión masiva y porque
hay un negocio de seguros asociados, que pagan los miles de mini fraudes
que suceden a diario. Seguramente te han llamado del banco preguntándote
si autorizaste cierto pago, o para avisarte que deben renovar tu
plástico por razones de seguridad. 

De acuerdo a Blackploit [^5] cada entidad bancaria puede generar diez
mil millones de números de tarjetas, un número que parece bastante
grandes, pero que no representa un desafío a un computador. Pero además
la forma de asignar números obedece a ciertos patrones. Súmenle que es
posible generar el CVV, y eventualmente probar con micro transacciones
la validez de las tarjetas. Este escenario es factible, y muestra que
todas las tarjetas están expuestas en la
práctica.

Es tiempo de cambiar estos mecanismos de seguridad, y eso lo saben los
emisores de tarjetas y los bancos. La pregunta es, ¿por qué no se
hace?


[^1]: Fotografías tomadas de este
artículo: <http://fernandodecordoba.es/asi-se-cobraba-con-tarjeta-de-credito-en-los-80/>

[^2]: <https://es.wikipedia.org/wiki/Ingenier%C3%ADa_social_(seguridad_inform%C3%A1tica)>

[^3]: Chema Alonso explica algunas técnicas en esta nota de
2013: <http://www.elladodelmal.com/2013/12/carding-basico-ojo-con-donde-metes-tu.html>

[^4]: La palabra hack en el sentido puro se origina en el MIT: "The
word at [MIT](http://web.mit.edu/) usually refers to a clever, benign, and
[ethical](http://hacks.mit.edu/Hacks/misc/ethics.html)
prank or practical joke, which is both challenging for the perpetrators
and amusing to the MIT community (and sometimes even the rest of the
world!).

[^5]: <https://www.blackploit.com/2018/07/hackeando-un-banco-3-hackear-14000.html>
