---
title: "Quién es responsable por la calidad?"
authors: [admin]
date: 2018-05-06T08:25:11-03:00
slug: "quien-es-responsable-por-la-calidad"
aliases: [/blog/lnds/2018/5/6/quien-es-responsable-por-la-calidad]
draft: false
tags: ['control de calidad']
image:
  placement: 3
---

Un concepto erróneo, con el que debemos lidiar permanente y que por
desgracia se encuentra instalada en el subconsciente de muchos
desarrolladores, es la idea de que la calidad es responsabilidad
exclusiva del área de QA, y no de los programadores. 

¿Por qué una idea tan errónea como esta se encuentra tan difundida?
Esto llega a un grado tal que,
cuando hay un error en producción, todos los dedos apuntan al área de
control de calidad y no a los responsables de introducir los bugs en
primer lugar.

Hagamos un poco de historia. 

Cuando los primeros computadores se desarrollaron, el usuario y el
programador eran la misma persona, científicos o ayudantes de
científicos que trabajaban en la resolución de algún complejo problema,
que requería la ejecución de complicados
cálculos.

Después las computadoras fueron utilizadas para resolver problemas de
todo tipo. Los programas pasaron a ser sistemas. La división de labores
se hizo necesaria. Partimos con el usuario, que expresaba su necesidad a
un programador, el que luego entregaba el código fuente al operador de
la computadora, para que lo ejecutara y entregara los
resultados.

Con el tiempo, el operador de computadoras fue reemplazado por el
sistema operativo (automatización). Pero ocurrió otra división de
labores, apareció el analista, un personaje que ocupó un lugar entre el
usuario y el programador.

La idea de esta división era astuta, mientras el analista *elicitaba*
los requisitos de  un usuario, el programador escribía el código que
plasmaba los requisitos de otro usuario. El proceso de desarrollo se
volvió más eficiente, al menos en teoría.

![](https://d2dspjyoh5c79p.cloudfront.net/2ace652c-5146-11e8-a030-2b5831f8ecb5-aa9f18b7)

Pero la presión empezó a crecer, los sistemas se hicieron más
complejos.  El paradigma de la programación estructurada, por ejemplo,
permitió la construcción modular de sistemas. Cada módulo podía ser
entregado a diversos equipos para su
construcción. Pero, ¿quién probaba
la integración de todos estos
módulos? 

Al principio eran los mismos usuarios y los analistas los que se
encargaban de realizar las pruebas de los sistemas integrados. Eso tenía
sentido porque estos eran los que conocían mejor las necesidades que el
sistema debía resolver.

Pero esto no podía durar mucho tiempo, y asísurgió la necesidad de
crear un equipo de control de calidad. En muchas organizaciones esto se
armó artesanalmente, transformando a gente de operaciones y de sistemas
en "analistas de calidad". Personas que conocían el negocio combinados
con personas que conocían las limitaciones tecnológicas de las
soluciones.


![](https://d2dspjyoh5c79p.cloudfront.net/9c87bf91-5147-11e8-a030-2b5831f8ecb5-aa9f18b7)

Por supuesto todo esto evolucionó, el área de calidad creció y se
volvió muy importante, tan importante que todos empezaron a delegar en
esta la responsabilidad absoluta de la calidad.

Tanto el usuario como el programador descansaron de sus
responsabilidades y las delegaron con descaro en el QA. 

Todo esto nos lleva al escenario actual, en que si el sistema no
funciona como corresponde es culpa de QA. "Porque no probaron como
corresponde", o porque "no hicieron las pruebas que debían hacer".

Y yo digo que todo eso es un error. La culpa no es de QA. El responsable
de la calidad es todo el equipo (esto incluye al usuario, por cierto, a
menos que estemos hablando de la construcción de un producto, en cuyo
caso debe existir un "Product Owner", que es la voz de los futuros
usuarios del sistema).

La calidad parte con la definición de lo qué se quiere, del por qué se
precisa de cierta forma, y para qué se necesita, junto con los
parámetros de satisfacción, con los cuales podremos contrastar el
resultado obtenido. Eso es responsabilidad de usuarios y analistas. 

Luego durante la codificación los programadores deben ser prolijos,
evitar errores, realizar pruebas unitarias, y de regresión, para
asegurar que los cambios realizados al código no afectan lo que ya
funciona.

En conjunto con el equipo de QA los programadores realizan pruebas de
integración, de estrés y funcionales. Con el fin de verificar que los
criterios definidos por el usuario se cumplen. 

Finalmente, es el usuario el que debe dar un visto bueno final,
comprobando que todo cumple lo esperado.

El equipo de QA debe velar porque todo este proceso se ejecute como es
debido. El equipo de QA valida y verifica cada etapa del proceso de
desarrollo, desde los documentos de análisis y diseño, hasta la
realización de inspecciones de código. Es la columna vertebral que
sostiene el ciclo de vida. La calidad está en cada etapa. 

-   ¿Están los requisitos plasmados de una manera adecuada y sin
    ambigüedades?
-   ¿Existen criterios de aceptación establecidos? ¿Están escritos de
    forma precisa y medible?
-   ¿Están definidos los parámetros de calidad que debe satisfacer el
    sistema?
-   Para los bugs detectados, ¿se han informado al equipo de desarrollo?
    ¿se ha abordado su corrección? 
-   ¿Se han realizado pruebas de robustez del sistema?
-   ¿Se han realizado pruebas de estrés? ¿Se tienen claros los
    requerimientos no funcionales, y cómo se determinará su
    cumplimiento?
-   etc.

La labor de QA es muy importante, pero su rol es de control y apoyo,
principalmente. 

El equipo QA realiza pruebas para tratar de encontrar errores en el
sistema, pero no puede garantizar que el sistema está libre de errores.
Por algo el nombre es Quality Assurance, y no Quality Insurance.

La responsabilidad por la calidad de un producto de software es de todo
el equipo que lo construye, no sólo de una parte de este.

