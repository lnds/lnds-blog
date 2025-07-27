---
title: "Cómo ganarle a Santa Claus"
authors: [admin]
subtitle: "o como logra Netflix hacer su magia" 
date: 2017-12-25T08:25:11-03:00
slug: "como-ganarle-a-santa-claus"
draft: false
tags: ['navidad', 'tecnología', 'microservicios', 'arquitectura', 'Netflix']
image:
  placement: 3
---


No hay nadie que supere en logística a Santa Claus, también conocido
como Papá Noel, o Viejito Pascuero en Chile. Es decir, ¿quién podría
repartir regalos a todos los niños del mundo durante una noche? Por
supuesto que tiene veinticuatro horas para hacerlo, pero aún así, para
cubrir cada zona horaria tiene apenas sesenta minutos, para poder
aterrizar en cada casa, dejar los regalos y luego re emprender vuelo.

El truco es que Santa Claus usa magia, así que hay poco que podamos
hacer al respecto, hasta que no hayamos alcanzado tal nivel de
desarrollo tecnológico no podremos superarlo.

La tercera [Ley de Clarke](https://es.wikipedia.org/wiki/Leyes_de_Clarke) dice:

> "Cualquier **tecnología suficientemente avanzada** es
> **indistinguible** de la **magia**".

Así que la pregunta es si tenemos tecnología en este mundo que parezca
magia.

Por supuesto que tenemos varias. Piensen Google. Cuando buscan algo en
ese servicio, ¿cómo es posible que pueda encontrar, tan rápido, lo que
necesitamos en tal vastedad de
información?

Es la magia de una tecnología conocida como 
[Information Retrieval](https://en.wikipedia.org/wiki/Information_retrieval), sin la
cual no sería posible poseer ese milagro de la sociedad moderna, el
motor de búsqueda[^1].

![](https://d2dspjyoh5c79p.cloudfront.net/fbcb5c35-e97a-11e7-a030-2b5831f8ecb5-aa9f18b7)

En el ámbito de las TI hemos desarrollado varias magias, perdón,
tecnologías que son asombrosas. Tecnologías que, al igual que el Viejo
Pascual, son capaces de brindar alegría, o al menos emociones (de todo
tipo).

¿Han pensado alguna vez cómo funciona Netflix?

Quizás Netflix es un ejemplo de lo cerca que estamos de llegar a la
magia de Santa Claus.

![](https://d2dspjyoh5c79p.cloudfront.net/55320496-e97b-11e7-a030-2b5831f8ecb5-aa9f18b7)

Piensen en  lo siguiente, cada minuto cientos de miles de personas
presiona play en algún dispositivo para poder ver alguna película o
serie de televisión, la que quieren ver, la que mejor se ajusta a sus
gustos y además la disfrutan con gran calidad y sin interrupciones
técnicas.

¿Cómo es posible que pueda ver la misma película en mi teléfono,
computador, televisor o tableta sin que parezca deteriorarse la calidad
de imagen?

La respuesta a esa y otras preguntas que nos plantea el funcionamiento
de Netflix vienen de la mano de una brillante e innovadora arquitectura
de software.

## Microservicios

Supongamos que desarrollas un sitio web, éste tendrá varias
funcionalidades: registro de usuarios, si es un sitio comercial entonces
requiere de un módulo de cobro y otro de facturación, probablemente
tendrá notificaciones, y la funcionalidad propia del sitio, si es uno de
ventas, tendrás el catálogo, el carro de compras, etc.

Pero. ¿qué pasa si debes modificar el módulo de cobro? Lo más probable
es que para poder implantar el cambio debas interrumpir el servicio
completo. ¿Se imaginan si Netflix hiciera eso? 

¿No les molesta acaso cuando su banco les dice que estará todo el fin de
semana *"en mantención"*? Lo que ocurre es que las aplicaciones
tradicionales, cómo la que describí anteriormente, o el sitio web de tu
banco,  son "**aplicaciones monolíticas**".

Un cambio en una parte del sistema impacta a todo el resto, aunque
algunos módulos no tengan mucho que ver entre sí. Para realizar un
cambio se debe detener toda la maquinaria y tener mucho cuidado de no
romper nada en el proceso, eso toma mucho
tiempo.

Entonces, ¿cómo aseguras el cambio continuo y sin interrupciones de tu
servicio web?

La clave está en un modelo de desarrollo de software llamado
[Arquitectura de Micro Servicios](https://en.wikipedia.org/wiki/Microservices). 
Amazon y Netflix han sido pioneras en el desarrollo de este paradigma
arquitectural. 

Netflix en realidad no es un sitio monolítico, aunque tengamos la
impresión de que se trata de sólo una gran aplicación, en realidad
Netflix se compone de la agregación de más de setecientos
microservicios, cada uno atendiendo una funcionalidad específica del
sistema. 

Hay un microservicio que se encarga de facturar, otro de hacer el cargo
a la tarjeta de crédito, otro muestra una lista de películas recién
agregadas, otro muestra la lista de películas personalizadas a tu gusto,
lista que fue calculada por varios otros microservicios que hacen
análisis de datos de tu comportamiento e intentan predecir tus gustos.
Hay micro servicios que se encargan de determinar qué dispositivo estás
usando y elegir el formato adecuado para tu pantalla en ese momento.

Pero hay servicios a lo largo de toda la cadena de producción. [Cuando
Netflix adquiere o produce una película, o serie, recibe el original en
formato digital y lo almacena en sus centros de almacenamiento en la
nube. Hay micro servicios que se encargan de *"transcodificar"* ese
contenido digital en distintas versiones. Netflix soporta miles de
dispositivos distintos, con distintas resoluciones, y velocidades de
reproducción, cada película es transformada para que pueda ser
visualizada correctamente en cada dispositivo. Por supuesto, cada copia
es procesada mediante un algoritmo de DRM (Digital Rights Management)
para asegurar que el contenido no sea pirateado.

{{<figure caption="Cómo se procesa el contenido de Netflix para que llegue a tu dispositivo" src="https://d2dspjyoh5c79p.cloudfront.net/8cdc2c17-e97e-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Además hay que garantizar que ese contenido llegue a la velocidad
adecuada a cada espectador. Para lograr esto se distribuyen estos
archivos en lo que se conoce como Content Delivery Network (CDN). Una
red de servidores, que almacenan estas copias pre codificadas de los
videos, y que se encuentran ubicados en distintos lugares geográficos lo
más cercanos a los proveedores de internet[^2].

{{<figure caption="Diagrama de una CDN el contenido se distribuye a cada nodo de la red para asegurar que se encuentre a la distancia con menor latencia posible del cliente." src="https://d2dspjyoh5c79p.cloudfront.net/f30bfe28-e97e-11e7-a030-2b5831f8ecb5-aa9f18b7">}}

Originalmente Netflix usaba servicios de CDN de empresas como Akamai,
pero con el tiempo tuvo que desarrollar su propia red de contenidos
llamada [Open Connect](https://openconnect.netflix.com/en/). Es como si
Netflix repartiera discos duros a lo largo del mundo a cada proveedor de
internet, con copias de las películas que espera transmitir en esos
lugares.

A veces ocurre que cuando empezamos a ver una película en Netflix los
primeros segundos esta se ve algo borrosa, en ese instante el cliente de
Netflix está tratando de determinar cuál es el nodo de la CDN más
cercano, que contiene la película que estamos viendo. Una vez
determinado puede asegurar una tasa de transferencia constante. 

Además, cada dispositivo contiene una pieza de software que sabe adaptar
el contenido a la resolución y velocidad de la máquina que estamos
usando para visualizar. Hay que mantener muchas versiones de este
software, para cada Smart TV, teléfono inteligente, computador o browser
en el mercado.

Toda esta coreografía de micro servicios, redes, aplicaciones e
infraestructura es de lo más cercano que se me ocurre a la magia de Papá
Noel. Así que estoy seguro que algún día podremos igualarlo. 

Sólo desearía para esta Navidad, querido Santa Claus, que tantos otros
servicios aprendieran de estas arquitecturas y las implementaran en sus
sitios web, ¡seríamos todos tan felices!

Ha sido un año intenso, interesante y donde he intentado poder llevarles
más contenido que sea relevante e interesante para todos ustedes. Espero
que estén disfrutando de estas fiestas con vuestros seres queridos.
Prometo que el 2018 tendrán mucho más de La Naturaleza del Software

**¡Feliz Navidad!**

![](https://d2dspjyoh5c79p.cloudfront.net/b31a7249-e980-11e7-a030-2b5831f8ecb5-aa9f18b7)


[^1]: Una de las personas que más ha contribuido al desarrollo del
Information Retrieval es chileno, se llama [Ricardo Baeza](https://en.wikipedia.org/wiki/Ricardo_Baeza-Yates) y tuve la fortuna de que fuera uno de mis profesores, prometo escribir algo sobre
él en el futuro.

[^2]: Un excelente y más detallado artículo que explica cómo funciona Netflix se encuentra en este artículo en Medium:  [How Netflix works: the (hugely simplified) complex stuff that happens every time you hit Play](https://medium.com/refraction-tech-everything/how-netflix-works-the-hugely-simplified-complex-stuff-that-happens-every-time-you-hit-play-3a40c9be254b).
Las imágenes de la arquitectura fueron tomadas de allí.
