---
title: "El Fin de la Agilidad"
authors: [admin]
subtitle: "Parte 1: Grunge"
date: 2019-03-17T08:25:11-03:00
slug: "el-fin-de-la-agilidad"
aliases: [/blog/lnds/2019/3/17/el-fin-de-la-agilidad]
tags: ["agilidad", "emprendimiento"]
categories: ["el fin de la agilidad"]
draft: false
image:
    placement: 3
    caption: "Kurt Cobain"
---

> *Come as you are, as you were\
> -- Kurt Cobain*

Recuerdo el día que Kurt Cobain murió, escuché en la radio sobre su
muerte, estaba con algunos amigos y socios de la empresa en que
trabajaba.

Era abril de 1994, y estábamos trabajando en un proyecto para el
servicio de impuestos internos.Me
gustaba Nirvana, toda la onda del grunge en general, Alice in Chains,
Pearl Jam, etc. Esa tarde nos
impactó la noticia, porque Cobain no sólo era una estrella del rock
independiente, además, era un joven como de nuestra edad.

Por otro lado yo, en cierta manera, sentía que nosotros en nuestra pequeña
empresa de desarrollo de software, también éramos una banda de indie
rock.

Ignoro si puedo hablar sobre el sistema que construíamos en esa época,
sólo diré que con mis socios implementamos una tecnología bastante
innovadora para ese tiempo. De muchos modos era una solución
grunge.

El grunge parece simple, en términos musicales. Su postura trataba de
alejarse del estilo del rock y pop más comercial. La idea era volver a
lo básico. El amplificador muy, la batería tocada con mucha rapidez y
fuerza, junto a un un cantante con una voz desgarrada, casi gritando. Y
por supuesto letras depresivas, desencantadas, con algo de denuncia por
la alienación social imperante. El grunge rescata mucho del punk, y el
heavy metal inicial, del rock de protesta de Neil Young, o de las
primeras canciones melancólicas de David Bowie. 

En esa época escuchábamos buena música mientras trabajamos, nos
turnábamos para colocar pistas, teníamos un computador con un CD y unos
buenos parlantes, para que se escuchara en toda la oficina. Escuchábamos
casi de todo, pero principalmente rock. Nuestros cliente eran empresas
de apoyo al giro bancario, o algunos servicios del estado, también
éramos sub contratistas de empresas más
grandes.

Por sobre todo queríamos nuestra independencia. Nuestras guitarras y
baterías eran algoritmos escritos en C, o C++. Usábamos Linux, cuando
casi ninguno de nuestros clientes sabía qué existía. No es que fuéramos
especialmente idealistas del opensource, la verdad era una posición más
pragmática. Nos salía más barato que instalar SCO, Solaris o AIX. Fue
recién cuando logramos un importante contrato con una telco que pudimos
comprar una Sun Spark, y allí instalamos Oracle. Nuestros PC tenían DOS,
Windows For Workgroup y Linux (con el tiempo empecé a usar Ygdrassill,
pero es casi seguro que instaláramos
[Slackware](http://www.slackware.com/), para los frikis interesados en
esos detalles).

![](https://d2dspjyoh5c79p.cloudfront.net/91213a19-4917-11e9-8e69-21c4c306beae-aa9f18b7)

Esa solución, en la que trabajábamos en abril de 1994, para el servicio
de impuestos internos, era rara para los estándares de esa institución.
Recién en esa época estaban migrando a Oracle y tenían con una enorme
cantidad de código Legacy en Cobol. Como nuestro proceso estaba escrito
en C y no usaba ninguna base de datos, fue difícil que lo adoptaran.
Incluso escribimos un pequeño lenguaje de dominio específico que
simulaba la sintaxis de Cobol, para facilitar la adopción. Pero aún así
hubo reticencia para usarlo después. No nos volvieron a llamar. Después
de todo, era más confiable usar Oracle que esa solución grunge escrita
por unos hackers que apenas sobrevivían en una pequeña
empresa. 

Pero entregamos nuestra solución a tiempo, y funcionó muy bien,
demasiado bien. Sospecho que nunca habían visto algo que resolviera ese
problema en particular de un modo tan
rápido.

Hacíamos cosas así en Enfasis, que era el nombre de esta pequeña
empresa. No recuerdo si era socio en 1994, pero con el  tiempo me
invitaron a serlo. 

Recuerdo que una vez desarrollamos un compilador [SLR](https://en.wikipedia.org/wiki/Simple_LR_parser) que permitía traducir documentos
[EDI](https://en.wikipedia.org/wiki/Electronic_data_interchange) a XML,
o HTML. También diseñamos soluciones criptográficas para la banca y
otros clientes que no sé si puedo mencionar (no quiero hombres de negro
golpeando mi puerta). También implementamos muchos proyectos SCADA,
sobre eso [he escrito algo antes](/blog/lnds/2010/08/21/historias-de-depuracion).

Una de las gracias de esa pequeña empresa es que cada diseño era
discutido por todos los socios, recuerdo a [Marco y Ricardo](/blog/lnds/2008/10/05/los-hackers-del-5-de-octubre) con sus puchos haciendo preguntas difíciles, y discutiendo entre ellos.
O a Rodrigo que presentaba sus argumentos frente a la pantalla
escribiendo código. A Jorge, que prefería mostrar una prueba de
concepto. Todos me miraban raro cuando escribía las propuestas a los
clientes en LaTeX, y escribía mi código usando
[CTangle](http://www.literateprogramming.com/cweb_download.html) y
[CWEB](http://www.literateprogramming.com/cweb_download.html).
Eramos jóvenes, inteligentes, arriesgados e innovadores.

Unos cinco o seis años después, en 1999 o 2000, junto con Ricardo
desarrollamos un software para la Cámara de Comercio, que permitió
reducir un proceso que tomaba toda una noche a minutos, un software que
aún en 2015 seguía siendo utilizado, como pude constatar (sospecho que
sigue en producción).

Estoy orgulloso de esa época, porque hacíamos soluciones que estaban
bien pensadas, estaban validadas por muchas cabezas, testeadas a nivel
teórico y práctico.

Fue en esa empresa en que empecé a experimentar con [Extreme Programming](https://www.extremeprogramming.org). Cada cierto tiempo
exponíamos internamente sobre alguna tecnología. Recuerdo que presenté
una propuesta (probablemente a fines del 97 o en el 98) a un cliente en
que nos exigían describir nuestra metodología de trabajo, o proponer
una. En esa propuesta incluí un diagrama como este:

![](https://d2dspjyoh5c79p.cloudfront.net/e911eeda-4918-11e9-8e69-21c4c306beae-aa9f18b7)

Cuando leí sobre XP, me di cuenta que hacíamos mucho de XP sin darnos
cuenta. Así que se lo expliqué al equipo con qué consistía y tratamos de
implementarla.

Pero la innovación y la inteligencia y maestría individual no son
suficientes ni garantizan nada. Tuvimos
varios problemas de gestión comercial, y administración de proyectos. Quizás éramos
demasiado innovadores, aparte de perfeccionistas. También nos sobre
vendimos muchas veces. Nos faltaba experiencia para administrar una
empresa de desarrollo de software. No todo es sobre habilidades técnicas
individuales.

Ganábamos dinero, pero había que pagar cuentas, sueldos de los
empleados, y los socios no estábamos satisfechos con nuestros ingresos.
Yo además estaba endeudado, había fracasado en mi primer matrimonio y no
estaba entusiasmado con lo que
hacía. 

Jorge, uno de mis ex clientes se convirtió en gerente de operaciones de
la Cámara de Comercio y me invitó a unirme a su equipo. Los días del
grunge habían terminado\...


### El resto de los capítulos:

[Segunda parte](/blog/lnds/2019/03/18/el-fin-de-la-agilidad)

[Tercera parte](/blog/lnds/2019/03/19/el-fin-de-la-agilidad)

[Cuarta parte](/blog/lnds/2019/03/23/el-fin-de-la-agilidad)

[Quinta parte](/blog/lnds/2019/03/31/el-fin-de-la-agilidad)

[Sexta parte](/blog/lnds/2019/04/06/el-fin-de-la-agilidad)

[Séptima parte](/blog/lnds/2019/04/14/el-fin-de-la-agilidad)

[Octava parte](/blog/lnds/2019/04/21/el-fin-de-la-agilidad)

[Novena parte](/blog/lnds/2019/05/21/el-fin-de-la-agilidad)

[Décima parte](/blog/lnds/2019/06/16/el-fin-de-la-agilidad)

[Undécima parte](/blog/lnds/2019/07/07/el-fin-de-la-agilidad/)

[Duodécima parte](/blog/lnds/2019/08/15/el-fin-de-la-agilidad/)

