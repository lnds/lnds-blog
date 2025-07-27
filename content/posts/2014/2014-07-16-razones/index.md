---
title: "Razones"
authors: [admin]
subtitle: "El origen de Prosa"
date: 2014-07-16T08:25:11-03:00
slug: "razones"
draft: false
tags: ['wordpress', 'blogging', 'prosa']
image:
  placement: 3
---

Después de programar, escribir es una de las cosas que más me gusta
hacer. Desde hace ocho años que publico el blog 
"[La Naturaleza Del Software](https://www.lnds.net/)". 
En el último tiempo la frecuencia de
escritura en ese blog fue bajando, algo que puede parecer bastante
natural, puesto que escribir blogs no es una actividad muy popular hoy
en día. Hay grandes "bloggers" que tienen casi abandonadas sus
bitácoras.

Pero la verdad es que mi caso no sólo tenía relación con la falta de
motivación, o la escasez de tiempo. El problema tenía que ver con la
herramienta para publicar posts.

En sus orígenes La Naturaleza Del Software fue publicada usando 
[Movable Type](https://movabletype.org/) (MT), una herramienta bastante popular
en 2005. Lo malo de esa herramienta es que en la medida que la cantidad
de artículos crecía el publicar se volvía algo tedioso, por la manera de
operar de MT, que genera una y otra vez las páginas html para dejarlas
de forma estática. 

La solución era buscar algo más dinámico, y en ese tiempo
[WordPress](https://wordpress.org/) me pareció la mejor herramienta
disponible. La verdad es que sigo recomendando WordPress a todo aquel
que quiere manejar contenidos, ya sea para armar una intranet para su
empresa, hasta para quien quiere publicar un nuevo medio.
[WordPress](https://wordpress.org/) es un editor de contenido
formidable, escalable, y bastante extensible. Eso lo hace el más
popular.

Pero lo que no me gustó de WordPress fue el esfuerzo administrativo y
los múltiples bugs de seguridad que fueron apareciendo. De hecho tuve un
incidente de seguridad bastante serio que afectó a unos de mis blogs. 

En 2013 decidí cambiar a algo más radical, la elección fue
[Octopress](http://octopress.org/). Si eres programador,
[Octopress](http://octopress.org/) te va a gusta, porque está pensada en
el ciclo de programación clásico: escribir código - probar - corregir -
publicar. Es interesante, pero cuando aprecias tu tiempo, como yo, verás
que todo esto se hace muy engorroso. Después de todo lo que quiero es
escribir, no programar! Si bien son actividades parecidas, cuando
escribo sólo quiero concentrarme en "tipear" las palabras. Con
[Octopress](http://octopress.org/) tenía que concentrarme en una
sintaxis especial: [MarkDown](http://es.wikipedia.org/wiki/Markdown), en
"compilar" mi texto para poder revisarlo, y luego realizar el acto de
"desplegar" (deploy) mi sitio otra vez. Y si bien es algo a lo que
estoy acostumbrado como programador, como escritor lo encontraba un
estorbo.

Consideren que además mantengo tres blogs. Y si en LNDS estaba
escribiendo poco, en los otros el polvo acumulado sobre los posts tiene
ya varios centímetros de espesor.

Entonces decidí probar [Ghost](https://ghost.org/), y en marzo de 2014
decidí instalar esa plataforma para publicar en mi blog. Ghost es el
chico nuevo, la promesa de simplificar la publicación de blogs. Yo
esperaba encontrar algo parecido a Medium (del que hablaré luego). Ghost
es una gran herramienta, con una historia interesante, pero la promesa
de simplificar mi workflow de publicación se esfumó
rápido.

El problema de [Ghost](https://ghost.org/), y que comparte con
[Octopress](http://octopress.org/), es un bug muy serio:
[MarkDown](http://es.wikipedia.org/wiki/Markdown). 

De seguro los hipster se van a molestar conmigo, pero después de usar
[MarkDown](http://es.wikipedia.org/wiki/Markdown), y de incluso publicar
un libro usando esta sintaxis, considero que es una pérdida de tiempo.
Entiendo las ideas y el concepto de
[MarkDown](http://es.wikipedia.org/wiki/Markdown) en otros contextos,
del mismo modo que entiendo el valor de
[LaTeX](http://es.wikipedia.org/wiki/LaTeX), pero no encuentro que me
aporten como autor de blog.

En 2013 descubrí [Medium](https://medium.com/), y [experimenté con su
propuesta](https://medium.com/@lnds), escribí algunos artículos, incluso
adapté algunos posts antiguos a esa plataforma, y me gustó bastante. Lo
que más me gustó fue la simplicidad. En [Medium](http://medium.com/) uno
se concentra en la escritura, el texto, la interfaz es tan minimalista
que no te interrumpe, sólo está ahí cuando la
necesitas.

Al ver lo que lograron hacer en [Medium](http://medium.com/) pensé que
esa era el tipo de herramienta con la que me gustaría escribir mis
posts. Pensé que con [Ghost](https://ghost.org/) podría lograrlo, pero
no, y viendo la velocidad con que ese equipo está desarrollando esa
herramienta decidí que no podía
esperar.

![](https://d2dspjyoh5c79p.cloudfront.net/6729b6e5-0d4c-11e4-8f0b-43e69d919221-437b93b0)
 (Imagen por Betsy Weber, usada bajo Creative Common por atribución,
[fuente](https://www.flickr.com/photos/betsyweber/5056456666/in/photolist-8GPEpm-8GLvBk-8gfJBa-7RFbWk-7nMLFu-8GxUXm-9dyrJ6-bUmNEK-6MUipe-bxbLZS-ayE1cj-4MjX4G-8SMn4v-8Fwebc-8GPEvd-9aZXdT-ebgdiP-ct8567-bqAPYG-csTPvG-dbsb2f-5LAAqg-a83CsR-5GdXJK-69PYkV-8nFKzL-7EbFiv-6QWc7V-ayFuVa-3q5rBx-mBXu8-66omXz-cqp1eN-6ngZdy-cteFCC-ndU8Rp-h9kWAH-8FDxBW-7YPYLk-6qTsQD-ct96rC-iRgqCn-cyfWCj-6HifPs-8HdX3B-DGgAN-7EbFjt-gnU9uD-bn4Efe-6aTp8s))
    

Lo que hice fue escribir mi propio "Servidor de Blogs". 

El proyecto empezó en mayo de este año. Pronto voy a escribir sobre los
detalles técnicos de esta herramienta. Lo que quiero contarles ahora es
que mientras escribía el código de este primer release me vino la
ambición de hacer algo parecido a Medium no sólo a nivel de plataforma.
Mi idea es crear una comunidad de gente que escriba en español usando
este "Servidor de Blogs", y esa es la idea de Prosa. 

Prosa será la plataforma con la que publicaré mis tres blogs de ahora
en adelante, pero también será un espacio para invitar a mis amigos, a
que compartan sus ideas en este espacio. Prosa es una idea en etapa
embrionaria. Una idea que iré explorando de a
poco.

¿Cómo operará Prosa? [Aún no lo tengo muy claro. Por lo menos en el
corto plazo invitaré a algunos amigos para que la prueben. En otro
momento publicaré el código fuente. Si evoluciona más allá está por
verse.

Eso es todo lo que tengo que decir por hoy, pronto publicaré más sobre
el proyecto. Espero que lo disfruten, como yo he disfrutando
construyéndolo.


(Imagen del Encabezado: Cherry Blossoms at Night por Yuzuke Omesawa, CC
por Atribución, [fuente](https://www.flickr.com/photos/umezy12/13581960595/in/photolist-mGc6Gp-3SP4K-4fWPPB-98nmD3-bq4Umt-jfnpAv-6ZRR3E-aZaA3c-gVMf1-h9jHUy-9828ct-4fWNtK-eLYruF-b2Dqma-bvEa1j-b2DqyK-b2Dqge-b2Dq8B-b2Dr2k-b2DqAz-b2DqoV-b2DrnB-b2Dqvr-b2Dr6e-b2Dqat-8GLw3R-fENGPA-4VNXsS-b2Drei-b2Dqqr-b2DqjF-b2Dri4-b2Dr9p-cF2oYu-cBDaD9-8HdYrc-6ZMZpB-vb8SN-aQbqCc-ddzXWy-b13VJB-8sdQFe-ctfHRj-ctfDcY-ctfyAC-ctfLx7-ctfKS1-ctfLmd-ctfC5C-ctfL17))

