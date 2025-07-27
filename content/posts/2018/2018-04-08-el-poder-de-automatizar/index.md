---
title: "El poder de automatizar"
authors: [admin]
date: 2018-04-08T08:25:11-03:00
slug: "el-poder-de-automatizar"
aliases: [/blog/lnds/2018/4/8/el-poder-de-automatizar]
draft: false
tags: ['automatización', 'control de calidad', 'métricas']
image:
  placement: 3
---

Voy a compartir con ustedes una pequeña infografía elaborada por mi
equipo de calidad:

![](https://d2dspjyoh5c79p.cloudfront.net/c5b77af0-3b3d-11e8-a030-2b5831f8ecb5-aa9f18b7)

Lo que muestra esta gráfica es que sin automatizar un tester puede
ejecutar 80 casos de prueba al día, de acuerdo a lo medido por nuestro
equipo. En un proyecto en particular tenemos 6.840 casos de prueba, lo
que implicaría que esa persona le tomaría 4 meses para completar el
proceso. Al momento de la elaboración de esta infografía se habían
automatizado 2.650 casos de prueba, los que pueden ser ejecutados por un
tester en un día y medio.

El foco es llegar a automatizar 6.480 casos, lo que reduce las pruebas a
4 días. O, en términos equivalentes, hace que uno de nuestros testers
tenga la capacidad de veinte! 

Es decir, estamos logrando un equipo de calidad 20X! Eso es un gran
avance.

¿Pero cómo logran esto? es la pregunta que me hacen cada vez que cuento
esto, ¿usan Selenium?

La respuesta es, "depende". No se trata de automatizar todo usando tal
o cual herramienta. Selenium es una, pero es mejor cuando usamos el
ingenio. En mi equipo se ha automatizado usando Excel, Python, AWK,
escribiendo código adhoc en Java o Ruby, o usando herramientas como
JMeter y SOPAUI. 

Cuando enfrentas un problema debes enamorarte del problema no de la
solución, y eso implica no tomar partido por una herramienta sobre otra,
algo que reconozco me costó asumir. No todo debe resolverse con código o
usando herramientas como Selenium cuando hablamos de automatización del
QA.

Lo más importante es que seguimos un patrón, un modelo de mejora
continua aplicado a la automatización:

![](https://d2dspjyoh5c79p.cloudfront.net/24c886f1-3b3f-11e8-a030-2b5831f8ecb5-aa9f18b7)

1.  Automatizamos una tarea.
2.  Con esto reducimos incidentes, debidos a errores humanos.
3.  Esto libera tiempo de las personas.
4.  Con ese tiempo libre recuperamos deuda técnica.
5.  Se mejora la calidad.

Otro ejemplo:

![](https://d2dspjyoh5c79p.cloudfront.net/e1b6c4c2-3b3f-11e8-a030-2b5831f8ecb5-aa9f18b7)

Acá tenemos una gráfica de la cantidad de errores históricos detectados
en SonarQube. Redujimos esos errores históricos en un 48%.

¿Cómo lo hicimos?

Al automatizar tareas liberas tiempo, ese tiempo se ocupa en pagar deuda
técnica, ahora el equipo ocupa parte de su tiempo a revisar el código y
corregir y refactorizar el código, con esto reduce los bugs, lo que se
traduce en un mejor código en producción.

Lo que me lleva a mostrarles esta última gráfica:

![](https://d2dspjyoh5c79p.cloudfront.net/2d28a9d4-3b42-11e8-a030-2b5831f8ecb5-aa9f18b7)

Esta es una métrica que llamamos valor entregado (VE). [En este caso
medimos la proporción del trabajo invertido por el equipo de desarrollo.
Es decir, cuánto de lo que entregamos mes a mes corresponde a nuevas
funcionalidades versus corrección de errores. Hay que notar que desde
julio del año pasado hicimos cambios importantes en nuestro proceso de
desarrollo los que se traducen en estos indicadores. Antes era habitual
tener meses en que gran parte del trabajo era corregir bugs, hoy eso se
ha revertido.]{style="letter-spacing: 0.01rem;"}

[Estos resultados dependen de varios factores, pero en mi opinión el
círculo de mejora continua expuesto anteriormente, en que nos centramos
en la automatización de una tarea ha sido clave para lograr estos
números.]{style="letter-spacing: 0.01rem;"}

Y tú, ¿llevas métricas de desempeño, personales y de tu equipo? ¿cuáles?
¿Estás automatizando tareas? Cuéntame tu experiencia.
