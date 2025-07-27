---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Developers, Developers, Developers..."
authors: [admin]
subtitle: ""
summary: ""
authors: [admin]
tags: [desarrollo, 'ingeniería de software', software, developers, código, 'entropía de software']
categories: []
date: 2022-01-05T19:30:44-03:00
lastmod: 2022-01-05T19:30:44-03:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---


A pesar de que se volvió un meme, y todos nos reímos de él, parece que Ballmer tenía razón. Necesitamos cada vez más desarrolladores. Más y más, y no parece que esa necesidad vaya a bajar en muchos años, a pesar de las heroicas afirmaciones de los fans del Low Code y del No Code, y de los [recientes desarrollos de programación automática usando IA](https://copilot.github.com).

Hagamos un ejercicio. Supongamos que un desarrollador en promedio escribe entre 20 a 100 líneas de código útiles en el día, dependiendo del lenguaje de programación, por supuesto. La verdad es que lee y edita (agrega y borra) probablemente más líneas que esas. Pero pongamos un valor promedio, digamos 60 líneas de código útil, pero castigaremos este promedio dejándolo en 40, porque no todos los días son tan “productivos”.

Suponiendo que logramos que ese pobre desarrollador logra concentrarse y trabaja en el código unas 4 horas (un número alto, porque es difícil [entrar en la zona](/blog/lnds/2010/08/09/estado-de-flujo/), y además evitar ser interrumpido). Eso nos daría unas 10 líneas por hora.

Al año serían unas 9.800 líneas (el cálculo es 4x5=20 horas editando código a la semana, 20x49=980 horas => 9.800 líneas).

Ahora bien, de acuerdo a mis observaciones y experiencia personal,  una base de código de una empresa o una startup mediana, puede llegar a tener entre 2 a 4 millones de líneas de código.  En el caso de empresas más grandes estas van por las decenas de millones de líneas de código. Tomemos el valor inferior, 2 millones de líneas de código corresponden a unos doscientos desarrolladores/año.

Yo inventé una regla para estimar la necesidad de desarrolladores: divide la cantidad de líneas de código de tu base de código y divídela por diez mil. El número resultante es una estimación de la cantidad **mínima** de desarrolladores  que requieres para mantenerla  e incorporar nuevas características.

En otras palabras, por cada millón de líneas de código ya escrito, necesitas cien desarrolladores, mínimo, para mantener y mejorar tu código. 

Otra forma de verlo es, si no tienes esa cantidad de desarrolladores entonces tu código ya es obsoleto, inútil, y tu negocio está en peligro.

Voy a dejar que esa idea se asiente en tu cabeza un rato.

Piénsalo, porque es importante. Y si no me crees que es importante considerar el valor de los desarrolladores, quizás le creas a otros: https://plata.news/blog/el-computin-que-tiene-el-2/


Bueno, esa es una regla a la que he llegado observando y analizando diversas bases de código a lo largo de unos 5 años, en que empecé a investigar sobre estos temas. ¿Puedo demostrar fehacientemente esta regla? No, todavía. Pero he deslizado algunos fundamentos en artículos anteriores en este blog. Y espero seguir escribiendo al respecto más adelante.

Pero, si estás creando nueva tecnología, y además  quieres crecer con tu negocio, es claro que necesitas más desarrolladores. Si estás construyendo sistemas tipo P o tipo E (ver [^1]), esa base de código crecerá rápido, debido a las demandas de tu negocio, y la misma aplicación generará necesidades adicionales, es decir, más manos para mantener y agregar más código.

A menos que empieces a aplicar copy/paste a gran escala.

Se puede sobrevivir con menos desarrolladores, puedes tener unas pocas decenas, por varios años, sin embargo, a punta de copy paste, un aumento del código duplicado, un deterioro en la calidad y mantenibilidad del mismo. 

Yo he visto eso, y no es lindo, es como sentarse sobre una bomba de tiempo, o construir directamente sobre una falla geológica.

Es más, he observado como hay organizaciones invierten más en contratar testers que desarrolladores. Lo que está ocurriendo ahí es que por las grietas de esas fallas geológicas de código están aflorando gases pestilentes, pero en vez de tomar las medidas correctas, es decir, contratar más desarrolladores, y reducir [el cruft](https://martinfowler.com/bliki/TechnicalDebt.html) del código, están esperando que todo explote.

En [Cornershop](/blog/lnds/2021/07/11/antes-too-esto-era-campo/) somos varios cientos de desarrolladores, en Uber unos tantos miles, y en Amazon o en Google decenas de miles los desarrolladores que mantienen las aplicaciones. Con procesos y herramientas de gestión del código asombrosas, que permiten a estos  desarrolladores realizar miles de cambios diarios al software. Pueden leer sobre esto porque es información pública.

Recomiendo leer como Google gestiona su gigantesco mono repo en ese paper: [Why Google Stores Billions of Line of Code in a Single Repository](https://dl.acm.org/doi/pdf/10.1145/2854146)

O este paper de Uber: [Keeping master green at scale](https://eng.uber.com/research/keeping-master-green-at-scale/) (hay un video también acá: https://vimeo.com/358691692)

El software [se sigue comiendo al mundo](/blog/lnds/2016/08/30/toda-empresa-es-de-software-o-lo-sera/), y seguro que ya se comió a tu negocio. 

Ahora dime, ¿cuántos desarrolladores mantienen tu negocio y por qué tan pocos?


[^1]: [Hablemos de Entropía de Software](/blog/lnds/2021/05/08/hablemos-de-entropia-de-software/)