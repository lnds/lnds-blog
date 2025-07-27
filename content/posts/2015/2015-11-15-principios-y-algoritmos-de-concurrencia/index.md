---
title: "Principios y Algoritmos de Concurrencia"
authors: [admin]
date: 2015-11-15T08:25:11-03:00
slug: "principios-y-algoritmos-de-concurrencia"
draft: false
tags: ['libros', 'reseñas', 'concurrencia', 'algoritmos']
image:
  placement: 3
---

"Compartir es malo\... Al menos en programación concurrente 😜" \--
[Tweet del 13 de noviembre de 2015](//twitter.com/lnds/status/665126995882328064)
{{<x user="lnds" id="665126995882328064">}}

Hace unos 10 años atrás sufrí con un proyecto que involucraba la
interacción de dispositivos biométricos y cámaras de seguridad.
"¿Cuanto tomará este proyecto?" me preguntaron mis socios, "unas seis
semanas, respondí ingenuamente", finalmente me tomó varios meses,
dolores de cabeza y malos ratos.

Los principales problemas tenían que ver con una serie de bibliotecas y
APIs que tenían serios problemas en el manejo de concurrencia.

No fue la primera vez que he lidiado con estos problemas en mi vida
profesional, hace unos años atrás les conté
["unas historias de depuración"](/blog/lnds/2010/08/21/historias-de-depuracion),
entre las cuales destaca una que involucraba un
["race condition"](//es.wikipedia.org/wiki/Condici%C3%B3n_de_carrera).
También, no hace mucho, me encontré con un problema de sincronización
en una pequeña aplicación que desarrollé para despacho de
emails.

En todos esos casos yo estimo que un 50% de los problemas fue mi falta
de conocimientos adecuados sobre programación concurrente. A pesar de
que en la universidad en cursos de sistemas operativos e incluso en
seminarios, se te enseñan estos conceptos, no alcanzas a asimilarlos con
la profundidad necesaria. Al menos la formación que te dan en la
universidad te sirve de una guía, y se agradece, pero sería bueno contar
con referencias prácticas y concretas sobre los problemas que enfrentas
a tratar la programación
concurrente.
Otro aspecto importante es que lo que aprendí en los ochenta, no
necesariamente aplica para la realidad del hardware y los sistemas
actuales.

Por eso, cuando Ricardo Galli me envió una copia de su libro
["Principio y Algoritmos de Concurrencia"](http://amzn.to/20V5Jqb),
decidí que además de leerlo lo promovería entre mis colegas y lectores.
Es lo que estoy aprovechando de hacer ahora.

Hace unos días tuve una breve charla sobre el tema con quien fue mi
profesor de un seminario de computación paralela, Jo Piquer
([\@jpiquer](//twitter.com/jpiquer)) y me atreví a recomendarle este
libro,  y espero que lo difunda entre sus colegas académicos interesados
en este tema.

Pero lo más interesante de este libro es que está pensado en el
programador profesional, que no necesariamente tuvo la formación
universitaria en estos temas, o para quienes enfrentan estos problemas y
necesitan actualizar sus conocimientos.

En mi caso lo leí con mucho interés y aprendí cosas muy interesantes.

La sección que me pareció más interesante fue la titulada "La realidad
del hardware moderno", que fue muy reveladora y donde pude entender
porqué cosas que en teoría deberían funcionar, no lo hacen como uno
espera (sobre todo si intentas, quijotéscamente, crear tus propias
bibliotecas y estructuras de datos concurrentes).

Ricardo es una persona que cree firmemente en la idea de que
"compartir es bueno", lo demuestra su aporte a la
comunidad del software libre en habla hispana (espero que disfrute el
chiste de mi tweet citado al inicio de este post). Además  es un gran
escritor. No sé como lo hace, pero consigue hacer de un tema muy técnico
algo ameno y entretenido.

Lo otro interesante es que para explicar los conceptos Ricardo recurre a
diversos lenguajes al alcance de cualquier programador, sin recurrir a
esotéricos lenguajes académicos. Los ejemplos están en C, Java, Python y
Go y en un momento debe usar Ensamblador de ARM (en una Raspberry Pi!),
pero no se asusten por esto último, si leen el libro la complejidad se
maneja de forma gradual, y la razón de usar ensamblador es coherente con
el problema que se está tratando de resolver.

Es un libro muy práctico, incluso en la primera parte, que aborda los
fundamentos más teóricos, absolutamente necesarios para entender lo que
viene.

Uno de los objetivos de Ricardo era poder escribir un "ebook técnico
legible", y lo logra bastante bien. Cuando expone código lo hace con
una brevedad que se agradece. Leer ejemplos que toman muchas páginas de
código en una tableta, o una Kindle es una tortura. En este caso
funciona bastante bien. La elección de Python para expresar código breve
es la clave para este logro. En este punto tengo que felicitar a
Ricardo, debe ser el único libro técnico de programación que he leído
por entero en mi Kindle, sin tener que recurrir a mi Mac o al iPad para
poder mantener todo el código a la vista. Esto les parecerá una minucia,
pero si tienen la costumbre de leer muchos libros de programación en
formato ebook, lo comprenderán y agradecerán.

Quizás sería interesante que Ricardo ampliara sus ejemplos en GitHub
usando otros lenguajes modernos como Rust, que tiene un soporte de
Canales algo diferente a Go y en Scala para explorar el modelo de
actores. Supongo que eso lo abordará en una segunda edición (porque
espero que le vaya tan bien, que se anime a escribir una segunda
edición).

En resumen, considero que Ricardo ha escrito un libro fundamental en la
formación de todo programador. Lo recomiendo y espero que podamos
discutirlo juntos en los comentarios.

El libro lo encuentran en [Amazon](//amzn.to/20V5Jqb) y en [Google
Play](//play.google.com/store/books/details?id=cLXfCQAAQBAJ).
