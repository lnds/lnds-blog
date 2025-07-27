---
title: "And the winner is ..."
authors: [admin]
date: 2015-09-27T08:25:11-03:00
slug: "and-the-winner-is"
aliases: [/blog/lnds/2015/9/27/and-the-winner-is]
tags: ["día de los programadores", "desafíos"]
draft: false
---

Ya pasaron las dos semanas que propuse para solucionar [el desafío del
día del programador](//www.lnds.net/blog/lnds/2015/9/13/feliz-dia-de-los-programadores).
Se presentaron siete competidores:

\- Daniel Martinez [\@edmt](//github.com/edmt) con una [solución en
Ruby](//github.com/lnds/dia-del-programador/tree/master/edmt).

\- Pedro Guerrero [\@pedroguerrero](//github.com/pedroguerrero) con [su
solución en
Python](//github.com/lnds/dia-del-programador/tree/master/pedroguerrero).

\- Jano González [\@janogonzalez](//github.com/janogonzalez) con [otra
solución en
Ruby](//github.com/lnds/dia-del-programador/tree/master/janogonzalez).

\- Mario Fuentes [\@mariofuentes](//github.com/mario-fuentes) con [una
solución en
Go](//github.com/lnds/dia-del-programador/tree/master/mario-fuentes).

\- Dardo de Leon [\@dardodeleon](//github.com/dardodeleon) con [una
solución en
PHP](//github.com/lnds/dia-del-programador/tree/master/dardo-de-leon).

\- Christian [\@christiaclx](//github.com/cristhianclx) con [otra
solución en
Python](//github.com/lnds/dia-del-programador/blob/master/cristhianclx/reto-dia-programador.py).

\- Javier Novoa [\@jstitch](//github.com/jstitch) con otra [solución en
Python](//github.com/lnds/dia-del-programador/tree/master/jstitch).

OK, vamos a la evaluación.

## **Fase 1: Ejecución**.

Para cada programa se ejecuta el programa con los siguientes parámetros:
1000, 2000, 2002, 2004, 2009, 2014, 2015, 2022.

Resultados:

\- \@edmt: las respuestas para 2002 y 2004 fueron incorrectas en el
sentido que sólo responden: "Здравствуйте", que si mi ruso no está mal
(i.e. google translator)  quiere decir "Hola".  Así que en esta fase
\@edmt no cumple.

\- \@pedroguerrero: las respuestas en ruso de este programa también son
fijas y dicen algo
así: "Он
по-прежнему отмечается программист" que según google translator significa
"Él todavía dice Programador". (?). Sin embargo, esta solución es
interesante porque no usa funciones de ninguna librería para calcular el
día de la semana, sino que aplica la famosa Congruencia de Zeller para
calcular el día del año, ¡muy bien ahí Pedro!. 

\- \@janogonzalez: tiene el mismo problema con las respuestas en
ruso.

\- \@mariofuentes: su programa responde correctamente en ruso, o al
menos eso parece :). Por ejemplo, al ingresar 2002 como parámetro la
respuesta obtenida es: "День разработчика" 2002 "состоялось в Пятница, 13 Сентябрь", 
que según google translate significa
"Developer Day 2002 celebrado en Viernes, 13 de septiembre".

\- \@dardodeleon: el problema con esta solución es que requiere usar
Vagrant. Traté de correrla directamente pero al parecer tengo que
configurar php.ini. A pesar de tener una buena documentación mi ventana
de tiempo asignada para evaluar este desafío no me permite seguir
investigando en mi Mac (tengo instalado Vagrant pero como consecuencia
de installar Docker, mis conocimientos de Vagrant no son suficientes
para poder ejecutar el programa).

\- \@cristhianclx: su programa responde correctamente en ruso, de la
misma forma que responde el programa de \@mariofuentes.

 - \@javistitch: Su solución en python 3 es la más ambiciosa porque
trata de traducir el texto online usando los servicios de Google
Translate. Una idea interesante, pero lamentablemente no pude hacerla
correr en mi Mac. A pesar de que tengo Python3 tuve problemas con la
instalación de GoSlate, y tal como en el caso de \@dardodeleon, la
ventana tiempo que asigné a la evaluación no me permite seguir
investigando. 

## **Fase 2: Extensión de los programas**

Esta es la cantidad de lineas de código de cada
programa:

![](//d2dspjyoh5c79p.cloudfront.net/eff2d1c9-6538-11e5-a640-83ed6ac97527-aa9f18b7)

La solución de \@christianclx tiene 24 lineas de código efectiva versus
las 39 líneas de código de \@mariofuentes. 

Así que tenemos ganador y es \@christianclx. Felicitaciones!

Dentro de los próximos días me coordinaré contigo para ver como
entregarte el premio.

Gracias a todos por participar!

