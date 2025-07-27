---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Esa Complejidad que tu jefe ignora"
authors: [admin]
subtitle: "O prefiere ignorar"
summary: ""
authors: [admin]
tags: [seguridad, complejidad, gestión]
categories: [complejidad, gestión, "ingeniería de software"]
date: 2020-10-04T09:48:32-03:00
lastmod: 2020-10-04T09:48:32-03:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false
  placement: 3

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
Hay una metáfora muy adecuada para describir lo que ocurre en muchas empresas con respecto a la visión que tienen quienes las dirigen. Se habla del "Efecto Iceberg".

Se sabe que cuando miramos un iceberg sólo vemos una parte, la que está sobre la superficie que corresponde apenas a un décimo del tamaño real del bloque de hielo.

Ernest Hemmingway, el famoso escritor norteamericano, acuñó el concepto de la [Teoría del Iceberg](https://es.wikipedia.org/wiki/Teor%C3%ADa_del_iceberg), también conocida como Teoría de la Omisión[^1].

Un hecho interesante es que varios críticos de la obra del autor de ["El Viejo y el Mar"](https://es.wikipedia.org/wiki/El_viejo_y_el_mar), observaron que al usar esta técnica, junto con su claridad en la escritura, Hemmingway desarrolló un medio que le permitió distanciarse de los personajes que creó.

Es decir, la teoría de la omisión funciona como un medio de poner una distancia entre el autor y sus personajes. La analogía en el ámbito empresarial no puede ser más clara.

El efecto iceberg es esa relación de causalidad que se da en las empresas, en que los elementos ocultos de la misma son la causa y los  resultados (éxitos, fracasos, ganancias o pérdidas) son los efectos de las interacciones que ocurren debajo de la superficie. 

Entonces, para entender éxitos o fracasos es necesario que los ejecutivos o empresarios se sumerjan en las profundidades de la empresa y se ocupen de entender y atender las verdaderas causas que impactan los resultados[^2].

Esto es teoría de desarrollo organizacional. Pero hay otra dimensión técnica de este fenómeno que es necesario que relevemos todos los que nos dedicamos a las tecnologías de la información.

# El real esfuerzo de desarrollar software

Desarrollar software se ha vuelto una tarea cada vez más compleja.

Supongamos que nos piden desarrollar un "simple formulario web". 

Quizás en 1995 esto era muy sencillo, una pequeña aplicación escrita sobre el stack LAMP[^3] en un pequeño servidor y ya está.

Pero esa ya no es la realidad. Resulta que hoy en día para crear un formulario web debes:

- Preocuparte de la usabilidad, si fallas en esto puedes generar frustración, confusión o incluso puedes llegar a [perder millones](https://lnds.net/blog/lnds/2017/07/23/el-boton-de-los-300-millones-de-dolares/)[^4]. 

- Dependiendo del servicio el formulario puede verse expuesto a ataques de ciber delincuentes o de vándalos que tratarán de botar el sitio donde alojas tu formulario. Entonces debes tomar medidas para asegurarte que el sitio resiste una serie de ataques (desde la [Denegación de Servicios](https://es.wikipedia.org/wiki/Ataque_de_denegaci%C3%B3n_de_servicio), hasta otras como [Inyecciones SQL](https://es.wikipedia.org/wiki/Inyecci%C3%B3n_SQL) o [Cross Site Scripting](https://es.wikipedia.org/wiki/Cross-site_scripting)). Sólo por nombrar las más comunes (hoy en día tenemos cientos de vulnerabilidades posibles[^5]).

- Testing de Seguridad. Para que tengan una idea, la guía de Testing de Seguridad de OWASP tiene unos 300 capítulos, los pueden revisar acá: https://github.com/OWASP/wstg/tree/master/document. Si quisieramos salir sin tener ningún problema de seguridad deberíamos abordar esta guía completa, que quizás nos tomaría varias semanas.

- Testing funcional. Probar de forma integral una aplicación, aunque sea tan simple como un formulario, puede significar un esfuerzo enorme. Cada decisión que plasmamos en neustro código genera una o varias ramificaciones, que deben ser probadas. Tal como el personaje Ts'ui Pênen en el ["Jardín de los Senderos que se Bifurcan"](https://www.literatura.us/borges/jardin.html) de Borges, el tester de software se interna en un laberinto interminable cuando prueba un sistema, aunque sea muy pequeño.

- Redes sociales. Hoy en día un simple formulario puede ser criticado en redes sociales, sobretodo si producto de todo lo anterior no nos preocupamos de la usabilidad, o no medimos el impacto de cómo ejecutamos nuestro servicio.

- Integraciones. Un simple formulario ya no vive aislado. Las aplicaciones en nuestras empresas proliferan al grado que en muchas organizaciones no hay un mapa claro de todas las que hay y la forma en que interactúan. Esta nueva aplicación, por muy simple que sea debe responder una serie de preguntas: ¿usará alguna base de datos ya disponible? ¿tendrá su propia base de datos? ¿interactuará con otros servicios? ¿usando cuales mecanismos? ¿hay servicios web involucrados? ¿que protocolos se usarán para la integración? ¿existe documentación de las APIs que usarán? ¿hay soporte de las otras aplicaciones con las que inteactuará? ¿es necesario modificar algún servicio para que pueda operar esta nueva aplicación? Ni siquiera quiero meterme a las preguntas que surgen cuando este "simple formulario web" tenga que integrarse con servicio externos que no controlamos.

- Operaciones. ¿Tendremos respaldos? ¿por cuánto tiempo se debe mantener la data online? ¿existen un nivel de servicios acordado? ¿en que horario podemos realizar los respaldo o mantenciones de la infraestructura? ¿Cuál es la infra que soportará esta nueva aplicación? ¿Cuánto storage se requiere? ¿Cuáles son las direcciones IP? ¿Existe un dominio especial que debamos publicar? Hay que adquirir y configurar los certificador digitales. ¿Quienes tienen acceso a esta aplicación? ¿Cómo gestionamos claves? ¿Cuál es el nivel de soporte que debemos dar?

Y toda esta lista no es exhaustiva.

## El Anti Hamlet

Hay una historia contada en el libro [Secure By Design](https://www.manning.com/books/secure-by-design)[^6] que ellos llaman El Anti Hamlet.

La historia ocurre en un sitio que vende libros en linea, y como tal tiene implementado el clásico carrito de compras. 

Un tester decide hacer una prueba en producción, en el carrito de compras ingresa el valor -1 (menos uno) en el campo unidades del formulario de compras. Presiona comprar y nada sucede.
Anota un ticket con una observación al respecto y continúa con su trabajo.

Días después una persona del área contable de la empresa enciende las alarmas que activa al equipo de ciberseguridad. Consultan en las diversas áreas de la empresa si alguien ha realizado una compra por -1 Hamlet de Shakespeare (un Anti-Hamlet), el que tiene un valor de 
$39 dólares.

El hecho es que el sistema contable ha emitido un cheque de 39 dólares que deben ser devueltos a alguien cuya dirección coincide con la misma de la empresa. El Tester explica la situación y empieza una investigación.

Veamos un poco la situación, tal como la grafican los autores del libro:

{{<figure caption="Joe Tester ordena -1 Hamlet (un anti hamlet) - tomado de [6]" src="anti-hamlet.png" >}}

La compra del Anti Hamlet no sólo impacta a nivel contable, sino que tiene un impacto en el inventario. Mágicamente aparece una nueva unidad en el inventario.

La investigación posterior arroja que este error de algún modo se ha hecho pública y varios clientes la han usado para conseguir descuentos en sus compras (basta con colocar un valor negativo en algunas de las unidades).

¿Por qué ocurre esto?

El gran problema es la actitud de "echémosle pa'alante" que se promueve en muchas empresas. Se ignora la complejidad subyacente del desarrollo de software y los desarrolladores se concentran principalmente en implementar los requerimientos que reciben. 

De seguro un analista indicó que la cantidad de unidades en un carro de compras es un número, el desarrollador dijo, bien si es un número entonces lo modelaré como un entero (`int`), un tipo de datos que admite también números negativos. 

El modelo probablemente terminará siendo  algo así:

```java
class Libro {
  String titulo;
  String isbn;
  double precio;
  ....
}

class Orden {
   void agregarItem(Libro libro, int cantidad) {
     ....
   }
}
```

¿Es esta una forma adecuada de modelar este caso de negocio?

Por supuesto que no. Es más, usar un `int` para la cantidad no sólo es inadecuado por el hecho de que los números pueden ser negativos. 
Un `int` normalmente puede almacenar un valor de varios miles de millones, ¿tiene sentido una cifra de 2.147.483.647 unidades de Hamlet?
Por supuesto que no. Otro error es usar double para modelar un valor monetario (hay errores de redondedo que no son manejados adecuadamente por este tipo de datos).

Para esto existen los dominios primitivos, un concepto que podemos tomar del DDD ([Domain Driven Design](https://es.wikipedia.org/wiki/Dise%C3%B1o_guiado_por_el_dominio))[^7]

Un modelo mejor sería este:

```java
class Libro {
  Titulo titulo;
  ISBN isbn;
  Money precio;
  ....
}


class Cantidad {
  ...
  Cantidad(int cantidad) {
    isTrue(0 < cantidad, "cantidad debe ser positiva");
    isTrue(cantidad <= 240, "hay un limite de 240 unidades en el flujo de la tienda");
    ...
  }
}

class Orden {
   void agregarItem(Libro libro, Cantidad cantidad) {
     ....
   }
}
```

Lo que hemos hecho es agregar una serie de clases que describen dominios primitivos que se adecúan a la realidad del negocio. Por ejemplo, el límite de 240 se determina tras una análisis que involucra a personas que trabajan en logística e inventario, que recomiendan esta cifra en función de su experiencia y razones de orden práctico.


## Esa complejidad subyacente

El caso del Anti-Hamlet nos muestra que aún una operación tan simple como determinar la cantidad de unidades en un carro de compras requiere un análisis y diseño meticuloso.

Sin ese diseño minucioso nos exponemos a una seria vulnerabilidad de seguridad (sí, este caso es un error de seguridad porque tiene que ver con uno de los elementos de la triada de seguridad[^8]: la integridad).

El desarrollo de software actual implica que debemos preocuparnos de muchos más factores de los que se consideraban antes. Estamos en una época en que tenemos una enorme cantidad de servicios y micro servicios que interactúan para sostener nuestras aplicaciones. 

El sólo hecho de instalar estas aplicacioones en ambientes productivos es algo muy complejo hoy en día que involucra la coordinación de las áreas de negocio, marketing, gestión de redes sociales, usabilidad, gestión de proyectos, desarrollo de software, gestión de datos, arquitectura, control de calidad, operaciones, seguridad, redes, etc.

El Iceberg es cada vez más profundo, e intrincado. Ya nadie puede tener una claridad absoluta de todo lo que pasa. Pero hemos desarrollado técnicas y habilidades para controlar de una manera efectiva esta complejidad, a través de DevOps, por ejemplo. 
Pero eso requiere cambios culturales, una actitud de colaboración, transparencia y apertura.

Pero todo eso debe partir con que aquellos que dirigen admitan con humildad que no pueden entender lo que ocurre cuando solicitan crear un simple formulario. Y si ellos no se dan cuenta, es tu deber profesional hacérselos saber. Debemos transparentar el iceberg, nuestro deber es ese, o chocaremos contra este y como el Titanic nos hundiremos como organización.


[^1]: Hemmingway explicó que su nueva teoría de escritura consiste en omitir cualquier parte de la narración y esa omisión refuerza el relato. Ver https://es.wikipedia.org/wiki/Teor%C3%ADa_del_iceberg

[^2]: https://spasesores.com/iceberg-empresarial/

[^3]: Sigla que hace referencia al stack tecnológico basado en Linux Apache MySql PHP Ver: https://es.wikipedia.org/wiki/LAMP

[^4]: En este artículo https://lnds.net/blog/lnds/2017/07/23/el-boton-de-los-300-millones-de-dolares/ explico cómo un error de usabilidad muy sencillo (el diseño de un botón) le costó 300 millones de dólares a una empresa.

[^5]: Sólo con respecto a las XSS hay tres variantes que además se pueden dar en el cliente o servidor: https://owasp.org/www-community/Types_of_Cross-Site_Scripting.

[^6]: "Secure by Design", Dan Bergh Johnsson, Daniel Deogun, Daniel Sawano, Manning 2019. https://www.manning.com/books/secure-by-design

[^7]: El DDD es una aproximación al desarrollo de sistemas complejos que ofrece un mecanismo de diseño colaborativo entre las áreas de negocio y de desarrollo. Si no lo han leido les sugiero que adquieran ya una copia del libro de Eric Evans: [	
Domain-Driven Design: Tackling Complexity in the Heart of Software](https://amzn.to/3ioWcoc).

[^8]: La triada de la seguiridad es: Confidencialidad, Integridad y Disponibilidad, o CIA (en inglés: Confidentiality, Integrity and Availability).